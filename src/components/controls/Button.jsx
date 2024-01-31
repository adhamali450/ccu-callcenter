import PropTypes from "prop-types";
const Button = ({
  className = "",
  base = "button",
  type = "button",
  variant = "primary",
  children,
  onClick,
  link_misc = {},
}) => {
  const primaryStyle =
    "bg-transparent border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white transition-colors";
  const secondaryStyle =
    "bg-transparent border-white text-white hover:bg-white hover:text-brand-orange transition-colors";
  return base == "button" ? (
    <button
      className={`${className} uppercase border-[3px] px-6 py-2 font-bold ${
        variant === "primary" ? primaryStyle : secondaryStyle
      }`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  ) : (
    <a
      className={`${className} uppercase border-[3px] px-6 py-2 font-bold ${
        variant === "primary" ? primaryStyle : secondaryStyle
      }`}
      {...link_misc}
    >
      {children}
    </a>
  );
};

Button.propTypes = {
  base: PropTypes.oneOf(["button", "link"]),
  className: PropTypes.string,
  type: PropTypes.oneOf(["button", "submit"]),
  variant: PropTypes.oneOf(["primary", "secondary"]),
  children: PropTypes.node,
  onClick: PropTypes.func,
  link_misc: PropTypes.object,
};

export default Button;
