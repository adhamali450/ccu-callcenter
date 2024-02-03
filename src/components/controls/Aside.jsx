import PropTypes from "prop-types";

const Aside = ({ className, backgroundImage, children }) => {
  return (
    <aside
      className={`${className} relative lg:basis-1/3 rounded-lg md:rounded-xl overflow-hidden p-4 md:p-6 lg:p-8 bg-cover bg-no-repeat bg-center`}
      style={{
        backgroundImage: backgroundImage && `url(${backgroundImage})`,
        color: "white",
      }}
    >
      {children}
    </aside>
  );
};

Aside.propTypes = {
  className: PropTypes.string,
  backgroundImage: PropTypes.string,
  children: PropTypes.node,
};

export default Aside;
