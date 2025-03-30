import Link from "next/link";
import { Montserrat } from "..";
import { motion } from "framer-motion";

const Testimonial = () => {
  return (
    <section className="bg-[#0B2520] px-2.5 sm:px-5 2xl:px-0">
      <div className="flex flex-col justify-center items-center py-20">
        {/* Testimonial Heading */}
        <Montserrat text="Testimonial" styles="text-green-300 mb-4 " />;
        {/* Quote Animation */}
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-green-100 text-[23px] sm:text-[26px] md:text-[28px] mmd:text-3xl max-w-[672px] leading-[40px] capitalize text-center font-cormorantInfant"
        >
          &quot;Chi Weddings made our wedding stress-free and magical! Every
          detail was perfect, and we enjoyed every moment.&quot;
        </motion.blockquote>
        {/* Author Animation */}
        <motion.p
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-xl mt-12 mb-14 text-green-200 font-cormorantInfant"
        >
          &mdash; Sarah & David
        </motion.p>
        {/* Button Animation */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.3,
            delay: 1,
            ease: "easeOut",
            type: "spring",
            stiffness: 100,
          }}
          viewport={{ once: true }}
        >
          <Link
            href="/book-us"
            className="text-red-200 border border-red-200 py-4 px-5 font-dmSans transition-all duration-300 hover:bg-red-200 hover:text-[#0B2520]"
          >
            Book A Consult
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonial;
