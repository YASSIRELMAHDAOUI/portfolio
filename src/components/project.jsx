import { motion } from "framer-motion";
import { useState } from "react";
import { FaGithub } from "react-icons/fa6";
import meteo from "../assets/meteo_photo.png";
import learn from "../assets/learn photo.png";
import voiture from "../assets/voiture photo.png";
import gestion from "../assets/gestion photo.png";
import calculatrice from "../assets/calcula.png"

const projects = [
  {
    title: "Voiture-eCommerce",
    img: voiture,
    desc: "Plateforme innovante pour la vente de voitures neuves et d'occasion.",
    link: "https://github.com/YASSIRELMAHDAOUI/projet_front_icommerce_voiture-",
  },
  {
    title: "Gestion-commande",
    img: gestion,
    desc: "Application pour simplifier et optimiser la gestion des commandes.",
    link: "https://github.com/YASSIRELMAHDAOUI/gestion_commande",
  },
  {
    title: "Projet Météo",
    img: meteo,
    desc: "Interface moderne pour accéder aux prévisions météo précises.",
    link: "https://github.com/YASSIRELMAHDAOUI/meteo",
  },
  {
    title: "Learn Code Lab",
    img: learn,
    desc: "Plateforme interactive pour apprendre le développement web.",
    link: "https://github.com/SAAD-ELGHABA/LearnCodeLab",
  },
  {
    title: "calculatrice",
    img: calculatrice,
    desc: "Plateforme qui design une calculatrice",
    link: "https://github.com/YASSIRELMAHDAOUI/calculatrice",
  }

];

const Project = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="md:p-8 p-4 w-full md:max-w-6xl mx-auto text-white my-20"
    >
      <h1 className="text-4xl font-extrabold mb-6 text-center bg-gradient-to-r from-pink-400 to-fuchsia-500 text-transparent bg-clip-text">
        My Projects
      </h1>
      <p className="text-lg text-center text-gray-300 leading-relaxed max-w-3xl mx-auto mb-12">
        Applications modernes avec <span className="text-pink-400 font-semibold">React.js</span> &
        <span className="text-pink-400 font-semibold"> Laravel</span>.
      </p>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
        {projects.map((proj, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="group w-80 h-[420px] rounded-2xl bg-gray-800/60 backdrop-blur-md p-5 shadow-xl relative overflow-hidden"
          >
            <img
              src={proj.img}
              alt={proj.title}
              className="rounded-lg w-full h-40 object-cover cursor-pointer"
              onClick={() => setSelectedImg(proj.img)}
            />
            <h2 className="text-xl font-bold mt-4">{proj.title}</h2>
            <p className="text-sm mt-2 text-gray-300">{proj.desc}</p>
            <div className="flex justify-center mt-5">
              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-14 h-14 flex justify-center items-center"
              >
                <div className="absolute inset-0 bg-pink-500 blur-md opacity-60 rounded-full"></div>
                <FaGithub className="text-2xl z-10 text-white hover:scale-125 transition-transform duration-300 cursor-pointer" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal Image Zoom */}
      {selectedImg && (
        <motion.div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex justify-center items-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setSelectedImg(null)}
        >
          <motion.img
            src={selectedImg}
            className="max-w-[90%] max-h-[80%] rounded-xl shadow-2xl"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 120 }}
          />
        </motion.div>
      )}
    </motion.div>
  );
};

export default Project;
