// --- file: src/App.jsx ---
import { motion } from "framer-motion";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Section from "./components/Section";
import ProjectCard from "./components/ProjectCard";
import TimelineItem from "./components/TimelineItem";
import Footer from "./components/Footer";
import { Profile, projects, experience, Education, skills, achievements } from "./data/portfolio";

export default function App() {
  return (
    <div className="bg-dark text-light font-sans">
      <Nav />
      <main>
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
<Section id="about" title="About" className="bg-dark">
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="grid md:grid-cols-[1.3fr_1fr] gap-8"
  >
    {/* Left: About text */}
    <p className="text-gray leading-relaxed">
      I'm {Profile.name}, a CSE Undergrad at VIT-AP University. I enjoy
      building clean, accessible, and performance-minded web experiences
      and data tools. I'm curious, collaborative, and always learning.
    </p>

    {/* Right: Contact details */}
    <div className="card text-sm md:text-right space-y-3">
      <div>
        <span className="text-gray font-medium">Location:</span>{" "}
        <span>{Profile.location}</span>
      </div>
      <div>
        <span className="text-gray font-medium">Email:</span>{" "}
        <a className="t-link" href={`mailto:${Profile.email}`}>
          {Profile.email}
        </a>
      </div>
      <div>
        <span className="text-gray font-medium">Phone:</span>{" "}
        <span>{Profile.phone}</span>
      </div>
    </div>
  </motion.div>
</Section>


        {/* Experience Section */}
        <Section id="experience" title="Experience" className="bg-[#112240]" intro="Clubs, internships, and training that shaped my skills.">
          <div className="space-y-8">
            {experience.map((item, i) => (
              <TimelineItem
                key={i}
                item={{
                  title: item.org,
                  role: item.role,
                  period: item.period,
                  points: item.points,
                }}
              />
            ))}
          </div>
        </Section>

        {/* Projects Section */}
        <Section id="projects" title="Projects" className="bg-dark" intro="A selection of things I've built or contributed to.">
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <ProjectCard project={p} />
              </motion.div>
            ))}
          </div>
        </Section>

        {/* Skills Section */}
        <Section id="skills" title="Skills" className="bg-[#112240]">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card">
              <h3 className="font-medium text-light">Technical</h3>
              <div className="mt-3 grid grid-cols-2 gap-2 text-sm">
                <SkillGroup title="Programming Languages"  items= {skills.ProgrammingLanguages} />
                <SkillGroup title="Frameworks & Libraries"  items= {skills.Frameworks} />
                <SkillGroup title="Web Technologies"  items= {skills.WebTechnologies} />
                <SkillGroup title="Database"  items= {skills.Database} />
                <SkillGroup title="Cloud/DevOps"  items= {skills.Cloud} />
                <SkillGroup title="CS Fundamentals"  items= {skills.CS_Fundamentals} />
                <SkillGroup title="Tools"  items= {skills.Tools} />
              </div>
            </div>
            <div className="card">
              <h3 className="font-medium text-light">Professional</h3>
              <div className="mt-3 grid grid-cols-2 gap-2 text-sm">
                <SkillGroup title="Soft Skills"  items={skills.Softskills} />
                <SkillGroup title="Languages"  items={skills.Languages} />
              </div>
            </div>
          </div>
        </Section>

        {/* Education Section */}
        <Section id="education" title="Education" className="bg-dark">
          <div className="space-y-8">
            {Education.map((ed, i) => (
              <TimelineItem
                key={i}
                item={{
                  school: ed.school,
                  degree: ed.degree,
                  period: ed.period,
                  meta: ed.meta,
                }}
              />
            ))}
          </div>
        </Section>

        {/* Achievements Section */}
        <Section id="achievements" title="Achievements" className="bg-[#112240]">
          <ul className="card list-disc list-inside text-gray space-y-2">
            {achievements.map((a, i) => (
              <li key={i}>{a}</li>
            ))}
          </ul>
        </Section>

        {/* Contact Section */}
        <Section id="contact" title="Contact" className="bg-dark" intro="Want to collaborate or have an opportunity? I'd love to hear from you.">
          <div className="card">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <p className="text-gray">Email is the best way to reach me.</p>

                <a className="t-link" href={`mailto:${Profile.email}`}>{Profile.email}</a>
              </div>
              <div className="flex items-center gap-3">
                <a className="btn" href={Profile.links.github} target="_blank" rel="noreferrer">GitHub</a>
                <a className="btn" href={Profile.links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
              </div>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}

function SkillGroup({ title, items }) {
  return (
    <div>
      <div className="text-xs uppercase tracking-widest text-gray">{title}</div>
      <div className="mt-1 flex flex-wrap gap-2">
        {items.map((s) => (
          <span
            key={s}
            className="rounded-full border border-white/10 px-3 py-1 text-sm text-gray"
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}