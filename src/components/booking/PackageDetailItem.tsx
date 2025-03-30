import { AppSvg } from "@/elements";

const PackageDetailItem = ({ detail }: { detail: string }) => {
  return (
    <div className="flex items-center gap-x-2.5">
      <div>{AppSvg.ic_green_check}</div>
      <span className="text-green-600 font-inter">{detail}</span>
    </div>
  );
};

export default PackageDetailItem;
