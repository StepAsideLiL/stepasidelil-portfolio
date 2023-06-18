import { Link, useParams } from "react-router-dom";
import getProjectObject from "../../utils/getProjectObject";
import { BsBoxArrowUpRight } from "react-icons/bs";

const SingleProject = () => {
  const params = useParams();

  const project = getProjectObject(params.slug);

  const { title, liveLink, gitLink, image } = project;

  console.log(project);

  return (
    <div className="my-10 space-y-8">
      <div className="space-y-8 text-center">
        <h1 className="text-6xl font-semibold text-primary">{title}</h1>

        <div className="flex w-full flex-col justify-center lg:flex-row">
          <Link
            to={liveLink}
            target="_blank"
            className="link-primary link flex items-center gap-2"
          >
            <span className="text-2xl font-semibold">Live Link</span>{" "}
            <BsBoxArrowUpRight />
          </Link>

          <div className="divider lg:divider-horizontal"></div>

          <Link
            to={gitLink}
            target="_blank"
            className="link-primary link flex items-center gap-2"
          >
            <span className="text-2xl font-semibold">Repo Link</span>{" "}
            <BsBoxArrowUpRight />
          </Link>
        </div>
      </div>

      <div>
        <Link to={liveLink} target="_blank">
          <img src={image} alt="Site Image" />
        </Link>
      </div>

      <div></div>
    </div>
  );
};

export default SingleProject;
