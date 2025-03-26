const Montserrrat = ({ text, styles }: { styles?: string; text: string }) => {
  return (
    <p
      className={`text-xsm font-medium font-montserrat tracking-[2px] uppercase ${styles}`}
    >
      {text}
    </p>
  );
};

export default Montserrrat;
