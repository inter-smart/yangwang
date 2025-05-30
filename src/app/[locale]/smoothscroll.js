import { useEffect, useRef } from 'react';

const useSmoothScroll = (options = {}) => {
    const defaultOptions = {
        frameRate: 150,
        animationTime: 400,
        stepSize: 100,
        pulseAlgorithm: true,
        pulseScale: 4,
        pulseNormalize: 1,
        accelerationDelta: 50,
        accelerationMax: 3,
        keyboardSupport: true,
        arrowScroll: 50,
        fixedBackground: true,
        excluded: ""
    };

    const settings = { ...defaultOptions, ...options };
    const isInitialized = useRef(false);
    const isFramed = useRef(false);
    const direction = useRef({ x: 0, y: 0 });
    const initDone = useRef(false);
    const root = useRef(null);
    const activeElement = useRef(null);
    const observer = useRef(null);
    const deltaBuffer = useRef([]);
    const isMac = /^Mac/.test(navigator.platform);

    const key = {
        left: 37, up: 38, right: 39, down: 40,
        spacebar: 32, pageup: 33, pagedown: 34,
        end: 35, home: 36
    };

    const arrowKeys = { 37: 1, 38: 1, 39: 1, 40: 1 };
    const animationQueue = useRef([]);
    const isAnimating = useRef(false);
    const lastTime = useRef(Date.now());
    const cache = useRef({});
    const scrollCache = useRef({});
    const behaviorCache = useRef({});
    const clearCacheTimer = useRef(null);
    let uniqueID = 0;

    // Utility functions
    const getUniqueID = (element) => {
        return element.uniqueID || (element.uniqueID = uniqueID++);
    };

    const addEvent = (type, fn, capture) => {
        window.addEventListener(type, fn, capture || false);
    };

    const removeEvent = (type, fn, capture) => {
        window.removeEventListener(type, fn, capture || false);
    };

    const isNodeName = (element, tag) => {
        return element && (element.nodeName || "").toLowerCase() === tag.toLowerCase();
    };

    const requestFrame = window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        ((fn, element, delay) => {
            window.setTimeout(fn, delay || (1000 / 60));
        });

    const MutationObserver = window.MutationObserver ||
        window.WebKitMutationObserver ||
        window.MozMutationObserver;

    // Get scrolling element
    const getScrollingElement = (() => {
        let scrollElement;
        return () => {
            if (!scrollElement) {
                const dummy = document.createElement('div');
                dummy.style.cssText = 'height:10000px;width:1px;';
                document.body.appendChild(dummy);
                const bodyScrollTop = document.body.scrollTop;
                document.documentElement.scrollTop;
                window.scrollBy(0, 3);
                scrollElement = document.body.scrollTop !== bodyScrollTop ?
                    document.body : document.documentElement;
                window.scrollBy(0, -3);
                document.body.removeChild(dummy);
            }
            return scrollElement;
        };
    })();

    // Pulse algorithm
    const pulse = (x) => {
        let val;
        x *= settings.pulseScale;
        if (x < 1) {
            val = x - (1 - Math.exp(-x));
        } else {
            const start = Math.exp(-1);
            x -= 1;
            const exp = 1 - Math.exp(-x);
            val = start + (exp * (1 - start));
        }
        return val * settings.pulseNormalize;
    };

    const step = (x) => {
        if (x >= 1) return 1;
        if (x <= 0) return 0;

        if (settings.pulseNormalize === 1) {
            settings.pulseNormalize /= pulse(1);
        }
        return pulse(x);
    };

    // Browser detection
    const userAgent = window.navigator.userAgent;
    const isEdge = /Edge/.test(userAgent);
    const isChrome = /chrome/i.test(userAgent) && !isEdge;
    const isSafari = /safari/i.test(userAgent) && !isEdge;
    const isMobile = /mobile/i.test(userAgent);
    const isIE11 = /Windows NT 6.1/i.test(userAgent) && /rv:11/i.test(userAgent);
    const isSafari8or9 = isSafari && (/Version\/8/i.test(userAgent) || /Version\/9/i.test(userAgent));
    const isEnabledForBrowser = (isChrome || isSafari || isIE11) && !isMobile;

    let supportsPassive = false;
    try {
        window.addEventListener("test", null, Object.defineProperty({}, "passive", {
            get: () => { supportsPassive = true; }
        }));
    } catch (e) { }

    const wheelOpt = supportsPassive ? { passive: false } : false;
    const wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

    // Clear cache periodically
    const clearCache = () => {
        clearTimeout(clearCacheTimer.current);
        clearCacheTimer.current = setInterval(() => {
            cache.current = {};
            scrollCache.current = {};
            behaviorCache.current = {};
        }, 1000);
    };

    // Set cache for elements
    const setCache = (elements, value, overrideCache = false) => {
        const targetCache = overrideCache ? cache.current : scrollCache.current;
        for (let i = elements.length; i--;) {
            targetCache[getUniqueID(elements[i])] = value;
        }
        return value;
    };

    // Find scrollable element
    const findScrollableElement = (element) => {
        const elements = [];
        const body = document.body;
        const documentHeight = root.current.scrollHeight;

        do {
            const cached = scrollCache.current[getUniqueID(element)];
            if (cached) {
                return setCache(elements, cached);
            }

            elements.push(element);

            if (documentHeight === element.scrollHeight) {
                const topOverflowsNotHidden = overflowNotHidden(root.current) && overflowNotHidden(body);
                const isBodyScrollable = isScrollable(root.current);

                if (isFramed.current && hasScrollableSpace(root.current) ||
                    !isFramed.current && isBodyScrollable) {
                    return setCache(elements, getScrollingElement());
                }
            } else if (hasScrollableSpace(element) && isScrollable(element)) {
                return setCache(elements, element);
            }
        } while (element = element.parentElement);
    };

    const hasScrollableSpace = (element) => {
        return element.clientHeight + 10 < element.scrollHeight;
    };

    const overflowNotHidden = (element) => {
        return getComputedStyle(element, '').getPropertyValue('overflow-y') !== 'hidden';
    };

    const isScrollable = (element) => {
        const overflow = getComputedStyle(element, '').getPropertyValue('overflow-y');
        return overflow === 'scroll' || overflow === 'auto';
    };

    // Smooth scrolling animation
    const smoothScroll = (element, deltaX, deltaY) => {
        // Set direction
        const newX = deltaX > 0 ? 1 : -1;
        const newY = deltaY > 0 ? 1 : -1;

        if (direction.current.x !== newX || direction.current.y !== newY) {
            direction.current.x = newX;
            direction.current.y = newY;
            animationQueue.current = [];
            lastTime.current = 0;
        }

        // Apply acceleration
        if (settings.accelerationMax !== 1) {
            const now = Date.now();
            const elapsed = now - lastTime.current;

            if (elapsed < settings.accelerationDelta) {
                const factor = (1 + (50 / elapsed)) / 2;
                if (factor > 1) {
                    const clampedFactor = Math.min(factor, settings.accelerationMax);
                    deltaX *= clampedFactor;
                    deltaY *= clampedFactor;
                }
            }
            lastTime.current = now;
        }

        // Add to animation queue
        animationQueue.current.push({
            x: deltaX,
            y: deltaY,
            lastX: (deltaX < 0) ? 0.99 : -0.99,
            lastY: (deltaY < 0) ? 0.99 : -0.99,
            start: Date.now()
        });

        if (!isAnimating.current) {
            const scrollingElement = element === getScrollingElement() || element === document.body;

            // Handle scroll behavior
            if (element.$scrollBehavior == null && hasScrollBehavior(element)) {
                element.$scrollBehavior = element.style.scrollBehavior;
                element.style.scrollBehavior = 'auto';
            }

            const animate = () => {
                const now = Date.now();
                let scrollX = 0;
                let scrollY = 0;

                for (let i = 0; i < animationQueue.current.length; i++) {
                    const item = animationQueue.current[i];
                    const elapsed = now - item.start;
                    const finished = elapsed >= settings.animationTime;
                    const value = finished ? 1 : elapsed / settings.animationTime;

                    const position = settings.pulseAlgorithm ? step(value) : value;
                    const x = (item.x * position - item.lastX) >> 0;
                    const y = (item.y * position - item.lastY) >> 0;

                    scrollX += x;
                    scrollY += y;

                    item.lastX += x;
                    item.lastY += y;

                    if (finished) {
                        animationQueue.current.splice(i, 1);
                        i--;
                    }
                }

                if (scrollingElement) {
                    window.scrollBy(scrollX, scrollY);
                } else {
                    if (scrollX) element.scrollLeft += scrollX;
                    if (scrollY) element.scrollTop += scrollY;
                }

                if (!deltaX && !deltaY) {
                    animationQueue.current = [];
                }

                if (animationQueue.current.length) {
                    requestFrame(animate, element, (1000 / settings.frameRate + 1));
                } else {
                    isAnimating.current = false;
                    if (element.$scrollBehavior != null) {
                        element.style.scrollBehavior = element.$scrollBehavior;
                        element.$scrollBehavior = null;
                    }
                }
            };

            requestFrame(animate, element, 0);
            isAnimating.current = true;
        }
    };

    // Check if element has smooth scroll behavior
    const hasScrollBehavior = (element) => {
        const elementId = getUniqueID(element);
        if (behaviorCache.current[elementId] == null) {
            const computedStyle = getComputedStyle(element, '')['scroll-behavior'];
            behaviorCache.current[elementId] = computedStyle === 'smooth';
        }
        return behaviorCache.current[elementId];
    };

    // Wheel event handler
    const wheel = (event) => {
        if (!initDone.current) init();

        const target = event.target;

        if (event.defaultPrevented || event.ctrlKey) return true;

        if (isNodeName(activeElement.current, 'embed') ||
            (isNodeName(target, 'embed') && /\.pdf/i.test(target.src)) ||
            isNodeName(activeElement.current, 'object') ||
            target.shadowRoot) {
            return true;
        }

        let deltaX = -event.wheelDeltaX || event.deltaX || 0;
        let deltaY = -event.wheelDeltaY || event.deltaY || 0;

        if (isMac) {
            if (event.wheelDeltaX && isDivisible(event.wheelDeltaX, 120)) {
                deltaX = -120 * (event.wheelDeltaX / Math.abs(event.wheelDeltaX));
            }
            if (event.wheelDeltaY && isDivisible(event.wheelDeltaY, 120)) {
                deltaY = -120 * (event.wheelDeltaY / Math.abs(event.wheelDeltaY));
            }
        }

        if (!deltaX && !deltaY) {
            deltaY = -event.wheelDelta || 0;
        }

        if (event.deltaMode === 1) {
            deltaX *= 40;
            deltaY *= 40;
        }

        const element = findScrollableElement(target);
        if (!element) {
            if (!isFramed.current || !isEnabledForBrowser) return true;

            Object.defineProperty(event, "target", { value: window.frameElement });
            return parent.wheel(event);
        }

        if (isUnusualScroll(deltaY)) return true;

        if (Math.abs(deltaX) > 1.2) {
            deltaX *= settings.stepSize / 120;
        }
        if (Math.abs(deltaY) > 1.2) {
            deltaY *= settings.stepSize / 120;
        }

        smoothScroll(element, deltaX, deltaY);
        event.preventDefault();
        clearCache();
    };

    // Keyboard event handler
    const keydown = (event) => {
        const target = event.target;
        const modifier = event.ctrlKey || event.altKey || event.metaKey ||
            (event.shiftKey && event.keyCode !== key.spacebar);

        if (document.body.contains(activeElement.current)) {
            activeElement.current = document.activeElement;
        }

        const inputRegex = /^(button|submit|radio|checkbox|file|color|image)$/i;

        if (event.defaultPrevented ||
            /^(textarea|select|embed|object)$/i.test(target.nodeName) ||
            (isNodeName(target, 'input') && !inputRegex.test(target.type)) ||
            isNodeName(activeElement.current, 'video') ||
            isYouTubeVideo(event) ||
            target.isContentEditable ||
            modifier) {
            return true;
        }

        if ((isNodeName(target, 'button') ||
            (isNodeName(target, 'input') && inputRegex.test(target.type))) &&
            event.keyCode === key.spacebar) {
            return true;
        }

        if (isNodeName(target, 'input') && target.type === 'radio' && arrowKeys[event.keyCode]) {
            return true;
        }

        let deltaX = 0, deltaY = 0;
        const element = findScrollableElement(activeElement.current);

        if (!element) {
            if (!isFramed.current || !isEnabledForBrowser) return true;
            return parent.keydown(event);
        }

        const clientHeight = element.clientHeight;
        if (element === document.body) {
            clientHeight = window.innerHeight;
        }

        switch (event.keyCode) {
            case key.up:
                deltaY = -settings.arrowScroll;
                break;
            case key.down:
                deltaY = settings.arrowScroll;
                break;
            case key.spacebar:
                deltaY = event.shiftKey ? clientHeight : -clientHeight;
                deltaY = deltaY * 0.9;
                break;
            case key.pageup:
                deltaY = -clientHeight * 0.9;
                break;
            case key.pagedown:
                deltaY = clientHeight * 0.9;
                break;
            case key.home:
                if (element === document.body && document.scrollingElement) {
                    element = document.scrollingElement;
                }
                deltaY = -element.scrollTop;
                break;
            case key.end:
                const bottom = element.scrollHeight - element.scrollTop - clientHeight;
                deltaY = bottom > 0 ? bottom + 10 : 0;
                break;
            case key.left:
                deltaX = -settings.arrowScroll;
                break;
            case key.right:
                deltaX = settings.arrowScroll;
                break;
            default:
                return true;
        }

        smoothScroll(element, deltaX, deltaY);
        event.preventDefault();
        clearCache();
    };

    // Mousedown event handler
    const mousedown = (event) => {
        activeElement.current = event.target;
    };

    // YouTube video detection
    const isYouTubeVideo = (event) => {
        let element = event.target;
        let isVideo = false;

        if (document.URL.indexOf('www.youtube.com/watch') !== -1) {
            do {
                isVideo = element.classList && element.classList.contains('html5-video-controls');
                if (isVideo) break;
            } while (element = element.parentNode);
        }

        return isVideo;
    };

    // Check for unusual scroll patterns
    const isUnusualScroll = (delta) => {
        if (!delta) return;

        if (!deltaBuffer.current.length) {
            deltaBuffer.current = [delta, delta, delta];
        }

        delta = Math.abs(delta);
        deltaBuffer.current.push(delta);
        deltaBuffer.current.shift();

        clearTimeout(clearCacheTimer.current);
        clearCacheTimer.current = setTimeout(() => {
            try {
                localStorage.SS_deltaBuffer = deltaBuffer.current.join(',');
            } catch (e) { }
        }, 1000);

        const isLarge = delta > 120 && allDeltasDivisible(delta);
        const isUnusual = !allDeltasDivisible(120) && !allDeltasDivisible(100) && !isLarge;

        return delta < 50 || isUnusual;
    };

    const isDivisible = (n, divisor) => {
        return Math.floor(n / divisor) === n / divisor;
    };

    const allDeltasDivisible = (divisor) => {
        return isDivisible(deltaBuffer.current[0], divisor) &&
            isDivisible(deltaBuffer.current[1], divisor) &&
            isDivisible(deltaBuffer.current[2], divisor);
    };

    // Initialize
    const init = () => {
        if (initDone.current || !document.body) return;

        initDone.current = true;
        const body = document.body;
        const html = document.documentElement;
        const windowHeight = window.innerHeight;
        const scrollHeight = body.scrollHeight;

        root.current = document.compatMode.indexOf('CSS') >= 0 ? html : body;
        activeElement.current = body;

        if (settings.keyboardSupport) {
            addEvent('keydown', keydown);
        }

        if (top !== self) {
            isFramed.current = true;
        } else if (isSafari8or9 && windowHeight < scrollHeight &&
            (body.offsetHeight <= windowHeight || html.offsetHeight <= windowHeight)) {

            const fullPageElem = document.createElement('div');
            fullPageElem.style.cssText = 'position:absolute; z-index:-10000; top:0; left:0; right:0; height:' +
                root.current.scrollHeight + 'px';
            document.body.appendChild(fullPageElem);

            let pendingRefresh;
            const refreshSize = () => {
                if (pendingRefresh) return;
                pendingRefresh = setTimeout(() => {
                    if (!isInitialized.current) {
                        fullPageElem.style.height = '0';
                        fullPageElem.style.height = root.current.scrollHeight + 'px';
                        pendingRefresh = null;
                    }
                }, 500);
            };

            setTimeout(refreshSize, 10);
            addEvent('resize', refreshSize);

            const MutationObserver = window.MutationObserver ||
                window.WebKitMutationObserver ||
                window.MozMutationObserver;

            if (MutationObserver) {
                observer.current = new MutationObserver(refreshSize);
                observer.current.observe(body, {
                    attributes: true,
                    childList: true,
                    characterData: false
                });
            }

            if (root.current.offsetHeight <= windowHeight) {
                const clearfix = document.createElement('div');
                clearfix.style.clear = 'both';
                body.appendChild(clearfix);
            }
        }

        if (!settings.fixedBackground && !isInitialized.current) {
            body.style.backgroundAttachment = 'scroll';
            html.style.backgroundAttachment = 'scroll';
        }
    };

    // Load delta buffer from localStorage
    const loadDeltaBuffer = () => {
        try {
            if (window.localStorage && localStorage.SS_deltaBuffer) {
                deltaBuffer.current = localStorage.SS_deltaBuffer.split(',');
            }
        } catch (e) { }
    };

    useEffect(() => {
        if (!isEnabledForBrowser) return;

        loadDeltaBuffer();

        if (wheelEvent) {
            addEvent(wheelEvent, wheel, wheelOpt);
            addEvent('mousedown', mousedown);
            addEvent('load', init);
        }

        // Cleanup function
        return () => {
            if (observer.current) {
                observer.current.disconnect();
            }

            removeEvent(wheelEvent, wheel);
            removeEvent('mousedown', mousedown);
            removeEvent('keydown', keydown);
            removeEvent('load', init);

            if (clearCacheTimer.current) {
                clearTimeout(clearCacheTimer.current);
            }
        };
    }, []);

    return {
        destroy: () => {
            if (observer.current) {
                observer.current.disconnect();
            }

            removeEvent(wheelEvent, wheel);
            removeEvent('mousedown', mousedown);
            removeEvent('keydown', keydown);
            removeEvent('load', init);

            if (clearCacheTimer.current) {
                clearTimeout(clearCacheTimer.current);
            }
        }
    };
};

export default useSmoothScroll;