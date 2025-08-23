import { motion } from "framer-motion";
import { skills } from "../data/portfolio";

export default function Skills() {
  return (
    <section
      id="skills"
      className="section py-20"
      style={{ backgroundColor: "#0a192f", color: "white" }}
    >
      <div className="container mx-auto px-6">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-12 text-white"
        >
          Skills
        </motion.h2>

        {/* Grid with two boxes */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Technical */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-zinc-900 p-8 rounded-2xl shadow-lg hover:shadow-brand-500/20 transition-shadow"
          >
            <h3 className="text-xl font-semibold mb-6 text-brand-300">Technical</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { title: "Languages", items: skills.ProgrammingLanguages },
                { title: "Frameworks & Libraries", items: skills.Frameworks },
                { title: "Web", items: skills.WebTechnologies },
                { title: "Database", items: skills.Database },
                { title: "Cloud", items: skills.Cloud },
                { title: "Tools", items: skills.Tools },
                { title: "CS Fundamentals", items: skills.CS_Fundamentals },
              ].map((group) => (
                <div
                  key={group.title}
                  className={group.title === "CS Fundamentals" ? "sm:col-span-2" : ""}
                >
                  <h4 className="text-sm text-zinc-400 uppercase mb-2">{group.title}</h4>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((skill, i) => (
                      <motion.span
                        key={i}
                        whileHover={{ scale: 1.05, y: -2, boxShadow: "0 4px 12px rgba(59, 130, 246, 0.4)" }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="px-3 py-1 bg-zinc-800 rounded-lg text-sm cursor-default select-none"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Professional */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-zinc-900 p-8 rounded-2xl shadow-lg hover:shadow-brand-500/20 transition-shadow"
          >
            <h3 className="text-xl font-semibold mb-6 text-brand-300">Professional</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { title: "Soft Skills", items: skills.Softskills },
                { title: "Languages", items: skills.Languages },
              ].map((group) => (
                <div key={group.title}>
                  <h4 className="text-sm text-zinc-400 uppercase mb-2">{group.title}</h4>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((skill, i) => (
                      <motion.span
                        key={i}
                        whileHover={{ scale: 1.05, y: -2, boxShadow: "0 4px 12px rgba(59, 130, 246, 0.4)" }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="px-3 py-1 bg-zinc-800 rounded-lg text-sm cursor-default select-none"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
