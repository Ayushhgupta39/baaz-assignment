function FormInput({ label, placeholder, type, name, required }) {
  return (
    <div className="m-2">
      <label className="font-medium text-xs" htmlFor={name}>
        {label}
        {required && <sup className="text-red-500 text-sm y-5">*</sup>}
      </label>
      <input
        className="p-2 placeholder:font-normal bg-[#ECF1F4] shadow-md w-full rounded-md"
        placeholder={placeholder}
        type={type}
        name={name}
        id={name}
        required={required}
      />
    </div>
  );
}

export default FormInput;
