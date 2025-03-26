import { Montserrat } from "@/components";
import { AppSvg } from "@/elements";
import Image from "next/image";
import React from "react";

const Divider = () => <div className="h-10 w-px bg-[#a0a48e80]" />;

const About = () => {
  return (
    <main>
      <section className="max-w-[1200px] mx-auto pt-16 pb-[140px]">
        <div>
          <div className="flex justify-center">
            <Image src="/svgs/leaflet.svg" width={62} height={19} alt="leaf" />
          </div>
          <Montserrat
            text="who we are"
            styles="text-brown-100 text-center mt-3.5 mb-5"
          />
          <p className="text-[62px] text-green-600 max-w-[570px] mx-auto text-center leading-[68px] font-medium font-erotique">
            About Chi Forever Weddings
          </p>
          <div className="flex justify-center">
            <Image
              src="/svgs/vertical-divider.svg"
              width={1}
              height={84}
              alt="border"
            />
          </div>
        </div>
        <div className="h-[830px] relative mt-8">
          <div className="absolute -translate-x-1/2 left-1/2 z-10">
            <div className="absolute transform rotate-8 -top-14 -left-32 -z-10">
              <Image
                src="/images/home/hero/flower.png"
                width={300}
                height={257}
                alt="flower"
              />
            </div>
            <Image
              src="/images/about/aboutus-image-one.png"
              width={560}
              height={826}
              alt="wedding"
            />
            <div className="absolute -bottom-[10%] -right-[15%]">
              <Image
                src="/images/home/hero/olive-branch.png"
                className="w-[270px]"
                width={270}
                height={511.54}
                alt="olive-branch"
              />
            </div>
          </div>
          <div className="absolute top-24 right-[65%]">
            <Image
              src="/images/about/aboutus-image-two.png"
              width={375.2}
              height={553.94}
              alt="wedding"
            />
          </div>
          <div className="absolute top-24 left-[65%]">
            <Image
              src="/images/about/aboutus-image-three.png"
              width={375.2}
              height={553.94}
              alt="wedding"
            />
          </div>
        </div>
      </section>
      <section className="max-w-[1200px] mx-auto pb-[140px]">
        <div className="flex justify-center mb-5">
          <Image src="/svgs/leaf.svg" width={70} height={34} alt="leaf" />
        </div>
        <p className="text-3xl text-green-600 uppercase max-w-[793px] mx-auto text-center leading-[43px] font-marcellus">
          Your wedding should be utterly unforgettable, deeply romantic,
          exquisitely beautiful and entirely “you”.
        </p>
        <div className="text-lg text-brown-700 max-w-[720px] mt-8 mx-auto text-center font-marcellus">
          <p className="mb-10">
            Crafting a Day That Reflects Your Unique Love Story: A Journey
            Through Personal Touches, Meaningful Moments, and Unforgettable
            Experiences That Celebrate Your Journey Together
          </p>
          <p>
            Crafting extraordinary experiences that will leave a lasting
            impression on your celebration.
          </p>
        </div>
        <p className="text-brown-600 text-2xl text-center mt-10 font-homemadeApple">
          Lynn Goodman
        </p>
      </section>
      <section className="max-w-[1200px] mx-auto pb-[140px]">
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

        <div className="flex items-center justify-between mt-[50px]">
          <div>{AppSvg.mimosa}</div>
          <Divider />
          <div>{AppSvg.iris}</div>
          <Divider />
          <div>{AppSvg.orion}</div>
          <Divider />
          <div>{AppSvg.sigma}</div>
          <Divider />
          <div>{AppSvg.pristin}</div>
          <Divider />
          <div>{AppSvg.polaris}</div>
        </div>
      </section>
    </main>
  );
};

export default About;
