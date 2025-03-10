// components/Header.js
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full absolute top-0 left-0 p-2 sm:p-4  flex justify-center items-center bg-opacity-60 backdrop-blur-lg">
      <nav className="flex text-lg sm:text-xl font-bold rounded-full p-2 sm:p-3 shadow-lg space-x-6 justify-between items-center">
        <Link
          href="/"
          className="text-primary hover:text-warning transition-all duration-300 rounded-full p-1 sm:p-2"
        >
          Home
        </Link>
        <Link
          href="/projects"
          className="text-primary hover:text-warning transition-all duration-300 rounded-full p-1 sm:p-2  "
        >
          Projects
        </Link>
        <Link
          href="/about"
          className="text-primary hover:text-warning transition-all duration-300 rounded-full  p-1 sm:p-2  "
        >
          About
        </Link>
      </nav>
    </header>
  );
}
