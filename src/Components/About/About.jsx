import React from "react";
import pic1 from "../../assets/WhatsApp Image 2025-06-19 at 4.20.53 PM (4).jpeg";
const About = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center px-6 py-10">
      <div className="max-w-5xl w-full flex flex-col md:flex-row items-center md:items-start gap-10">
        {/* Profile Image */}
        <div className="flex-shrink-0">
          <img
            src={pic1} // replace with your actual image path
            alt="Profile"
            className="rounded-full w-48 h-48 object-cover"
          />
        </div>

        {/* About & Contact */}
        <div className="flex-1">
          {/* About Section */}
          <h2 className="text-xl font-bold mb-2">About Me</h2>
          <p className="text-gray-300 mb-6">
            I am Abdullah a Cybersecurity student and React developer passionate
            about building secure modern web applications
          </p>

          {/* Contact Section */}
          <h3 className="text-xl font-bold mb-2">Contact Details</h3>
          <p className="text-gray-300">
            Abdullah Al Rahman <br />
            Erbil,Iraq <br />
            +964 0750 389 8304 <br />
            abdullahalrahman23@gmail.com
          </p>

          {/* Download Resume Button */}
          <div className="mt-4">
            <a
              href="/resume.pdf" // replace with your actual resume file path
              download
              className="inline-flex items-center px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded shadow text-white font-semibold"
            >
              <span className="mr-2">⬇️</span> Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
