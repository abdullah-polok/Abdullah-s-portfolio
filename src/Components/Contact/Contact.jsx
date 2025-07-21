import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-12 flex justify-center items-center">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left - Contact Form */}
        <div>
          <div className="mb-8">
            <img
              src="/images/mail-icon.png"
              alt="Mail Icon"
              className="w-10 mb-4"
            />
          </div>
          <form className="space-y-6">
            <div>
              <label className="block mb-1 text-sm font-semibold">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="w-full bg-zinc-800 border-none p-2 text-white"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-semibold">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                className="w-full bg-zinc-800 border-none p-2 text-white"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-semibold">
                Subject
              </label>
              <input
                type="text"
                className="w-full bg-zinc-800 border-none p-2 text-white"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-semibold">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                rows="6"
                className="w-full bg-zinc-800 border-none p-2 text-white"
              ></textarea>
            </div>
            <button className="bg-white text-black px-4 py-2 font-semibold text-sm">
              SUBMIT
            </button>
          </form>
        </div>

        {/* Right - Contact Info */}
        <div className="text-sm md:pt-12">
          <h4 className="text-white font-semibold mb-2">Address and Phone</h4>
          <p className="text-gray-400">Sonny Sangha</p>
          <p className="text-gray-400">123 Fake Street</p>
          <p className="text-gray-400">London, UK ABC 123</p>
          <p className="text-gray-400">+44 12 345 6789</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
