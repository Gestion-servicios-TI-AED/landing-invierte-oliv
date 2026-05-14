import { motion } from "motion/react";
import { CheckCircle, ArrowLeft } from "lucide-react";
import { Link } from "react-router";
import logo from "@/assets/e70c42e76d8f373f7319be198453a0d6dc47133e.webp";

export const Gracias = () => {
  return (
    <div className="min-h-screen bg-[#F9F7F2] font-sans flex flex-col items-center justify-between">

      {/* Header */}
      <header className="w-full flex justify-center py-5 px-6 bg-[#6a1533] shadow-sm mb-8">
        <Link to="/">
          <img src={logo} alt="OLIV Cartagena" className="h-12 w-auto" />
        </Link>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center text-center max-w-lg mx-auto w-full px-6">

        {/* Check Icon */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-10 relative flex items-center justify-center"
        >
          <div className="w-20 h-20 rounded-full bg-[#6a1533] flex items-center justify-center shadow-lg">
            <CheckCircle className="w-10 h-10 text-white" strokeWidth={2} />
          </div>
          <motion.div
            initial={{ scale: 1, opacity: 0.4 }}
            animate={{ scale: 1.8, opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
            className="absolute w-20 h-20 rounded-full bg-[#6a1533]/30"
          />
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-4xl md:text-5xl font-serif text-[#6a1533] leading-tight mb-6"
        >
          Ya haces parte de la{" "}
          <span className="italic font-light">Lista 0 de OLIV.</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="text-gray-600 font-sans font-light text-base md:text-lg leading-relaxed mb-6"
        >
          Muy pronto te contactaremos para compartirte los primeros detalles del proyecto y tu acceso al Plan Fundadores.
        </motion.p>

        {/* Italic tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-[#6a1533] font-serif italic text-lg mb-10"
        >
          Esto es solo el inicio del buen vivir. 🌿
        </motion.p>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.75 }}
        >
          <Link
            to="/"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#6a1533] text-white font-sans font-medium tracking-wide rounded-full hover:bg-[#56112a] transition-all shadow-md hover:shadow-lg hover:scale-105 transform"
          >
            <ArrowLeft size={18} />
            Volver al sitio principal
          </Link>
        </motion.div>

        {/* Privacy note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="text-xs text-gray-400 font-sans font-light mt-8 max-w-sm"
        >
          Tu información está segura. Respetamos tu privacidad y nunca compartiremos tus datos con terceros.
        </motion.p>
      </main>

      {/* Footer */}
      <footer className="mt-16 mb-8 text-center text-xs text-gray-400 font-sans font-light">
        <p>© {new Date().getFullYear()} OLIV Cartagena. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};
