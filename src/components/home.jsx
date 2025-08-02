import { motion } from "framer-motion";
import yassirImg from "../assets/photo.jpg";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookSquare, FaWhatsappSquare, FaReact, FaLaravel, FaJs, FaPhp } from "react-icons/fa";

const Home = () => {
  return (
    <>
      {/* Barre de technologies défilantes */}
      <div className="overflow-hidden w-full py-8 bg-black">
        <motion.div
          animate={{ x: ["-100%", "100%"] }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          }}
          className="flex gap-16 text-6xl text-pink-500 whitespace-nowrap"
        >
          {/* Répétition pour effet infini */}
          {[...Array(10)].map((_, index) => (
            <span key={index} className="flex gap-16">
              <FaLaravel />
              <FaReact />
              <FaJs />
              <FaPhp />
            </span>
          ))}
        </motion.div>
      </div>

      {/* Titre principal */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-center text-5xl my-20 font-bold">
          Développeur Web Full Stack <br />
          Bonjour, je suis{" "}
          <strong className="text-pink-500">Yassir Elmahdaoui</strong>, originaire du Maroc.
        </h1>
      </motion.div>

      {/* À propos de moi */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col md:flex-row items-center gap-12 p-8 bg-black text-white rounded-2xl shadow-lg max-w-5xl mx-auto"
      >
        {/* Image avec effet */}
        <div className="relative group w-64 h-64 flex-shrink-0">
          <img
            src={yassirImg}
            alt="Yassir"
            className="w-full h-full object-cover rounded-3xl shadow-lg relative z-10 transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 rounded-3xl bg-pink-500 blur-2xl opacity-60 transition-opacity duration-300 z-0 mix-blend-screen"></div>

        </div>

        {/* Texte à propos */}
        <div>
          <h2 className="text-3xl font-bold mb-4">À propos de moi</h2>
          <p className="text-lg leading-relaxed max-w-xl">
            Je m’appelle Yassir El Mahdaoui, développeur full stack passionné par le
            développement web et les technologies modernes. Fort d’une solide expérience
            en front-end avec React.js et en back-end avec Laravel, je m’efforce
            de créer des applications performantes, élégantes et faciles à utiliser.
            <br /><br />
            Enthousiaste et motivé, je suis prêt à contribuer activement à des projets
            ambitieux et à évoluer dans un environnement dynamique.
          </p>

          {/* Réseaux sociaux */}
          <div className="flex gap-6 mt-6 text-4xl text-pink-500">
            <a
              className="hover:scale-110 transition-transform duration-300"
              href="https://www.instagram.com/le.enemy_/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillInstagram />
            </a>
            <a
              className="hover:scale-110 transition-transform duration-300"
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookSquare />
            </a>
            <a
              className="hover:scale-110 transition-transform duration-300"
              href="https://wa.me/0601574351"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsappSquare />
            </a>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Home;
