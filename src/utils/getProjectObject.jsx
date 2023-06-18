import projects from "../dbs/Projects/ProjectsDB";

const getProjectObject = (slug) => {
  return projects.find((project) => project.slug === slug);
};

export default getProjectObject;
