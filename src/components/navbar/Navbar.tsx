"use client";
import { Logo } from "@/elements";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useCallback, useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const pathname = usePathname();
  const isActiveLink = useCallback(
    (link: string) => {
      return link === "/" ? pathname === link : pathname.startsWith(link);
    },
    [pathname]
  );
  return (
    <nav className="relative">
      <div className="tracking-[2px] font-gfsNeohellenic mx-auto max-w-[1400px] hidden lg:flex justify-between items-center py-6 px-20">
        <div className="w-[60px]"></div>
        <div className="flex items-center text-xs gap-12 uppercase">
          <Link
            className={`${
              isActiveLink("/") ? "text-green-400" : "text-green-800"
            }`}
            href="/"
          >
            Home
          </Link>
          <Link
            className={`${
              isActiveLink("/about-us") ? "text-green-400" : "text-green-800"
            }`}
            href="/about-us"
          >
            About
          </Link>
          <Link
            className={`${
              isActiveLink("/services") ? "text-green-400" : "text-green-800"
            }`}
            href="/services"
          >
            Services
          </Link>
        </div>
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Logo />
        </div>
        <div className="flex items-center text-xs gap-10 uppercase">
          <Link
            className={`${
              isActiveLink("portfolio") ? "text-green-400" : "text-green-800"
            }`}
            href="/portfolio"
          >
            Portfolio
          </Link>
          <Link
            className={`${
              isActiveLink("contact-us") ? "text-green-400" : "text-green-800"
            }`}
            href="/contact-us"
          >
            Contact Us
          </Link>
        </div>

        <Link
          href={"/book-us"}
          className="block text-xs uppercase text-white bg-green-500 px-5 py-4"
        >
          Book Us
        </Link>
      </div>
      <div className="py-4 px-5 grid grid-cols-[1fr_auto_1fr] lg:hidden">
        <div></div>
        <Logo />
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="ml-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#4B6355"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d={
                isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
      </div>
      {isMenuOpen && (
        <div className="absolute top-24 left-0 bg-primary right-0 drop-shadow-lg z-50 h-auto py-7 lg:hidden">
          <div className="flex flex-col" onClick={() => setIsMenuOpen(false)}>
            <div className="flex flex-col items-center text-sm gap-10 uppercase">
              <Link href="/">Home</Link>
              <Link href="/about-us">About</Link>
              <Link href="/services">Services</Link>
              <Link href="/portfolio">Portfolio</Link>
              <Link href="/contact-us">Contact Us</Link>
            </div>
            <div className="flex justify-center mt-10">
              <Link
                href={"/book-us"}
                className="block text-xs uppercase text-white bg-green-500 px-5 py-4 w-fit"
              >
                Book Us
              </Link>
            </div>
          </div>
        </div>
      )}
      <div className="max-w-[1400px] mx-auto">
        <Image
          src="/svgs/horizontal-divider.svg"
          width={1296}
          height={1}
          alt="border"
        />
      </div>
      <div className="absolute left-1/2 transform -translate-x-1/2 py-1 max-w-[1400px]">
        <Image
          src="/svgs/vertical-divider.svg"
          width={1}
          height={54}
          alt="border"
        />
      </div>
    </nav>
  );
};

export default Navbar;
