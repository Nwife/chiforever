import { Montserrat, Testimonial } from "@/components";
import PortfolioItem from "@/components/home/PortfolioItem";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="max-w-[1400px] mx-auto mt-10 px-2.5 sm:px-5 2xl:px-0 relative">
        <div className="grid grid-cols-3 md:gap-4 sm:gap-2.5 gap-1 lg:gap-5">
          <div className="relative">
            <Image
              src="/images/home/hero/hero-image-one.png"
              width={453.34}
              height={720}
              alt="hero-image"
            />
          </div>
          <div>
            <Image
              src="/images/home/hero/hero-image-two.png"
              width={453.34}
              height={720}
              alt="hero-image"
            />
          </div>
          <div>
            <Image
              src="/images/home/hero/hero-image-three.png"
              width={453.34}
              height={720}
              alt="hero-image"
            />
          </div>
        </div>
        <div className="absolute z-[4] left-1/2 transform -translate-x-1/2 top-2/3 max-w-[780px] w-[90%]">
          <div className="bg-white pt-[54px] pb-[50px] relative">
            <Montserrat
              text=" Chi Forever Weddings"
              styles="mb-8 text-center text-green-400"
            />
            <h2 className="text-[42px] sm:text-5xl md:text-[54px] mmd:text-6xl text-green-600 max-w-[565px] text-center mx-auto font-medium font-erotique">
              Luxury Weddings & Events
            </h2>
            <div className="flex justify-center ">
              <button className="mt-10 text-xs tracking-[2px] uppercase border-b border-brown-600 pb-1 text-green-500 font-medium font-montserrat">
                Book a Consult
              </button>
            </div>
          </div>
          <div className="absolute md:-left-[20%] -z-[105] -bottom-1/4">
            <Image
              width={300}
              height={257}
              src="/images/home/hero/flower.png"
              alt="wedding flower"
            />
          </div>
        </div>
      </section>
      <section className="px-2.5 sm:px-5 2xl:px-0 pt-[250px] xxs:pt-[200px] xms:pt-[150px] sm:pt-40 md:pt-0">
        <div className="mt-40 md:mt-64 mb-[80px] md:mb-[120px] flex flex-col justify-center items-center">
          <Image src="/svgs/leaf.svg" width={70} height={34} alt="leaf" />
          <p className="text-2xl sm:text-[26px] md:text-[28px] mmd:text-3xl max-w-[710px] text-center mt-6 sm:leading-10 font-medium text-green-800 font-erotique">
            Your wedding should be utterly unforgettable, deeply romantic,
            exquisitely beautiful and entirely “you”.
          </p>
          <p className="text-lg max-w-[610px] font-medium text-green-900 text-center mt-8">
            The best love is the kind that awakens the soul and makes us reach
            for more, that plants a fire in our hearts and brings peace to our
            minds.
          </p>
          <p className="mt-10 text-[#DE967D] text-2xl font-homemadeApple">
            Lynn Goodman
          </p>
        </div>
      </section>
      <Testimonial />
      <section className="max-w-[1400px] px-2.5 sm:px-5 2xl:px-0 mx-auto mt-[120px] flex flex-col lg:flex-row lg:justify-end">
        <div className="relative lg:-right-20 z-20 bottom-10">
          <div className="absolute -top-14 2xl:top-16 lg:-left-32 -z-10">
            <Image
              src="/images/home/hero/flower.png"
              width={300}
              height={257}
              alt="flower"
            />
          </div>
          <Image
            src="/images/home/section/memory.png"
            width={600}
            height={745}
            alt="woman"
          />
          <div className="absolute -bottom-[85px] right-0 lg:-right-[95px]">
            <Image
              src="/images/home/hero/olive-branch.png"
              className="w-[270px]"
              width={270}
              height={511.54}
              alt="olive-branch"
            />
          </div>
        </div>
        <div className="py-20 lg:py-0 lg:h-[740px] relative bg-white lg:w-1/2 lg:pl-[125px] xl:pl-[195px]">
          <div className="flex flex-col justify-center items-center lg:items-start h-full px-6 lg:px-0">
            <Image src="/svgs/rings.svg" width={28} height={21} alt="rings" />
            <Montserrat text="who we are" styles="text-green-300 mb-2 mt-3" />
            <p className="text-[34px] text-center lg:text-left sm:text-[38px] md:text-[42px] lg:text-[44px] mmd:text-5xl leading-[45px] lg:leading-[50px] max-w-[408px] text-green-500 sm:leading-[60px] font-marcellus lg:pr-4">
              We create memorable stories for your event.
            </p>
            <p className="text-green-500 text-center lg:text-left text-lg mt-7 max-w-[393px]">
              Crafting unforgettable narratives that will make your special
              occasion truly memorable and cherished for years to come.
            </p>
            <button
              aria-label="more about us"
              className="uppercase w-fit text-xs tracking-[2px] border border-brown-500 text-green-500 font-medium py-4 px-7 mt-10 font-montserrat"
            >
              more about us
            </button>
          </div>
        </div>
      </section>
      <section className="max-w-[1200px] mx-auto py-20 md:py-[120px] px-2.5 sm:px-5 2xl:px-0">
        <Montserrat text="Portfolio" styles="text-center text-green-300 mb-1" />
        <p className="text-[34px] sm:text-[38px] md:text-[42px] mmd:text-[50px] text-center text-green-800 max-w-[730px] leading-[60px] mx-auto">
          Designing Unforgettable Moments for Your Dream Wedding
        </p>
        <div className="grid grid-cols-1 xms:grid-cols-2 md:grid-cols-4 gap-y-[50px] md:gap-y-0 gap-5 mt-12">
          <PortfolioItem
            name="Jennifer & Oliver"
            imageUrl="/images/home/portfolio/portfolio-image-one.png"
          />
          <PortfolioItem
            name="Briana & Richard"
            imageUrl="/images/home/portfolio/portfolio-image-two.png"
          />
          <PortfolioItem
            name="Anne & Cameron"
            imageUrl="/images/home/portfolio/portfolio-image-three.png"
          />
          <PortfolioItem
            name="Linda & Charles"
            imageUrl="/images/home/portfolio/portfolio-image-four.png"
          />
        </div>
        <div className="flex justify-center">
          <Link
            href={"/portfolio"}
            className="uppercase w-fit text-xs text-center tracking-[2px] border border-green-500 text-green-500 font-medium py-4 px-7 mt-[93px] font-montserrat"
          >
            view all portfolios
          </Link>
        </div>
      </section>
    </main>
  );
}
