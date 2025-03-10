import ProjectCard from "../../components/ProjectCard"; // Import the reusable ProjectCard component
import projects from "../../components/projects"; // Import the projects array
import Link from "next/link";

export default function ProjectPage() {
  return (
    <main className="p-8 sm:p-20 bg-base-200 text-base-content">
      {/* Page Title */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary flex justify-left items-center gap-2 whitespace-nowrap">
        My Projects 🎨
      </h1>

      {/* GitHub Section */}
      <p className="mt-4 text-lg text-left">
        I'm always working on new projects! For more information, check out my{" "}
        <Link
          href="https://github.com/yourgithub" // Replace with your GitHub link
          target="_blank"
          className="text-neutral text-lg  font-semibold  group transition-all duration-300"
        >
          <span className="group-hover:underline">GitHub</span>
        </Link>
      </p>

      {/* Projects Grid */}
      <section className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            imageSrc={project.imageSrc}
            link={project.link}
          />
        ))}
      </section>
    </main>
  );
}
