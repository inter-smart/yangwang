"use client";
import Link from "next/link";
import { Heading } from "../Heading";
import { Img } from "../Img";
import { usePathname } from "next/navigation";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Footer({ data, locale }) {
  const pathname = usePathname();
  const t = useTranslations("footer");

  const placeholders = [
    t("subscribe_placeholder_1") || "Enter Your email address",
    t("subscribe_placeholder_2") || "Subscribe for latest updates",
    t("subscribe_placeholder_3") || "Get up-to-date",
  ];

  const { social_media_section } = data;

  const footerNav = [
    { href: "/about", title: t("about") },
    { href: "/service", title: t("services") },
    { href: "/contact", title: t("contact") },
    { href: "/ownership", title: t("owners") },
    { href: "/offers", title: t("offers") },
  ];

  const modelsNav = [
    { href: "/models/u9", title: t("u9") },
    { href: "/models/u8", title: t("u8") },
  ];

  return (
    <footer className="w-full h-auto block bg-black">
      <div className="w-full ltr:lg:pr-0 ltr:lg:pl-[calc(((100vw-var(--breakpoint-lg))/2)+var(--breakpoint-gap-lg))] ltr:xl:pl-[calc(((100vw-var(--breakpoint-xl))/2)+var(--breakpoint-gap-xl))] ltr:2xl:pl-[calc(((100vw-var(--breakpoint-2xl))/2)+var(--breakpoint-gap-2xl))] ltr:3xl:pl-[calc(((100vw-var(--breakpoint-3xl))/2)+var(--breakpoint-gap-3xl))] trl:lg:pl-0 rtl:lg:pr-[calc(((100vw-var(--breakpoint-lg))/2)+var(--breakpoint-gap-lg))] rtl:xl:pr-[calc(((100vw-var(--breakpoint-xl))/2)+var(--breakpoint-gap-xl))] rtl:2xl:pr-[calc(((100vw-var(--breakpoint-2xl))/2)+var(--breakpoint-gap-2xl))] rtl:3xl:pr-[calc(((100vw-var(--breakpoint-3xl))/2)+var(--breakpoint-gap-3xl))]">
        <div className="flex flex-wrap max-lg:flex-col-reverse">
          <div className="w-full lg:w-[calc(100%-320px)] xl:w-[calc(100%-420px)] 2xl:w-[calc(100%-560px)] 3xl:w-[calc(100%-640px)] max-3xs:px-[calc(((100vw-var(--breakpoint-4xs))/2)+var(--breakpoint-gap))] max-2xs:px-[calc(((100vw-var(--breakpoint-3xs))/2)+var(--breakpoint-gap))] max-xs:px-[calc(((100vw-var(--breakpoint-2xs))/2)+var(--breakpoint-gap))] max-sm:px-[calc(((100vw-var(--breakpoint-xs))/2)+var(--breakpoint-gap))] max-md:px-[calc(((100vw-var(--breakpoint-sm))/2)+var(--breakpoint-gap))] max-lg:px-[calc(((100vw-var(--breakpoint-md))/2)+var(--breakpoint-gap))] ltr:lg:pr-[40px] ltr:xl:pr-[50px] ltr:2xl:pr-[75px] ltr:3xl:pr-[80px] rtl:lg:pl-[40px] rtl:xl:pl-[50px] rtl:2xl:pl-[75px] rtl:3xl:pl-[80px] max-lg:pt-[20px]">
            <div className="flex flex-wrap -mx-[5px] xl:-mx-[10px] 3xl:-mx-[15px] [&>*]:p-[15px_5px_5px] sm:[&>*]:p-[30px_5px_20px] lg:[&>*]:p-[50px_5px_30px] xl:[&>*]:p-[70px_10px_40px] 3xl:[&>*]:p-[100px_15px_60px]">
              <div className="w-full sm:w-[32%]">
                <Heading
                  as="h6"
                  className="3xl:text-[18px] 2xl:text-[16px] xl:text-[12px] lg:text-[12px] text-[12px] leading-none font-medium uppercase text-white mb-[15px] xl:mb-[20px] 2xl:mb-[30px]"
                >
                  {t("menu") || "menu"}
                </Heading>
                <ul>
                  {footerNav.map((item, index) => (
                    <li key={`footerNav-${index}`} className="w-full mb-[10px] xl:mb-[15px] 2xl:mb-[25px]">
                      <Heading
                        as="h6"
                        className={`3xl:text-[18px] 2xl:text-[16px] xl:text-[12px] lg:text-[12px] text-[12px] leading-none font-normal text-white hover:text-base1 transition-color duration-300 ${
                          pathname === item.href ? "underline" : ""
                        }`}
                      >
                        <Link href={item.href}>{item.title}</Link>
                      </Heading>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-1/2 sm:w-[34%]">
                <div className="mb-[30px] lg:mb-[60px] xl:mb-[65px] 3xl:mb-[100px]">
                  <Heading
                    as="h6"
                    className="3xl:text-[18px] 2xl:text-[16px] xl:text-[12px] lg:text-[12px] text-[12px] leading-none font-medium uppercase text-white mb-[15px] xl:mb-[20px] 2xl:mb-[30px]"
                  >
                    {t("models") || "Models"}
                  </Heading>
                  <ul>
                    {modelsNav.map((item, index) => (
                      <li key={`modelsNav-${index}`} className="w-full mb-[10px] xl:mb-[15px] 2xl:mb-[25px]">
                        <Heading
                          as="h6"
                          className={`3xl:text-[18px] 2xl:text-[16px] xl:text-[12px] lg:text-[12px] text-[12px] leading-none font-normal text-white hover:text-base1 transition-color duration-300 ${
                            pathname === item.href ? "underline" : ""
                          }`}
                        >
                          <Link href={item.href}>{item.title}</Link>
                        </Heading>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <ul className="flex gap-[15px] sm:gap-[15px] xl:gap-[20px] 2xl:gap-[30px]">
                    {social_media_section?.social_media_links?.map((item, index) => (
                      <li key={`socialmedia-${index}`}>
                        <Link
                          href={item?.url}
                          target="_blank"
                          className="w-[12px] xl:w-[12px] 2xl:w-[16px] 3xl:w-[20px] aspect-square block transition-transform duration-300 hover:scale-110"
                        >
                          <Image
                            src={item?.icon}
                            alt={item.icon_alt}
                            width={38}
                            height={38}
                            className="w-full h-full block object-contain"
                          />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="w-1/2 sm:w-[34%]">
                <div className="mb-[20px] lg:mb-[30px] xl:mb-[14px] 2xl:mb-[55px]">
                  <ul className="flex flex-col items-end [&>*]:my-[2px] sm:[&>*]:my-[5px] xl:[&>*]:my-[7px] 3xl:[&>*]:my-[12px]">
                    <li>
                      <Heading
                        as="h6"
                        className="3xl:text-[18px] 2xl:text-[16px] xl:text-[12px] lg:text-[12px] text-[12px] leading-none font-normal text-white hover:text-base1 flex"
                      >
                        <Link href="/service">{t("service_centers") || "Service Centers"}</Link>
                        <Img
                          src="icon-location-1.svg"
                          alt="location"
                          width={13}
                          height={18}
                          className="ltr:ml-[4px] ltr:xl:ml-[6px] ltr:3xl:ml-[8px] rtl:mr-[4px] rtl:xl:mr-[6px] rtl:3xl:mr-[8px]"
                        />
                      </Heading>
                    </li>
                    <li>
                      <Heading
                        as="h6"
                        className="3xl:text-[18px] 2xl:text-[16px] xl:text-[12px] lg:text-[12px] text-[12px] leading-none font-normal text-white hover:text-base1 flex"
                      >
                        <Link href="/service">{t("showroom") || "Showroom"}</Link>
                        <Img
                          src="icon-location-2.svg"
                          alt="location"
                          width={13}
                          height={18}
                          className="ltr:ml-[4px] ltr:xl:ml-[6px] ltr:3xl:ml-[8px] rtl:mr-[4px] rtl:xl:mr-[6px] rtl:3xl:mr-[8px]"
                        />
                      </Heading>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="flex flex-col items-end [&>*]:mb-[10px] [&>*]:xl:mb-[15px] [&>*]3xl:mb-[25px]">
                    <li>
                      <Link href="/">
                        <Image
                          src={data?.yang_wang_logo || "/yangwang-logo.svg"}
                          alt={data?.yang_wang_logo_alt || "Yangwang Logo"}
                          width={25}
                          height={40}
                          className="w-[14px] xl:w-[16px] 2xl:w-[20px] 3xl:w-[40px]"
                        />
                      </Link>
                    </li>
                    <li>
                      <Heading
                        as="h6"
                        className="3xl:text-[14px] 2xl:text-[16px] xl:text-[10px] lg:text-[10px] text-[10px] leading-none font-normal text-white hover:text-base1"
                      >
                        <a href={`mailto:${data?.email}`} target="_blank" aria-label="mailto">
                          {data?.email}
                        </a>
                      </Heading>
                    </li>
                    <li>
                      <Heading
                        as="h6"
                        className="3xl:text-[14px] 2xl:text-[16px] xl:text-[10px] lg:text-[10px] text-[10px] leading-none font-normal text-white hover:text-base1"
                      >
                        <a href={`tel:${data?.phone_number?.replace(/[^+\d]/g, "")}`} target="_blank" aria-label="tel">
                          {data?.phone_number}
                        </a>
                      </Heading>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between gap-[5px] py-[15px] xl:py-[30px] 3xl:py-[40px] border-t-[1px] border-[#2c2c2c] max-2xs:flex-col">
              <p className="3xl:text-[12px] 2xl:text-[11px] xl:text-[9px] text-[8px] leading-none font-normal text-white">
                {t("copyright") || "Copyright © Shenzhen Yangwang Automobile Sales Co., Ltd. All Rights Reserved."}
              </p>
              <ul className="flex items-center gap-[10px] xl:gap-[20px] 3xl:gap-[28px]">
                <li>
                  <h6
                    className={`3xl:text-[12px] 2xl:text-[11px] xl:text-[9px] text-[8px] leading-none font-normal text-white hover:text-base1 transition-color duration-300 ${
                      pathname === "/privacy-policy" ? "underline" : ""
                    }`}
                  >
                    <Link href="/privacy-policy">{t("terms_conditions") || "Terms & Conditions"}</Link>
                  </h6>
                </li>
                <li>
                  <h6
                    className={`3xl:text-[12px] 2xl:text-[11px] xl:text-[9px] text-[8px] leading-none font-normal text-white hover:text-base1 transition-color duration-300 ${
                      pathname === "/privacy-policy" ? "underline" : ""
                    }`}
                  >
                    <Link href="/privacy-policy">{t("privacy_policy") || "Privacy Policy"}</Link>
                  </h6>
                </li>
                <li>
                  <div className="flex items-center pl-[10px] xl:pl-[20px] 3xl:pl-[28px]">
                    <p className="3xl:text-[12px] 2xl:text-[11px] xl:text-[9px] text-[8px] leading-none font-normal text-white">
                      {t("crafted_by") || "Crafted By"}
                    </p>
                    <a href={"https://www.intersmartsolution.com/"} target="_blank" aria-label="app">
                      <Img
                        src="author.svg"
                        alt="author"
                        width={11}
                        height={14}
                        className="w-[8px] xl:w-[8px] 2xl:w-[10px] 3xl:w-[11px] block"
                      />
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full lg:w-[320px] xl:w-[420px] 2xl:w-[560px] 3xl:w-[640px]">
            <div className="w-full h-full flex items-center justify-center relative z-0 p-[40px_10px]">
              <Img src="footer-bg.jpg" alt="footer-bg" fill className="-z-1 opacity-[44%] object-cover" />
              <div>
                <Heading
                  as="h6"
                  className="3xl:text-[18px] 2xl:text-[14px] xl:text-[12px] lg:text-[12px] text-[14px] leading-none font-semibold text-white my-[2.5px] lg:my-[20px_40px] xl:my-[40px_15px] 3xl:my-[40px_20px]"
                >
                  {t("subscribe_newsletter") || "SUBSCRIBE NEWSLETTER"}
                </Heading>
                <PlaceholdersAndVanishInput
                  className={`rounded-lg rtl:text-right bg-white text-black placeholder:text-gray-400 ${
                    locale === "ar" ? "font-arabic" : ""
                  }`}
                  placeholders={placeholders}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
