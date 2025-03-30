interface IFormInput {
  label: string;
  placeholder?: string;
}

const FormInput = ({ label, placeholder }: IFormInput) => {
  return (
    <label className="block uppercase text-black-500 text-sm font-medium mb-2 tracking-[2px] font-montserrat">
      {label}
      <input
        type="email"
        placeholder={placeholder ?? label}
        className="w-full pb-3.5 pt-2.5 text-xl text-black-300 placeholder-gray-300 bg-transparent tracking-normal border-b border-gray-200 focus:outline-none focus:border-gray-400 font-marcellus transition-colors placeholder:!text-base sm:placeholder:!text-xl"
      />
    </label>
  );
};

export default FormInput;
