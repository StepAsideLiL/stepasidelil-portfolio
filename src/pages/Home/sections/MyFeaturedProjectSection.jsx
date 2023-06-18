import { Link } from "react-router-dom";
import SectionHead from "../../../components/SectionHead";
import getProjectObject from "../../../utils/getProjectObject";
import useSiteData from "../../../hooks/useSiteData";

const MyFeaturedProjectSection = () => {
  const { featuredProjectSlug } = useSiteData();

  const { title, description, image } = getProjectObject(featuredProjectSlug);

  console.log(featuredProjectSlug);

  return (
    <div className="my-10 space-y-10">
      <SectionHead>My Featured Project</SectionHead>

      <div className="card bg-base-100 shadow-xl">
        <Link to={`/projects/${featuredProjectSlug}`}>
          <figure className="px-10">
            <img src={image} alt="Site Image" className="rounded-xl" />
          </figure>
        </Link>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-3xl">{title}</h2>
          <p className="font-semibold">{description}</p>
          <div className="card-actions">
            <Link
              to={`/projects/${featuredProjectSlug}`}
              className="btn-primary btn"
            >
              See Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyFeaturedProjectSection;
