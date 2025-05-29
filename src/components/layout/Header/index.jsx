'use client';

import { Link, usePathname, useRouter } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import { useEffect, useState, useMemo } from 'react';
import { Heading } from '../Heading';
import { Img } from '../Img';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Menu } from 'lucide-react';

function HeaderNavItem({ href, title }) {
  const pathname = usePathname();
  return (
    <Link href={href} className="group relative">
      <Heading
        as="h6"
        className={`text-[14px] font-medium tracking-[1px] capitalize hover:text-base1 transition-all duration-300 ${
          pathname === href ? 'text-base1' : 'text-white'
        }`}
      >
        {title}
      </Heading>
    </Link>
  );
}

export default function Header({ locale }) {
  const t = useTranslations('header');
  const pathname = usePathname();
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    console.log(`[2025-05-29T14:24:00.000Z] Header locale: ${locale}, pathname: ${pathname}`);
  }, [locale, pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const isScrollingUp = scrollTop < lastScrollTop;

      if (scrollTop >= 250 && isScrollingUp) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      setLastScrollTop(scrollTop);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollTop]);

  const handleLocaleChange = (newLocale) => {
    const cleanPath = pathname.replace(/^\/(en|ar)/, '') || '/';
    console.log(`[2025-05-29T14:24:00.000Z] Switching locale to ${newLocale}, path: ${cleanPath}`);
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000; SameSite=Lax`;
    router.replace(cleanPath, { locale: newLocale });
  };

  const menuItems = useMemo(
    () => [
      {
        href: '/',
        title: t('models'),
        dropdown: [
          { href: '/u8', title: t('u8'), description: t('u8_description') },
          { href: '/u9', title: t('u9'), description: t('u9_description') },
        ],
      },
      { href: '/about', title: t('about') },
      { href: '/services', title: t('services') },
      { href: '/contact', title: t('contact') },
      { href: '/ownership', title: t('owners') },
      { href: '/offers', title: t('offers') },
    ],
    [t]
  );

  const triggerStyle =
    '[&>svg]:stroke-white [&>svg]:ml-[2px] p-[5px] xl:p-[10px_15px] 3xl:p-[15px_20px] focus:outline-none focus:ring-2 focus:ring-base1 rounded';
  const triggerNavStyle =
    '3xl:text-[16px] 2xl:text-[14px] xl:text-[12px] lg:text-[10px] text-[10px] font-normal capitalize text-white transition-colors duration-300 hover:text-base1 focus:text-base1';

  return (
    <header
      className={`w-full h-[var(--header-y)] z-50 top-0 left-0 right-0 transition-all duration-300 ${
        isVisible
          ? 'fixed bg-black/40 backdrop-blur-lg [--header-y:50px] lg:[--header-y:70px] 2xl:[--header-y:80px] 3xl:[--header-y:90px] shadow-lg animate-fadeDown'
          : 'absolute bg-gradient-to-b from-black/40 to-transparent [--header-y:60px] lg:[--header-y:80px] 2xl:[--header-y:100px] 3xl:[--header-y:120px]'
      } ${locale === 'ar' ? 'font-arabic' : 'font-urwForm'}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full h-[var(--header-y)] flex items-center justify-between gap-[10px]">
          <Link href="/" className="flex-shrink-0 focus:outline-none focus:ring-2 focus:ring-base1 rounded">
            <Img
              src="/header_logo.svg"
              alt="Yangwang logo"
              width={45}
              height={60}
              className="w-[30px] lg:w-[35px] xl:w-[40px] 2xl:w-[45px] h-auto object-contain hover:scale-105 transition-transform duration-300"
            />
          </Link>
          <NavigationMenu dir={locale === 'ar' ? 'rtl' : 'ltr'} className="hidden sm:flex">
            <NavigationMenuList className="gap-2 lg:gap-4">
              {menuItems.map((item, index) => (
                <NavigationMenuItem key={index}>
                  {item.dropdown ? (
                    <>
                      <NavigationMenuList className={triggerStyle}>
                        <div className={triggerNavStyle}>{item.title}</div>
                      </NavigationMenuList>
                      <NavigationMenuContent className="bg-white border-base1/10 shadow-lg rounded-lg">
                        <ul
                          className={`grid p-4 w-[280px] sm:w-[360px] lg:w-[480px] gap-2 ${
                            locale === 'ar' ? 'grid-flow-hidden' : ''
                          }`}
                        >
                          {item.dropdown.map((subItem, subIndex) => (
                            <li key={subIndex} className="row-span-2">
                              <NavigationMenuLink asChild>
                                <Link
                                  href={subItem.href}
                                  className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-gray-50 to-gray-100 p-3 no-underline outline-none focus:shadow-md hover:bg-gray-200 transition-colors focus:ring-2 focus:ring-base1">
                                  <div className="text-base font-semibold text-gray-800">{subItem.title}</div>
                                  <p className="text-sm leading-tight text-gray-600">{subItem.description}</p>
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <NavigationMenuLink className={triggerStyle} asChild>
                      <Link href={item.href} className={triggerNavStyle}>
                        {item.title}
                      </Link>
                    </NavigationMenuLink>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          <div className="flex items-center gap-[15px] lg:gap-[20px] 2xl:gap-[30px]">
            <Select
              onValueChange={handleLocaleChange}
              value={locale}
              defaultValue={locale}>
                <SelectTrigger className="text-[10px] sm:text-[12px] lg:text-[14px] font-normal uppercase text-white p-0 focus:ring-0 border-none gap-[2px] [&>svg]:size-3 [&>svg]:mt-[1px] focus:outline-none focus:ring-2 focus:ring-base1 rounded">
                <SelectValue placeholder={locale.toUpperCase()} />
              </SelectTrigger>
              <SelectContent className="bg-white w-[50px] border-gray-200 rounded-lg shadow-lg">
                <SelectItem className="text-[10px] sm:text-[12px] uppercase text-black hover:bg-gray-100" value="en">
                  En
                </SelectItem>
                <SelectItem className="text-[10px] sm:text-[12px] uppercase text-black hover:bg-gray-100" value="ar">
                  Ar
                </SelectItem>
              </SelectContent>
            </Select>
            <Link href="/" className="flex-shrink-0 focus:outline-none focus:ring-2 focus:ring-base1 rounded">
              <Img
                src="/saudbhawan-1.svg"
                alt="Saud Bhawan"
                width={84}
                height={44}
                className="w-[40px] lg:w-[56px] 2xl:w-[84px] h-auto object-contain hover:scale-105 transition-transform duration-300"
              />
            </Link>
            <div className="sm:hidden">
              <Sheet>
                <SheetTrigger className="flex items-center focus:outline-none focus:ring-2 focus:ring-base1 rounded">
                  <Menu className="size-8 text-white" />
                </SheetTrigger>
                <SheetContent
                  className="bg-white/95 backdrop-blur-lg"
                  side={locale === 'ar' ? 'right' : 'left'}
                >
                  <SheetHeader>
                    <SheetTitle className="sr-only">Site navigation</SheetTitle>
                    <ul className="flex flex-col gap-4 mt-6">
                      {menuItems.map((item, index) => (
                        <li key={index}>
                          <HeaderNavItem title={item.title} href={item.href} />
                          {item.dropdown && (
                            <ul className="mt-2 ml-4 flex flex-col gap-2">
                              {item.dropdown.map((subItem, subIndex) => (
                                <li key={subIndex}>
                                  <HeaderNavItem title={subItem.title} href={subItem.href} />
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  </SheetHeader>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}