import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import axios from "axios";
import { toast } from "react-toastify";
import { Context } from "../main";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/v1/user/patient/logout",
        {
          withCredentials: true,
        }
      );
      toast.success(response.data.message);
      setIsAuthenticated(false);
      navigate("/login");
    } catch (error) {
      const message =
        error.response && error.response.data && error.response.data.message
          ? error.response.data.message
          : "Logout failed. Please try again.";
      toast.error(message);
    }
  };

  const goToLogin = () => {
    navigate("/login");
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Appointment", path: "/appointment" },
    { name: "Services", path: "/services" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
  ];

  const handleMenuToggle = () => {
    setShow((prevShow) => !prevShow);
  };

  return (
    <>
      <nav className="bg-transparent border-gray-200 dark:bg-gray-900 static lg:ml-16 lg:mr-16">
        <div className="flex flex-row items-center justify-between p-4">
          <div className="flex items-center">
            <Link to="/" onClick={() => setShow(false)}>
              <img src="/logo.png" alt="logo" className="h-12" />
            </Link>
          </div>

          <div className="lg:hidden">
            <button
              type="button"
              aria-label="Toggle navigation menu"
              className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-600 p-2 rounded-lg"
              onClick={handleMenuToggle}
            >
              <GiHamburgerMenu size={24} />
            </button>
          </div>

          <div className="hidden lg:flex lg:items-center lg:w-auto lg:gap-12">
            <ul className="flex flex-col lg:flex-row lg:space-x-12 font-semibold">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="block py-2 px-3 md:p-0 text-gray-900 dark:text-white"
                    onClick={() => setShow(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-4 mt-4 lg:mt-0">
              {isAuthenticated ? (
                <button
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              ) : (
                <button
                  className="text-white bg-black dark:bg-gray-800 text-xl font-semibold rounded-xl px-4 py-2 cursor-pointer items-center"
                  onClick={goToLogin}
                >
                  Login
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Hamburger menu content */}
      {show && (
        <div className="relative top-0 left-0 w-full bg-[#e5e5e5] dark:bg-gray-800 lg:hidden z-40 transition-all duration-300 ease-in-out">
          <ul className="flex flex-col font-semibold p-4">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className="block py-2 px-3 text-gray-900 dark:text-white"
                  onClick={() => setShow(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li>
              {isAuthenticated ? (
                <button
                  className="w-full text-left py-2 px-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              ) : (
                <button
                  className="w-full text-left py-2 px-3 text-white bg-black dark:bg-gray-800 text-xl font-semibold rounded-xl cursor-pointer items-center"
                  onClick={goToLogin}
                >
                  Login
                </button>
              )}
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
