import { motion } from "motion/react";
import { Link } from "react-scroll";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/71c4dde14a2b831608de2e01e5736593d3718ad5.png";

export const Hero = () => {
  return (
    <section id="hero" className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Familia caminando en naturaleza"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center md:text-left pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto md:mx-0"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white leading-tight mb-6">
            Una inversión diseñada para <br className="hidden md:block" />
            <span className="italic font-light">quienes valoran la solidez y el buen vivir.</span>
          </h1>
          <p className="text-white/90 text-lg md:text-xl font-sans font-light mb-10 max-w-2xl mx-auto md:mx-0 tracking-wide">
            Mucho más que un proyecto; es un activo con criterio donde la baja densidad y el diseño consciente garantizan valorización sólida y rentabilidad en la zona norte de Cartagena.
          </p>
          
          <Link
            to="lead-form"
            smooth={true}
            duration={800}
            className="inline-block px-8 py-4 bg-[#572433] text-white font-sans font-medium tracking-wide hover:bg-[#4a1f2b] transition-all transform hover:scale-105 rounded-full cursor-pointer shadow-lg"
          >
            Quiero mi Acceso al Plan Fundadores
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white flex flex-col items-center cursor-pointer"
      >
        <span className="text-xs uppercase tracking-widest mb-2 opacity-80">Descubre más</span>
        <ChevronDown className="animate-bounce w-6 h-6 opacity-80" />
      </motion.div>
    </section>
  );
};
