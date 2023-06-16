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
} from "react-icons/si";
import { TbApi, TbBrandNpm } from "react-icons/tb";

const skillSets = [
  {
    id: 1,
    name: "HTML",
    icon: <DiHtml5 className="text-6xl" />,
  },
  {
    id: 2,
    name: "CSS",
    icon: <DiCss3 className="text-6xl" />,
  },
  {
    id: 3,
    name: "Bootstrap",
    icon: <DiBootstrap className="text-6xl" />,
  },
  {
    id: 4,
    name: "JavaScript",
    icon: <DiJsBadge className="text-6xl" />,
  },
  {
    id: 5,
    name: "Tailwindcss",
    icon: <SiTailwindcss className="text-6xl" />,
  },
  {
    id: 6,
    name: "React",
    icon: <DiReact className="text-6xl" />,
  },
  {
    id: 7,
    name: "Nodejs",
    icon: <DiNodejs className="text-6xl" />,
  },
  {
    id: 8,
    name: "Express",
    icon: <SiExpress className="text-6xl" />,
  },
  {
    id: 9,
    name: "MongoDB",
    icon: <DiMongodb className="text-6xl" />,
  },
  {
    id: 10,
    name: "Rest API",
    icon: <TbApi className="text-6xl" />,
  },
  {
    id: 11,
    name: "JWT",
    icon: <SiJsonwebtokens className="text-6xl" />,
  },
  {
    id: 12,
    name: "git",
    icon: <DiGit className="text-6xl" />,
  },
  {
    id: 13,
    name: "GitHub",
    icon: <DiGithubBadge className="text-6xl" />,
  },
  {
    id: 14,
    name: "npm",
    icon: <TbBrandNpm className="text-6xl" />,
  },
  {
    id: 16,
    name: "Firebase Auth",
    icon: <SiFirebase className="text-6xl" />,
  },
  {
    id: 17,
    name: "Netlify",
    icon: <SiNetlify className="text-6xl" />,
  },
  {
    id: 18,
    name: "Vercel",
    icon: <SiVercel className="text-6xl" />,
  },
  {
    id: 19,
    name: "Figma",
    icon: <SiFigma className="text-6xl" />,
  },
];

export default skillSets;
