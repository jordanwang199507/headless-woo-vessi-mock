const Button = ({
  label,
  iconURL,
  fullWidth,
  backgroundColor,
  borderColor,
  textColor,
  textSize,
  pSize,
  onClick,
}) => {
  const paddingClass = pSize === "sm" ? "btn-padding-sm" : "btn-padding-md";
  return (
    <button
      onClick={onClick}
      className={`flex justify-center items-center gap-2 border font-montserrat  leading-none  rounded-full ${
        backgroundColor
          ? `${backgroundColor} ${borderColor} ${textColor}`
          : "bg-primary text-white border-primary"
      } ${fullWidth && "w-full"} ${
        textSize ? `text-${textSize}` : `text-lg`
      } ${paddingClass}
      `}
    >
      {label}
      {iconURL && <img src={iconURL} alt="button icon" />}
    </button>
  );
};
export default Button;
