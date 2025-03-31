"use client";
import { Input, Montserrat, Testimonial } from "@/components";

import { motion } from "framer-motion";
import Image from "next/image";

const BookUs = () => {
  return (
    <main>
      <section className="max-w-[1040px] mx-auto pb-[95px] md:pb-[140px] px-2.5 sm:px-5 2xl:px-0 mt-[72px]">
        <div className="flex flex-col justify-center items-center">
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            whileInView={{
              y: 0,
              opacity: 1,
              x: [0, -20, 20, -20, 10, 0],
              rotate: [-10, 10, -10, 10, -5, 0],
            }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
            viewport={{ once: true, margin: "-50px" }}
            className="w-[70px] h-[34px]"
          >
            <Image src="/svgs/leaf.svg" width={70} height={34} alt="leaf" />
          </motion.div>
          <Montserrat text="Booking" styles="text-green-300 text-center mt-6" />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
            className="text-2xl sm:text-[26px] md:text-[28px] mmd:text-3xl my-6 max-w-[633px] mx-auto text-center leading-[36px] sm:leading-[48px] font-erotique"
          >
            Please fill out the form below, and we’ll get back to you with a
            price.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.7 }}
            className="text-darkgreen-500 max-w-[450px] mx-auto text-center font-light leading-[26px] font-dmSans"
          >
            Every wedding is unique, which is why Chi Forever Weddings offer
            tailor-made prices for your wedding day.
          </motion.p>
        </div>
        <div className="mt-20">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="text-xl sm:text-2xl text-black-200 font-medium font-cormorantInfant"
          >
            Personal Details
          </motion.p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-5 sm:mt-9">
            <Input label="First Name" />
            <Input label="Last Name" />
            <Input label="Email " />
            <Input label="Phone Number (please add country code)" />
          </div>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
            className="text-xl sm:text-2xl text-black-200 font-medium mt-16 font-cormorantInfant"
          >
            Wedding Details
          </motion.p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-5 sm:mt-9">
            <Input label="Wedding Category (Trad., White)" />
            <Input label="Proposed Date" type="date" />
            <Input label="Wedding Location " />
            <Input label="Total Wedding Budget (in US Dollars)" />
            <Input label="Guest Count" />
          </div>
          <div className="mt-[72px] flex sm:justify-end">
            <button
              aria-label="submit"
              className="uppercase w-full sm:w-fit text-xsm border border-none text-white bg-green-500 font-medium py-[19px] px-[74px] tracking-[2px] font-montserrat"
            >
              submit
            </button>
          </div>
        </div>
      </section>
      <Testimonial showButton={false} />
    </main>
  );
};

export default BookUs;
