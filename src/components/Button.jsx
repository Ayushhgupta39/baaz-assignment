function Button({
  children,
  type = "button",
  bgColor = "bg-custom_blue",
  textColor = "text-white",
  className = "",
  ...props
}) {
  return (
    <button
      className={`p-2 px-4 rounded-lg ${bgColor} ${textColor} ${className}`}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
