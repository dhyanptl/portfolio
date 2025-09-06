import React from "react";
import profileImg from "../assets/profile.jpg";
import pcacsLogo from "../assets/pcacs.png";

export default function Profile() {
  const skills = [
    "React",
    "Tailwind",
    "Javascript",
    "Python",
    "Git",
    "GitHub"
  ];

  return (
    <section className="min-h-screen bg-white text-gray-900 px-8 md:px-20 py-14 font-[Inter]">
      <div className="max-w-3xl mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {/* Left Content */}
          <div className="md:col-span-2 space-y-5">
            <div>
              <h1 className="text-5xl font-bold">Hi, Dhyan here</h1>
              <p className="text-lg text-gray-600">19 year old something guy</p>
            </div>

            {/* About Section */}
            <div className="space-y-3 border-b border-gray-200/65 pb-4">
              <h2 className="text-xl font-semibold">About</h2>
              <p className="text-gray-700">
                obsessed with the gap between where I am and where I could be.
              </p>
              <p className="text-gray-700">
                building the life I want through what I create.
              </p>
              <p className="text-gray-700">
                potential unrealized is potential wasted.
              </p>
            </div>
          </div>

          {/* Right Profile Photo */}
          <div className="flex justify-center md:justify-end">
            <img
              src={profileImg}
              alt="Profile"
              className="size-28 md:w-36 md:h-36 rounded-full border border-gray-300 object-cover scale-130"
            />
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-10 border-b border-gray-200/65 pb-4">
          <h2 className="text-xl font-semibold mb-3">Skills</h2>
          <div className="flex flex-wrap gap-2.5">
            {skills.map((skill, i) => (
              <span
                key={i}
                className="px-3 py-1 text-sm bg-black text-white rounded-md"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="mt-10 border-b border-gray-100 pb-4">
          <h2 className="text-xl font-semibold mb-4">Education</h2>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src={pcacsLogo}
                alt="Mumbai University"
                className="w-9 h-9 rounded-full object-contain"
              />
              <div>
                <h3 className="font-medium">Pillai College of Arts, Commerce and Science</h3>
                <p className="text-sm text-gray-600">
                  Bachelor of Computer Applications
                </p>
              </div>
            </div>
            <p className="text-sm text-gray-500">2024 – 2027</p>
          </div>
        </div>
      </div>
    </section>
  );
}
