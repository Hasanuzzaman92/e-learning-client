import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { FaUser } from "react-icons/fa";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const Header = () => {
  const [theme, setTheme] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };


  // const handleTheme = () =>{
  //   setTheme( theme ? 'Dark Theme': 'Light Theme')
  // }

  

  return (
    <div className="bg-slate-100 px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="relative flex items-center justify-between">
        <Link
          to="/"
          aria-label="e-learning"
          title="e-learning"
          className="inline-flex items-center"
        >
          <img className="w-10" src={logo} alt="" />
          <span className="ml-2 text-xl font-bold tracking-wide text-rose-400 uppercase">
            e-learning
          </span>
        </Link>
        <ul className="flex items-center hidden space-x-8 lg:flex">
          <li>
            <NavLink
              to="/home"
              className={({ isActive }) =>
                isActive
                  ? "lg:mr-6 font-bold tracking-wide text-rose-500 transition-colors duration-200 hover:text-deep-purple-accent-400"
                  : "lg:mr-6 font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
              }
              aria-label="Home"
              title="Home"
            >
              Home
            </NavLink>
            <NavLink
              to="/courses"
              className={({ isActive }) =>
                isActive
                  ? " font-bold tracking-wide text-rose-500 transition-colors duration-200 hover:text-deep-purple-accent-400"
                  : " font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
              }
              aria-label="Courses"
              title="Courses"
            >
              Courses
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/faq"
              className={({ isActive }) =>
                isActive
                  ? " font-bold tracking-wide text-rose-500 transition-colors duration-200 hover:text-deep-purple-accent-400"
                  : " font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
              }
              aria-label="FAQ"
              title="FAQ"
            >
              FAQ
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                isActive
                  ? " font-bold tracking-wide text-rose-500 transition-colors duration-200 hover:text-deep-purple-accent-400"
                  : " font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
              }
              aria-label="Blog"
              title="Blog"
            >
              Blog
            </NavLink>
          </li>
        </ul>
        <ul className="flex items-center hidden space-x-8 lg:flex">
          <li>
            <Link
              href="/"
              onClick={() => setTheme(!theme)}
              className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
              {theme ? 'Dark Theme' : 'Light Theme'}
            </Link>
          </li>
          <li>
            {user?.uid ? (
              <Link
                onClick={handleLogOut}
                to=""
                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
              >
                LogOut
              </Link>
            ) : (
              <>
                <Link
                  to="/login"
                  className="font-medium mr-5 tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  Register
                </Link>
              </>
            )}
          </li>
          <li>
            {user?.photoURL ? (
              <img
                className="h-[30px] rounded-full cursor-pointer"
                src={user?.photoURL}
                alt=""
              />
            ) : (
              <Link
                href="/"
                className="inline-flex items-center justify-center w-5 tracking-wide transition duration-200 rounded-full shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
              >
                <FaUser></FaUser>
              </Link>
            )}
          </li>
        </ul>
        <div className="lg:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              />
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              />
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              />
            </svg>
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full">
              <div className="p-5 bg-white border rounded shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <Link
                      to="/"
                      aria-label="e-learning"
                      title="e-learning"
                      className="inline-flex items-center"
                    >
                      <img className="w-10" src={logo} alt="" />
                      <span className="ml-2 text-xl font-bold tracking-wide text-rose-400 uppercase">
                        e-learning
                      </span>
                    </Link>
                  </div>
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <nav>
                  <ul className="space-y-4">
                    <li>
                      <NavLink
                        to="/home"
                        aria-label="Home"
                        title="Home"
                        className={({ isActive }) =>
                          isActive
                            ? "font-medium tracking-wide text-rose-500 transition-colors duration-200 hover:text-deep-purple-accent-400"
                            : "font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        }
                      >
                        Home
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/courses"
                        aria-label="Courses"
                        title="Courses"
                        className={({ isActive }) =>
                          isActive
                            ? "font-medium tracking-wide text-rose-500 transition-colors duration-200 hover:text-deep-purple-accent-400"
                            : "font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        }
                      >
                        Courses
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/faq"
                        aria-label="FAQ"
                        title="FAQ"
                        className={({ isActive }) =>
                          isActive
                            ? "font-medium tracking-wide text-rose-500 transition-colors duration-200 hover:text-deep-purple-accent-400"
                            : "font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        }
                      >
                        FAQ
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/blog"
                        aria-label="Blog"
                        title="Blog"
                        className={({ isActive }) =>
                          isActive
                            ? "font-medium tracking-wide text-rose-500 transition-colors duration-200 hover:text-deep-purple-accent-400"
                            : "font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        }
                      >
                        Blog
                      </NavLink>
                    </li>
                    <li>
                      <Link
                        href="/"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        Light theme
                      </Link>
                    </li>
                    <li>
                      {user?.uid ? (
                        <Link
                          onClick={handleLogOut}
                          to=""
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          LogOut
                        </Link>
                      ) : (
                        <>
                          <Link
                            to="/login"
                            className="font-medium mr-5 tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                          >
                            Login
                          </Link>
                          <Link
                            to="/register"
                            className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                          >
                            Register
                          </Link>
                        </>
                      )}
                    </li>
                    <li>
                      {user?.photoURL ? (
                        <img
                          className="h-[30px] rounded-full"
                          src={user?.photoURL}
                          alt=""
                        />
                      ) : (
                        <Link
                          href="/"
                          className="inline-flex items-center justify-center w-5 tracking-wide transition duration-200 rounded-full shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                        >
                          <FaUser></FaUser>
                        </Link>
                      )}
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
