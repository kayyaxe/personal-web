import "./globals.css"; // Ensure global styles are imported
import Link from "next/link"; // Import Link for navigation
import Menu from "../../src/components/Menu";
import Footer from "../../src/components/Footer";

export const metadata = {
  title: "Kars's site",
  description: "A description of your website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="winnie">
      <body>
        <Menu /> {/* Include Menu component */}
        {/* Main content */}
        <main className="flex flex-col items-center justify-center min-h-screen p-8 sm:p-20 bg-base-200 text-base-content transition-all duration-500">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
