import { motion } from "framer-motion";
import { Profile } from "../data/portfolio";
import { Mail, Linkedin, Github } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="section py-20 bg-zinc-900 text-white">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-10 text-brand-400"
        >
          Contact
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-zinc-300 max-w-xl mx-auto mb-8"
        >
          I’m always open to new opportunities, collaborations, or just a friendly chat. Feel free to reach out!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a href={`mailto:${Profile.email}`} className="btn">
            <Mail size={18} /> Email
          </a>
          <a href={Profile.links.linkedin} target="_blank" rel="noreferrer" className="btn">
            <Linkedin size={18} /> LinkedIn
          </a>
          <a href={Profile.links.github} target="_blank" rel="noreferrer" className="btn">
            <Github size={18} /> GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
