import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content py-6">
      <div className="container mx-auto text-center">
        <p className="text-sm">&copy; 2025 Kar. All rights reserved.</p>
        <div className="mt-4 flex justify-center gap-6">
          <a
            href="https://www.linkedin.com/in/karxuan/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin
              size={30}
              className="hover:text-primary transition-colors"
            />
          </a>
          <a
            href="https://github.com/kayyaxe"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub
              size={30}
              className="hover:text-primary transition-colors"
            />
          </a>
          <a href="mailto:chenkarxuan@gmail.com">
            <FaEnvelope
              size={30}
              className="hover:text-primary transition-colors"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
