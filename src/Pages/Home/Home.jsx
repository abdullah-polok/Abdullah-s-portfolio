import React from "react";
import back from "../../assets/24058557_sept_lock_gift_box_2.jpg";
const Home = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${back})`,
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-full">
            <h1 className="mb-5 text-7xl font-bold">I'm Abdullah Al Rahman</h1>
            <p className="mb-5 text-xl max-w-4xl text-center text-gray-400">
              I'm a Computer Science and Cybersecurity student at the{" "}
              <span className="text-white font-semibold">
                University of Kurdistan Hewlêr
              </span>
              , specializing in front-end development with{" "}
              <span className="text-white">React</span>. I build responsive,
              user-friendly web apps with a focus on performance and security.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
