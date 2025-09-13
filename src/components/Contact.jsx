import React from 'react';

export default function Contact() {
  return (
    <section className="min-h-screen bg-white flex items-center justify-center px-8 font-[Inter]">
      <div className="max-w-2xl mx-auto">
        
        <div className="flex gap-6">
          <a 
            href="mailto:dhyan.contact@gmail.com"
            className="flex-1 p-6 bg-white border-2 border-gray-300 rounded-xl shadow-md transition-all duration-300 transform active:scale-95 hover:scale-105 hover:-rotate-3 hover:shadow-xl"
          >
            <div className="text-center">
              <span className="text-lg font-medium text-gray-900">Email</span>
            </div>
          </a>

          <a 
            href="https://linkedin.com/in/dhyanptl"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 p-6 bg-white border-2 border-gray-300 rounded-xl shadow-md transition-all duration-300 transform active:scale-95 hover:scale-105 hover:rotate-3 hover:shadow-xl"
          >
            <div className="text-center">
              <span className="text-lg font-medium text-gray-900">LinkedIn</span>
            </div>
          </a>

          <a 
            href="https://github.com/dhyanptl"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 p-6 bg-white border-2 border-gray-300 rounded-xl shadow-md transition-all duration-300 transform active:scale-95 hover:scale-105 hover:-rotate-3 hover:shadow-xl"
          >
            <div className="text-center">
              <span className="text-lg font-medium text-gray-900">GitHub</span>
            </div>
          </a>
        </div>

        <div className="text-center mt-8">
          <div className="w-6 h-px bg-gray-300 mx-auto"></div>
        </div>
      </div>
    </section>
  );
}
