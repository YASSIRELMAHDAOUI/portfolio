import React from "react";
import Slider from "react-slick";
import yassirImg from "../assets/photoo est.jpg";
import { AiFillInstagram } from "react-icons/ai";
import { RiTailwindCssFill } from "react-icons/ri";
import {
  FaFacebookSquare,
  FaWhatsappSquare,
  FaReact,
  FaLaravel,
  FaJs,
  FaPhp,
} from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
const Home = () => {
  const settings = {
    infinite: true,
    speed: 5000,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: false,
    arrows: false,
    swipe: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 5 } },
      { breakpoint: 768, settings: { slidesToShow: 4 } },
      { breakpoint: 480, settings: { slidesToShow: 3 } },
    ],
  };

  const icons = [<FaLaravel />,<RiTailwindCssFill />,<SiMongodb />,<FaBootstrap />,<FaCss3Alt />, <FaHtml5 />,<SiMysql />, <FaReact />, <FaJs />, <FaPhp />];
  const repeatedIcons = [...Array(10)].flatMap(() => icons);

  return (
    <>
      {/* Défilement d’icônes technos */}
      <div className="overflow-hidden w-full py-6 bg-black text-pink-500 text-6xl shadow-inner">
        <Slider {...settings}>
          {repeatedIcons.map((icon, index) => (
            <div key={index} className="flex justify-center hover:scale-125 transition-transform duration-300">
              {icon}
            </div>
          ))}
        </Slider>
      </div>

      {/* Présentation */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="bg-black text-white py-20 px-6 text-center"
      >
        <h1 className="text-xl md:text-6xl font-bold mb-6 leading-snug">
          Bonjour, je suis <br />
          <span className="text-pink-500">Yassir Elmahdaoui</span>
        </h1>
        <p className="text-lg md:text-2xl max-w-3xl mx-auto">
          Développeur Web Full Stack passionné par le code moderne, basé au Maroc. J’aime construire des interfaces élégantes et des backends robustes.
        </p>
        <a
          href="/MON CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-8 px-8 py-3 text-lg font-semibold bg-pink-600 hover:bg-pink-700 text-white rounded-full shadow-lg transition duration-300"
        >
          Voir mon CV
        </a>
      </motion.div>

      {/* Section À propos */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col md:flex-row items-center gap-12 px-8 py-16  bg-black text-white rounded-2xl max-w-6xl mx-auto "
      >
        {/* Photo */}
        <div className="relative group w-64 h-64">
          <img
            src={yassirImg}
            alt="Yassir"
            className="rounded-full border-4 border-pink-500 shadow-xl w-full h-full object-cover transform group-hover:scale-105 transition duration-300"
          />
          
        </div>

        {/* Texte */}
        <div>
          <h2 className="text-2xl md:text-4xl font-bold mb-4">À propos de moi</h2>
          <p className="text-lg leading-relaxed max-w-xl">
            Je m'appelle Yassir El Mahdaoui, développeur full stack motivé et créatif. J’utilise React.js pour le front et Laravel pour le back-end. Toujours curieux et à l’écoute, je m’adapte rapidement pour créer des solutions puissantes, modernes et fonctionnelles.
          </p>

          {/* Réseaux sociaux */}
          <div className="flex gap-6 mt-6 text-4xl text-pink-500 justify-start">
            <a
              href="https://www.instagram.com/le.enemy_/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-125 transition-transform"
            >
              <AiFillInstagram />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-125 transition-transform"
            >
              <FaFacebookSquare />
            </a>
            <a
              href="https://wa.me/0601574351"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-125 transition-transform"
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
