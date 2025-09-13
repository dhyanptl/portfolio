import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-center mt-3">
      <div className="flex items-center gap-4 px-8 py-3 rounded-xl shadow-lg bg-white border border-gray-300">

        <ul className="flex gap-4 text-gray-700 font-semibold text-sm">
          <li>
            <Link 
              to="/" 
              className="px-3 py-1 rounded transition-all duration-200 hover:text-gray-900 hover:bg-gray-50 active:scale-95 active:bg-gray-100"
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/projects" 
              className="px-3 py-1 rounded transition-all duration-200 hover:text-gray-900 hover:bg-gray-50 active:scale-95 active:bg-gray-100"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link 
              to="/blog" 
              className="px-3 py-1 rounded transition-all duration-200 hover:text-gray-900 hover:bg-gray-50 active:scale-95 active:bg-gray-100"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link 
              to="/contact" 
              className="px-3 py-1 rounded transition-all duration-200 hover:text-gray-900 hover:bg-gray-50 active:scale-95 active:bg-gray-100"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
