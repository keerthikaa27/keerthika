import { motion } from "framer-motion";

export default function ProjectCard({ project }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4 }}
      className="card"
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <h3 className="font-bold text-lg text-white">{project.title}</h3>
        <span className="text-xs text-zinc-400">{project.period}</span>
      </div>
      <p className="mt-3 text-zinc-300">{project.description}</p>
      <ul className="mt-3 flex flex-wrap gap-2 text-xs">
        {project.stack.map((s) => (
          <li key={s} className="rounded-full border border-white/10 px-3 py-1 text-zinc-300">
            {s}
          </li>
        ))}
      </ul>
      {project.highlights?.length > 0 && (
        <ul className="mt-4 list-disc list-inside text-zinc-300/90 space-y-1">
          {project.highlights.map((h, i) => (
            <li key={i}>{h}</li>
          ))}
        </ul>
      )}
      {project.link && (
        <a href={project.link} className="t-link mt-4 inline-block" target="_blank" rel="noreferrer">View project</a>
      )}
    </motion.article>
  );
}
