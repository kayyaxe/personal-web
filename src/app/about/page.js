import { motion } from "framer-motion"; // Optional animation for smooth transitions

export default function About() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8 sm:p-20 bg-base-200 text-base-content transition-all duration-500">
      {/* Title */}
      <section className="text-center">
        <h1 className="text-5xl sm:text-6xl font-bold text-primary animate__animated animate__fadeIn animate__delay-1s">
          About Me
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-base-content/80">
          Hello! I'm Kars, a passionate software engineer. Here's a little about
          my journey and the technologies I love to work with.
        </p>
      </section>

      {/* Technologies Section */}
      <section className="mt-24 text-center">
        <h2 className="text-3xl font-semibold text-neutral mb-6">
          Technologies I Use
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Technology Cards */}
          {[
            {
              title: "Next.js",
              description:
                "A React framework for building static and dynamic web applications with great developer experience.",
            },
            {
              title: "React",
              description:
                "A powerful JavaScript library for building user interfaces, allowing for reusable components.",
            },
            {
              title: "Tailwind CSS",
              description:
                "A utility-first CSS framework for quickly building custom designs without having to leave your HTML.",
            },
            {
              title: "DaisyUI",
              description:
                "A plugin for Tailwind CSS that provides a set of customizable components and themes.",
            },
            {
              title: "PostgreSQL",
              description:
                "A powerful open-source relational database system used for handling structured data.",
            },
            {
              title: "JavaScript",
              description:
                "A versatile programming language used for both frontend and backend development.",
            },
          ].map((tech, index) => (
            <div className="card-body">
              <h3 className="card-title">{tech.title}</h3>
              <p>{tech.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="mt-24 text-center">
        <h2 className="text-3xl font-semibold text-neutral mb-6">
          Let's Connect!
        </h2>
        <p className="text-lg sm:text-xl text-base-content/80">
          Feel free to reach out if you'd like to collaborate or discuss
          tech-related topics!
        </p>
        <div className="mt-6 flex gap-4 justify-center">
          <a
            href="mailto:your-email@example.com"
            className="btn btn-primary hover:scale-105 transition-transform shadow-lg"
          >
            Contact Me
          </a>
          <a
            href="https://github.com/yourgithub"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary hover:scale-105 transition-transform shadow-lg"
          >
            GitHub
          </a>
        </div>
      </section>
    </main>
  );
}
