import { motion } from "framer-motion";

export default function ProjectCard({ project }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="group relative rounded-xl border border-white/10 bg-zinc-900/40 p-6 hover:bg-zinc-800/60 transition-colors duration-300"
    >
      {/* Project Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
        <h3 className="font-display text-2xl font-semibold text-white group-hover:text-teal-400 transition-colors">
          {project.title}
        </h3>
        <span className="text-sm text-zinc-400">{project.period}</span>
      </div>

      {/* Description */}
      <p className="mt-4 text-zinc-300 leading-relaxed">{project.description}</p>

      {/* Stack */}
      {project.stack?.length > 0 && (
        <ul className="mt-4 flex flex-wrap gap-2 text-xs">
          {project.stack.map((s) => (
            <li
              key={s}
              className="rounded-full border border-white/10 px-3 py-1 text-zinc-300 group-hover:border-teal-400/40 transition-colors"
            >
              {s}
            </li>
          ))}
        </ul>
      )}

      {/* Highlights */}
      {project.highlights?.length > 0 && (
        <ul className="mt-4 list-disc list-inside text-zinc-400 space-y-1 text-sm">
          {project.highlights.map((h, i) => (
            <li key={i}>{h}</li>
          ))}
        </ul>
      )}

      {/* Link */}
      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-block text-sm font-medium text-teal-400 hover:text-teal-300 transition-colors"
        >
          View project →
        </a>
      )}
    </motion.article>
  );
}

