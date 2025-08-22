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
          {item.points.map((p, i) => (
            <li key={i}>{p}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
