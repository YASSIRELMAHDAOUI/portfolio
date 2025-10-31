import { Link, useLocation } from "react-router-dom";
import yasserimg from "../assets/yasssir.jpeg";
import { IoMenu, IoClose } from "react-icons/io5";
import { useState } from "react";
import { motion } from "framer-motion";

const Nav = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  const menuVariants = {
    hidden: { x: "-100%" },
    visible: { x: 0 },
    exit: { x: "-100%" }
  };

  return (
    <nav className="bg-black text-white font-bold py-4 px-8 fixed top-0 left-0 w-full z-50 shadow-md">
      
      <div className="flex items-center justify-between">
        {/* Avatar */}
<Link to="/">
        <div className="relative group w-10 h-10 flex-shrink-0 transform hover:scale-120 transition duration-300">
          
          <img
            src={yasserimg}
            alt="Yassir"
            className="w-10 h-10 rounded-full relative z-10 object-cover border-2 border-pink-500 shadow-lg shadow-pink-500/50"
          />
          <div className="absolute inset-0 rounded-full animate-pulse bg-pink-500 blur-md opacity-50"></div>
        </div>
        </Link>
        {/* Liens Desktop */}
        <ul className="hidden md:flex gap-8">
          
          {[
            { name: "Home", path: "/" },
            { name: "Projects", path: "/projects" },
            { name: "Competence", path: "/Competence" },
            { name: "Contact", path: "/contact" },
          ].map((link) => (
            <li key={link.path} className="relative group">
              <Link
                to={link.path}
                className={`text-sm md:text-lg transition duration-300 ${
                  isActive(link.path)
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500"
                    : "text-white hover:text-pink-400"
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

      {/* Menu Mobile Plein Écran */}
      {menuOpen && (
        <motion.div
          className="fixed top-0 left-0 w-full h-full bg-gradient-to-b from-black via-gray-900 to-black bg-opacity-90 backdrop-blur-md flex flex-col items-center z-50"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={menuVariants}
          transition={{ type: "spring", stiffness: 80, damping: 20 }}
        >
          {/* Logo en haut */}
          <motion.div
            className="mt-6 mb-12 flex items-center gap-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="relative group w-16 h-16 flex-shrink-0">
              <img
                src={yasserimg}
                alt="Yassir"
                className="w-16 h-16 rounded-full relative z-10 object-cover border-2 border-pink-500 shadow-lg shadow-pink-500/50"
              />
              <div className="absolute inset-0 rounded-full animate-pulse bg-pink-500 blur-md opacity-50"></div>
            </div>
          </motion.div>

          {/* Bouton Fermer */}
          <button
            className="absolute top-6 right-6 text-4xl text-pink-500 hover:rotate-90 transition-transform duration-300"
            onClick={() => setMenuOpen(false)}
          >
            <IoClose />
          </button>

          {/* Liens Menu Mobile */}
          <motion.ul
            className="flex flex-col gap-8 text-2xl mt-12"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: { staggerChildren: 0.3 }
              }
            }}
          >
            {[
              { name: "Home", path: "/" },
              { name: "Projects", path: "/projects" },
              { name: "Competence", path: "/Competence" },
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
                  className={`relative transition duration-300 ${
                    isActive(link.path)
                      ? "text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500"
                      : "text-white hover:text-pink-400"
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
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
        
      )}
      
    </nav>
    
  );
};

export default Nav;
