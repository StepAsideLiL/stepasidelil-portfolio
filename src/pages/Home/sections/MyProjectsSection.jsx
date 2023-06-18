import SectionHead from "../../../components/SectionHead";
import ProjectsDB from "../../../dbs/Projects/ProjectsDB";
import { Link } from "react-router-dom";
import ProjectCard from "../../../components/ProjectCard";

const MyProjectsSection = () => {
  return (
    <div className="my-40 space-y-10">
      <div className="flex items-center justify-between">
        <SectionHead>My Projects</SectionHead>

        <div className="">
          <Link to="/projects" className="btn-accent btn">
            All Projects
          </Link>
        </div>
      </div>

      <div className="my-5 grid grid-cols-1 gap-5 md:grid-cols-3">
        {ProjectsDB.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default MyProjectsSection;
