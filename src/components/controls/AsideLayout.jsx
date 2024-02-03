import PropTypes from "prop-types";

const AsideLayout = ({ className, children, style }) => {
  return (
    <div
      className={`${className} flex flex-col lg:flex-row gap-10 `}
      style={style}
    >
      {children}
    </div>
  );
};

AsideLayout.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  style: PropTypes.object,
};

export default AsideLayout;
