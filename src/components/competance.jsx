import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import {
  FaReact,
  FaLaravel,
  FaJs,
  FaPhp,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMysql, SiMongodb } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";
function Competence() {
  const sections = [
    {
      title: "Frontend",
      items: [
        { icon: <FaReact />, name: "React" },
        { icon: <FaJs />, name: "JavaScript" },
        { icon: <FaHtml5 />, name: "HTML5" },
        { icon: <FaCss3Alt />, name: "CSS3" },
        { icon: <RiTailwindCssFill />, name: "TailwindCSS" },
        { icon: <FaBootstrap />, name: "Bootstrap" },
      ],
    },
    {
      title: "Backend",
      items: [
        { icon: <FaLaravel />, name: "Laravel" },
        { icon: <FaPhp />, name: "PHP" },
      ],
    },
    {
      title: "Base de données",
      items: [
        { icon: <SiMysql />, name: "MySQL" },
        { icon: <SiMongodb />, name: "MongoDB" },
      ],
    },
    {
      title: "Technologies et outils",
      items: [
        { icon: <FaGithub />, name: "GitHub" },
        { icon: <SiPostman />, name: "Postman" },
        { icon: <VscVscode />, name: "Vscode" },
        { icon: <FaFigma />, name: "Figma" },
        { icon: <FaDocker />, name: "Docker" },
      ],
    },
  ];

  return (
    <motion.div
initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
     className="bg-black text-white py-16 px-6 flex flex-col items-center justify-center space-y-20 min-h-screen">
      {sections.map((section, idx) => (
        <div key={idx} className="text-center w-full max-w-6xl">
          {/* Titre */}
          <h2 className="text-4xl font-bold text-pink-500 mb-12 tracking-wide">
            {section.title}
          </h2>

          {/* Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 justify-items-center">
            {section.items.map((tech, index) => (
              <div
                key={index}
                className="flex flex-col items-center backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-8 w-36 shadow-lg hover:scale-110 transition-transform duration-300 hover:border-pink-500"
              >
                <div className="text-6xl text-pink-400 mb-3">{tech.icon}</div>
                <p className="text-lg font-semibold">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </motion.div>
  );
}

export default Competence;
