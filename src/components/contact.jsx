import { useState } from "react";
import { motion } from "framer-motion";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

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
      console.log("Formulaire soumis :", formData, "Note :", rating);
      // Ici tu peux envoyer le formulaire vers une API ou autre
      alert("Message envoyé avec succès !");
      setFormData({ nom: "", email: "", message: "" });
      setRating(0);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-md"
    >
      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-3">
        Contactez-moi
      </h2>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <input
          type="text"
          name="nom"
          placeholder="Votre nom"
          value={formData.nom}
          onChange={handleChange}
          className={`w-full text-gray-800 p-2 border ${
            errors.nom ? "border-red-500" : "border-gray-300"
          } rounded focus:ring-2 focus:ring-pink-400`}
        />
        {errors.nom && <p className="text-red-500 text-sm">{errors.nom}</p>}

        <input
          type="email"
          name="email"
          placeholder="Votre email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full text-gray-800 p-2 border ${
            errors.email ? "border-red-500" : "border-gray-300"
          } rounded focus:ring-2 focus:ring-pink-400`}
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

        <textarea
          name="message"
          rows="4"
          placeholder="Votre message"
          value={formData.message}
          onChange={handleChange}
          className={`w-full text-gray-800 p-2 border ${
            errors.message ? "border-red-500" : "border-gray-300"
          } rounded focus:ring-2 focus:ring-pink-400`}
        />
        {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}

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
          className="w-full bg-pink-500 text-white py-2 rounded hover:bg-pink-400 transition"
        >
          Envoyer
        </motion.button>
      </form>
    </motion.div>
  );
};

export default Contact;
