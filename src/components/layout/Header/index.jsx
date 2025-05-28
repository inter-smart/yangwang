"use client";
import Link from "next/link";
import { Heading } from "../Heading";
import { Img } from "../Img";
import { usePathname } from "next/navigation";

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
  SheetDescription,
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

import { Menu } from "lucide-react";

import { useEffect, useState } from "react";

function HeaderNavItem({ href, title }) {
  const pathname = usePathname();
  return (
    <Link href={href} className="group relative z-0">
      <Heading
        as="h6"
        className={`text-[14px] font-medium tracking-[1px] capitalize hover:text-base3 transition-all duration-300 ${
          pathname === href ? "text-base1" : "text-black"
        }`}
      >
        {title}
      </Heading>
    </Link>
  );
}

export default function Header() {
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  const isEnglish = true;

  useEffect(() => {
    const isSticky = () => {
      const scrollTop = window.scrollY;
      const isScrollingUp = scrollTop < lastScrollTop;

      if (scrollTop >= 250 && isScrollingUp) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      setLastScrollTop(scrollTop);
    };

    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, [lastScrollTop]);

  const triggerStyle =
    "[&>svg]:stroke-white [&>svg]:ml-[2px] p-[5px] xl:p-[10px_15px] 3xl:p-[15px_20px]";
  const triggerNavStyle =
    "3xl:text-[16px] 2xl:text-[12px] xl:text-[10px] lg:text-[10px] text-[10px] font-normal capitalize leading-none text-white transition-color duration-300 hover:text-base3";

  return (
    <header
      className={`w-full h-(--header-y) absolute z-10 top-0 left-0 right-0 block bg-linear-to-b from-black/40 to-transparent transition-all duration-300 ${
        isVisible
          ? "fixed animate-fadeDown bg-black/40 backdrop-blur-lg [--header-y:50px] lg:[--header-y:70px] 2xl:[--header-y:80px] 3xl:[--header-y:90px] "
          : "absolute [--header-y:60px] lg:[--header-y:80px] 2xl:[--header-y:100px] 3xl:[--header-y:120px] "
      }`}
    >
      <div className="container">
        <div className="w-full h-(--header-y) flex flex-wrap items-center justify-between gap-[10px]">
          <Link href={"/"} className="w-auto">
            <Img
              src="header_logo.svg"
              alt="Headerlogo"
              width={45}
              height={60}
              className="w-[30px] lg:w-[25px] xl:w-[30px] 2xl:w-[40px] 3xl:w-[45px] h-auto object-contain block hover:scale-105 transition-transform duration-300 hover:text-base3"
            />
          </Link>
          <NavigationMenu
            dir={isEnglish ? "ltr" : "rtl"}
            className="max-sm:hidden"
          >
            <NavigationMenuList className="gap-0">
              <NavigationMenuItem>
                <NavigationMenuTrigger className={triggerStyle}>
                  <div className={triggerNavStyle}>Models</div>
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-white border-base1/10">
                  <ul className="grid p-[15px] md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-2">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-[15px] no-underline outline-none focus:shadow-md"
                          href="/"
                        >
                          <div className="text-lg font-medium">
                            U8
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, fugiat?
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li className="row-span-2">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-[15px] no-underline outline-none focus:shadow-md"
                          href="/"
                        >
                          <div className="text-lg font-medium">
                            U8
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, fugiat?
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className={triggerStyle} asChild>
                  <Link href="#" className={triggerNavStyle}>
                    About Us
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className={triggerStyle} asChild>
                  <Link href="#" className={triggerNavStyle}>
                    Services
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className={triggerStyle} asChild>
                  <Link href="#" className={triggerNavStyle}>
                    Contact
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className={triggerStyle} asChild>
                  <Link href="#" className={triggerNavStyle}>
                    Owners
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className={triggerStyle} asChild>
                  <Link href="#" className={triggerNavStyle}>
                    Offers
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <div className="flex items-center gap-[15px] lg:gap-[20px] xl:gap-[25px] 3xl:gap-[40px]">
            <div>
              <Select>
                <SelectTrigger className="3xl:text-[16px] 2xl:text-[12px] xl:text-[10px] lg:text-[10px] text-[10px] font-normal capitalize leading-none text-white [&_svg]:stroke-white p-0 focus-visible:ring-0 shadow-none border-none gap-[2px] [&>svg]:size-3 [&>svg]:mt-[1px] 3xl:[&>svg]:mt-[3px]">
                  <SelectValue placeholder="en" />
                </SelectTrigger>
                <SelectContent className="bg-white max-w-[40px] border-base1/10">
                  <SelectItem className={`${triggerNavStyle} text-black`} value="en">En</SelectItem>
                  <SelectItem className={`${triggerNavStyle} text-black`} value="ar">Ar</SelectItem>
                  <SelectItem className={`${triggerNavStyle} text-black`} value="us">Us</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Link href={"/"} className="w-auto">
                <Img
                  src="saudbhawan-1.svg"
                  alt="saudbhawan"
                  width={84}
                  height={44}
                  className="w-[40px] xl:w-[56px] 3xl:w-[84px] h-auto object-contain block hover:scale-105 transition-transform duration-300"
                />
              </Link>
            </div>
            <div className="sm:hidden">
              <Sheet className="sm:hidden">
                <SheetTrigger className="flex">
                  <Menu className="size-8 text-white m-auto" />
                </SheetTrigger>
                <SheetContent className="bg-white backdrop-blur-[30px]">
                  <SheetHeader>
                    <SheetTitle className="sr-only">site navigation</SheetTitle>
                    <SheetDescription className="sr-only">
                      chose one to navigate
                    </SheetDescription>
                    <ul className="flex flex-col [&>li]:max-sm:m-[15px] my-[15px]">
                      <li>
                        <HeaderNavItem title={"Models"} href={"/"} />
                      </li>
                      <li>
                        <HeaderNavItem title={"About Us"} href={"#"} />
                      </li>
                      <li>
                        <HeaderNavItem title={"Services"} href={"#"} />
                      </li>
                      <li>
                        <HeaderNavItem title={"Contact"} href={"#"} />
                      </li>
                      <li>
                        <HeaderNavItem title={"Owners"} href={"#"} />
                      </li>
                      <li>
                        <HeaderNavItem title={"Offers"} href={"#"} />
                      </li>
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
