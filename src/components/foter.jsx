import { motion } from "framer-motion";
import { MdOutlineMailOutline } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-black text-white py-12 mt-20 overflow-hidden">
      {/* Ligne lumineuse en haut */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 via-fuchsia-500 to-pink-500 animate-pulse"></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto text-center px-6"
      >
        {/* Titre */}
        <h3 className="text-3xl font-bold mb-6 tracking-wide text-pink-400">
          Contactez-moi
        </h3>

        {/* Infos contact */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-8 text-lg mb-8">
          <a
            href="mailto:yassirelmahdaoui1@gmail.com"
            className="flex items-center gap-2 hover:text-pink-400 transition-colors"
          >
            <MdOutlineMailOutline className="text-2xl" />
            <span className="underline-offset-4 hover:underline">
              yassirelmahdaoui1@gmail.com
            </span>
          </a>

          <div className="flex items-center gap-2 hover:text-pink-400 transition-colors">
            <BsFillTelephoneFill className="text-xl" />
            <span>0601574351</span>
          </div>
        </div>

        {/* Icônes sociales */}
        <div className="flex justify-center gap-8 text-3xl">
          <a
            href="https://github.com/YASSIRELMAHDAOUI"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-pink-500 hover:drop-shadow-[0_0_10px_#ec4899] transition-all duration-300 transform hover:scale-110"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/yassir-elmahdaoui/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-pink-500 hover:drop-shadow-[0_0_10px_#ec4899] transition-all duration-300 transform hover:scale-110"
          >
            <FaLinkedin />
          </a>
        </div>

        {/* Ligne de séparation */}
        <div className="h-px bg-gray-800 mt-10 mb-6 w-2/3 mx-auto"></div>

        {/* Copyright */}
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()}{" "}
          <span className="text-pink-400 font-medium">
            Yassir Elmahdaoui
          </span>{" "}
          — Tous droits réservés.
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
