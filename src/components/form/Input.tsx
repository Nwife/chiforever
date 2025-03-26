interface IInput {
  label: string;
  type?: string;
}

const Input = ({ label, type = "text" }: IInput) => {
  return (
    <div className="relative">
      <input
        type={type}
        id="floating_filled"
        className="block rounded2 px-2.5 pb-2.5 pt-5 w-full text-sm text-black-900 bg-[#ffffff40] border border-green-100 appearance-none focus:outline-none focus:ring-0 focus:border-green-200 peer font-dmSans"
        placeholder=" "
      />
      <label
        htmlFor="floating_filled"
        className="absolute text-sm text-black-300 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-black-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto font-dmSans"
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
