import React from "react";

const Experience = () => {
  const skills = [
    { name: "ReactJS", level: 100 },
    { name: "CSS", level: 90 },
    { name: "Git & GitHub", level: 60 },
    { name: "Figma && Adobe XD", level: 50 },
    { name: "HTML5", level: 80 },
    { name: "MongoDB", level: 80 },
    { name: "TailwindCSS", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "Firebase", level: 75 },
    { name: "ExpressJS", level: 60 },
    { name: "Bootstrap", level: 70 },
    { name: "C/C++", level: 55 },
  ];

  const SkillBar = ({ name, level }) => (
    <div className="mb-4">
      <p className="text-sm font-bold tracking-widest mb-1">
        {name.toUpperCase()}
      </p>
      <div className="h-8 bg-gray-300 rounded">
        <div
          className="h-8 bg-gray-800 rounded"
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );
  return (
    <div className="bg-white text-gray-900 px-6 py-12 max-w-5xl mx-auto">
      {/* Profile Summary */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-2">Abdullah Al Rahman</h2>
        <p className="text-gray-700 mb-2">
          BSc Computer Science and Cybersecurity student at the University of
          Kurdistan Hewlêr (UKH). Passionate about IT, working as a junior web
          developer specializing in React. Focused on building high-quality and
          impactful web solutions.
        </p>
        <p className="text-sm text-gray-600">
          📍 Erbil, Iraq • 📞 +964 750 389 8304 • 📧
          abdullah.alrahman@ukh.edu.krd
        </p>
      </section>

      {/* Education */}
      <section className="mb-12">
        <h3 className="text-xl font-semibold border-b-2 border-teal-500 mb-4">
          Education
        </h3>
        <div>
          <h4 className="font-bold">University of Kurdistan Hewlêr (UKH)</h4>
          <p className="italic text-gray-600">
            BSc in Computer Science and Cybersecurity • Sep 2023 – Present
          </p>
          <p className="text-gray-700">Currently in 3rd year</p>
        </div>
        <div className="mt-4">
          <h4 className="font-bold">BAF Shaheen College</h4>
          <p className="italic text-gray-600">
            Higher Secondary Certificate • 2017 – 2021
          </p>
        </div>
      </section>

      {/* Experience */}
      {/* <section className="mb-12">
        <h3 className="text-xl font-semibold border-b-2 border-teal-500 mb-4">
          Experience
        </h3>
        <div>
          <h4 className="font-bold">Programming Club Coordinator</h4>
          <p className="italic text-gray-600">
            University of Kurdistan Hewlêr (UKH)
          </p>
          <p className="text-gray-700">
            Led event planning, mentored peers, and promoted tech events at UKH.
          </p>
        </div>
      </section> */}

      {/* Projects
      <section className="mb-12">
        <h3 className="text-xl font-semibold border-b-2 border-teal-500 mb-4">
          Projects
        </h3>
        <div className="mb-6">
          <h4 className="font-bold">UKH Code AI Website</h4>
          <p className="text-gray-700">
            Built with ReactJS, Firebase, Firestore, TailwindCSS, React Router,
            DaisyUI, Gemini. Includes authentication and integrated AI features.
          </p>
        </div>
        <div className="mb-6">
          <h4 className="font-bold">Event Management System</h4>
          <p className="text-gray-700">
            Cross-platform Windows app using ReactJS, ElectronJS, Firebase,
            ImgBB API, and EmailJS. Features: Authentication, Email automation.
          </p>
        </div>
        <div>
          <h4 className="font-bold">UKH Programming Club Website</h4>
          <p className="text-gray-700">
            Tech stack: ReactJS, Firebase, Firestore, TailwindCSS, React Router,
            DaisyUI, Framer Motion, Judge0 API. Features: Authentication,
            Private/Admin Routes.
          </p>
        </div>
      </section> */}

      {/* Awards & Achievements */}
      <section>
        <h3 className="text-xl font-semibold border-b-2 border-teal-500 mb-4">
          Awards & Achievements
        </h3>
        <ul className="list-disc list-inside text-gray-700">
          <li>
            🥈 2nd Place – SoftSpace Tech Competition (Feb 2024), Koya
            University
            <br />• Problem-solving category, sponsored by Fastlink
          </li>
          <li>
            🏅 National Air Rover Scout (2017–2018) – Received excellent
            recognition
          </li>
        </ul>
      </section>
      {/* Languages */}
      <section className="mt-12">
        <h3 className="text-xl font-semibold border-b-2 border-teal-500 mb-4">
          Languages
        </h3>
        <ul className="list-disc list-inside text-gray-700">
          <li>English – Proficient (PTE Academic: 56, CEFR Level B2)</li>
          <li>Kurdish – Beginner</li>
        </ul>
      </section>

      {/* Skills */}
      <section className="mt-12">
        <h3 className="text-xl font-semibold border-b-2 border-teal-500 mb-4">
          Skills
        </h3>
        <p className="text-gray-500 text-sm mb-6">
          Here you can create a short write-up of your skills to show off to
          employers
        </p>
        {skills.map((skill, index) => (
          <SkillBar key={index} name={skill.name} level={skill.level} />
        ))}
      </section>
    </div>
  );
};

export default Experience;
