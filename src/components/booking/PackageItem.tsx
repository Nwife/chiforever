"use client";
import { useRouter } from "next/navigation";
import { Montserrat, PackageDetailItem } from "..";
import { motion } from "framer-motion";

interface IPackageItem {
  idx: number;
  price: string;
  packageName: string;
  packageDetail: string[];
}

const PackageItem = ({ idx, packageName, packageDetail }: IPackageItem) => {
  const { push } = useRouter();
  return (
    <motion.div
      className="bg-white p-[15px]"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="border border-gray-200 px-[52px] pt-20 pb-[100px] flex flex-col gap-10 mmd:gap-0 mmd:flex-row items-center mmd:items-start justify-between">
        <div>
          <Montserrat text={`package ${idx + 1}`} styles="text-green-300" />
          <p className="text-[26px] text-black-600 mb-2.5 max-w-[269px]">
            {packageName}
          </p>
        </div>
        <motion.div
          className="flex flex-col gap-2"
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.2 } },
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {packageDetail.map((item, idx) => (
            <PackageDetailItem key={idx} detail={item} />
          ))}
        </motion.div>
        <div>
          <button
            aria-label="book this plan"
            className="uppercase w-fit text-xsm tracking-[1.3px] border border-none text-white bg-green-500 font-medium py-5 px-7 font-inter"
            onClick={() => push("book-us")}
          >
            book this plan
          </button>
          <p className="font-inter leading-7 text-black-400 max-w-[242px] mt-6">
            For pricing, book a consultation or send a mail.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default PackageItem;
