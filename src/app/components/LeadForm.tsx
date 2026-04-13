import { useEffect, useRef } from "react";
import { motion } from "motion/react";

export const LeadForm = () => {
  const formContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = formContainerRef.current;
    if (!container) return;

    // Limpiar cualquier formulario anterior
    container.innerHTML = "";

    // Pequeño delay para que no colisione con el primer formulario
    const timeout = setTimeout(() => {
      const formDiv = document.createElement("div");
      formDiv.className = "hs-form-frame";
      formDiv.setAttribute("data-region", "na1");
      formDiv.setAttribute("data-form-id", "7adbe838-b74a-47a7-9b35-ae427337e5a3");
      formDiv.setAttribute("data-portal-id", "50442232");
      container.appendChild(formDiv);
    }, 500);

    return () => {
      clearTimeout(timeout);
      container.innerHTML = "";
    };
  }, []);

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
          <div ref={formContainerRef} className="w-full"></div>
        </motion.div>
      </div>
    </section>
  );
};
