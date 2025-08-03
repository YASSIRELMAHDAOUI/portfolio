import { Link, useLocation } from "react-router-dom";
import yasserimg from "../assets/yasssir.jpeg";

const Nav = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

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
          {[
            { name: "Home", path: "/" },
            { name: "Project", path: "/projects" },
            { name: "Contact", path: "/contact" },
          ].map((link) => (
            <li key={link.path} className="relative group">
              <Link
                to={link.path}
                className={`text-sm md:text-lg transition-transform duration-200 group-hover:scale-105 ${
                  isActive(link.path) ? "text-pink-500" : ""
                }`}
              >
                {link.name}
                <span
                  className={`block h-[2px] bg-pink-500 mt-1 transition-transform duration-300 origin-left ${
                    isActive(link.path)
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                ></span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
