import {
  DiHtml5,
  DiCss3,
  DiBootstrap,
  DiJsBadge,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiGithubBadge,
} from "react-icons/di";
import {
  SiTailwindcss,
  SiExpress,
  SiJsonwebtokens,
  SiFigma,
  SiFirebase,
  SiNetlify,
  SiVercel,
  SiAxios,
} from "react-icons/si";
import { TbApi, TbBrandNpm } from "react-icons/tb";

const SkillSetsDB = [
  {
    name: "HTML",
    icon: <DiHtml5 className="text-6xl" />,
  },
  {
    name: "CSS",
    icon: <DiCss3 className="text-6xl" />,
  },
  {
    name: "Bootstrap",
    icon: <DiBootstrap className="text-6xl" />,
  },
  {
    name: "JavaScript",
    icon: <DiJsBadge className="text-6xl" />,
  },
  {
    name: "Tailwindcss",
    icon: <SiTailwindcss className="text-6xl" />,
  },
  {
    name: "React",
    icon: <DiReact className="text-6xl" />,
  },
  {
    name: "Axios",
    icon: <SiAxios className="text-6xl" />,
  },
  {
    name: "Nodejs",
    icon: <DiNodejs className="text-6xl" />,
  },
  {
    name: "Express",
    icon: <SiExpress className="text-6xl" />,
  },
  {
    name: "MongoDB",
    icon: <DiMongodb className="text-6xl" />,
  },
  {
    name: "Rest API",
    icon: <TbApi className="text-6xl" />,
  },
  {
    name: "JWT",
    icon: <SiJsonwebtokens className="text-6xl" />,
  },
  {
    name: "git",
    icon: <DiGit className="text-6xl" />,
  },
  {
    name: "GitHub",
    icon: <DiGithubBadge className="text-6xl" />,
  },
  {
    name: "npm",
    icon: <TbBrandNpm className="text-6xl" />,
  },
  {
    name: "Firebase Auth",
    icon: <SiFirebase className="text-6xl" />,
  },
  {
    name: "Netlify",
    icon: <SiNetlify className="text-6xl" />,
  },
  {
    name: "Vercel",
    icon: <SiVercel className="text-6xl" />,
  },
  {
    name: "Figma",
    icon: <SiFigma className="text-6xl" />,
  },
];

export default SkillSetsDB;
