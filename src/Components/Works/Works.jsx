import React from "react";
import thum1 from "../../assets/thum1.PNG";
import thum2 from "../../assets/thum2.PNG";
import thum3 from "../../assets/thum3.PNG";
const projects = [
  {
    id: 1,
    title: "MERN WhatsApp Clone",
    image: thum1,
    link: "#",
  },
  {
    id: 2,
    title: "MERN TikTok Clone",
    image: thum2,
    link: "#",
  },
  {
    id: 3,
    title: "Facebook UI Clone",
    image: thum3,
    link: "#",
  },
];

const Works = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <h2 className="text-center text-gray-500 font-semibold tracking-wide mb-10">
        CHECK OUT SOME OF MY WORKS
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative group w-[180px] h-[120px] sm:w-[250px] sm:h-[150px] overflow-hidden shadow-md rounded-md  "
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover group-hover:opacity-95 transition"
            />
            {project.subtitle && (
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-transparent to-transparent text-white p-2">
                <h4 className="font-bold">{project.title}</h4>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;
