"use client";
import { Montserrat, Testimonial } from "@/components";
import PortfolioItem from "@/components/home/PortfolioItem";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main>
      <section className="max-w-[1400px] mx-auto mt-10 px-2.5 sm:px-5 2xl:px-0 relative">
        <div className="grid grid-cols-3 md:gap-4 sm:gap-2.5 gap-1 lg:gap-5">
          {[
            "hero-image-one.png",
            "hero-image-two.png",
            "hero-image-three.png",
          ].map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              className="relative"
            >
              <Image
                src={`/images/home/hero/${image}`}
                width={453.34}
                height={720}
                alt="hero-image"
              />
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="absolute z-[4] left-1/2 transform -translate-x-1/2 top-2/3 max-w-[780px] w-[90%]"
        >
          <div className="bg-white pt-[54px] pb-[50px] relative">
            <Montserrat
              text=" Chi Forever Weddings"
              styles="mb-8 text-center text-green-400"
            />
            <h2 className="text-[42px] sm:text-5xl md:text-[54px] mmd:text-6xl text-green-600 max-w-[565px] text-center mx-auto font-medium font-erotique">
              Luxury Weddings & Events
            </h2>
            <div className="flex justify-center ">
              <Link
                href={"/book-us"}
                className="mt-10 text-xs tracking-[2px] uppercase border-b border-brown-600 pb-1 text-green-500 font-medium font-montserrat"
              >
                Book a Consult
              </Link>
            </div>
          </div>
          <motion.div
            initial={{ rotate: 180 }}
            whileInView={{ rotate: 360 }}
            transition={{
              duration: 1.2,
              ease: "linear",
            }}
            viewport={{ once: true }}
            className="absolute md:-left-[20%] -z-[105] -bottom-1/4"
          >
            <Image
              width={300}
              height={257}
              src="/images/home/hero/flower.png"
              alt="wedding flower"
            />
          </motion.div>
        </motion.div>
      </section>
      <section className="px-2.5 sm:px-5 2xl:px-0 pt-[250px] xxs:pt-[200px] xms:pt-[150px] sm:pt-40 md:pt-0">
        <div className="mt-40 md:mt-64 mb-[80px] md:mb-[120px] flex flex-col justify-center items-center">
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
            className="w-[70px] h-[34px]"
          >
            <Image src="/svgs/leaf.svg" width={70} height={34} alt="leaf" />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-2xl sm:text-[26px] md:text-[28px] mmd:text-3xl max-w-[710px] text-center mt-6 sm:leading-10 font-medium text-green-800 font-erotique"
          >
            Your wedding should be utterly unforgettable, deeply romantic,
            exquisitely beautiful and entirely “you”.
          </motion.p>

          {/* Quote */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-lg max-w-[610px] font-medium text-green-900 text-center mt-8"
          >
            The best love is the kind that awakens the soul and makes us reach
            for more, that plants a fire in our hearts and brings peace to our
            minds.
          </motion.p>

          {/* Author */}
          <motion.p
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="mt-10 text-[#DE967D] text-2xl font-homemadeApple"
          >
            Lynn Goodman
          </motion.p>
        </div>
      </section>
      <Testimonial />
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-[1400px] px-2.5 sm:px-5 2xl:px-0 mx-auto mt-[120px] flex flex-col lg:flex-row lg:justify-end"
      >
        {/* Image Container */}
        <div className="relative lg:-right-20 z-20 bottom-10">
          {/* Flower Image */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="absolute -top-14 2xl:top-16 lg:-left-32 -z-10"
          >
            <Image
              src="/images/home/hero/flower.png"
              width={300}
              height={257}
              alt="flower"
            />
          </motion.div>

          {/* Main Image (Woman) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Image
              src="/images/home/section/memory.png"
              width={600}
              height={745}
              alt="woman"
            />
          </motion.div>

          {/* Olive Branch Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="absolute -bottom-[85px] right-0 lg:-right-[95px]"
          >
            <Image
              src="/images/home/hero/olive-branch.png"
              className="w-[270px]"
              width={270}
              height={511.54}
              alt="olive-branch"
            />
          </motion.div>
        </div>

        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="py-20 lg:py-0 lg:h-[740px] relative bg-white lg:w-1/2 lg:pl-[125px] xl:pl-[195px]"
        >
          <div className="flex flex-col justify-center items-center lg:items-start h-full px-6 lg:px-0">
            {/* Rings Icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <Image src="/svgs/rings.svg" width={28} height={21} alt="rings" />
            </motion.div>

            {/* "Who We Are" Title */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-green-300 mb-2 mt-3 uppercase"
            >
              Who we are
            </motion.p>

            {/* Main Heading */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-[34px] text-center lg:text-left sm:text-[38px] md:text-[42px] lg:text-[44px] mmd:text-5xl leading-[45px] lg:leading-[50px] max-w-[408px] text-green-500 sm:leading-[60px] font-marcellus lg:pr-4"
            >
              We create memorable stories for your event.
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-green-500 text-center lg:text-left text-lg mt-7 max-w-[393px]"
            >
              Crafting unforgettable narratives that will make your special
              occasion truly memorable and cherished for years to come.
            </motion.p>

            {/* Button */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.8,
                ease: "easeOut",
                type: "spring",
                stiffness: 150,
                damping: 10,
              }}
              viewport={{ once: true }}
            >
              <Link
                href="/about-us"
                className="uppercase inline-block w-fit text-xs tracking-[2px] border border-brown-500 text-green-500 font-medium py-4 px-7 mt-10 font-montserrat transition-all duration-200 hover:bg-green-500 hover:text-white"
              >
                More about us
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: -15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="max-w-[1200px] mx-auto py-20 md:py-[120px] px-2.5 sm:px-5 2xl:px-0"
      >
        {/* Title */}
        <Montserrat
          text="portfolio"
          styles="text-center text-green-300 mb-1 uppercase"
        />

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-[34px] sm:text-[38px] md:text-[42px] mmd:text-[50px] text-center text-green-800 max-w-[730px] leading-[60px] mx-auto"
        >
          Designing Unforgettable Moments for Your Dream Wedding
        </motion.p>

        {/* Portfolio Items */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.3 },
            },
          }}
          viewport={{ once: true }}
          className="grid grid-cols-1 xms:grid-cols-2 md:grid-cols-4 gap-y-[50px] md:gap-y-0 gap-5 mt-12"
        >
          {[
            {
              name: "Jennifer & Oliver",
              imageUrl: "/images/home/portfolio/portfolio-image-one.png",
            },
            {
              name: "Briana & Richard",
              imageUrl: "/images/home/portfolio/portfolio-image-two.png",
            },
            {
              name: "Anne & Cameron",
              imageUrl: "/images/home/portfolio/portfolio-image-three.png",
            },
            {
              name: "Linda & Charles",
              imageUrl: "/images/home/portfolio/portfolio-image-four.png",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 1, ease: "easeOut" }}
              whileHover={{ scale: 1.05 }}
            >
              <PortfolioItem name={item.name} imageUrl={item.imageUrl} />
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.2,
            delay: 1,
            ease: "easeOut",
          }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <Link
              href={"/portfolio"}
              className="uppercase inline-block w-fit text-xs text-center tracking-[2px] border border-green-500 text-green-500 font-medium py-4 px-7 mt-[93px] font-montserrat transition-all duration-300 hover:bg-green-500 hover:text-white"
            >
              View All Portfolios
            </Link>
          </motion.div>
        </motion.div>
      </motion.section>
    </main>
  );
}
