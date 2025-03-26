import { AppSvg } from "@/elements";

const PackageDetailItem = ({ detail }: { detail: string }) => {
  return (
    <div className="flex items-center gap-x-2.5">
      {AppSvg.ic_green_check}
      <span className="text-green-600 font-inter">{detail}</span>
    </div>
  );
};

export default PackageDetailItem;
