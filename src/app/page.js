import Link from "next/link"; // Make sure to import Link for navigation
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main
      className="flex flex-col items-center justify-center min-h-screen p-8 sm:p-20 bg-base-200 text-base-content transition-all duration-500"
      data-theme="winnie"
    >
      <section className="text-center mt-32">
        <h1 className="text-5xl sm:text-6xl font-bold text-primary animate__animated animate__fadeIn animate__delay-1s">
          Welcome to Kar's Creative Space 🌟
        </h1>

        <p className="mt-4 text-lg sm:text-xl text-base-content/80">
          Explore projects, discover insights, and dive into the world of
          creativity!
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/about">
            <button className="btn btn-primary w-full sm:w-auto hover:scale-105 transition-transform shadow-lg rounded-full">
              More about me 🚀
            </button>
          </Link>
          <Link href="/target-page">
            <button className="btn btn-warning w-full sm:w-auto hover:scale-105 transition-transform shadow-lg rounded-full">
              Learn More 📚
            </button>
          </Link>
        </div>
      </section>

      <section className="mt-24 text-center">
        <h2 className="text-3xl font-semibold text-neutral mb-6">
          Featured Projects 🌈
        </h2>
        <div className="grid sm:grid-cols-3 gap-8">
          <div className="card w-80 bg-base-100 shadow-2xl transition-shadow hover:shadow-lg rounded-xl">
            <figure>
              <img
                src="/project1.jpg"
                alt="Project 1"
                className="rounded-t-xl"
              />
            </figure>
            <div className="card-body">
              <h3 className="card-title">Project One 🖥️</h3>
              <p>
                A brief description of the project goes here. Fun and creative!
              </p>
              <div className="card-actions justify-end">
                <Link
                  href="/projects#project1"
                  className="btn btn-accent hover:bg-accent-focus rounded-full"
                >
                  Explore 🔍
                </Link>
              </div>
            </div>
          </div>
          <div className="card w-80 bg-base-100 shadow-2xl transition-shadow hover:shadow-lg rounded-xl">
            <figure>
              <img
                src="/project2.jpg"
                alt="Project 2"
                className="rounded-t-xl"
              />
            </figure>
            <div className="card-body">
              <h3 className="card-title">Project Two 🎨</h3>
              <p>Another amazing project. Delve into the details here.</p>
              <div className="card-actions justify-end">
                <Link
                  href="/projects#project2"
                  className="btn btn-accent hover:bg-accent-focus rounded-full"
                >
                  Explore 🔍
                </Link>
              </div>
            </div>
          </div>
          <div className="card w-80 bg-base-100 shadow-2xl transition-shadow hover:shadow-lg rounded-xl">
            <figure>
              <img
                src="/project3.jpg"
                alt="Project 3"
                className="rounded-t-xl"
              />
            </figure>
            <div className="card-body">
              <h3 className="card-title">Project Three 🎬</h3>
              <p>
                Creative and interactive project. Dive into the creative
                process.
              </p>
              <div className="card-actions justify-end">
                <Link
                  href="/projects#project3"
                  className="btn btn-accent hover:bg-accent-focus rounded-full"
                >
                  Explore 🔍
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
