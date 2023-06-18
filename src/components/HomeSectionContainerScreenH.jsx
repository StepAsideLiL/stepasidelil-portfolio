import PropTypes from "prop-types";

const HomeSectionContainerScreenH = ({ children }) => {
  return (
    <div
      className="flex items-center justify-center"
      style={{ height: "calc(100vh - 64px)" }}
    >
      <div>{children}</div>
    </div>
  );
};

HomeSectionContainerScreenH.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HomeSectionContainerScreenH;
