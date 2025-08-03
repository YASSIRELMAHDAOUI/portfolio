import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa6";

const Project = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="md:p-8 p-4 w-full md:max-w-5xl mx-auto text-white my-18"
      id="project"
    >
      {/* Nouveau titre stylisé */}
      <h1 className="text-4xl font-extrabold mb-6 relative flex justify-center">
  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-fuchsia-500 relative">
    Projects
    <span className="absolute left-1/2 -bottom-2 transform -translate-x-1/2 w-24 h-1 bg-pink-500 rounded-full" />
  </span>
</h1>

      {/* Nouveau paragraphe introductif */}
      <p className="text-lg text-center text-gray-300 leading-relaxed max-w-3xl mx-auto mb-10">
        En tant que développeur full stack, j’ai conçu des applications web modernes avec&nbsp;
        <span className="text-pink-400 font-semibold">React.js</span> &nbsp;et&nbsp;
        <span className="text-pink-400 font-semibold">Laravel</span>.  
        Chaque projet reflète ma passion pour les interfaces soignées, une UX intuitive, et un code structuré.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        {/* Carte 1 - Voiture-eCommerce */}
        <div className="relative group w-80 h-70 rounded-xl overflow-hidden shadow-lg cursor-pointer bg-gray-700 hover:scale-105 transition-transform duration-500">
          <div className="absolute inset-0 bg-gray-800/60 backdrop-blur-md opacity-0 group-hover:opacity-100 transition duration-500 z-0"></div>
          <div className="relative z-10 p-6 text-white flex flex-col justify-between h-full">
            <div>
              <h2 className="relative text-xl font-bold group cursor-pointer">
                <span className="absolute top-0 left-0 w-full h-1 bg-pink-500 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                Voiture-eCommerce
              </h2>
              <p className="mt-2 text-sm">
                Découvrez une plateforme innovante qui révolutionne la vente en ligne de voitures neuves et d’occasion. Parcourez facilement un catalogue complet et trouvez votre véhicule idéal en quelques clics.
              </p>
            </div>
            <div className="flex justify-center mt-4">
              <a
                href="https://github.com/YASSIRELMAHDAOUI/projet_front_icommerce_voiture-"
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-14 h-14 flex justify-center items-center"
              >
                <div className="absolute inset-0 bg-pink-500 blur-md opacity-60 rounded-full z-0"></div>
                <FaGithub className="text-2xl z-10 text-white hover:scale-125 transition-transform duration-300 cursor-pointer" />
              </a>
            </div>
          </div>
        </div>

        {/* Carte 2 - Gestion-commande */}
        <div className="relative group w-80 h-70 rounded-xl overflow-hidden shadow-lg cursor-pointer bg-gray-700 hover:scale-105 transition-transform duration-500">
          <div className="absolute inset-0 bg-gray-800/60 backdrop-blur-md opacity-0 group-hover:opacity-100 transition duration-500 z-0"></div>
          <div className="relative z-10 p-6 text-white flex flex-col justify-between h-full">
            <div>
              <h2 className="relative text-xl font-bold group cursor-pointer">
                <span className="absolute top-0 left-0 w-full h-1 bg-pink-500 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                Gestion-commande
              </h2>
              <p className="mt-2 text-sm">
                Simplifiez et optimisez vos processus d’achats avec une application conçue pour gérer efficacement toutes vos commandes, garantissant rapidité et précision au quotidien.
              </p>
            </div>
            <div className="flex justify-center mt-4">
              <a
                href="https://github.com/SAAD-ELGHABA/gestion_commande"
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-14 h-14 flex justify-center items-center"
              >
                <div className="absolute inset-0 bg-pink-500 blur-md opacity-60 rounded-full z-0"></div>
                <FaGithub className="text-2xl z-10 text-white hover:scale-125 transition-transform duration-300 cursor-pointer" />
              </a>
            </div>
          </div>
        </div>

        {/* Carte 3 - projet-meteo */}
        <div className="relative group w-80 h-70 rounded-xl overflow-hidden shadow-lg cursor-pointer bg-gray-700 hover:scale-105 transition-transform duration-500">
          <div className="absolute inset-0 bg-gray-800/60 backdrop-blur-md opacity-0 group-hover:opacity-100 transition duration-500 z-0"></div>
          <div className="relative z-10 p-6 text-white flex flex-col justify-between h-full">
            <div>
              <h2 className="relative text-xl font-bold group cursor-pointer">
                <span className="absolute top-0 left-0 w-full h-1 bg-pink-500 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                projet-meteo
              </h2>
              <p className="mt-2 text-sm">
                Accédez instantanément aux prévisions météo précises pour votre ville préférée grâce à une interface claire et moderne, idéale pour planifier votre journée en toute sérénité.
              </p>
            </div>
            <div className="flex justify-center mt-4">
              <a
                href="https://github.com/SAAD-ELGHABA/meteo"
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-14 h-14 flex justify-center items-center"
              >
                <div className="absolute inset-0 bg-pink-500 blur-md opacity-60 rounded-full z-0"></div>
                <FaGithub className="text-2xl z-10 text-white hover:scale-125 transition-transform duration-300 cursor-pointer" />
              </a>
            </div>
          </div>
        </div>

        {/* Carte 4 - Learn Code Lab */}
        <div className="relative group w-80 h-70 rounded-xl overflow-hidden shadow-lg cursor-pointer bg-gray-700 hover:scale-105 transition-transform duration-500">
          <div className="absolute inset-0 bg-gray-800/60 backdrop-blur-md opacity-0 group-hover:opacity-100 transition duration-500 z-0"></div>
          <div className="relative z-10 p-6 text-white flex flex-col justify-between h-full">
            <div>
              <h2 className="relative text-xl font-bold group cursor-pointer">
                <span className="absolute top-0 left-0 w-full h-1 bg-pink-500 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                Learn-Code-Lab
              </h2>
              <p className="mt-2 text-sm">
                Learn Code Lab est une plateforme moderne conçue avec React, Laravel et Tailwind CSS pour apprendre le développement web de manière interactive. Elle offre une expérience fluide, responsive et riche en fonctionnalités pour faciliter l’apprentissage du code.
              </p>
            </div>
            <div className="flex justify-center mt-4">
              <a
                href="https://github.com/SAAD-ELGHABA/LearnCodeLab"
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-14 h-14 flex justify-center items-center"
              >
                <div className="absolute inset-0 bg-pink-500 blur-md opacity-60 rounded-full z-0"></div>
                <FaGithub className="text-2xl z-10 text-white hover:scale-125 transition-transform duration-300 cursor-pointer" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Project;
