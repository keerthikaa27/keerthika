<<<<<<< HEAD
// src/components/Nav.jsx
import { useEffect, useState } from 'react';

const sections = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
];

export default function Nav() {
  const [active, setActive] = useState('about');
=======
import { useEffect, useState } from "react";

const sections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
];

export default function Nav() {
  const [active, setActive] = useState("about");
>>>>>>> 32af1ee7a962c40a46c5c691461d2135d59e7ad7
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
      const offsets = sections.map((s) => {
        const el = document.getElementById(s.id);
<<<<<<< HEAD
        return { id: s.id, top: el ? Math.abs(el.getBoundingClientRect().top) : Infinity };
      });
      offsets.sort((a, b) => a.top - b.top);
      if (offsets[0].top < Infinity) {
        setActive(offsets[0].id);
      }
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
=======
        if (!el) return { id: s.id, top: Infinity };
        return { id: s.id, top: Math.abs(el.getBoundingClientRect().top) };
      });
      offsets.sort((a, b) => a.top - b.top);
      setActive(offsets[0].id);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
>>>>>>> 32af1ee7a962c40a46c5c691461d2135d59e7ad7
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 backdrop-blur ${
<<<<<<< HEAD
        scrolled ? 'bg-zinc-950/70 border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <nav className="container flex items-center justify-between py-4">
        <a href="#top" className="font-display text-lg font-semibold">
          NK
        </a>
=======
        scrolled ? "bg-zinc-950/70 border-b border-white/10" : "bg-transparent"
      }`}
    >
      <nav className="container flex items-center justify-between py-4">
        <a href="#top" className="font-display text-lg font-semibold">NK</a>
>>>>>>> 32af1ee7a962c40a46c5c691461d2135d59e7ad7
        <ul className="hidden md:flex items-center gap-6 text-sm text-zinc-300">
          {sections.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
<<<<<<< HEAD
                className={`hover:text-white transition ${active === id ? 'text-white' : ''}`}
=======
                className={`hover:text-white transition ${
                  active === id ? "text-white" : ""
                }`}
>>>>>>> 32af1ee7a962c40a46c5c691461d2135d59e7ad7
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
<<<<<<< HEAD
        <a href="#contact" className="btn text-sm">
          Hire me
        </a>
      </nav>
    </header>
  );
}
=======
        <a href="#contact" className="btn text-sm">Hire me</a>
      </nav>
    </header>
  );
}
>>>>>>> 32af1ee7a962c40a46c5c691461d2135d59e7ad7
