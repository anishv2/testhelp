"use client";
import Image from "next/image";
import Icons from "./icons";
import Link from "next/link";
import MobileSidebarMenu from "./mobile-sidebar";
import { useState } from "react";

const HomeHeader = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);
  return (
    <header className="w-full bg-transparent absolute">
      <nav className="flex items-center justify-between md:justify-center w-full py-3 px-3 lg:px-6">
        <div className="block md:hidden order-2" onClick={toggle}>
          <Icons.hambg className="text-white size-6 sm:size-8" />
        </div>
        <Link
          href="/"
          className="relative w-[100px] sm:w-[150px] h-[30px] sm:h-[45px]"
        >
          <Image
            src="/images/brandlogo.webp"
            alt="Aletheia"
            fill
            sizes="100%"
            className="w-full"
            loading="lazy"
            decoding="async"
          />
        </Link>
      </nav>
      <MobileSidebarMenu isOpen={open} setOpen={setOpen} />
    </header>
  );
};

const CommonHeader = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);
  return (
    <header className="w-full main-bg">
      <nav className="flex items-center justify-between md:justify-center w-full py-3 px-3 lg:px-6">
        <div className="block md:hidden order-2" onClick={toggle}>
          <Icons.hambg className="text-white size-6 sm:size-8" />
        </div>
        <Link
          href="/"
          className="relative w-[100px] sm:w-[150px] h-[30px] sm:h-[45px]"
        >
          <Image
            src="/images/brandlogo.webp"
            alt="Aletheia"
            fill
            sizes="100%"
            className="w-full"
            loading="lazy"
            decoding="async"
          />
        </Link>
      </nav>
      <MobileSidebarMenu isOpen={open} setOpen={setOpen} />
    </header>
  );
};

export { HomeHeader, CommonHeader };
