import { useState } from "react";
import { motion } from "framer-motion";
import { AiFillStar, AiOutlineStar, AiFillPhone, AiOutlineMail, AiFillEnvironment } from "react-icons/ai";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.nom.trim()) newErrors.nom = "Le nom est requis.";
    if (!formData.email.trim()) newErrors.email = "L'email est requis.";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email invalide.";
    if (!formData.message.trim()) newErrors.message = "Le message est requis.";
    return newErrors;
  };

  const handleSubmit = (e) => {
  e.preventDefault();
  const validationErrors = validate();
  if (Object.keys(validationErrors).length > 0) {
    setErrors(validationErrors);
  } else {
    setErrors({});

    const templateParams = {
      nom: formData.nom,
      email: formData.email,
      message: formData.message,
      rating: rating,
    };

    emailjs
      .send(
        "YASSIR",     // à remplacer
        "template_84rk2mf",    // à remplacer
        templateParams,
        "44tvaNQXdL5a3LIVb"       // à remplacer
      )
      .then(
        (response) => {
          alert("Message envoyé avec succès !");
          setFormData({ nom: "", email: "", message: "" });
          setRating(0);
        },
        (error) => {
          console.error("Erreur :", error);
          alert("Une erreur s’est produite. Réessayez.");
        }
      );
  }
};


  return (
    <motion.div
      id="contact"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-5xl mx-auto my-18 p-6"
    >
      <h1 className="text-4xl font-extrabold mb-6 relative flex justify-center">
  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-fuchsia-500 relative">
    Contactez-moi
    <span className="absolute left-1/2 -bottom-2 transform -translate-x-1/2 w-24 h-1 bg-pink-500 rounded-full" />
  </span>
</h1><br/><br/>

      <div className="flex flex-col md:flex-row gap-10">
        {/* Fiche de contact */}
        <div className="flex-1 bg-gray-800 rounded-xl shadow-md p-8 text-white flex flex-col justify-center gap-6">
          <h3 className="text-2xl font-bold mb-4">Mes coordonnées</h3>
          <div className="flex items-center gap-4">
            <AiFillPhone size={28} className="text-pink-500" />
            <span>+212 6 01 57 43 51</span>
          </div>
          <div className="flex items-center gap-4">
            <AiOutlineMail size={28} className="text-pink-500" />
            <span>yassirelmahdaoui1@gmail.com</span>
          </div>
          <div className="flex items-center gap-4">
            <AiFillEnvironment size={28} className="text-pink-500" />
            <span>Marrakech, Maroc</span>
          </div>

          <p className="mt-6 text-gray-400">
            N’hésitez pas à me contacter via ce formulaire ou par téléphone/email.
          </p>
        </div>

        {/* Formulaire */}
        <form
          onSubmit={handleSubmit}
          className="flex-1 bg-gray-800 rounded-xl shadow-md p-8 text-white space-y-6"
        >
          <input
            type="text"
            name="nom"
            placeholder="Votre nom"
            value={formData.nom}
            onChange={handleChange}
            className={`w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-pink-400 text-white bg-gray-700 ${
              errors.nom ? "border-red-500" : "border-gray-600"
            }`}
          />
          {errors.nom && <p className="text-red-500 text-sm">{errors.nom}</p>}

          <input
            type="email"
            name="email"
            placeholder="Votre email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-pink-400 text-white bg-gray-700 ${
              errors.email ? "border-red-500" : "border-gray-600"
            }`}
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

          <textarea
            name="message"
            rows="4"
            placeholder="Votre message"
            value={formData.message}
            onChange={handleChange}
            className={`w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-pink-400 text-white bg-gray-700 ${
              errors.message ? "border-red-500" : "border-gray-600"
            }`}
          />
          {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}

          {/* Étoiles de notation */}
          <div className="flex items-center space-x-1 text-pink-500 justify-center">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => setRating(star)}
                onMouseEnter={() => setHover(star)}
                onMouseLeave={() => setHover(0)}
                aria-label={`Noter ${star} étoiles`}
                className="focus:outline-none"
              >
                {star <= (hover || rating) ? (
                  <AiFillStar size={28} />
                ) : (
                  <AiOutlineStar size={28} />
                )}
              </button>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-pink-500 text-white py-3 rounded hover:bg-pink-400 transition"
          >
            Envoyer
          </motion.button>
        </form>
      </div>
    </motion.div>
  );
};

export default Contact;
