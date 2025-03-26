import { Montserrat, PackageDetailItem } from "..";

interface IPackageItem {
  idx: number;
  price: string;
  packageName: string;
  packageDetail: string[];
}

const PackageItem = ({
  idx,
  price,
  packageName,
  packageDetail,
}: IPackageItem) => {
  return (
    <div className="bg-white p-[15px]">
      <div className="border border-gray-200 pl-[52px] pt-20 pb-[100px] pr-[100px] flex items-start justify-between">
        <div>
          <Montserrat text={`package ${idx + 1}`} styles="text-green-300" />
          <p className="text-black-900 text-[40px] font-medium">$ {price}</p>
          <p className="text-[26px] text-black-600 max-w-[269px]">
            {packageName}
          </p>
        </div>
        <div className="flex flex-col gap-2">
          {packageDetail.map((item, idx) => (
            <PackageDetailItem key={idx} detail={item} />
          ))}
        </div>
        <div>
          <button
            aria-label="book this plan"
            className="uppercase w-fit text-xsm tracking-[1.3px] border border-none text-white bg-green-500 font-medium py-5 px-7 font-inter"
          >
            book this plan
          </button>
          <p className="font-inter leading-7 text-black-400 max-w-[242px] mt-6">
            For pricing, book a consultation or send a mail.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PackageItem;
