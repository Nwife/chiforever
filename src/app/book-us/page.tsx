"use client";
import {
  AccordionItem,
  Input,
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

const BookUs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      title: "How long will it take to receive our wedding photos?",
      content: "Yes",
    },
    {
      title: "Do you offer packages that include engagement shoots?",
      content: "Yes",
    },
    {
      title: "Can we customize our wedding photography package?",
      content: "Yes!",
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
          className="w-full px-20"
          alt="pricing"
        />
      </section>
      <section className="max-w-[1200px] mx-auto mt-14 mb-10 pb-[140px]">
        <Montserrat
          text="Packages for you"
          styles="text-center text-green-300"
        />
        <p className="text-3xl text-green-600 max-w-[570px] text-center mx-auto leading-[48px] mt-5 mb-10 font-erotique">
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
      <section className="max-w-[1040px] mx-auto pb-[140px]">
        <>
          <Montserrat
            text="send a custom message"
            styles="text-green-300 text-center"
          />
          <p className="text-3xl my-6 max-w-[633px] mx-auto text-center leading-[48px] font-erotique">
            Please fill out the form below, and we’ll get back to you with a
            price.
          </p>
          <p className="text-darkgreen-500 max-w-[450px] mx-auto mt-6 text-center font-light font-dmSans">
            Every wedding is unique, which is why Chi Forever Weddings offer
            tailor-made prices for your wedding day.
          </p>
        </>
        <div className="mt-20">
          <p className="text-2xl text-black-200 font-medium font-cormorantInfant">
            Personal Details
          </p>
          <div className="grid grid-cols-2 gap-5 mt-9">
            <Input label="First Name" />
            <Input label="Last Name" />
            <Input label="Email " />
            <Input label="Phone Number (please add country code)" />
          </div>
          <p className="text-2xl text-black-200 font-medium mt-16 font-cormorantInfant">
            Wedding Details
          </p>
          <div className="grid grid-cols-2 gap-5 mt-9">
            <Input label="Wedding Category (Trad., White)" />
            <Input label="Proposed Date" type="date" />
            <Input label="Wedding Location " />
            <Input label="Total Wedding Budget (in US Dollars)" />
            <Input label="Guest Count" />
          </div>
          <div className="mt-[72px] flex justify-end">
            <button
              aria-label="submit"
              className="uppercase w-fit text-xsm border border-none text-white bg-green-500 font-medium py-[19px] px-[74px] tracking-[2px] font-montserrat"
            >
              submit
            </button>
          </div>
        </div>
      </section>
      <Testimonial />
      <section className="max-w-[1200px] mx-auto py-[140px]">
        <div className="grid grid-cols-2">
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

export default BookUs;
