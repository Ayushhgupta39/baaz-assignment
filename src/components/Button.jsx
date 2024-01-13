function Button({
  children,
  type = "button",
  ...props
}) {
  return (
    <button className="buttonComponent" type={type} {...props}>
      {children}
    </button>
  );
}

export default Button;
