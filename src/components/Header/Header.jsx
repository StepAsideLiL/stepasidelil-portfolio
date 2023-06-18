import { Link } from "react-router-dom";
import NavMenuList from "./parts/NavMenuList";
import useSiteData from "../../hooks/useSiteData";

const Header = () => {
  const { resumeLink } = useSiteData();

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <a className="btn-ghost btn text-xl normal-case">Rifat Khan</a>
      </div>

      <div className="navbar-end">
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <NavMenuList />
          </ul>
        </div>

        <Link to={resumeLink} target="_blank" className="btn-accent btn mx-1">
          My Resume
        </Link>

        <div className="dropdown-end dropdown">
          <label tabIndex={0} className="btn-ghost btn-circle btn lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu rounded-box menu-sm mt-3 w-52 bg-base-100 p-2 shadow"
          >
            <NavMenuList />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
