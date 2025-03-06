import Link from "next/link"; // Import Link for internal navigation

export default function Projects() {
  return (
    <main className="p-8 sm:p-20 bg-base-200 text-base-content">
      <h1 className="text-4xl font-semibold text-primary">My Projects</h1>
      <p className="mt-4 text-lg">Check out my exciting projects below:</p>

      <section className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="card w-80 bg-base-100 shadow-xl">
          <figure>
            <img src="/project1.jpg" alt="Project 1" className="rounded-t-xl" />
          </figure>
          <div className="card-body">
            <h3 className="card-title">Project One</h3>
            <p>
              A brief description of the project goes here. Fun and creative!
            </p>
            <div className="card-actions justify-end">
              <Link href="/projects#project1" className="btn btn-accent">
                Explore
              </Link>
            </div>
          </div>
        </div>

        <div className="card w-80 bg-base-100 shadow-xl">
          <figure>
            <img src="/project2.jpg" alt="Project 2" className="rounded-t-xl" />
          </figure>
          <div className="card-body">
            <h3 className="card-title">Project Two</h3>
            <p>Another amazing project. Delve into the details here.</p>
            <div className="card-actions justify-end">
              <Link href="/projects#project2" className="btn btn-accent">
                Explore
              </Link>
            </div>
          </div>
        </div>

        <div className="card w-80 bg-base-100 shadow-xl">
          <figure>
            <img src="/project3.jpg" alt="Project 3" className="rounded-t-xl" />
          </figure>
          <div className="card-body">
            <h3 className="card-title">Project Three</h3>
            <p>
              Creative and interactive project. Dive into the creative process.
            </p>
            <div className="card-actions justify-end">
              <Link href="/projects#project3" className="btn btn-accent">
                Explore
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
