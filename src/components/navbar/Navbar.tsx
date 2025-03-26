import { Logo } from "@/elements";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="relative">
      <div className="text-green-800 tracking-[2px] font-gfsNeohellenic mx-auto max-w-[1400px] flex justify-between items-center py-6 px-20">
        <div className="w-[60px]"></div>
        <div className="flex items-center text-xs gap-12 uppercase">
          <Link href="/">Home</Link>
          <Link href="/about-us">About</Link>
          <Link href="/services">Services</Link>
        </div>
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Logo />
        </div>
        <div className="flex items-center text-xs gap-10 uppercase">
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/portfolio">Contact Us</Link>
        </div>

        <Link
          href={"/book-us"}
          className="block text-xs uppercase text-white bg-green-500 px-5 py-4"
        >
          Book Us
        </Link>
      </div>
      <Image
        src="/svgs/horizontal-divider.svg"
        width={1296}
        height={1}
        alt="border"
      />
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
