import { useEffect } from "react";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import Education from "@/components/education";
import Experience from "@/components/experience";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Portfolio() {
  useEffect(() => {
    // Update page title and meta description
    document.title = "Vandana Patil - Engineering Portfolio";
    
    // Create or update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Professional portfolio of Vandana Patil, fourth-year engineering student specializing in software development, system design, and innovative engineering solutions.');
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Education />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}