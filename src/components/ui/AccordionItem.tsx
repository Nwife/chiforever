import { AppSvg } from "@/elements";
import { motion } from "framer-motion";

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
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="border-b border-[#DFD8CF]"
      >
        <button
          onClick={() => toggleAccordion(index)}
          className="w-full flex justify-between items-center py-6 text-left"
        >
          <span>{item.title}</span>
          <motion.span
            animate={{ rotate: openIndex === index ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className={`transform transition-transform ${
              openIndex === index ? "rotate-180" : "rotate-0"
            }`}
          >
            {AppSvg.ic_caret}
          </motion.span>
        </button>
        <div
          className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
            openIndex === index ? "max-h-40" : "max-h-0"
          }`}
        >
          <div className="pb-4">{item.content}</div>
        </div>
      </motion.div>
    </div>
  );
};

export default AccordionItem;
