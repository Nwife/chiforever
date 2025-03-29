import { Logo } from "@/elements";
import Image from "next/image";
import Link from "next/link";
import FooterImage from "./FooterImage";

const Footer = () => {
  return (
    <footer className="max-w-[1200px] mx-auto px-2.5 sm:px-5 2xl:px-0">
      <Image
        src="/svgs/horizontal-divider.svg"
        width={1296}
        height={1}
        alt="border"
      />
      <h2 className="text-4xl text-green-700 md:mt-[120px] font-marcellus text-center mb-7">
        Instagram
      </h2>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
        <FooterImage
          imgUrl="/images/home/footer/footer-image-one.png"
          styles="md:mt-8 hover:md:mt-8"
        />
        <FooterImage
          imgUrl="/images/home/footer/footer-image-two.png"
          styles="md:mb-8 hover:md:mb-8"
        />
        <FooterImage
          imgUrl="/images/home/footer/footer-image-three.png"
          styles="md:mt-8"
        />
        <FooterImage
          imgUrl="/images/home/footer/footer-image-four.png"
          styles="md:mb-8"
        />
        <FooterImage
          imgUrl="/images/home/footer/footer-image-five.png"
          styles="md:mt-8"
        />
        <FooterImage
          imgUrl="/images/home/footer/footer-image-six.png"
          styles="md:mb-8"
        />
      </div>

      <div className="flex flex-col md:flex-row justify-center mt-20 mb-16">
        {/* Social Links */}
        <div className="w-full md:w-1/2 text-center md:text-right md:pr-12 mb-10 md:mb-0">
          <h3 className="text-green-700 text-2xl text-center font-light mb-6 font-marcellus">
            Social
          </h3>
          <nav className="flex flex-col text-center space-y-4 font-montserrat">
            <Link
              href="#"
              className="text-green-700 font-medium uppercase tracking-widest text-xs md:text-sm hover:text-red-300 transition-colors"
            >
              Instagram
            </Link>
            <Link
              href="#"
              className="text-green-700 font-medium uppercase tracking-widest text-xs md:text-sm hover:text-red-300 transition-colors"
            >
              Facebook
            </Link>
            <Link
              href="#"
              className="text-green-700 font-medium uppercase tracking-widest text-xs md:text-sm hover:text-red-300 transition-colors"
            >
              Twitter
            </Link>
          </nav>
        </div>

        {/* Divider */}
        <div className="hidden md:block w-px bg-[#a0a48e80] mx-4"></div>

        {/* Quick Links */}
        <div className="w-full md:w-1/2 text-center md:text-left md:pl-12">
          <h3 className="text-green-700 text-2xl text-center font-light mb-6 font-marcellus">
            Quick Links
          </h3>
          <nav className="flex flex-col text-center space-y-4 font-montserrat">
            <Link
              href="#"
              className="text-green-700 font-medium uppercase tracking-widest text-xs md:text-sm hover:text-red-300 transition-colors"
            >
              Licensing
            </Link>
            <Link
              href="#"
              className="text-green-700 font-medium uppercase tracking-widest text-xs md:text-sm hover:text-red-300 transition-colors"
            >
              Style Guide
            </Link>
            <Link
              href="#"
              className="text-green-700 font-medium uppercase tracking-widest text-xs md:text-sm hover:text-red-300 transition-colors"
            >
              Changelog
            </Link>
          </nav>
        </div>
      </div>

      <div className="text-center mb-40">
        <div className="mb-5 flex justify-center">
          <Logo />
        </div>
        <div className="text-green-700 font-medium text-xs uppercase tracking-[2px] font-montserrat">
          Powered by Payaza
        </div>
      </div>
    </footer>
  );
};

export default Footer;
