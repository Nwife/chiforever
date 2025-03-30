import { FormInput, Montserrat } from "@/components";
import Image from "next/image";
import Link from "next/link";

const ContactUs = () => {
  return (
    <main>
      <section className="max-w-[1200px] mx-auto mt-[72px] pb-[140px] px-2.5 sm:px-5 2xl:px-0">
        <div>
          <div className="flex justify-center">
            <Image src={"/svgs/leaf.svg"} width={62} height={19} alt="leaf" />
          </div>
          <Montserrat
            text="contact"
            styles="text-brown-100 text-center mt-3.5 mb-6"
          />
          <h1 className="text-[42px] sm:text-5xl md:text-[54px] mmd:text-[62px] text-green-600 leading-[45px] sm:leading-[68px] max-w-[540px] text-center mx-auto">
            We look forward to connecting with you!
          </h1>
          <p className="text-green-400 text-lg text-center max-w-[734px] mt-6 mx-auto font-marcellus">
            Get in Touch with Us for Your Dream Event Planning! Whether
            it&apos;s a wedding, corporate gathering, or any special occasion,
            we&apos;re here to help you create unforgettable memories.
          </p>
          <div className="flex justify-center mt-10">
            <Image
              src="/svgs/vertical-divider.svg"
              width={1}
              height={84}
              alt="border"
            />
          </div>
        </div>
        <div className="bg-white px-8 sm:px-14 md:px-20 lg:px-[120px] pt-14 sm:pt-[86px] pb-[72px] mt-9 relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-[34px]">
            <FormInput label="First Name" />
            <FormInput label="Last Name" />
            <FormInput label="Email" />
            <FormInput label="Phone " />
            <FormInput label="Event Type" />
            <FormInput
              label="Location"
              placeholder="Location (State or Country)"
            />
          </div>
          <div className="mt-10">
            <label htmlFor="message">
              <span className="block uppercase text-black-500 text-sm font-medium mb-2 tracking-[2px] font-montserrat">
                message
              </span>
              <textarea
                name=""
                id="message"
                placeholder="Event Details & Other Questions"
                className="w-full pb-3.5 pt-1 text-xl text-black-300 placeholder-gray-300 bg-transparent tracking-normal border-b border-gray-200 focus:outline-none focus:border-gray-400 font-marcellus transition-colors resize-none"
                rows={3}
              ></textarea>
            </label>
          </div>
          <div className="flex justify-center mt-[72px]">
            <button
              aria-label="submit"
              className="uppercase w-[480px] text-xsm tracking-[2px] border border-none text-white bg-green-500 hover:bg-green-400 font-medium py-5 px-7 transition ease-in-out font-montserrat"
            >
              submit
            </button>
          </div>
          <div className="absolute transform rotate-8 -top-16 -left-32 -z-10">
            <Image
              src="/images/home/hero/flower.png"
              width={300}
              height={257}
              alt="flower"
            />
          </div>
          <div className="absolute transform -bottom-[120px] right-0 xl:-right-24 -z-10">
            <Image
              src="/svgs/bigfern.svg"
              width={300}
              height={257}
              alt="flower"
            />
          </div>
        </div>
      </section>
      <section className="max-w-[540px] mx-auto pb-[140px] px-2.5 sm:px-5 2xl:px-0">
        <div className="flex flex-col sm:flex-row items-center mt-10 sm:pt-0 sm:justify-between">
          <div className="flex flex-col items-center">
            <Image src={"/svgs/fern.svg"} width={69} height={55} alt="leaf" />
            <p className="text-green-600 text-2xl sm:text-[26px] md:text-[28px] mmd:text-3xl mt-5 font-marcellus">
              Email
            </p>
            <p className="text-green-600 mt-6 text-base lg:text-lg font-marcellus">
              Email Us At:
            </p>
            <Link
              href="mailto:info@yoursite.com"
              className="inline-block border-b border-brown-500 text-green-600 mt-2.5 font-marcellus"
            >
              info@yoursite.com
            </Link>
          </div>
          <div className="transform rotate-90 sm:rotate-0">
            <Image
              src="/svgs/long-divider.svg"
              width={1}
              height={197}
              alt="divider"
            />
          </div>
          <div className="flex flex-col items-center">
            <Image
              src={"/svgs/lilypad.svg"}
              width={69}
              height={55}
              alt="leaf"
            />
            <p className="text-green-600 text-2xl sm:text-[26px] md:text-[28px] mmd:text-3xl mt-5 font-marcellus">
              Phone
            </p>
            <p className="text-green-600 mt-6 text-base lg:text-lg font-marcellus">
              Call Us At:
            </p>
            <Link
              href="mailto:info@yoursite.com"
              className="inline-block border-b border-brown-500 text-green-600 mt-2.5 font-marcellus"
            >
              800-123-4567
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactUs;
