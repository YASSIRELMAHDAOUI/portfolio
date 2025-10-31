import { motion } from "framer-motion";
import { useState } from "react";
import { FaGithub } from "react-icons/fa6";
import meteo from "../assets/meteo_photo.png";
import learn from "../assets/learn photo.png";
import voiture from "../assets/locationnnn.png";
import gestion from "../assets/gestion photo.png";
import calculatrice from "../assets/calcula.png";

const projects = [
  {
    title: "Voiture Platforme",
    img: voiture,
    desc: "Plateforme moderne pour gérer et vendre des voitures neuves et d'occasion.",
    link: "https://github.com/YASSIRELMAHDAOUI/site-voiture",
  },
  {
    title: "Gestion Commande",
    img: gestion,
    desc: "Application intuitive pour la gestion, le suivi et l’automatisation des commandes.",
    link: "https://github.com/YASSIRELMAHDAOUI/gestion_commande",
  },
  {
    title: "Learn Code Lab",
    img: learn,
    desc: "Plateforme interactive pour apprendre le développement web avec des projets pratiques.",
    link: "https://github.com/SAAD-ELGHABA/LearnCodeLab",
  },
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
      {/* Titre */}
      <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-center bg-gradient-to-r from-fuchsia-500 via-pink-400 to-purple-500 text-transparent bg-clip-text">
        My Projects
      </h1>
      <p className="text-lg text-center text-gray-300 leading-relaxed max-w-3xl mx-auto mb-12">
        Découvrez mes créations récentes développées avec{" "}
        <span className="text-pink-400 font-semibold">React.js</span> et{" "}
        <span className="text-pink-400 font-semibold">Laravel</span>.
      </p>

      {/* Grille de projets */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
        {projects.map((proj, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="group w-80 rounded-2xl bg-gray-800/50 backdrop-blur-lg p-5 shadow-lg hover:shadow-pink-500/20 transition-all duration-300"
          >
            <img
              src={proj.img}
              alt={proj.title}
              className="rounded-xl w-full h-44 object-cover cursor-pointer shadow-md hover:shadow-pink-400/20 transition-all"
              onClick={() => setSelectedImg(proj.img)}
            />
            <h2 className="text-2xl font-bold mt-5">{proj.title}</h2>
            <p className="text-sm mt-3 text-gray-300 leading-relaxed">{proj.desc}</p>

            <div className="flex justify-center mt-6">
              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-500 to-fuchsia-600 rounded-lg text-white font-semibold hover:opacity-90 transition"
              >
                <FaGithub className="text-lg" /> GitHub
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lien global vers GitHub */}
      <div className="text-center mt-12">
        <a
          href="https://github.com/YASSIRELMAHDAOUI"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900/70 border border-pink-500 rounded-full hover:bg-pink-600/20 transition-all duration-300"
        >
          <FaGithub className="text-2xl text-pink-400" />
          <span className="text-lg font-medium text-gray-200">
            Voir plus sur mon GitHub
          </span>
        </a>
      </div>

      {/* Modal Zoom */}
      {selectedImg && (
        <motion.div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex justify-center items-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setSelectedImg(null)}
        >
          <motion.img
            src={selectedImg}
            className="max-w-[90%] max-h-[80%] rounded-xl shadow-2xl border border-pink-500/30"
            initial={{ scale: 0.6 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 120 }}
          />
        </motion.div>
      )}
    </motion.div>
  );
};

export default Project;
