// react
import { useState } from "react";
// icons
import { FaBars, FaRegTimesCircle } from "react-icons/fa";

const Navbar = () => {
  // State for show or hidden navbar
  const [showNavbar, setShowNavbar] = useState(true);

  //handleNavbarShowing
  const handleNavbarShowing = () => {
    setShowNavbar(!showNavbar);
  };

  // Handle showNavbar when user resizes screen
  const handleResize = () => {
    if (document.body.clientWidth > 1024) {
      setShowNavbar(true);
    }
  };
  window.addEventListener("resize", handleResize);

  return (
    <div
      className={`w-full h-16 flex items-center justify-between relative lg:px-10 xl:px-32`}
    >
      {/* Left section */}

      <div className="w-full h-14 px-2 py-2 flex items-center justify-between text-3xl sm:px-10 lg:w-auto lg:px-0">
        {/* Logo */}
        <h1 className="cursor-pointer lg:w-full lg:h-full overflow-hidden">
          Sagrada Familia
        </h1>
        {/* Menu icons */}
        {showNavbar ? (
          <FaRegTimesCircle
            onClick={handleNavbarShowing}
            className="text-red-400 hover:text-red-600 cursor-pointer lg:hidden"
          />
        ) : (
          <FaBars
            onClick={handleNavbarShowing}
            className="text-red-400 hover:text-red-600 cursor-pointer lg:hidden"
          />
        )}
      </div>

      {/* Right section*/}

      <div
        /* Links */
        className={`${
          !showNavbar && "hidden"
        } w-full bg-rose-500 flex flex-col items-center justify-start overflow-hidden showNavbar absolute left-0 top-16 lg:w-[70%] lg:h-14 lg:flex-row lg:justify-end lg:bg-transparent lg:relative lg:top-0`}
      >
        {["tiquets", "Oppening hours", "About", "faq"].map((item, index) => (
          <div
            key={index}
            className="w-full h-14 p-3 text-white text-lg uppercase cursor-pointer hover:bg-rose-600 lg:w-auto lg:mr-5 lg:hover:bg-transparent lg:text-black lg:after:block lg:after:border-b-2 lg:after:border-red-500 lg:after:content-[''] lg:after:scale-x-0 lg:after:origin-left lg:after:hover:scale-x-100 lg:after:duration-500 lg:after:ease-in-out "
          >
            <h1 className="w-full h-full text-center">{item}</h1>
          </div>
        ))}
        {/* Log in */}
        <button className="w-full h-14 p-3 uppercase text-white text-center hover:bg-rose-600 lg:w-auto lg:px-16 lg:py-2 lg:rounded lg:bg-red-600 lg:text-white lg:capitalize lg:hover:bg-red-700 lg:active:scale-95 ">
          Log In
        </button>
      </div>
    </div>
  );
};

export default Navbar;
