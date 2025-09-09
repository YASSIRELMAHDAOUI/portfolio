import { motion } from "framer-motion";
import { MdOutlineMailOutline } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-12  bg-gray-900 text-white py-10 shadow-inner">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto text-center px-6"
      >
        {/* Title */}
        <h3 className="text-3xl font-bold mb-6 tracking-wide text-pink-400">
          Contactez-moi
        </h3>

        {/* Contact info */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-8 text-lg">
          <a
            href="mailto:yassirelmahdaoui1@gmail.com"
            className="flex items-center gap-2 hover:text-pink-400 transition-colors"
          >
            <MdOutlineMailOutline className="text-xl" />
            <span className="underline-offset-4 hover:underline">
              yassirelmahdaoui1@gmail.com
            </span>
          </a>

          <div className="flex items-center gap-2 hover:text-pink-400 transition-colors">
            <BsFillTelephoneFill className="text-lg" />
            <span>0601574351</span>
          </div>
        </div>

        {/* Social media */}
        <div className="flex justify-center gap-6 mt-8 text-2xl">
          <a
            href="https://github.com/YASSIRELMAHDAOUI"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transform hover:scale-110 transition-all"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transform hover:scale-110 transition-all"
          >
            <FaLinkedin />
          </a>
        </div>

        {/* Divider */}
        <div className="h-[1px] bg-gray-700 mt-10 mb-6 w-2/3 mx-auto"></div>

        {/* Copyright */}
        <p className="text-sm text-gray-400 hover:scale-105 transition-transform duration-500">
          © {new Date().getFullYear()}{" "}
          <span className="text-white font-medium">Yassir Elmahdaoui</span>.
          Tous droits réservés.
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
