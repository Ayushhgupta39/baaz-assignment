function FormSelect({ label, placeholder, name, required, options }) {
  return (
    <div className="m-2">
      <label className="font-medium text-xs" htmlFor={name}>
        {label}
        {required && <sup className="text-red-500 text-sm y-5">*</sup>}
      </label>
      <select
        className="p-2 placeholder:font-normal bg-[#ECF1F4] shadow-md w-full rounded-md"
        name={name}
        id={name}
        required={required}
        placeholder={placeholder}
      >
        {options && options.map((option, i) => (
          <option className="w-10 text-[#808080]" value={option} key={i}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default FormSelect;
