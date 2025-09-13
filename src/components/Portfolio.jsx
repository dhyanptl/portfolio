// components/Portfolio.jsx
import React, { useState } from "react";
import Project from "./Project";
import { projects } from "../data/projects"; // Import the projects data

export default function Portfolio() {
  const [selectedType, setSelectedType] = useState("");
  const [selectedDomain, setSelectedDomain] = useState("");

  // Filter projects
  const filteredProjects = projects.filter((p) => {
    return (
      (selectedType ? p.type === selectedType : true) &&
      (selectedDomain ? p.domain === selectedDomain : true)
    );
  });

  // Get unique values
  const types = [...new Set(projects.map((p) => p.type))];
  const domains = [...new Set(projects.map((p) => p.domain))];

  return (
    <section className="min-h-screen bg-white text-gray-900 px-8 md:px-20 py-16 font-[Inter]">
      <div className="max-w-5xl mx-auto">
        
        {/* Top Bar with Active-Only Filter Animations */}
        <div className="border-b border-gray-100 pb-8 mb-12">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <h1 className="text-4xl font-bold text-gray-900">Projects</h1>
            
            <div className="flex flex-wrap items-center gap-5">
              <div className="flex items-center gap-2.5">
                <span className="text-xs font-bold text-gray-800 uppercase tracking-wider px-2 py-1 bg-gray-150 rounded">
                  Type
                </span>
                <div className="flex gap-1">
                  {["All", ...types].map((t) => (
                    <button
                      key={t}
                      onClick={() => setSelectedType(t === "All" ? "" : t)}
                      className={`px-3 py-1.5 text-xs font-medium rounded transition-all duration-150 border transform active:scale-95 active:translate-y-0.5 ${
                        selectedType === (t === "All" ? "" : t)
                          ? "bg-black text-white border-black shadow-md"
                          : "text-gray-600 bg-white border-gray-250"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="flex items-center gap-2.5">
                <span className="text-xs font-bold text-gray-800 uppercase tracking-wider px-2 py-1 bg-gray-150 rounded">
                  Domain
                </span>
                <div className="flex gap-1">
                  {["All", ...domains].map((d) => (
                    <button
                      key={d}
                      onClick={() => setSelectedDomain(d === "All" ? "" : d)}
                      className={`px-3 py-1.5 text-xs font-medium rounded transition-all duration-150 border transform active:scale-95 active:translate-y-0.5 ${
                        selectedDomain === (d === "All" ? "" : d)
                          ? "bg-black text-white border-black shadow-md"
                          : "text-gray-600 bg-white border-gray-250"
                      }`}
                    >
                      {d}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {filteredProjects.map((p, i) => (
            <Project key={i} {...p} />
          ))}
          {filteredProjects.length === 0 && (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500 text-lg mb-4">No projects match your filters</p>
              <button
                onClick={() => {
                  setSelectedType("");
                  setSelectedDomain("");
                }}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium transition-all duration-150 transform active:scale-95 active:translate-y-0.5"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
