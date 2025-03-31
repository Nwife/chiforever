"use client";
import {
  AccordionItem,
  Montserrat,
  PackageItem,
  Testimonial,
} from "@/components";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

const all_packages: {
  price: string;
  packageName: string;
  packageDetail: string[];
}[] = [
  {
    price: "850",
    packageName: "On The Day Coordination",
    packageDetail: [
      "Last Minute Booking",
      "Vendor Assisting/Finalization",
      "Timeline Creation",
      "Execution Overseeing",
    ],
  },
  {
    price: "1,850",
    packageName: "Partial Wedding Planning",
    packageDetail: [
      "Vendor Assisting/Finalization",
      "Budget Management",
      "Design Consulting",
      "Close Day Check In",
      "Coordination Day Included",
    ],
  },
  {
    price: "2,000",
    packageName: "Partial Wedding Planning - Excluding Coordination Day",
    packageDetail: [
      "Specialised Collaboration",
      "Vendor Assisting/Finalization",
      "Budget Management",
      "Design Consulting",
      "Close Day Check In",
      "Coordination Day Excluded",
    ],
  },
  {
    price: "2,500",
    packageName: "Full Wedding Planning + Planning Coordinator",
    packageDetail: [
      "Overall Management",
      "Venue/Service Sourcing",
      "Budget Management & More",
      "Regular Updates/Meetings",
      "Full Wedding Day Coordination",
    ],
  },
];

const Services = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      title: "Do you offer virtual services for out-of town or busy clients?",
      content: "Yes",
    },
    {
      title: "Do you offer other services other than weddings?",
      content: "Yes",
    },
    {
      title: "What happens if the weather is bad on our wedding day?",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque alias recusandae velit porro placeat commodi fugit repellat pariatur incidunt dicta, culpa maxime provident magnam eius possimus officia laudantium. Dignissimos non quo, quam qui aspernatur eaque!",
    },
    {
      title: "Do you travel for destination weddings?",
      content: "Yes!",
    },
  ];

  return (
    <main>
      <section className="max-w-[1400px] mx-auto mt-[72px] overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Image
            src="/images/book-us/pricing.png"
            width={1280}
            height={709}
            className="w-full px-2.5 sm:px-5 lg:px-20"
            alt="pricing"
          />
        </motion.div>
      </section>

      <section className="max-w-[1200px] mx-auto mt-14 pb-[95px] md:pb-[140px] px-2.5 sm:px-5 2xl:px-0">
        <Montserrat
          text="Packages for you"
          styles="text-center text-green-300"
        />
        <motion.p
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-2xl sm:text-[26px] md:text-[28px] mmd:text-3xl  text-green-600 max-w-[570px] text-center mx-auto leading-[36px] sm:leading-[48px] mt-5 mb-10 font-medium font-erotique"
        >
          Exciting packages for your beautiful day.{" "}
        </motion.p>
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.3 } },
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col gap-10"
        >
          {all_packages.map(({ price, packageName, packageDetail }, idx) => (
            <PackageItem
              key={idx}
              idx={idx}
              price={price}
              packageName={packageName}
              packageDetail={packageDetail}
            />
          ))}
        </motion.div>
      </section>
      <Testimonial showButton={false} />
      <motion.section
        className="max-w-[1200px] mx-auto py-[95px] md:py-[140px] px-2.5 sm:px-5 2xl:px-0"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <p className="text-base text-brown-800 font-dmSans mb-1">FAQ</p>
            <p className="text-3xl">Got questions? I’ve got answers!</p>
            <p className="max-w-[463px] text-darkgreen-500 font-extralight mt-[22px] font-dmSans">
              Here you’ll find everything you need to know about working with me
              as your wedding planner, from booking details to what to expect on
              your big day.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {faqs.map((item, idx) => (
              <AccordionItem
                key={idx}
                index={idx}
                openIndex={openIndex}
                item={item}
                toggleAccordion={toggleAccordion}
              />
            ))}
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
};

export default Services;
