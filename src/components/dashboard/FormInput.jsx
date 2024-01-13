function FormInput({ label, placeholder, type, name, required }) {
  return (
    <div className="input_container">
      <label htmlFor={name}>
        {label}
        {required && <sup>*</sup>}
      </label>
      <input
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
