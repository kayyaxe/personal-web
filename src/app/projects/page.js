import ProjectCard from "../../components/ProjectCard"; // Import the reusable ProjectCard component
import projects from "../../components/projects"; // Import the projects array

export default function ProjectPage() {
  return (
    <main className="p-8 sm:p-20 bg-base-200 text-base-content">
      <h1 className="text-4xl font-semibold text-primary">My Projects 🌈</h1>
      <p className="mt-4 text-lg">For more information, check out my GitHub!</p>

      <section className="mt-24 text-center">
        
        <section className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {/* Map through the projects array */}
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
      </section>
    </main>
  );
}
