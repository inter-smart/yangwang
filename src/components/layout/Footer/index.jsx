"use client";
import Link from "next/link";
import { Heading } from "../Heading";
import { Img } from "../Img";
import { Text } from "../Text";
import { usePathname } from "next/navigation";

const footerNav = [
  {
    href: "/",
    title: "home",
  },
  {
    href: "/about",
    title: "about",
  },
  {
    href: "/contact",
    title: "contact",
  },
  {
    href: "/faq",
    title: "faq",
  },
  {
    href: "/privacy-policy",
    title: "privacy",
  },
  {
    href: "/terms-conditions",
    title: "Terms & conditions",
  },
  {
    href: "/contact",
    title: "help",
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
    <footer className="w-full h-auto block bg-black backdrop-blur-[10px]">
      <div className="container">
        <div className="w-full h-auto py-[30px_20px] xl:py-[40px_30px] 3xl:py-[50px_40px] flex justify-center">
          <Link href={"/"} className="w-auto mx-auto">
            <Img
              src="img_header_logo.svg"
              alt="Headerlogo"
              width={228}
              height={66}
              className="w-[100px] sm:w-[140px] xl:w-[180px] 3xl:w-[228px] h-auto object-contain block"
            />
          </Link>
        </div>
        <div className="flex items-center justify-between gap-[10px] self-stretch py-[10px] xl:py-[15px] 3xl:py-[20px]border border-y-[1px] border-solid border-base1/30 max-lg:flex-col max-lg:gap-[15px]">
          <ul className="flex flex-wrap gap-[10px] sm:gap-[15px] lg:gap-[20px] xl:gap-[40px] 2xl:gap-[50px] 3xl:gap-[60px] max-lg:justify-center">
            {footerNav.map((item, index) => (
              <li key={`footeNav-${index}`}>
                <Heading
                  as="h6"
                  className={`3xl:text-[20px] 2xl:text-[16px] xl:text-[13px] lg:text-[12px] text-[12px] leading-none font-medium capitalize  hover:text-base1 transition-all duration-300 ${
                    pathname === item.href ? "text-base1" : "text-white"
                  }`}
                >
                  <Link href={item.href}>{item.title}</Link>
                </Heading>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-[15px] xl:gap-[20px] 3xl:gap-[30px]">
            <Text
              as="p"
              className="3xl:text-[18px] 2xl:text-[14px] xl:text-[12px] text-[12px] leading-none font-semibold capitalize text-white"
            >
              download the app
            </Text>
            <ul className="flex gap-[2px] xl:gap-[4px] 3xl:gap-[6px]">
              <li>
                <DownloadButton href="#" image="footer-app-1.svg" />
              </li>
              <li>
                <DownloadButton href="#" image="footer-play-1.svg" />
              </li>
            </ul>
          </div>
        </div>
        <div className="flex items-center justify-between gap-[5px] py-[10px] xl:py-[15px] 3xl:py-[20px] max-2xs:flex-col">
          <Text
            as="p"
            className="3xl:text-[16px] 2xl:text-[12px] xl:text-[10px] sm:text-[10px] text-[8px] leading-none font-normal text-white"
          >
            ©&nbsp;2025 ichargeON. All rights reserved.
          </Text>
          <div className="flex items-center">
            <Text
              as="p"
              className="3xl:text-[16px] 2xl:text-[12px] xl:text-[10px] sm:text-[10px] text-[8px] leading-none font-normal text-white"
            >
              Designed By&nbsp;
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
