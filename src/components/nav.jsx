import { Link } from "react-router-dom";
import yasserimg from "../assets/yasssir.jpeg";

const Nav = () => {
  return (
    <nav className="bg-black text-white font-bold py-4 px-8 fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="flex items-center justify-between">
        {/* Avatar + effet flou rose */}
        <div className="relative group w-10 h-10 flex-shrink-0">
          <img
            src={yasserimg}
            alt="Yassir"
            className="w-10 h-10 rounded-3xl relative z-10 object-cover"
          />
          <div className="absolute inset-0 rounded-3xl bg-pink-500 blur-md opacity-60 z-0"></div>
        </div>

        {/* Liens de navigation */}
        <ul className="flex gap-8">
          <li className="relative group">
            <Link
              to="/"
              className="text-sm md:text-lg transition-transform duration-200 group-hover:scale-105 group-hover:text-pink-500"
            >
              Home
              <span className="block h-[2px] bg-pink-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left mt-1"></span>
            </Link>
          </li>
          <li className="relative group">
            <Link
              to="/projects"
              className="text-sm md:text-lg transition-transform duration-200 group-hover:scale-105 group-hover:text-pink-500"
            >
              Project
              <span className="block h-[2px] bg-pink-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left mt-1"></span>
            </Link>
          </li>
          <li className="relative group">
            <Link
              to="/contact"
              className="text-sm md:text-lg transition-transform duration-200 group-hover:scale-105 group-hover:text-pink-500"
            >
              Contact
              <span className="block h-[2px] bg-pink-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left mt-1"></span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
