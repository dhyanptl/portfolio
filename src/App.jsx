import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Portfolio from "./components/Portfolio";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";
import Practical from "./components/Practical";


export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/projects" element={<Portfolio />} />
        <Route path="/blog" element={<Blogs /> } />
        <Route path="/contact" element={<Contact />} />
        <Route path="/fs-practical" element={<Practical />} />
      </Routes>
    </>
  );
}
