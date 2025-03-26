import { Montserrat } from "..";

const PortfolioHeader = ({
  text,
  subtext,
}: {
  text: string;
  subtext: string;
}) => {
  return (
    <>
      <Montserrat
        text="Portfolio"
        styles="text-brown-100 text-center mt-3 mb-4"
      />
      <h1 className="text-[62px] text-center text-green-600 font-erotique">
        {text}
      </h1>
      <p className="max-w-[713px] text-green-900 mx-auto text-center font-marcellus">
        {subtext}
      </p>
    </>
  );
};

export default PortfolioHeader;
