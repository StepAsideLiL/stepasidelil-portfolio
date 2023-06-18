import { Link } from "react-router-dom";
import SectionHead from "../../../components/SectionHead";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import useSiteData from "../../../hooks/useSiteData";

const MySocialLinks = () => {
  const { linkedin, github, twitter } = useSiteData();

  return (
    <div className="my-40 space-y-10">
      <div className="space-y-3">
        <SectionHead>My Social Links</SectionHead>

        <p>Contact with me through these links</p>
      </div>

      <div className="space-y-3">
        <p>
          Email:{" "}
          <span className="font-semibold text-accent">rifat6633@gmail.com</span>
        </p>

        <div className="flex items-center gap-2">
          <Link
            to={linkedin}
            target="_blank"
            className="inline-block rounded-full bg-primary-content p-5"
          >
            <BsLinkedin className="text-4xl" />
          </Link>

          <Link
            to={github}
            target="_blank"
            className="inline-block rounded-full bg-primary-content p-5"
          >
            <BsGithub className="text-4xl" />
          </Link>

          <Link
            to={twitter}
            target="_blank"
            className="inline-block rounded-full bg-primary-content p-5"
          >
            <BsTwitter className="text-4xl" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MySocialLinks;
