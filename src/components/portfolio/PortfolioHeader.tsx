'use client'
import { Montserrat } from "..";
import { motion } from "framer-motion";

const PortfolioHeader = ({
  text,
  subtext,
}: {
  text: string;
  subtext: string;
}) => {
  return (
    <>
    <Montserrat
        text="Portfolio"
        styles="text-brown-100 text-center mt-3 mb-4"
      />
      <motion.h1
        className="text-[42px] sm:text-5xl md:text-[54px] mmd:text-[62px] text-center text-green-600 font-medium mb-3.5 font-erotique"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {text}
      </motion.h1>
      <motion.p
        className="max-w-[713px] text-green-900 mx-auto text-center leading-[32px] font-marcellus"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
      >
        {subtext}
      </motion.p>
    </>
  );
};

export default PortfolioHeader;
