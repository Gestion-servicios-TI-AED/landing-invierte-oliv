import { motion } from "motion/react";
import { TreeDeciduous, Layout, MapPin, Wind } from "lucide-react";

const features = [
  {
    icon: <TreeDeciduous strokeWidth={1} className="w-10 h-10 mb-4 text-[#6a1533]" />,
    title: "Baja Densidad",
    desc: "Un proyecto donde el espacio respira. 7 hectáreas de naturaleza preservada.",
  },
  {
    icon: <Layout strokeWidth={1} className="w-10 h-10 mb-4 text-[#6a1533]" />,
    title: "Espacios Amplios",
    desc: "Arquitectura pensada para la libertad. Lotes generosos y zonas comunes abiertas.",
  },
  {
    icon: <Wind strokeWidth={1} className="w-10 h-10 mb-4 text-[#6a1533]" />,
    title: "Bienestar Natural",
    desc: "Senderos ecológicos, aire puro y un entorno que invita a la desconexión.",
  },
  {
    icon: <MapPin strokeWidth={1} className="w-10 h-10 mb-4 text-[#6a1533]" />,
    title: "Norte de Cartagena",
    desc: "Ubicación estratégica de alta valorización, cerca del mar y la ciudad soñada.",
  },
];

export const Differential = () => {
  return (
    <section className="py-24 bg-[#f5f5f0] text-[#333333]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="flex flex-col items-center text-center p-6 border border-[#6a1533]/5 hover:border-[#6a1533]/20 bg-white shadow-sm hover:shadow-md transition-all duration-300 rounded-sm"
            >
              {feature.icon}
              <h3 className="text-xl font-serif text-[#6a1533] mb-3">{feature.title}</h3>
              <p className="font-sans font-light text-gray-600 leading-relaxed text-sm">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
