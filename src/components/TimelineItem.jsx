<<<<<<< HEAD
import { motion } from "framer-motion";

export default function TimelineItem({ item }) {
  const title = item.title || item.school || item.org;
  const subtitle = item.degree || item.role; // edu or exp
  const meta = item.meta;                    // e.g., "CGPA: 7.96" / "Percentage: 91.2"

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-zinc-900 p-6 rounded-2xl shadow-lg hover:shadow-brand-500/20 transition-shadow mb-6"
    >
      {/* Top row: title + period */}
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-medium text-white text-lg">{title}</h3>
        <span className="text-xs text-zinc-400 whitespace-nowrap">{item.period}</span>
      </div>

      {/* Subtitle (degree/role) */}
      {subtitle && (
        <p className="mt-2 text-sm text-zinc-300">{subtitle}</p>
      )}

      {/* Meta (CGPA / Percentage) as small pill box */}
      {meta && (
        <div className="mt-2">
          <span className="inline-block px-3 py-1 bg-zinc-800 text-xs text-brand-300 rounded-lg shadow-sm">
            {meta}
          </span>
        </div>
      )}

      {/* Optional bullet points (for experience) */}
      {Array.isArray(item.points) && item.points.length > 0 && (
        <ul className="mt-3 list-disc list-inside text-zinc-300/90 space-y-1">
=======
export default function TimelineItem({ item }) {
  return (
    <div className="relative pl-6 border-l border-white/10">
      <div className="absolute -left-[7px] top-0 h-3 w-3 rounded-full bg-brand-500"></div>
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-medium text-white">{item.title || item.school || item.org}</h3>
        <span className="text-xs text-zinc-400 whitespace-nowrap">{item.period}</span>
      </div>
      {item.degree && (
        <p className="mt-1 text-zinc-300">{item.degree}</p>
      )}
      {item.role && (
        <p className="mt-1 text-zinc-300">{item.role}</p>
      )}
      {item.meta && <p className="mt-1 text-zinc-400 text-sm">{item.meta}</p>}
      {item.points && (
        <ul className="mt-2 list-disc list-inside text-zinc-300/90 space-y-1">
>>>>>>> 32af1ee7a962c40a46c5c691461d2135d59e7ad7
          {item.points.map((p, i) => (
            <li key={i}>{p}</li>
          ))}
        </ul>
      )}
<<<<<<< HEAD

      {/* Optional description/details */}
      {item.details && (
        <p className="text-sm text-zinc-300 mt-3 leading-relaxed">{item.details}</p>
      )}
    </motion.div>
=======
    </div>
>>>>>>> 32af1ee7a962c40a46c5c691461d2135d59e7ad7
  );
}
