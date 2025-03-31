"use client";
import { Logo } from "@/elements";
import Image from "next/image";
import Link from "next/link";
import ImageOverlay from "../home/ImageOverlay";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="max-w-[1200px] mx-auto px-2.5 sm:px-5 2xl:px-0"
    >
      <Image
        src="/svgs/horizontal-divider.svg"
        width={1296}
        height={1}
        alt="border"
      />

      {/* Instagram Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-4xl text-green-700 mt-10 md:mt-[120px] font-marcellus text-center mb-7"
      >
        Instagram
      </motion.h2>

      {/* Image Grid */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        viewport={{ once: true }}
        className="grid grid-cols-3 md:grid-cols-6 gap-3"
      >
        {[
          "/images/home/footer/footer-image-one.png",
          "/images/home/footer/footer-image-two.png",
          "/images/home/footer/footer-image-three.png",
          "/images/home/footer/footer-image-four.png",
          "/images/home/footer/footer-image-five.png",
          "/images/home/footer/footer-image-six.png",
        ].map((imgUrl, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.2 + index * 0.1,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
          >
            <ImageOverlay
              imgUrl={imgUrl}
              styles={index % 2 ? "md:mt-4" : "md:mb-4"}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Social and Quick Links */}
      <div className="flex flex-col md:flex-row justify-center mt-20 mb-16">
        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 text-center md:text-right md:pr-12 mb-10 md:mb-0"
        >
          <h3 className="text-green-700 text-2xl text-center font-light mb-6 font-marcellus">
            Social
          </h3>
          <nav className="flex flex-col text-center space-y-4 font-montserrat">
            {["Instagram", "Facebook", "Twitter"].map((platform, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.4,
                  delay: 0.6 + index * 0.1,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
              >
                <Link
                  href="#"
                  className="text-green-700 font-medium uppercase tracking-widest text-xs md:text-sm hover:text-red-300 transition-colors"
                >
                  {platform}
                </Link>
              </motion.div>
            ))}
          </nav>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="hidden md:block w-px bg-[#a0a48e80] mx-4"
        ></motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 text-center md:text-left md:pl-12"
        >
          <h3 className="text-green-700 text-2xl text-center font-light mb-6 font-marcellus">
            Quick Links
          </h3>
          <nav className="flex flex-col text-center space-y-4 font-montserrat">
            {["Licensing", "Style Guide", "Changelog"].map((link, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.4,
                  delay: 0.8 + index * 0.1,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
              >
                <Link
                  href="#"
                  className="text-green-700 font-medium uppercase tracking-widest text-xs md:text-sm hover:text-red-300 transition-colors"
                >
                  {link}
                </Link>
              </motion.div>
            ))}
          </nav>
        </motion.div>
      </div>

      {/* Footer Branding */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center mb-40"
      >
        <div className="mb-5 flex justify-center">
          <Logo />
        </div>
        <div className="text-green-700 font-medium text-xs uppercase tracking-[2px] font-montserrat">
          Powered by Payaza
        </div>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
