import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter, ChevronDown } from "lucide-react";

export default function Hero() {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const phrases = ["Web Developer", "AI/ML Enthusiast", "Tech Explorer"];

  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentPhrase = phrases[currentIndex];

      if (!isDeleting && currentText === currentPhrase) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % phrases.length);
      } else if (isDeleting) {
        setCurrentText(currentPhrase.substring(0, currentText.length - 1));
      } else {
        setCurrentText(currentPhrase.substring(0, currentText.length + 1));
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting, phrases]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 pt-20 pb-16 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 min-h-[80vh]">
          {/* Left side - Profile Image */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-full border-2 border-cyan-400/30 p-2">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-slate-800 to-slate-700 flex items-center justify-center">
                  <div className="text-6xl font-bold text-cyan-400">VP</div>
                </div>
              </div>
              {/* Glowing ring */}
              <div className="absolute inset-0 rounded-full border border-cyan-400/50 animate-pulse"></div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <p className="text-cyan-400 text-lg mb-2">Hello, I'm</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Vandana Patil
            </h1>
            <div className="text-xl md:text-2xl mb-6">
              <span className="text-gray-300">And I'm a </span>
              <span className="text-cyan-400 font-semibold">
                {currentText}
                <span className="animate-pulse">|</span>
              </span>
            </div>
            <p className="text-gray-300 mb-8 max-w-2xl leading-relaxed">
              Final Year CSE Student and aspiring software developer, focused on 
              hands-on projects and continuous learning to build innovative solutions 
              through code.
            </p>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start mb-8">
              <a href="#" className="w-10 h-10 bg-cyan-400/20 border border-cyan-400/30 rounded-md flex items-center justify-center text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-cyan-400/20 border border-cyan-400/30 rounded-md flex items-center justify-center text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-cyan-400/20 border border-cyan-400/30 rounded-md flex items-center justify-center text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                <Github className="h-5 w-5" />
              </a>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button className="bg-cyan-400 hover:bg-cyan-300 text-slate-900 font-semibold px-8">
                Hire Me
              </Button>
              <Button 
                variant="outline" 
                className="border-gray-400 text-gray-300 hover:bg-gray-300 hover:text-slate-900 px-8"
                onClick={() => scrollToSection("contact")}
              >
                Contact Me
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-16">
          <button
            onClick={() => scrollToSection("about")}
            className="text-cyan-400 hover:text-white transition-colors animate-bounce"
          >
            <ChevronDown className="h-8 w-8" />
          </button>
        </div>
      </div>
    </section>
  );
}