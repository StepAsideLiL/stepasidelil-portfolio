import ProjectCard from "../../components/ProjectCard";
import SectionHead from "../../components/SectionHead";
import ProjectsDB from "../../dbs/Projects/ProjectsDB";

const AllMyProjects = () => {
  return (
    <div className="my-10 space-y-10">
      <SectionHead>My Projects</SectionHead>

      <div className="my-5 grid grid-cols-1 gap-5 md:grid-cols-3">
        {ProjectsDB.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default AllMyProjects;
