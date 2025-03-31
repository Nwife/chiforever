"use client";
import { Montserrat } from "@/components";
import { AppSvg } from "@/elements";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Divider = () => <div className="h-10 w-px bg-[#a0a48e80]" />;

const About = () => {
  return (
    <main>
      <section className="max-w-[1200px] mx-auto pt-16 pb-[140px] px-2.5 sm:px-5 2xl:px-0 overflow-hidden">
        <div>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <Image
              src="/svgs/leaflet.svg"
              width={62}
              height={19}
              loading="eager"
              alt="leaf"
            />
          </motion.div>
          <Montserrat
            text="who we are"
            styles="text-brown-100 text-center mt-3.5 mb-5"
          />
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-[42px] sm:text-5xl md:text-[54px] mmd:text-[62px] text-green-600 max-w-[570px] mx-auto text-center leading-[45px] sm:leading-[68px] font-medium font-erotique"
          >
            About Chi Forever Weddings
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <Image
              src="/svgs/vertical-divider.svg"
              width={1}
              height={84}
              alt="border"
            />
          </motion.div>
        </div>
        <div className="h-[250px] xms:h-[385px] sm:h-[450px] md:h-[535px] mmd:h-[826px] relative mt-8">
          <div className="absolute -translate-x-1/2 left-1/2 z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="absolute transform rotate-8 -top-5 -left-20 -z-10"
            >
              <Image
                src="/images/home/hero/flower.png"
                width={300}
                height={257}
                alt="flower"
                className="w-full"
                loading="eager"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, ease: "easeInOut" }}
              viewport={{ once: true }}
            >
              <Image
                src="/images/about/aboutus-image-one.png"
                width={560}
                height={826}
                alt="wedding"
                loading="eager"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, rotate: 5 }}
              whileInView={{ opacity: 1, rotate: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
              className="absolute -bottom-[10%] -right-[15%]"
            >
              <Image
                src="/images/home/hero/olive-branch.png"
                className="w-[270px]"
                width={270}
                height={511.54}
                alt="olive-branch"
                loading="eager"
              />
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, rotate: -5 }}
            whileInView={{ opacity: 1, rotate: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true }}
            className="absolute top-24 right-[65%]"
          >
            <Image
              src="/images/about/aboutus-image-two.png"
              width={375.2}
              height={553.94}
              alt="wedding"
              loading="eager"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, rotate: 5 }}
            whileInView={{ opacity: 1, rotate: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true }}
            className="absolute top-24 left-[65%]"
          >
            <Image
              src="/images/about/aboutus-image-three.png"
              width={375.2}
              height={553.94}
              alt="wedding"
              loading="eager"
            />
          </motion.div>
        </div>
      </section>
      <section className="max-w-[1200px] mx-auto pb-[95px] md:pb-[140px] px-2.5 sm:px-5 2xl:px-0">
        {/* Leaf Icon */}
        <motion.div
          initial={{ y: -50, opacity: 0 }} // Starts above and invisible
          whileInView={{
            y: 0,
            opacity: 1,
            x: [0, -20, 20, -20, 10, 0], // Swings left & right
            rotate: [-10, 10, -10, 10, -5, 0], // Tilts while falling
          }}
          transition={{ duration: 2.5, ease: "easeInOut" }}
          viewport={{ once: true, margin: "-50px" }} // Ensures it triggers when entering view
          className="flex justify-center mb-5"
        >
          <Image src="/svgs/leaf.svg" width={70} height={34} alt="leaf" />
        </motion.div>

        {/* Main Heading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-[23px] sm:text-[26px] md:text-[28px] mmd:text-3xl text-green-600 uppercase max-w-[658px] mx-auto text-center leading-[43px] font-marcellus"
        >
          Your Wedding Isn’t Just About One Day; It’s the Start of an Incredible
          Life-Long Journey
        </motion.p>

        {/* Description Text */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.3, ease: "easeOut" },
            },
          }}
          className="text-lg text-brown-700 max-w-[720px] mt-8 mx-auto text-center font-marcellus"
        >
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="mb-10"
          >
            Chi Forever Weddings was born from my passion for creating
            meaningful, joyful experiences for couples on their special day.
            Rooted in both cultural significance and personal connection, our
            name reflects divine guidance and lifelong commitment.
          </motion.p>
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            With a deep love for organization and perfection, I ensure every
            detail comes together seamlessly—because nothing brings me more joy
            than turning your vision into a stress-free, unforgettable
            celebration.
          </motion.p>
        </motion.div>

        {/* Signature Name */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
          viewport={{ once: true }}
          className="text-brown-600 text-2xl text-center mt-10 font-homemadeApple"
        >
          Onyi Chienye-Okeke
        </motion.p>
      </section>

      <section className="max-w-[1200px] mx-auto pb-[95px] md:pb-[140px] px-2.5 sm:px-5 2xl:px-0">
        {/* Horizontal Divider + Featured In */}
        <div className="relative h-4">
          <Image
            src="/svgs/horizontal-divider.svg"
            width={1296}
            height={1}
            alt="border"
          />
          <p className="absolute left-1/2 -translate-x-1/2 -top-1/2 font-montserrat uppercase font-medium tracking-[2px] text-brown-100 px-5 text-xsm bg-primary">
            Featured In
          </p>
        </div>

        {/* Logos + Dividers */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.2, ease: "easeOut" },
            },
          }}
          className="flex flex-col md:flex-row items-center gap-5 md:gap-0 justify-between mt-[50px]"
        >
          {[
            AppSvg.mimosa,
            AppSvg.iris,
            AppSvg.orion,
            AppSvg.sigma,
            AppSvg.pristin,
            AppSvg.polaris,
          ].map((logo, index) => (
            <React.Fragment key={index}>
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                {logo}
              </motion.div>
              {index < 5 && (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.4,
                    ease: "easeOut",
                    delay: 0.1 * index,
                  }}
                  viewport={{ once: true }}
                >
                  <Divider />
                </motion.div>
              )}
            </React.Fragment>
          ))}
        </motion.div>
      </section>
    </main>
  );
};

export default About;
