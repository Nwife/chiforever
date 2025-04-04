"use client";
import { PortfolioHeader, PortfolioListItem, Testimonial } from "@/components";
import Image from "next/image";
import { motion } from "framer-motion";

const Portfolio = () => {
  const portfolio: {
    groom: string;
    bride: string;
    weddingDate: string;
    imageUrl: string;
  }[] = [
    {
      groom: "Ifechukwu",
      bride: "Chika",
      weddingDate: "March 4, 2023",
      imageUrl: "/images/home/portfolio/portfolio-list-one.png",
    },
    {
      groom: "Chidera",
      bride: "Uche",
      weddingDate: "July 11, 2023",
      imageUrl: "/images/home/portfolio/portfolio-list-two.png",
    },
    {
      groom: "Prince",
      bride: "Rinse",
      weddingDate: "January 4, 2018",
      imageUrl: "/images/home/portfolio/portfolio-list-three.png",
    },
    {
      groom: "Mayowa",
      bride: "Favor",
      weddingDate: "July 11, 2022",
      imageUrl: "/images/home/portfolio/portfolio-list-four.png",
    },
    {
      groom: "Daudu",
      bride: "Favor",
      weddingDate: "March 4, 2023",
      imageUrl: "/images/home/portfolio/portfolio-list-five.png",
    },
    {
      groom: "Shadrach",
      bride: "Isabella",
      weddingDate: "October 18, 2023",
      imageUrl: "/images/home/portfolio/portfolio-list-one.png",
    },
  ];
  return (
    <main>
      <section className="max-w-[1200px] mx-auto mt-[72px] pb-[132px] px-2.5 sm:px-5 2xl:px-0">
        <motion.div
          initial={{
            y: -50, 
            rotateY: 360, 
          }}
          animate={{
            y: 0, 
            rotateY: 0, 
          }}
          transition={{
            duration: 3, 
            ease: "easeInOut",
            type: "spring", 
            stiffness: 50,
            damping: 25,
          }}
          className="flex justify-center"
        >
          <Image src="/svgs/rings.svg" width={28} height={21} alt="rings" />
        </motion.div>
        <PortfolioHeader
          text="Our Portfolio"
          subtext="Celebrating love in every detail, from the elegant decor to the
          heartfelt moments. A day where joy and togetherness shine brightly."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-[60px]">
          {portfolio.map(({ groom, bride, weddingDate, imageUrl }, idx) => (
            <PortfolioListItem
              key={idx}
              groom={groom}
              bride={bride}
              weddingDate={weddingDate}
              imageUrl={imageUrl}
            />
          ))}
        </div>
      </section>
      <Testimonial />
    </main>
  );
};

export default Portfolio;
