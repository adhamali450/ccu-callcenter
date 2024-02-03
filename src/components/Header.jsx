import logo from "@assets/logo.svg";
import Button from "@controls/Button.jsx";
import PropTypes from "prop-types";

const Header = ({ className }) => {
  return (
    <header
      className={`${className} container relative flex flex-col sm:flex-row gap-5 sm:gap-0 justify-between items-center py-4`}
    >
      {/* Logo */}
      <div className="flex items-center gap-1 md:gap-2">
        <img
          className="w-8 md:w-10"
          src={logo}
          alt="Called callers united logo"
        />
        <h1 className="fl-h4 font-semibold">Cold Callers United</h1>
      </div>

      {/* Desktop nav */}
      <nav className="">
        <ul className="flex items-center gap-6 sm:gap-4 md:gap-8">
          {["About", "Tools", "Packages"].map((item, index) => (
            <li key={index} className="font-medium fl-b hover:underline">
              <a href={`#${item.toLowerCase()}`}>{item}</a>
            </li>
          ))}

          <li className="hidden sm:block">
            <Button
              base="link"
              variant="secondary"
              link_misc={{ href: "#contact" }}
            >
              Let&apos;s talk
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
