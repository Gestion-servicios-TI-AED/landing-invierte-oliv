import { motion } from "motion/react";
import mapaOliv from "@/assets/mapa-oliv-web.jpg";

const distances = [
  { icon: "⛽", time: "2 Min", label: "Estación de gasolina" },
  { icon: "🏖️", time: "6 Min", label: "Playas de manzanillo" },
  { icon: "🎓", time: "5 Min", label: "Universidades y colegios" },
  { icon: "🏥", time: "7 Min", label: "Hospital serena del mar" },
  { icon: "✈️", time: "9 Min", label: "Aeropuerto" },
  { icon: "🛍️", time: "5 Min", label: "Centros comerciales" },
  { icon: "🍽️", time: "5 Min", label: "Restaurantes" },
  { icon: "🛒", time: "7 Min", label: "Supermercados" },
  { icon: "💊", time: "5 Min", label: "Droguerías" },
  { icon: "🐾", time: "5 Min", label: "Tienda de mascotas" },
  { icon: "🏛️", time: "12 Min", label: "Centro Histórico" },
];

const InfoCard = () => (
  <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
    <p className="font-serif italic text-[#6a1533] text-xl leading-snug mb-1">
      El epicentro
    </p>
    <p className="font-serif italic text-[#6a1533] text-xl leading-snug mb-4">
      del <span className="font-bold not-italic">nuevo epicentro.</span>
    </p>
    <p className="text-[#ef8000] font-sans text-sm font-medium mb-4">
      Distancias en minutos.
    </p>
    <ul className="space-y-1.5">
      {distances.map((d) => (
        <li key={d.label} className="flex items-center gap-2 text-sm font-sans">
          <span className="text-base leading-none">{d.icon}</span>
          <span className="text-[#6a1533] font-semibold whitespace-nowrap">{d.time}</span>
          <span className="text-gray-500 font-light">{d.label}</span>
        </li>
      ))}
    </ul>
  </div>
);

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
          className="hidden md:block w-full rounded-xl overflow-hidden"
        >
          <img
            src={mapaOliv}
            alt="Mapa de ubicación OLIV Cartagena"
            className="w-full h-[620px] object-cover object-center"
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
          <div className="w-full rounded-xl overflow-hidden mb-5">
            <img
              src={mapaOliv}
              alt="Mapa de ubicación OLIV Cartagena"
              className="w-full h-[320px] object-cover object-right"
            />
          </div>
          <InfoCard />
        </motion.div>

      </div>
    </section>
  );
};
