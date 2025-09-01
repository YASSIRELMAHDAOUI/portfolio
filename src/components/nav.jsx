import { Link, useLocation } from "react-router-dom";
import yasserimg from "../assets/yasssir.jpeg";
import { IoMenu, IoClose } from "react-icons/io5";
import { useState } from "react";
import { motion } from "framer-motion";

const Nav = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  // Animation du menu plein écran
  const menuVariants = {
    hidden: { x: "-100%" },
    visible: { x: 0 },
    exit: { x: "-100%" }
  };

  return (
    <nav className="bg-black text-white font-bold py-4 px-8 fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="flex items-center justify-between">
        {/* Avatar */}
        <div className="relative group w-10 h-10 flex-shrink-0">
          <img
            src={yasserimg}
            alt="Yassir"
            className="w-10 h-10 rounded-3xl relative z-10 object-cover"
          />
          <div className="absolute inset-0 rounded-3xl bg-pink-500 blur-md opacity-60 z-0"></div>
        </div>

        {/* Liens Desktop */}
        <ul className="hidden md:flex gap-8">
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

        {/* Bouton Menu Mobile */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setMenuOpen(true)}
        >
          <IoMenu />
        </button>
      </div>

      {/* Menu Mobile Plein Écran avec Motion */}
   {menuOpen && (
  <motion.div
    className="fixed top-0 left-0 w-full h-full bg-black flex flex-col items-center z-50"
    initial="hidden"
    animate="visible"
    exit="exit"
    variants={menuVariants}
    transition={{ type: "tween", duration: 0.4 }}
  >
    {/* Logo en haut */}
    <motion.div
      className="mt-6 mb-12 flex items-center gap-3"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="relative group w-10 h-10 flex-shrink-0">
        <img
          src={yasserimg}
          alt="Yassir"
          className="w-10 h-10 rounded-3xl relative z-10 object-cover"
        />
        <div className="absolute inset-0 rounded-3xl bg-pink-500 blur-md opacity-60 z-0"></div>
      </div>
    </motion.div>

    {/* Bouton Fermer */}
    <button
      className="absolute top-6 right-6 text-4xl"
      onClick={() => setMenuOpen(false)}
    >
      <IoClose />
    </button>

    {/* Liens Menu Mobile avec animation cascade */}
    <motion.ul
      className="flex flex-col gap-8 text-2xl mt-12"
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: { staggerChildren: 0.40 } // un lien après l'autre
        }
      }}
    >
      {[
        { name: "Home", path: "/" },
        { name: "Projects", path: "/projects" },
        { name: "Contact", path: "/contact" },
      ].map((link) => (
        <motion.li
          key={link.path}
          variants={{
            hidden: { opacity: 0, x: -30 },
            visible: { opacity: 1, x: 0 }
          }}
        >
          <Link
            to={link.path}
            onClick={() => setMenuOpen(false)}
            className={`relative transition-colors duration-200 ${
              isActive(link.path) ? "text-pink-500" : "hover:text-pink-500"
            }`}
          >
            {link.name}
            {/* Ligne rose sous le lien */}
            <span
              className={`block h-[2px] bg-pink-500 mt-1 transition-transform duration-300 origin-left ${
                isActive(link.path) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
              }`}
            ></span>
          </Link>
        </motion.li>
      ))}
    </motion.ul>
  </motion.div>
)}


    </nav>
  );
};

export default Nav;
