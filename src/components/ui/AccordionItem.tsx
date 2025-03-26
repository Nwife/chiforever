import { AppSvg } from "@/elements";

const AccordionItem = ({
  index,
  openIndex,
  toggleAccordion,
  item,
}: {
  index: number;
  item: { title: string; content: string };
  openIndex: number | null;
  toggleAccordion: (idx: number) => void;
}) => {
  return (
    <div className="w-full space-y-4 text-darkgreen-500 font-extralight font-dmSans">
      <div key={index} className="border-b border-[#DFD8CF]">
        <button
          onClick={() => toggleAccordion(index)}
          className="w-full flex justify-between items-center py-6 text-left"
        >
          <span>{item.title}</span>
          <span
            className={`transform transition-transform ${
              openIndex === index ? "rotate-180" : "rotate-0"
            }`}
          >
            {AppSvg.ic_caret}
          </span>
        </button>
        <div
          className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
            openIndex === index ? "max-h-40" : "max-h-0"
          }`}
        >
          <div className="pb-4">{item.content}</div>
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;
