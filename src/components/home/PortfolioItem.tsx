import Image from "next/image";

interface IPortfolioItem {
  name: string;
  imageUrl: string;
}

const PortfolioItem = ({ name, imageUrl }: IPortfolioItem) => {
  return (
    <div className="flex flex-col">
      <div className="group overflow-hidden transition-transform duration-700 ease-out hover:scale-95 hover:shadow-[0px_20px_30px_-10px_rgba(60,79,68,0.7)]">
        <Image
          src={imageUrl}
          width={285}
          height={380}
          alt="portfolio"
          className="w-full h-auto transition-transform duration-700 ease-out group-hover:scale-[1.15] cursor-pointer"
        />
      </div>
      <div>
        <p className="text-center text-green-600 text-[26px] mt-8 font-marcellus">
          {name}
        </p>
        <div className="flex justify-center">
          <button className="mt-3 text-xs tracking-[2px] uppercase border-b border-green-500 pb-1 text-green-400 font-medium font-montserrat">
            learn more
          </button>
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;
