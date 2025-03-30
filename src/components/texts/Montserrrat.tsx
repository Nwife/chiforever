"use client";
import { motion } from "framer-motion";

const Montserrrat = ({ text, styles }: { styles?: string; text: string }) => {
  return (
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
      viewport={{ once: true }}
      className={`text-xsm font-medium font-montserrat tracking-[2px] uppercase ${styles}`}
    >
      {text}
    </motion.p>
  );
};

export default Montserrrat;
