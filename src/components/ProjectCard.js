import Link from "next/link"; // Import Link for navigation
import Image from "next/image"; // Optional, for optimized image rendering

export default function ProjectCard({ title, description, imageSrc, link }) {
  return (
    <div className="bg-base-100 border-2 border-base-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 max-w-sm w-full mx-auto">
      {/* Image section */}
      <div className="mb-4">
        <Image
          src={imageSrc}
          alt={title}
          width={300}
          height={200}
          className="w-full h-auto object-cover rounded-md"
        />
      </div>

      {/* Title */}
      <h3 className="text-2xl font-semibold text-primary mb-2">{title}</h3>

      {/* Description */}
      <p className="text-lg text-base-content mb-4">{description}</p>

      {/* Link Button */}
      <Link href={link} className="btn btn-primary w-full text-center hover:scale-105 transition-all">
        Learn More
      </Link>
    </div>
  );
}
