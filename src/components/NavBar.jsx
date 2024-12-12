import { useState } from "react";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="bg-white shadow-md fixed w-full z-10 ">
      {/* Top Bar */}
      <div className="flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <div className="text-2xl text-slate-600 tracking-widest font-sans font-extralight">
          SC
        </div>

        {/* Hamburger Icon */}
        <button
          className="block lg:hidden text-slate-700 focus:outline-none"
          onClick={toggleMenu}
        >
          <div className="space-y-2">
            <span className="block w-6 h-0.5 bg-slate-700"></span>
            <span className="block w-6 h-0.5 bg-slate-700"></span>
            <span className="block w-6 h-0.5 bg-slate-700"></span>
          </div>
        </button>
      </div>

      {/* Drop-Down Menu */}
      <div
        className={`${
          menuOpen ? "max-h-96" : "max-h-0"
        } overflow-hidden transition-all duration-500 bg-slate-700 lg:max-h-full lg:flex lg:items-center lg:justify-between `}
      >
        <ul className="flex flex-col lg:flex-row lg:items-center gap-6 p-4 lg:p-0 text-white lg:text-gray-700 ">
          <li className="hover:text-blue-400  lg:hover:text-emerald-400 cursor-pointer">
            Weather
          </li>
          <li className="hover:text-blue-300 lg:hover:text-emerald-400 cursor-pointer">
            Outfits
          </li>
          <li className="hover:text-blue-300 lg:hover:text-emerald-400 cursor-pointer">
            Settings
          </li>
          <li className="hover:text-blue-300 lg:hover:text-emerald-400 cursor-pointer">
            About
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
