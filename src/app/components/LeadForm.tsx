import { motion } from "motion/react";
import { HubSpotForm } from "./HubSpotForm";

export const LeadForm = () => {
  return (
    <section id="lead-form" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif text-[#6a1533] mb-4">
            Asegura tu rentabilidad en el Plan Fundadores
          </h2>
          <p className="text-gray-500 font-sans max-w-2xl mx-auto">
            Los proyectos más exitosos no son los que prometen más, sino los que se diseñan con criterio.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-[#f9f9f7] p-6 md:p-12 rounded-sm shadow-sm border border-[#f0f0e0]"
        >
          <HubSpotForm targetId="hs-form-leadform" />
          <p className="mt-4 text-center text-xs text-gray-600 font-sans font-semibold">
            Al enviar aceptas nuestra{" "}
            <a
              href="https://olivcartagena.com/politica-de-tratamiento-de-datos"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-[#6a1533] transition-colors"
            >
              política de tratamiento de datos
            </a>{" "}
            y ser contactado por OLIV Cartagena vía WhatsApp.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
