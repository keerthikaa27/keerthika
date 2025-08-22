import ProjectCard from "./ProjectCard";


const projects = [
  {
    title: "Portfolio Website",
    period: "2025",
    description: "A personal portfolio site built with React, Tailwind, and Framer Motion.",
    stack: ["React", "TailwindCSS", "Framer Motion"],
    highlights: [
      "Smooth animations with Framer Motion",
      "Responsive design",
      "Dynamic project data"
    ],
    link: "https://github.com/keerthika/portfolio",
  },
  {
    title: "E-commerce App",
    period: "2024",
    description: "Full-stack ecommerce application with authentication and payment integration.",
    stack: ["React", "Node.js", "MongoDB"],
    highlights: ["User authentication", "Stripe integration"],
    link: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-gray-900">
      <h2 className="text-4xl font-bold mb-12 text-center text-white">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}