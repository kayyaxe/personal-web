import "./globals.css"; // Ensure global styles are imported
import Link from "next/link"; // Import Link for navigation

export const metadata = {
  title: "Kars's site",
  description: "A description of your website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="winnie">
      <body>
        {/* Header with the menu */}
        <header className="w-full absolute top-0 left-0 p-4 flex justify-center items-center bg-opacity-60 backdrop-blur-lg">
          <nav className="flex gap-8 text-2xl font-bold rounded-full p-3 shadow-lg space-x-6">
            <Link
              href="/"
              className="text-primary hover:text-secondary transition-all duration-300 rounded-full p-2 hover:bg-accent/20"
            >
              Home
            </Link>
            <Link
              href="/projects"
              className="text-primary hover:text-secondary transition-all duration-300 rounded-full p-2 hover:bg-accent/20"
            >
              Projects
            </Link>
            <Link
              href="/about"
              className="text-primary hover:text-secondary transition-all duration-300 rounded-full p-2 hover:bg-accent/20"
            >
              About
            </Link>
          </nav>
        </header>

        {/* Main content */}
        <main className="flex flex-col items-center justify-center min-h-screen p-8 sm:p-20 bg-base-200 text-base-content transition-all duration-500">
          {children}
        </main>
      </body>
    </html>
  );
}
