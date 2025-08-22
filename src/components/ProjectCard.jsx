import { motion } from "framer-motion";

export default function ProjectCard({ project }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
<<<<<<< HEAD
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="group relative rounded-xl border border-white/10 bg-zinc-900/40 p-6 hover:bg-zinc-800/60 transition-colors duration-300"
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
        <h3 className="font-display text-2xl font-semibold text-white group-hover:text-teal-400 transition-colors">
          {project.title}
        </h3>
        <span className="text-sm text-zinc-400">{project.period}</span>
      </div>

      <p className="mt-4 text-zinc-300 leading-relaxed">
        {project.description}
      </p>

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

      {project.highlights?.length > 0 && (
        <ul className="mt-4 list-disc list-inside text-zinc-400 space-y-1 text-sm">
=======
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
>>>>>>> 32af1ee7a962c40a46c5c691461d2135d59e7ad7
          {project.highlights.map((h, i) => (
            <li key={i}>{h}</li>
          ))}
        </ul>
      )}
<<<<<<< HEAD

      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-block text-sm font-medium text-teal-400 hover:text-teal-300 transition-colors"
        >
          View project →
        </a>
=======
      {project.link && (
        <a href={project.link} className="t-link mt-4 inline-block" target="_blank" rel="noreferrer">View project</a>
>>>>>>> 32af1ee7a962c40a46c5c691461d2135d59e7ad7
      )}
    </motion.article>
  );
}
