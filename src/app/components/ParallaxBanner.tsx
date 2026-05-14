import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import bannerImage from "@/assets/4da0979aa78ce985dcf7d5df3d33541fb09f2bc4.webp";

export const ParallaxBanner = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={ref} className="relative h-[60vh] overflow-hidden flex items-center justify-center">
      <motion.div
        style={{ y }}
        className="absolute w-full h-[120%] -top-[10%] left-0 z-0"
      >
        <img
          src={bannerImage}
          alt="Familia disfrutando en OLIV"
          className="w-full h-full object-cover"
          loading="lazy"
          decoding="async"
        />
      </motion.div>

      {/* Dark Overlay for Contrast */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* Text Content */}
      <div className="relative z-20 container mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight drop-shadow-lg max-w-5xl mx-auto"
        >
          La certeza de decidir con criterio, <br className="hidden md:block" />
          <span className="italic">es buen vivir.</span>
        </motion.h2>
      </div>
    </section>
  );
};
