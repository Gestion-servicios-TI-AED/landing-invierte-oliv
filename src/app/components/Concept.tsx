import { motion } from "motion/react";
import { HubSpotForm } from "./HubSpotForm";

export const Concept = () => {

  return (
    <section id="concept" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-start gap-12">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-2/5 order-2 lg:order-1"
          >
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-5xl font-serif text-[#6a1533] leading-tight mb-8">
                Cartagena crece. <br />
                <span className="italic font-light">¿Tu inversión también?</span>
              </h2>
              <div className="prose prose-lg text-gray-600 font-sans font-light leading-relaxed">
                <p className="mb-6">
                  En un mercado de promesas rápidas, la verdadera valorización nace de las decisiones conscientes.
                </p>
                <p className="mb-6">
                  Invertir bien es entender que la calidad de vida y la rentabilidad deben caminar juntas.
                </p>
                <p>
                  Al elegir un proyecto donde cada decisión estratégica está diseñada para proteger tu valorización, aseguras un activo que se disfruta hoy y se valora inevitablemente en el futuro.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Form Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-3/5 w-full order-1 lg:order-2"
          >
             <div className="relative z-10 bg-white p-5 md:p-8 rounded-xl shadow-2xl border border-gray-100 w-full">
               <div className="mb-4">
                 <h3 className="text-xl md:text-2xl font-serif text-[#6a1533] mb-2 leading-tight">Asegura tu rentabilidad en el Plan Fundadores</h3>
                 <p className="text-gray-500 font-sans text-xs md:text-sm">Los proyectos más exitosos no son los que prometen más, sino los que se diseñan con criterio.</p>
               </div>
               
               <HubSpotForm targetId="hs-form-concept" />
               <p className="mt-4 text-center text-xs text-gray-400 font-sans font-light">
                 Al enviar este formulario, aceptas las{" "}
                 <a
                   href="https://olivcartagena.com/politica-de-tratamiento-de-datos"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="underline hover:text-[#6a1533] transition-colors"
                 >
                   condiciones y tratamiento de datos personales
                 </a>
                 .
               </p>
             </div>
             
             {/* Decorative background element behind the card */}
             <div className="absolute top-10 right-10 w-full h-full bg-[#f5f5f0] -z-10 rounded-xl hidden lg:block transform translate-x-4 translate-y-4"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
