import PropTypes from "prop-types";
import { createContext } from "react";

export const DataContext = createContext(null);

const DataProvider = ({ children }) => {
  const data = {
    featuredProjectSlug: "leitmotiv-academy",
    resumeLink:
      "https://drive.google.com/file/d/1Nxz646ez1pWNyJPqAJqVVmIxqNihpD2V/view?usp=drive_link",
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
