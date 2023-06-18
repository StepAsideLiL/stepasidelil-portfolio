import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import ProjectHeader from "../components/ProjectHeader/ProjectHeader";

const ProjectLayout = () => {
  return (
    <div>
      <ProjectHeader />

      <div className="container mx-auto px-5 md:px-0">
        <div className="mx-auto max-w-5xl">
          <Outlet />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProjectLayout;
