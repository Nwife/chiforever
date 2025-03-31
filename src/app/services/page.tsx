"use client";
import {
  AccordionItem,
  Montserrat,
  PackageItem,
  Testimonial,
} from "@/components";
import Image from "next/image";
import { useState } from "react";

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
      content: "Yes!",
    },
    {
      title: "Do you travel for destination weddings?",
      content: "Yes!",
    },
  ];

  return (
    <main>
      <section className="max-w-[1400px] mx-auto mt-[72px]">
        <Image
          src="/images/book-us/pricing.png"
          width={1280}
          height={709}
          className="w-full px-2.5 sm:px-5 lg:px-20"
          alt="pricing"
        />
      </section>
      <section className="max-w-[1200px] mx-auto mt-14 pb-[95px] md:pb-[140px] px-2.5 sm:px-5 2xl:px-0">
        <Montserrat
          text="Packages for you"
          styles="text-center text-green-300"
        />
        <p className="text-2xl sm:text-[26px] md:text-[28px] mmd:text-3xl  text-green-600 max-w-[570px] text-center mx-auto leading-[36px] sm:leading-[48px] mt-5 mb-10 font-medium font-erotique">
          Exciting packages for your beautiful day.{" "}
        </p>
        <div className="flex flex-col gap-10">
          {all_packages.map(({ price, packageName, packageDetail }, idx) => (
            <PackageItem
              key={idx}
              idx={idx}
              price={price}
              packageName={packageName}
              packageDetail={packageDetail}
            />
          ))}
        </div>
      </section>
      <Testimonial showButton={false} />
      <section className="max-w-[1200px] mx-auto py-[95px] md:py-[140px] px-2.5 sm:px-5 2xl:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <p className="text-base text-brown-800 font-dmSans mb-1">FAQ</p>
            <p className="text-3xl">Got questions? I’ve got answers! </p>
            <p className="max-w-[463px] text-darkgreen-500 font-extralight mt-[22px] font-dmSans">
              Here you’ll find everything you need to know about working with me
              as your wedding planer, from booking details to what to expect on
              your big day.
            </p>
          </div>
          <div>
            {faqs.map((item, idx) => (
              <AccordionItem
                key={idx}
                index={idx}
                openIndex={openIndex}
                item={item}
                toggleAccordion={toggleAccordion}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
