import { Link } from "react-router-dom";

const ProjectHeader = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start"></div>

      <div className="navbar-center">
        <Link to="/" className="btn-ghost btn text-xl normal-case">
          Rifat Khan
        </Link>
      </div>

      <div className="navbar-end"></div>
    </div>
  );
};

export default ProjectHeader;
