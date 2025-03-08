import Link from "next/link"; 
import Image from "next/image"; 

export default function ProjectCard({ title, description, imageSrc, link }) {
  return (
    <div className="card max-w-sm w-full bg-base-100 shadow-xl">
      {/* Image Section */}
      <figure>
        <Image 
          src={imageSrc} 
          alt={title} 
          width={300} 
          height={200} 
          className="rounded-t-xl w-full h-auto object-cover" 
        />
      </figure>

      {/* Card Body */}
      <div className="card-body text-left">
        <h3 className="card-title text-xl font-bold text-neutral tracking-wide">{title}</h3>
        <p className="text-lg text-base-content leading-relaxed">
        {description}</p>

        {/* Button */}
        <div className="card-actions justify-end">
          <Link href={link} className="btn btn-accent hover:scale-105">
            Explore
          </Link>
        </div>
      </div>
    </div>
  );
}
