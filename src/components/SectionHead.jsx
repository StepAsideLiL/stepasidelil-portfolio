import PropTypes from "prop-types";

const SectionHead = ({ children }) => {
  return (
    <>
      <h1 className="text-4xl font-semibold">{children}</h1>
    </>
  );
};

SectionHead.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SectionHead;
