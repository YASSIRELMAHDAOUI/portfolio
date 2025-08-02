import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa6";

const Project = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="md:p-8 p-4 w-full md:max-w-5xl mx-auto text-white my-25"
      id="project"
    >
      <h1 className="text-3xl font-bold mb-4 border-b border-pink-500 inline-block">
        Mes projets :
      </h1>
      <p className="text-lg leading-relaxed">
  Voici quelques-uns des projets que j’ai réalisés en tant que développeur full stack. J’ai conçu des applications web complètes en utilisant <strong className="text-pink-500">React.js</strong> pour le front-end, et <strong className="text-pink-500">Laravel</strong> pour le back-end. Parmi mes réalisations : une plateforme de gestion de location de voitures, un tableau de bord d’administration intuitif, et un blog interactif dédié à la scène rap marocaine. Chaque projet traduit ma passion pour un design soigné, une expérience utilisateur fluide, et un code bien structuré.  
  
 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 ">
  {/* Carte 1 */}
  <div className="relative group w-80 h-70 rounded-xl overflow-hidden shadow-lg cursor-pointer bg-gray-700 hover:scale-105 transition-transform duration-500">
    <div className="absolute inset-0 bg-gray-800/60 backdrop-blur-md opacity-0 group-hover:opacity-100 transition duration-500 z-0"></div>

    <div className="relative z-10 p-6 text-white flex flex-col justify-between h-full">
      <div>
        <h2 className="relative text-xl font-bold group cursor-pointer">
  {/* Ligne rose au-dessus */}
  <span className="absolute top-0 left-0 w-full h-1 bg-pink-500 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
  Voiture-eCommerce
</h2>
        <p className="mt-2 text-sm">
          Découvrez une plateforme innovante qui révolutionne la vente en ligne de voitures neuves et d’occasion. Parcourez facilement un catalogue complet et trouvez votre véhicule idéal en quelques clics.
        </p>
      </div>
      <a href="https://github.com/YASSIRELMAHDAOUI/projet_front_icommerce_voiture-"><FaGithub className="text-2xl mt-4 hover:scale-125 transition-transform duration-300 cursor-pointer" /></a>
    </div>
  </div>

  {/* Carte 2 */}
  <div className="relative group w-80 h-70 rounded-xl overflow-hidden shadow-lg cursor-pointer bg-gray-700 hover:scale-105 transition-transform duration-500">
    <div className="absolute inset-0 bg-gray-800/60 backdrop-blur-md opacity-0 group-hover:opacity-100 transition duration-500 z-0"></div>

    <div className="relative z-10 p-6 text-white flex flex-col justify-between h-full">
      <div>
        <h2 className="relative text-xl font-bold group cursor-pointer">
  {/* Ligne rose au-dessus */}
  <span className="absolute top-0 left-0 w-full h-1 bg-pink-500 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
  Gestion-commande
</h2>
        <p className="mt-2 text-sm">
          Simplifiez et optimisez vos processus d’achats avec une application conçue pour gérer efficacement toutes vos commandes, garantissant rapidité et précision au quotidien.
        </p>
      </div>
      <a href="https://github.com/YASSIRELMAHDAOUI/gestion_commande"><FaGithub className="text-2xl mt-4 hover:scale-125 transition-transform duration-300 cursor-pointer" /></a>
    </div>
  </div>

  {/* Carte 3 */}
  <div className="relative group w-80 h-70 rounded-xl overflow-hidden shadow-lg cursor-pointer bg-gray-700 hover:scale-105 transition-transform duration-500">
    <div className="absolute inset-0 bg-gray-800/60 backdrop-blur-md opacity-0 group-hover:opacity-100 transition duration-500 z-0"></div>

    <div className="relative z-10 p-6 text-white flex flex-col justify-between h-full">
      <div>
        <h2 className="relative text-xl font-bold group cursor-pointer">
  {/* Ligne rose au-dessus */}
  <span className="absolute top-0 left-0 w-full h-1 bg-pink-500 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
  projet-meteo
</h2>
        <p className="mt-2 text-sm">
          Accédez instantanément aux prévisions météo précises pour votre ville préférée grâce à une interface claire et moderne, idéale pour planifier votre journée en toute sérénité.
        </p>
      </div>
      <a href="https://github.com/YASSIRELMAHDAOUI/meteo"><FaGithub className="text-2xl mt-4 hover:scale-125 transition-transform duration-300 cursor-pointer" /></a>
    </div>
  </div>
</div>

<br/><br/>
   
</p>


    </motion.div>
  );
};

export default Project;
