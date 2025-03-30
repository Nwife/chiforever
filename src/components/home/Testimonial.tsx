import Link from "next/link";
import { Montserrat } from "..";

const Testimonial = () => {
  return (
    <section className="bg-[#0B2520] px-2.5 sm:px-5 2xl:px-0">
      <div className="flex flex-col justify-center items-center py-20">
        <Montserrat text="Testimonial" styles="text-green-300 mb-4 " />
        <blockquote className="text-green-100 text-[23px] sm:text-[26px] md:text-[28px] mmd:text-3xl max-w-[672px] leading-[40px] capitalize text-center font-cormorantInfant">
          &quot;Chi Weddings made our wedding stress-free and magical! Every
          detail was perfect, and we enjoyed every moment.&quot;
        </blockquote>
        <p className="text-xl mt-12 mb-14 text-green-200 font-cormorantInfant">
          &mdash; Sarah & David
        </p>
        <Link href={'/book-us'} className="text-red-200 border border-red-200 py-4 px-5 font-dmSans">
          Book A Consult
        </Link>
      </div>
    </section>
  );
};

export default Testimonial;
