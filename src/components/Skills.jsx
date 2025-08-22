import { motion } from "framer-motion";
import { skills } from "../data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="section py-20 bg-zinc-950 text-white">
      <div className="container mx-auto px-6">
        
        {/* Heading (LEFT aligned) */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-12 text-white"
        >
          Skills
        </motion.h2>

        {/* Grid with two main boxes */}
        <div className="grid md:grid-cols-2 gap-10">
          
          {/* Technical */}
          <div className="bg-zinc-900 p-8 rounded-2xl shadow-lg hover:shadow-brand-500/20 transition-shadow">
            <h3 className="text-xl font-semibold mb-6 text-brand-300">Technical</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <h4 className="text-sm text-zinc-400 uppercase mb-2">Languages</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.ProgrammingLanguages.map((lang, i) => (
                    <span key={i} className="px-3 py-1 bg-zinc-800 rounded-lg text-sm">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm text-zinc-400 uppercase mb-2">Frameworks & Libraries</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.Frameworks.map((fw, i) => (
                    <span key={i} className="px-3 py-1 bg-zinc-800 rounded-lg text-sm">
                      {fw}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm text-zinc-400 uppercase mb-2">Web</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.WebTechnologies.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-zinc-800 rounded-lg text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm text-zinc-400 uppercase mb-2">Database</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.Database.map((db, i) => (
                    <span key={i} className="px-3 py-1 bg-zinc-800 rounded-lg text-sm">
                      {db}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm text-zinc-400 uppercase mb-2">Cloud</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.Cloud.map((cloud, i) => (
                    <span key={i} className="px-3 py-1 bg-zinc-800 rounded-lg text-sm">
                      {cloud}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm text-zinc-400 uppercase mb-2">Tools</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.Tools.map((tool, i) => (
                    <span key={i} className="px-3 py-1 bg-zinc-800 rounded-lg text-sm">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div className="sm:col-span-2">
                <h4 className="text-sm text-zinc-400 uppercase mb-2">CS Fundamentals</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.CS_Fundamentals.map((fund, i) => (
                    <span key={i} className="px-3 py-1 bg-zinc-800 rounded-lg text-sm">
                      {fund}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Professional */}
          <div className="bg-zinc-900 p-8 rounded-2xl shadow-lg hover:shadow-brand-500/20 transition-shadow">
            <h3 className="text-xl font-semibold mb-6 text-brand-300">Professional</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <h4 className="text-sm text-zinc-400 uppercase mb-2">Soft Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.Softskills.map((soft, i) => (
                    <span key={i} className="px-3 py-1 bg-zinc-800 rounded-lg text-sm">
                      {soft}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-sm text-zinc-400 uppercase mb-2">Languages</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.Languages.map((lang, i) => (
                    <span key={i} className="px-3 py-1 bg-zinc-800 rounded-lg text-sm">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
