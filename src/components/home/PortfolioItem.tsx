import Image from "next/image";

interface IPortfolioItem {
  name: string;
  imageUrl: string;
}

const PortfolioItem = ({ name, imageUrl }: IPortfolioItem) => {
  return (
    <div>
      <Image
        src={imageUrl}
        width={285}
        height={380}
        alt="portfolio"
        className="w-full"
      />
      <p className="text-center text-green-600 text-[26px] mt-8 font-marcellus">{name}</p>
      <div className="flex justify-center ">
        <button className="mt-3 text-xs tracking-[2px] uppercase border-b border-green-500 pb-1 text-green-400 font-medium font-montserrat">
          learn more
        </button>
      </div>
    </div>
  );
};

export default PortfolioItem;
