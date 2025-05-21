"use client";
import Link from "next/link";
import { Heading } from "../Heading";
import { Img } from "../Img";
import { Text } from "../Text";
import { usePathname } from "next/navigation";

const footerNav = [
  {
    href: "/",
    title: "Design and technology",
  },
  {
    href: "/about",
    title: "About Us",
  },
  {
    href: "/contact",
    title: "Contact",
  },
  {
    href: "/owners",
    title: "Owners",
  },
  {
    href: "/offers",
    title: "Offers",
  },
];

const modelsNav = [
  {
    href: "/",
    title: "u9",
  },
  {
    href: "/",
    title: "u8",
  },
];

const socialmedia = [
  {
    href: "#",
    alt: "facebook",
    image: "img_facebook.svg",
  },
  {
    href: "#",
    alt: "youtube",
    image: "img_lock.svg",
  },
  {
    href: "#",
    alt: "info",
    image: "img_info.svg",
  },
  {
    href: "#",
    alt: "inbox",
    image: "img_inbox.svg",
  },
  {
    href: "#",
    alt: "close",
    image: "img_close.svg",
  },
];

function DownloadButton({ href, image }) {
  return (
    <a href={href} target="_blank" aria-label="app">
      <Img
        src={image}
        width={170}
        height={52}
        alt="download"
        className="w-[70px] xl:w-[115px] 3xl:w-[170px] object-contain rounded-[10px] hover:bg-white/10 transition-all duration-300"
      />
    </a>
  );
}

export default function Footer() {
  const pathname = usePathname();
  return (
    <footer className="w-full h-auto block bg-black">
      <div className="container">
        <div className="flex flex-wrap">
          <div>
            <Heading
              as="h6"
              className="3xl:text-[18px] 2xl:text-[14px] xl:text-[12px] lg:text-[12px] text-[12px] leading-none font-medium capitalize hover:text-base1 transition-color duration-300"
            >
              menu
            </Heading>
            <ul className="flex flex-wrap">
              {footerNav.map((item, index) => (
                <li key={`footeNav-${index}`}>
                  <Heading
                    as="h6"
                    className={`3xl:text-[18px] 2xl:text-[14px] xl:text-[12px] lg:text-[12px] text-[12px] leading-none font-normal hover:text-base1 transition-color duration-300 ${
                      pathname === item.href ? "text-base1" : "text-white"
                    }`}
                  >
                    <Link href={item.href}>{item.title}</Link>
                  </Heading>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Heading
              as="h6"
              className="3xl:text-[18px] 2xl:text-[14px] xl:text-[12px] lg:text-[12px] text-[12px] leading-none font-medium capitalize hover:text-base1 transition-color duration-300"
            >
              Models
            </Heading>
            <ul className="flex flex-wrap">
              {modelsNav.map((item, index) => (
                <li key={`modelsNav-${index}`}>
                  <Heading
                    as="h6"
                    className={`3xl:text-[18px] 2xl:text-[14px] xl:text-[12px] lg:text-[12px] text-[12px] leading-none font-normal hover:text-base1 transition-color duration-300 ${
                      pathname === item.href ? "text-base1" : "text-white"
                    }`}
                  >
                    <Link href={item.href}>{item.title}</Link>
                  </Heading>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <ul className="flex gap-[10px]">
              {socialmedia.map((item, index) => (
                <li key={`socialmedia-${index}`}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="social"
                    className="transition-transform duration-300 hover:scale-95"
                  >
                    <Img
                      src={item.image}
                      alt={item.alt}
                      width={38}
                      height={38}
                      className="w-[22px] xl:w-[26px] 3xl:w-[38px] aspect-square rounded-full transition-all duration-300 hover:[filter:brightness(0)_saturate(100%)_invert(69%)_sepia(37%)_saturate(643%)_hue-rotate(62deg)_brightness(91%)_contrast(83%)]"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex items-center justify-between gap-[5px] py-[10px] xl:py-[15px] 3xl:py-[20px] max-2xs:flex-col">
          <Text
            as="p"
            className="3xl:text-[16px] 2xl:text-[12px] xl:text-[10px] sm:text-[10px] text-[8px] leading-none font-normal text-white"
          >
            Copyright © Shenzhen Yangwang Automobile Sales Co., Ltd. All Rights
            Reserved.
          </Text>
          <div className="flex items-center">
            <Text
              as="p"
              className="3xl:text-[16px] 2xl:text-[12px] xl:text-[10px] sm:text-[10px] text-[8px] leading-none font-normal text-white"
            >
              Crafted By&nbsp;
            </Text>
            <a
              href={"https://www.intersmartsolution.com/"}
              target="_blank"
              aria-label="app"
            >
              <Img
                src="img_mobile.svg"
                width={96}
                height={14}
                alt="author"
                className="w-[70px] xl:w-[80px] 3xl:w-[96px]  object-contain aspect-[4/1]"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
