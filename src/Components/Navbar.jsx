import { Link, NavLink } from "react-router";
import logo from "../assets/logo.png";
import { SiGithub } from "react-icons/si";

const Navbar = () => {
  return (
    <div className="bg-base-100 shadow-sm">
      <div className="navbar w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "border-b-2 bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text border-purple-500 "
                      : ""
                  }
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "border-b-2 bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text border-purple-500 "
                      : ""
                  }
                  to="/apps"
                >
                  Apps
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "border-b-2 bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text border-purple-500 "
                      : ""
                  }
                  to="/installation"
                >
                  Installation
                </NavLink>
              </li>
            </ul>
          </div>
          <Link to="/">
            <div className="flex justify-between items-center gap-1">
              <img className="w-10 h-10" src={logo} alt="Logo" />
              <h1 className=" font-bold bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text inline-block">
                HERO.IO
              </h1>
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-5 font-semibold text-xl">
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "border-b-2 bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text border-purple-500 "
                    : ""
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "border-b-2 bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text border-purple-500 "
                    : ""
                }
                to="/apps"
              >
                Apps
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "border-b-2 bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text border-purple-500 "
                    : ""
                }
                to="/installation"
              >
                Installation
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link to="https://github.com/Sahidulislam05" target="_blank">
            <p className="btn btn-primary font-semibold">
              <SiGithub className="w-5 h-5" />
              Contribute
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
