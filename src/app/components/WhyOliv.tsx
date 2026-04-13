import { motion } from "motion/react";
import { Home, Trees, MapPin, LayoutGrid } from "lucide-react";

const features = [
  {
    icon: <LayoutGrid strokeWidth={1.5} className="w-8 h-8 text-[#ef8000]" />,
    title: "Baja densidad: Un activo real.",
    desc: "Menos unidades garantizan exclusividad, menor deterioro y una valorización sostenible que otros proyectos masivos no pueden ofrecer.",
  },
  {
    icon: <Trees strokeWidth={1.5} className="w-8 h-8 text-[#ef8000]" />,
    title: "Naturaleza Estructural.",
    desc: "La vegetación como activo diferencial que atrae a clientes que buscan bienestar real.",
  },
  {
    icon: <MapPin strokeWidth={1.5} className="w-8 h-8 text-[#ef8000]" />,
    title: "Ubicación estratégica.",
    desc: "Ubicado en el epicentro de desarrollo del norte de Cartagena, asegurando demanda constante y alta valorización por m²",
  },
];

export const WhyOliv = () => {
  return (
    <section className="py-24 bg-[#f9f9f7] text-[#333333]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-serif text-[#6a1533] mb-4"
          >
            ¿Por qué OLIV?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-xl md:text-2xl font-serif text-[#ef8000] mb-4 italic"
          >
            OLIV no Improvisa, OLIV decide. 
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-gray-500 font-sans text-lg md:text-xl font-light"
          >
            Entendemos que buscas un hogar que sea coherente con tus valores y seguro para tu patrimonio.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.2, duration: 0.6 }}
              className="flex flex-col items-center group"
            >
              <div className="w-20 h-20 rounded-full bg-[#ef8000]/10 flex items-center justify-center mb-6 group-hover:bg-[#ef8000]/20 transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-serif text-[#6a1533] mb-3">{feature.title}</h3>
              <p className="font-sans font-light text-gray-500 leading-relaxed text-sm max-w-[300px]">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
