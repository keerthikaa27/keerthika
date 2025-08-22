import { Profile } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="py-10 border-t border-white/10">
      <div className="container text-sm text-zinc-400 flex flex-col md:flex-row items-center justify-between gap-3">
        <p>
          © {new Date().getFullYear()} {Profile.name}. Built with React & Tailwind.
        </p>
        <a className="t-link" href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}
