import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  const { title, slug, description, image } = project;

  return (
    <div className="card shadow-xl first-letter:bg-base-100">
      <figure>
        <img src={image} alt={`Image for ${title}`} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <Link to={`/projects/${slug}`} className="btn-primary btn">
            See Details
          </Link>
        </div>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.object.isRequired,
};

export default ProjectCard;
