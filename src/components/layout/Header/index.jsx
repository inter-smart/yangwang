"use client";

import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { useEffect, useState, useMemo } from "react";
import { Heading } from "../Heading";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import { LinkButton } from "../Button";

export default function Header({ locale, data }) {
  const t = useTranslations("header");
  const pathname = usePathname();
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  const [open, setOpen] = useState(false);
  console.log(`header open: ${open}`);

  useEffect(() => {
    console.log(
      `[2025-05-29T14:24:00.000Z] Header locale: ${locale}, pathname: ${pathname}`
    );
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

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollTop]);

  const handleLocaleChange = (newLocale) => {
    const cleanPath = pathname.replace(/^\/(en|ar)/, "") || "/";
    console.log(
      `[2025-05-29T14:24:00.000Z] Switching locale to ${newLocale}, path: ${cleanPath}`
    );
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000; SameSite=Lax`;
    router.replace(cleanPath, { locale: newLocale });
  };

  const menuItems = useMemo(
    () => [
      {
        href: "/",
        title: t("models"),
        dropdown: [
          {
            href: "/models/u8",
            title: t("u8"),
            description: t("u8_description"),
          },
          {
            href: "/models/u9",
            title: t("u9"),
            description: t("u9_description"),
          },
        ],
      },
      { href: "/about", title: t("about") },
      { href: "/service", title: t("services") },
      { href: "/contact", title: t("contact") },
      { href: "/ownership", title: t("owners") },
      { href: "/offers", title: t("offers") },
      { type: "mobile", href: "/offers", title: ("book text drive") },
    ],
    [t]
  );

  const triggerNavStyle =
    "3xl:text-[16px] 2xl:text-[14px] xl:text-[12px] lg:text-[10px] text-[10px] font-normal capitalize text-white transition-colors duration-300 hover:text-base1 focus:text-base1";

  return (
    <header
      className={`w-full h-(--header-y) absolute z-10 top-0 left-0 right-0 block bg-linear-to-b from-black/60 to-transparent transition-all duration-300 ${
        isVisible
          ? "fixed animate-fadeDown bg-black/80 backdrop-blur-lg [--header-y:50px] lg:[--header-y:70px] 2xl:[--header-y:80px] 3xl:[--header-y:90px] "
          : "absolute [--header-y:60px] lg:[--header-y:80px] 2xl:[--header-y:100px] 3xl:[--header-y:120px]"
      }`}
    >
      <div className="container">
        <div className="w-full h-(--header-y) flex flex-wrap items-center justify-between gap-[10px]">
          <Link href="/" className="w-auto">
            <Image
              src={data?.yang_wang_logo || "/yangwang-logo.svg"}
              alt={data?.yang_wang_logo_alt || "Yangwang Logo"}
              width={45}
              height={60}
              className="w-[30px] lg:w-[25px] xl:w-[30px] 2xl:w-[45px] 3xl:w-[45px] h-auto object-contain block hover:scale-105 transition-transform duration-300 hover:text-base1"
            />
          </Link>
          {/* <NavigationMenu dir={locale === "ar" ? "rtl" : "ltr"} className="max-sm:hidden">
            <NavigationMenuList className="gap-0">
              {menuItems?.map((item, index) => (
                <NavigationMenuItem key={index}>
                  {item.dropdown ? (
                    <>
                      <NavigationMenuList className={triggerStyle}>
                        <div className={triggerNavStyle}>{item.title}</div>
                      </NavigationMenuList>
                      <NavigationMenuContent className="bg-white border-base1/10">
                        <ul className={`grid p-[15px] md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]`}>
                          {item.dropdown.map((subItem, subIndex) => (
                            <li key={subIndex} className="row-span-2">
                              <NavigationMenuLink asChild>
                                <Link
                                  href={subItem.href}
                                  className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-[15px] no-underline outline-none focus:shadow-md"
                                >
                                  <div className="text-lg font-medium">{subItem.title}</div>
                                  <p className="text-sm leading-tight text-muted-foreground">{subItem.description}</p>
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
          </NavigationMenu> */}
          <NavigationMenu
            viewport={false}
            dir={locale === "ar" ? "rtl" : "ltr"}
            className="max-sm:hidden"
          >
            <NavigationMenuList className="gap-0">
              {menuItems.map(
                (item, index) =>
                  item.type !== "mobile" && (
                    <NavigationMenuItem key={index}>
                      {item.dropdown ? (
                        <>
                          <NavigationMenuTrigger className="data-[active=true]:focus:bg-transparent data-[active=true]:hover:bg-transparent data-[active=true]:bg-transparent hover:bg-transparent focus:bg-transparent [&>svg]:stroke-white [&>svg]:ml-[2px] p-[5px] xl:p-[10px_15px] 3xl:p-[15px_20px] focus:outline-none focus:ring-0">
                            <span className="3xl:text-[16px] 2xl:text-[14px] xl:text-[12px] lg:text-[10px] text-[10px] font-normal capitalize text-white transition-colors duration-300 hover:text-base1 focus:text-base1">
                              {item.title}
                            </span>
                          </NavigationMenuTrigger>
                          <NavigationMenuContent className="bg-black/60 backdrop-blur-lg border-base1/10 sm:absolute">
                            <ul className="grid w-full min-w-[80px] lg:min-w-[120px]">
                              {item.dropdown.map((subItem, subIndex) => (
                                <li key={subIndex}>
                                  <NavigationMenuLink
                                    asChild
                                    className="hover:bg-black/40 p-1 lg:p-2 transition-background duration-300"
                                  >
                                    <Link
                                      href={subItem.href}
                                      className={`3xl:text-[16px] 2xl:text-[14px] xl:text-[12px] lg:text-[10px] text-[10px] font-normal capitalize transition-colors duration-300 hover:text-base1 focus:text-base1 ${
                                        pathname === subItem.href
                                          ? "text-base1"
                                          : "text-white"
                                      }`}
                                    >
                                      {subItem.title}
                                    </Link>
                                  </NavigationMenuLink>
                                </li>
                              ))}
                            </ul>
                          </NavigationMenuContent>
                        </>
                      ) : (
                        <NavigationMenuLink
                          asChild
                          className="data-[active=true]:focus:bg-transparent data-[active=true]:hover:bg-transparent data-[active=true]:bg-transparent hover:bg-transparent focus:bg-transparent p-[5px] xl:p-[10px_15px] 3xl:p-[15px_20px] focus:outline-none focus:ring-0"
                        >
                          <Link
                            href={item.href}
                            className={`3xl:text-[16px] 2xl:text-[14px] xl:text-[12px] lg:text-[10px] text-[10px] font-normal capitalize transition-colors duration-300 hover:text-base1 focus:text-base1 ${
                              pathname === item.href
                                ? "text-base1"
                                : "text-white"
                            }`}
                          >
                            {item.title}
                          </Link>
                        </NavigationMenuLink>
                      )}
                    </NavigationMenuItem>
                  )
              )}
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center gap-[15px] lg:gap-[20px] xl:gap-[25px] 2xl:gap-[30px] 3xl:gap-[40px]">
            <LinkButton
              href="/"
              aria-label="model"
              className="capitalize min-w-[70px] sm:min-w-[80px] xl:min-w-[97px] 2xl:min-w-[127px] 3xl:min-w-[146px] max-sm:hidden"
            >
              book test drive
            </LinkButton>
            <Select
              onValueChange={handleLocaleChange}
              value={locale}
              defaultValue={locale}
            >
              <SelectTrigger className="3xl:text-[15px] 2xl:text-[14px] xl:text-[10px] lg:text-[10px] text-[10px] font-normal uppercase leading-none text-white [&_svg]:stroke-white p-0 focus-visible:ring-0 shadow-none border-none gap-[2px] [&>svg]:size-3 2xl:[&>svg]:mt-[1px] 3xl:[&>svg]:mt-[2px]">
                <SelectValue placeholder={locale.toUpperCase()} />
              </SelectTrigger>
              <SelectContent className="bg-white max-w-[40px] border-base1/10">
                <SelectItem
                  className={`${triggerNavStyle} uppercase text-black`}
                  value="en"
                >
                  En
                </SelectItem>
                <SelectItem
                  className={`${triggerNavStyle} uppercase text-black`}
                  value="ar"
                >
                  Ar
                </SelectItem>
              </SelectContent>
            </Select>
            <Link href="/" className="w-auto">
              <Image
                src={data?.saud_bahhwan_logo || "/saud-bhawan-logo.svg"}
                alt={data?.saud_bahhwan_logo_alt || "Saud Bahwan Logo"}
                width={84}
                height={44}
                className="w-[40px] lg:w-[56px] 2xl:w-[84px] h-auto object-contain hover:scale-105 transition-transform duration-300"
              />
            </Link>
            <div className="sm:hidden">
              <Sheet open={open} onOpenChange={setOpen} className="sm:hidden">
                <SheetTrigger className="w-[20px] flex">
                  <Image
                    src="/images/icon-humburger.svg"
                    alt="humburger"
                    width={25}
                    height={25}
                    className="block"
                  />
                </SheetTrigger>
                <SheetContent
                  className="bg-white backdrop-blur-[30px]"
                  side={locale === "ar" ? "right" : "left"}
                >
                  <SheetHeader>
                    <SheetTitle className="sr-only">Site navigation</SheetTitle>
                    <ul className="flex flex-col [&>li]:max-sm:m-[15px] my-[15px]">
                      {menuItems?.map((item, index) => (
                        <li key={index}>
                          <Heading
                            as="h6"
                            className={`text-[14px] font-medium tracking-[1px] capitalize hover:text-base1 transition-all duration-300 ${
                              pathname === item.href
                                ? "text-base1"
                                : "text-black"
                            }`}
                          >
                            <Link
                              href={item.href}
                              onClick={() => setOpen(false)}
                            >
                              {item.title}
                            </Link>
                          </Heading>
                          {item.dropdown && (
                            <ul className="mt-2 ml-4 flex flex-col gap-2">
                              {item.dropdown.map((subItem, subIndex) => (
                                <li key={subIndex}>
                                  <Heading
                                    as="h6"
                                    className={`text-[14px] font-medium tracking-[1px] capitalize hover:text-base1 transition-all duration-300 ${
                                      pathname === subItem.href
                                        ? "text-base1"
                                        : "text-black"
                                    }`}
                                  >
                                    <Link
                                      href={subItem.href}
                                      onClick={() => setOpen(false)}
                                    >
                                      {subItem.title}
                                    </Link>
                                  </Heading>
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
