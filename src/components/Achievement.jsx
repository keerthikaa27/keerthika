import { motion } from "framer-motion";
import { achievements } from "../data/portfolio";

export default function Achievements() {
  return (
    <section id="achievements" className="section py-20 bg-zinc-950 text-white">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-10 text-brand-400"
        >
          Achievements
        </motion.h2>

        <div className="space-y-4">
          {achievements.map((ach, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-zinc-900 p-4 rounded-xl shadow-md hover:shadow-brand-500/30 transition-shadow"
            >
              {ach}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
