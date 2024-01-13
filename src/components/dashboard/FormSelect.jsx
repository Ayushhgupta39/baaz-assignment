function FormSelect({ label, placeholder, name, required, options }) {
  return (
    <div className="select_container">
      <label htmlFor={name}>
        {label}
        {required && <sup>*</sup>}
      </label>
      <select
        name={name}
        id={name}
        required={required}
        placeholder={placeholder}
      >
        {options &&
          options.map((option, i) => (
            <option value={option} key={i}>
              {option}
            </option>
          ))}
      </select>
    </div>
  );
}

export default FormSelect;
