import PortfolioItem from "@/components/home/PortfolioItem";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="h-[720px] max-w-[1400px] mx-auto mt-10 relative">
        <div className="grid grid-cols-3 gap-5">
          <div className="relative">
            <Image
              src="/images/home/hero/hero-image-one.png"
              width={453.34}
              height={720}
              alt="hero-image"
            />
            <div className="absolute right-0 -bottom-1/4">
              <Image
                width={300}
                height={257}
                src="/images/home/hero/flower.png"
                alt="wedding flower"
              />
            </div>
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
        <div className="max-w-[780px] w-[780px] bg-white absolute left-1/2 transform -translate-x-1/2 top-2/3 pt-[54px] pb-[50px]">
          <p className="text-xsm font-montserrat uppercase mb-8 text-center text-green-400 font-medium tracking-[2px]">
            Chi Forever Weddings
          </p>
          <h2 className="text-6xl text-green-600 max-w-[565px] text-center mx-auto font-erotique">
            Luxury Weddings & Events
          </h2>
          <div className="flex justify-center ">
            <button className="mt-10 text-xs tracking-[2px] uppercase border-b border-brown-600 pb-1 text-green-500 font-medium font-montserrat">
              Book a Consult
            </button>
          </div>
        </div>
      </section>
      <section>
        <div className="mt-64 mb-[120px] flex flex-col justify-center items-center">
          <Image src="/svgs/leaf.svg" width={70} height={34} alt="leaf" />
          <p className="text-3xl max-w-[710px] text-center mt-6 leading-10 font-medium text-green-800 font-erotique">
            Your wedding should be utterly unforgettable, deeply romantic,
            exquisitely beautiful and entirely “you”.
          </p>
          <p className="text-lg w-[610px] font-medium text-green-900 text-center mt-8">
            The best love is the kind that awakens the soul and makes us reach
            for more, that plants a fire in our hearts and brings peace to our
            minds.
          </p>
          <p className="mt-10 text-[#DE967D] text-2xl font-homemadeApple">
            Lynn Goodman
          </p>
        </div>
      </section>
      <section className="bg-[#0B2520]">
        <div className="flex flex-col justify-center items-center py-20">
          <p className="tracking-[2px] uppercase text-green-300 mb-4 font-medium font-montserrat">
            Testimonial
          </p>
          <blockquote className="text-green-100 text-3xl max-w-[672px] leading-[40px] capitalize text-center font-cormorantInfant">
            &quot;Chi Weddings made our wedding stress-free and magical! Every
            detail was perfect, and we enjoyed every moment.&quot;
          </blockquote>
          <p className="text-xl mt-12 mb-14 text-green-200 font-cormorantInfant">
            &mdash; Sarah & David
          </p>
          <button className="text-red-200 border border-red-200 py-4 px-5 font-dmSans">
            Book A Consult
          </button>
        </div>
      </section>
      <section className="max-w-[1400px] mx-auto mt-40 flex justify-end">
        <div className="relative -right-20 z-20 bottom-10">
          <div className="absolute top-16 -left-32 -z-10">
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
        <div className="h-[740px] relative bg-white w-1/2 pl-[195px]">
          <div className="flex flex-col justify-center h-full">
            <Image src="/svgs/rings.svg" width={28} height={21} alt="rings" />
            <p className="font-montserrat uppercase text-xsm text-green-300 font-medium mb-2 mt-3">
              Who we are
            </p>
            <p className="text-5xl max-w-[408px] text-green-500 leading-[60px] font-marcellus">
              We create memorable stories for your event.
            </p>
            <p className="text-green-500 text-lg mt-7 max-w-[393px]">
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
      <section className="max-w-[1200px] mx-auto py-28">
        <p className="text-xsm text-green-300 font-medium font-montserrat tracking-[2px] uppercase text-center mb-1">
          Portfolio
        </p>
        <p className="text-center text-green-800 text-[50px] max-w-[730px] leading-[60px] mx-auto">
          Designing Unforgettable Moments for Your Dream Wedding
        </p>
        <div className="grid grid-cols-4 gap-5 mt-12">
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
          <button
            aria-label="view all portfolio"
            className="uppercase w-fit text-xs text-center tracking-[2px] border border-green-500 text-green-500 font-medium py-4 px-7 mt-[93px] font-montserrat"
          >
            view all portfolios
          </button>
        </div>
      </section>
    </main>
  );
}
