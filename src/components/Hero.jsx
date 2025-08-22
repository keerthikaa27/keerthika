import { motion } from "framer-motion";
import { Profile } from "../data/portfolio";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  const nameParts = Profile.name.split(" "); // split your name into words

  return (
    <section id="top" className="section pt-16">
      <div className="container grid md:grid-cols-[1.3fr_1fr] gap-10 items-center">
        
        {/* Left: Text */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-display text-4xl md:text-6xl font-semibold text-white mb-6"
          >
            Hi, I'm{" "}
            {nameParts.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.3 }}
                className="inline-block mr-2 text-brand-400"
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg md:text-xl text-zinc-300 max-w-3xl leading-relaxed"
          >
            {Profile.title}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-6 max-w-2xl text-zinc-400"
          >
            {Profile.summary}
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-8 flex items-center gap-4"
          >
            <a className="btn" href={Profile.links.github} target="_blank" rel="noreferrer">
              <Github size={18} /> GitHub
            </a>
            <a className="btn" href={Profile.links.linkedin} target="_blank" rel="noreferrer">
              <Linkedin size={18} /> LinkedIn
            </a>
            <a className="btn" href={`mailto:${Profile.email}`}>
              <Mail size={18} /> Email
            </a>
          </motion.div>
        </div>

        {/* Right: Profile Picture */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="flex justify-center md:justify-end"
        >
          <img
            src="/profile.jpg.jpg"
            alt={Profile.name}
            className="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-brand-500 shadow-lg object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
