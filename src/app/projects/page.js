import ProjectCard from "../../components/ProjectCard"; // Import the reusable ProjectCard component
import projects from "../../components/projects"; // Import the projects array
import Link from "next/link";
import {
  FaReact,
  FaNode,
  FaDatabase,
  FaPython,
  FaJava,
  FaJsSquare,
  FaHtml5,
  FaCss3,
} from "react-icons/fa";
import Image from "next/image";

export default function ProjectPage() {
  return (
    <main className="p-8 sm:p-20 bg-base-200 text-base-content">
      {/* Page Title */}
      <h1
        style={{ fontFamily: "coffee, sans-serif" }}
        className="text-4xl sm:text-5xl md:text-6xl  text-primary flex justify-left items-center gap-2 whitespace-nowrap"
      >
        My Projects 🎨
      </h1>

      {/* GitHub Section */}
      <p className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl font-medium  text-left">
        I'm always working on new projects! For more information, check out my{" "}
        <Link
          href="https://github.com/yourgithub" // Replace with your GitHub link
          target="_blank"
          className="text-primary sm:text-lg md:text-xl lg:text-2xl font-semibold text-left group transition-all duration-300"
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
      {/* Technologies Section */}
      <section className="mt-24 text-center">
        <h2 className="text-3xl font-bold text-info-content mb-6 flex justify-left">
          Technologies behind my projects
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
          {[
            {
              icon: <FaPython />,
              title: "Python",
              link: "https://www.python.org",
            },
            {
              icon: <FaJava />,
              title: "Java",
              link: "https://www.oracle.com/java/",
            },
            {
              icon: <FaJsSquare />,
              title: "JavaScript",
              link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
            },
            {
              icon: (
                <Image
                  src="/SpringBoot.svg"
                  alt="Spring Boot"
                  width={60}
                  height={60}
                />
              ),
              title: "Spring Boot",
              link: "https://spring.io/projects/spring-boot",
            },
            {
              icon: <FaHtml5 />,
              title: "HTML",
              link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
            },
            {
              icon: <FaCss3 />,
              title: "CSS",
              link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
            },
            { icon: <FaReact />, title: "React", link: "https://reactjs.org" },
            { icon: <FaNode />, title: "Node.js", link: "https://nodejs.org" },
            {
              icon: <FaDatabase />,
              title: "PostgreSQL",
              link: "https://www.postgresql.org",
            },
            {
              icon: (
                <Image
                  src="/next.svg"
                  alt="Next.js logo"
                  width={60}
                  height={60}
                />
              ),
              title: "Next.js",
              link: "https://nextjs.org",
            },
          ].map((tech, index) => (
            <a
              key={index}
              href={tech.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="card-body flex flex-col items-center justify-center hover:scale-105 transition-all">
                <div className="text-6xl">{tech.icon}</div>
                <h3 className="card-title mt-4 hover:text-info-content">
                  {tech.title}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
