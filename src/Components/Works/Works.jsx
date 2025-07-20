import React from "react";

const projects = [
  {
    id: 1,
    title: "MERN WhatsApp Clone",
    image: "/assets/whatsapp-clone.jpg",
    link: "#",
  },
  {
    id: 2,
    title: "MERN TikTok Clone",
    image: "/assets/tiktok-clone.jpg",
    link: "#",
  },
  {
    id: 3,
    title: "Facebook UI Clone",
    image: "/assets/facebook-ui.jpg",
    link: "#",
  },
  {
    id: 4,
    title: "Hotel Booking Website",
    image: "/assets/hotel-site.jpg",
    link: "#",
  },
  {
    id: 5,
    title: "Netflix Clone",
    image: "/assets/netflix-clone.jpg",
    link: "#",
  },
];

const Works = () => {
  return (
    <section className="mt-12 px-4 text-center">
      <h3 className="text-xl font-semibold text-gray-500 mb-8 tracking-wide uppercase">
        Check out some of my works.
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center">
        {projects.map((project) => (
          <a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform duration-300 hover:scale-105"
          >
            <img
              src={project.image}
              alt={project.title}
              className="rounded-md shadow-md max-w-xs"
            />
          </a>
        ))}
      </div>
    </section>
  );
};

export default Works;
