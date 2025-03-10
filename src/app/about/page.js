import {
  FaReact,
  FaNode,
  FaDatabase,
  FaPython,
  FaJava,
  FaJsSquare,
  FaBootstrap,
  FaHtml5,
  FaCss3,
} from "react-icons/fa";
import Image from "next/image";

export default function About() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8 sm:p-20 bg-base-200 text-base-content transition-all duration-500">
      {/* Title */}
      <section className="text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl  font-bold text-primary ">
          Hi I'm Kar <br /> A software engineer.
        </h1>
        <p className="mt-5 text-lg sm:text-xl text-base-content/80">
          Here's a little about my journey and the technologies I love to work
          with.
        </p>
      </section>

      <section className="mt-24 text-center">
        <h2 className="text-3xl font-bold text-accent mb-6">
          Technologies I Use
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
              icon: <FaBootstrap />,
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
                  width={70}
                  height={70}
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
              <div className="card-body hover:text-accent hover:scale-105 transition-all">
                <div className="text-6xl">{tech.icon}</div>
                <h3 className="card-title mt-4">{tech.title}</h3>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="mt-24 text-center">
        <h2 className="text-3xl font-semibold text-neutral mb-6 whitespace-nowrap">
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
