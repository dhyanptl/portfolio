// components/Project.jsx
import React from "react";

export default function Project({ 
  title, 
  description, 
  type, 
  domain, 
  technologies, 
  link 
}) {
  return (
    <div className="bg-white border-2 border-gray-300 rounded-xl p-6 hover:border-gray-400 hover:rounded-3xl hover:shadow-lg transition-all duration-500 cursor-pointer">

      {/* Title */}
      <h3 className="text-lg font-bold text-gray-900 mb-3">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 text-sm leading-relaxed mb-4">
        {description}
      </p>

      {/* Type and Domain */}
      <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
        <span><span className="font-medium">Type:</span> {type}</span>
        <span><span className="font-medium">Domain:</span> {domain}</span>
      </div>

      {/* Technologies */}
      <div className="flex flex-wrap gap-2 mb-5">
        {technologies.map((tech) => (
          <span 
            key={tech} 
            className="px-2.5 py-1 bg-black text-white text-xs font-medium rounded"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Link */}
      <a 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors"
      >
        View Project →
      </a>
    </div>
  );
}
