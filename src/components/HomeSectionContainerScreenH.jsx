import PropTypes from "prop-types";

const HomeSectionContainerScreenH = ({ children }) => {
  return (
    <div className="flex h-screen items-center justify-center">
      <div>{children}</div>
    </div>
  );
};

HomeSectionContainerScreenH.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HomeSectionContainerScreenH;
