import { motion } from "motion/react";
import { Check } from "lucide-react";

const steps = [
  {
    title: "Paso 1: Únete a la Lista 0.",
    desc: "Regístrate hoy y asegura el precio de entrada más competitivo para maximizar tu plusvalía",
  },
  {
    title: "Paso 2: Elige con Criterio:",
    desc: "Selecciona la unidad con mejor proyección de renta y ubicación antes del lanzamiento oficial",
  },
  {
    title: "Paso 3: Asegura tu Patrimonio:",
    desc: "Consolida un legado sólido en el proyecto con la visión a largo plazo más coherente de Cartagena.",
  },
];

export const Investment = () => {
  return (
    <section id="investment" className="py-32 bg-[#6a1533] text-white relative overflow-hidden">
      {/* Abstract Background Element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#ef8000] opacity-5 transform skew-x-12 translate-x-1/2"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-serif leading-tight max-w-4xl mx-auto"
          >
            Tu camino hacia una <span className="text-[#ef8000] italic">inversión consciente</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="mb-6 relative">
                <div className="w-16 h-16 rounded-full border border-[#ef8000]/30 flex items-center justify-center bg-white/5 backdrop-blur-sm group-hover:bg-[#ef8000]/20 transition-all duration-300">
                  <Check className="w-8 h-8 text-[#ef8000]" strokeWidth={2.5} />
                </div>
              </div>
              <h3 className="text-xl font-serif text-[#ef8000] mb-4">
                {step.title}
              </h3>
              <p className="text-[#f5f5f0] font-sans text-base font-light opacity-90 leading-relaxed max-w-[280px]">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
