import { motion } from "framer-motion";
import { MdOutlineMailOutline } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";

const Foter = () => {
  return (
    
    <div className="mt-12 p-6 bg-gray-900 text-white">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x:0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h3 className="text-2xl font-semibold mb-4">Contact</h3>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-lg">
          <div className="flex items-center gap-2">
            <MdOutlineMailOutline className="text-pink-400 text-xl" />
            <a href="mailto:yassirelmahdaoui1@gmail.com" className="hover:underline">
              yassirelmahdaoui1@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-2">
            <BsFillTelephoneFill className="text-pink-400 text-lg" />
            <span>0601574351</span>
          </div>
        </div>
        <p className="mt-6 text-sm text-white hover:scale-105 transition-transform duration-500">© {new Date().getFullYear()} Yassir Elmahdaoui. Tous droits réservés.</p>
      </motion.div>
    </div>
  );
};

export default Foter;
