import PropTypes from "prop-types";
import { createContext } from "react";

export const DataContext = createContext(null);

const DataProvider = ({ children }) => {
  const data = {
    featuredProjectSlug: "leitmotiv-academy",
    linkedin: "https://www.linkedin.com/in/mdabdullahrifatkhan/",
    github: "https://github.com/stepAsideLiL/",
    twitter: "https://twitter.com/StepAsideLiL",
  };

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

DataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DataProvider;
