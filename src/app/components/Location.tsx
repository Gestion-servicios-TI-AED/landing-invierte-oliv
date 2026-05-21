import { motion } from "motion/react";
import mapaDesktop from "@/assets/mapa-desktop-oliv.webp";
import mapaMobile from "@/assets/mapa-mobile-oliv.webp";


export const Location = () => {
  return (
    <section id="location" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-serif text-[#6a1533] mb-4">
            Ubicado en la Zona Norte de Cartagena
          </h2>
          <div className="w-12 h-px bg-[#ef8000] mx-auto mb-5" />
          <p className="text-gray-500 font-serif italic text-lg">
            Cartagena lo tiene todo. Oliv te da un espacio para disfrutarlo mejor.
          </p>
        </motion.div>

        {/* Desktop: solo el mapa */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="hidden md:block w-full"
        >
          <img
            src={mapaDesktop}
            alt="Mapa de ubicación OLIV Cartagena"
            className="w-full h-auto rounded-2xl shadow-lg"
          />
        </motion.div>

        {/* Mobile: mapa recortado al área del mapa + card debajo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="md:hidden"
        >
          <div className="mx-0 mb-6 overflow-hidden rounded-2xl shadow-lg">
            <img
              src={mapaMobile}
              alt="Mapa de ubicación OLIV Cartagena"
              className="w-full h-auto"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};
