import PropTypes from "prop-types";

const AsideLayout = ({ className, id, children, style }) => {
  return (
    <div
      className={`${className} flex flex-col lg:flex-row gap-10 `}
      id={id}
      style={style}
    >
      {children}
    </div>
  );
};

AsideLayout.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  children: PropTypes.node,
  style: PropTypes.object,
};

export default AsideLayout;
