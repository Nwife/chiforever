import Image from "next/image";
import Link from "next/link";

interface IPortfolioListItem {
  groom: string;
  bride: string;
  weddingDate: string;
  imageUrl: string;
}

const PortfolioListItem = ({
  groom,
  bride,
  weddingDate,
  imageUrl,
}: IPortfolioListItem) => {
  return (
    <Link
      href={`/portfolio/${groom}`}
      className="relative cursor-pointer block"
    >
      <Image
        src={imageUrl}
        width={552}
        height={376}
        className="w-full"
        alt="portfolio image"
      />
      <div className="absolute inset-0 bg-[#1c2923cc] opacity-0 transition-opacity duration-500 ease-in-out hover:opacity-100 flex items-end">
        <div className="text-white text-lg font-semibold pl-8 pb-5">
          <p className="text-red-200 text-xsm uppercase font-gfsNeohellenic mb-3">
            {weddingDate}
          </p>
          <p className="text-white font-homemadeApple text-2xl">
            {groom} & {bride}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default PortfolioListItem;
