"use client";
import Link from "next/link";
import { Heading } from "../Heading";
import { Img } from "../Img";
import { Text } from "../Text";
import { usePathname } from "next/navigation";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";

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
    href: "#",
    title: "U9",
  },
  {
    href: "#",
    title: "U8",
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
    image: "img_youtube.svg",
  },
  {
    href: "#",
    alt: "insta",
    image: "img_insta.svg",
  },
  {
    href: "#",
    alt: "linkedin",
    image: "img_linkedin.svg",
  },
  {
    href: "#",
    alt: "x",
    image: "img_x.svg",
  },
];

export default function Footer() {
  const pathname = usePathname();

  const placeholders = [
    "Enter Your email address",
    "Subscribe for latest updates",
    "Get up-to-date",
  ];

  return (
    <footer className="w-full h-auto block bg-black">
      <div className="w-full lg:pl-[calc(((100vw-64rem)/2)+60px)] xl:pl-[calc(((100vw-80rem)/2)+65px)] 2xl:pl-[calc(((100vw-96rem)/2)+80px)] 3xl:pl-[calc(((100vw-120rem)/2)+100px)]">
      
      <div className="flex flex-wrap">
        <div className="w-full lg:w-[calc(100%-320px)] xl:w-[calc(100%-420px)] 3xl:w-[calc(100%-640px)] lg:pr-[40px] xl:pr-[50px] 2xl:pr-[75px] 3xl:pr-[80px]">
          <div className="flex flex-wrap -mx-[5px] xl:-mx-[10px] 3xl:-mx-[15px] [&>*]:p-[30px_5px_20px] lg:[&>*]:p-[50px_5px_30px] xl:[&>*]:p-[70px_10px_40px] 3xl:[&>*]:p-[100px_15px_60px]">
            <div className="w-[32%]">
              <Heading
                as="h6"
                className="3xl:text-[18px] 2xl:text-[14px] xl:text-[12px] lg:text-[12px] text-[12px] leading-none font-medium uppercase text-white mb-[15px] xl:mb-[20px] 3xl:mb-[30px]"
              >
                menu
              </Heading>
              <ul>
                {footerNav.map((item, index) => (
                  <li
                    key={`footeNav-${index}`}
                    className="w-full mb-[10px] xl:mb-[15px] 3xl:mb-[25px]"
                  >
                    <Heading
                      as="h6"
                      className={`3xl:text-[18px] 2xl:text-[14px] xl:text-[12px] lg:text-[12px] text-[12px] leading-none font-normal text-white hover:text-base1 transition-color duration-300 ${
                        pathname === item.href ? "underline" : ""
                      }`}
                    >
                      <Link href={item.href}>{item.title}</Link>
                    </Heading>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-[34%]">
              <div className="mb-[30px] lg:mb-[60px] xl:mb-[65px] 3xl:mb-[100px]">
                <Heading
                  as="h6"
                  className="3xl:text-[18px] 2xl:text-[14px] xl:text-[12px] lg:text-[12px] text-[12px] leading-none font-medium uppercase text-white mb-[15px] xl:mb-[20px] 3xl:mb-[30px]"
                >
                  Models
                </Heading>
                <ul>
                  {modelsNav.map((item, index) => (
                    <li
                      key={`modelsNav-${index}`}
                      className="w-full mb-[10px] xl:mb-[15px] 3xl:mb-[25px]"
                    >
                      <Heading
                        as="h6"
                        className={`3xl:text-[18px] 2xl:text-[14px] xl:text-[12px] lg:text-[12px] text-[12px] leading-none font-normal text-white hover:text-base1 transition-color duration-300 ${
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
                <ul className="flex gap-[15px] xl:gap-[20px] 3xl:gap-[30px]">
                  {socialmedia.map((item, index) => (
                    <li key={`socialmedia-${index}`}>
                      <Link
                        href={item.href}
                        className="w-[12px] 2xl:w-[12px] 3xl:w-[20px] aspect-square block transition-transform duration-300 hover:scale-110"
                      >
                        <Img
                          src={item.image}
                          alt={item.alt}
                          width={38}
                          height={38}
                          className="w-full h-full block"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="w-[34%]">
              <div className="mb-[20px] lg:mb-[30px] xl:mb-[14px] 3xl:mb-[55px]">
                <ul className="flex flex-col items-end">
                  <li className="mb-[10px] xl:mb-[15px] 3xl:mb-[25px]">
                    <Heading
                      as="h6"
                      className="3xl:text-[18px] 2xl:text-[14px] xl:text-[12px] lg:text-[12px] text-[12px] leading-none font-normal text-white hover:text-base1 flex"
                    >
                      <Link href="#">Service Centers</Link>
                      <Img
                        src="icon-location-1.svg"
                        alt="location"
                        width={13}
                        height={18}
                        className="ml-[4px] xl:ml-[6px] 3xl:ml-[8px]"
                      />
                    </Heading>
                  </li>
                  <li className="mb-[10px] xl:mb-[15px] 3xl:mb-[25px]">
                    <Heading
                      as="h6"
                      className="3xl:text-[18px] 2xl:text-[14px] xl:text-[12px] lg:text-[12px] text-[12px] leading-none font-normal text-white hover:text-base1 flex"
                    >
                      <Link href="#">Showroom</Link>
                      <Img
                        src="icon-location-2.svg"
                        alt="location"
                        width={13}
                        height={18}
                        className="ml-[4px] xl:ml-[6px] 3xl:ml-[8px]"
                      />
                    </Heading>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="flex flex-col items-end">
                  <li className="mb-[10px] xl:mb-[15px] 3xl:mb-[25px]">
                    <Link href="/">
                      <Img
                        src="footer-logo-1.svg"
                        alt="logo"
                        width={25}
                        height={40}
                        className="w-[14px] xl:w-[16px] 3xl:w-[40px]"
                      />
                    </Link>
                  </li>
                  <li className="mb-[10px] xl:mb-[15px] 3xl:mb-[25px]">
                    <Heading
                      as="h6"
                      className="3xl:text-[14px] 2xl:text-[12px] xl:text-[10px] lg:text-[10px] text-[10px] leading-none font-normal text-white hover:text-base1"
                    >
                      <a
                        href="mailto:yangwang@oman.in"
                        target="_blank"
                        aria-label="mailto"
                      >
                        yangwang@oman.in
                      </a>
                    </Heading>
                  </li>
                  <li className="mb-[10px] xl:mb-[15px] 3xl:mb-[25px]">
                    <Heading
                      as="h6"
                      className="3xl:text-[14px] 2xl:text-[12px] xl:text-[10px] lg:text-[10px] text-[10px] leading-none font-normal text-white hover:text-base1"
                    >
                      <a
                        href="tel:9633781549955"
                        target="_blank"
                        aria-label="tel"
                      >
                        9633781549955
                      </a>
                    </Heading>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between gap-[5px] py-[15px] xl:py-[30px] 3xl:py-[40px] border-t-[1px] border-[#2c2c2c] max-2xs:flex-col">
            <Text
              as="p"
              className="3xl:text-[12px] 2xl:text-[10px] xl:text-[8px] text-[8px] leading-none font-normal text-white"
            >
              Copyright © Shenzhen Yangwang Automobile Sales Co., Ltd. All
              Rights Reserved.
            </Text>
            <ul className="flex items-center gap-[10px] xl:gap-[20px] 3xl:gap-[28px]">
              <li>
                <Heading
                  as="h6"
                  className={`3xl:text-[12px] 2xl:text-[10px] xl:text-[8px] text-[8px] leading-none font-normal text-white hover:text-base1 transition-color duration-300 ${
                    pathname === "#" ? "underline" : ""
                  }`}
                >
                  <Link href="#">Terms & Conditions</Link>
                </Heading>
              </li>
              <li>
                <Heading
                  as="h6"
                  className={`3xl:text-[12px] 2xl:text-[10px] xl:text-[8px] text-[8px] leading-none font-normal text-white hover:text-base1 transition-color duration-300 ${
                    pathname === "#" ? "underline" : ""
                  }`}
                >
                  <Link href="#">Privacy Policy</Link>
                </Heading>
              </li>
              <li>
                <div className="flex items-center pl-[10px] xl:pl-[20px] 3xl:pl-[28px]">
                  <Text
                    as="p"
                    className="3xl:text-[12px] 2xl:text-[10px] xl:text-[8px] text-[8px] leading-none font-normal text-white"
                  >
                    Crafted By&nbsp;
                  </Text>
                  <a
                    href={"https://www.intersmartsolution.com/"}
                    target="_blank"
                    aria-label="app"
                  >
                    <Img
                      src="author.svg"
                      alt="author"
                      width={11}
                      height={14}
                      className="w-[8px] xl:w-[8px] 3xl:w-[11px] block"
                    />
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-[320px] xl:w-[420px] 3xl:w-[640px]">
          <div className="w-full h-full flex items-center justify-center relative z-0">
            <Img
              src="footer-bg.jpg"
              alt="footer-bg"
              fill
              className="-z-1 opacity-[44%]"
            />
            <div>
              <Heading
                as="h6"
                className="3xl:text-[18px] 2xl:text-[14px] xl:text-[12px] lg:text-[12px] text-[12px] leading-none font-normal text-white my-[20px_10px] xl:my-[40px_15px] 3xl:my-[60px_20px]"
              >
                SUBCRIBE NEWSLETTER
              </Heading>
              <PlaceholdersAndVanishInput
                className="rounded-0"
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
