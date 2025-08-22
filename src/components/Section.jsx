export default function Section({ id, title, children, intro }) {
  return (
    <section id={id} className="section">
      <div className="container">
        <div className="mb-8">
          <h2 className="section-title">{title}</h2>
          {intro && <p className="mt-3 text-zinc-400 max-w-2xl">{intro}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}
