import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-white/90 backdrop-blur-md shadow-sm"
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold text-primary">Vandana Patil</div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-700 hover:text-primary transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("education")}
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Education
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t mt-4">
            <div className="px-4 py-2 space-y-2">
              <button
                onClick={() => scrollToSection("home")}
                className="block w-full text-left py-2 text-gray-700 hover:text-primary"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="block w-full text-left py-2 text-gray-700 hover:text-primary"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="block w-full text-left py-2 text-gray-700 hover:text-primary"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="block w-full text-left py-2 text-gray-700 hover:text-primary"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("education")}
                className="block w-full text-left py-2 text-gray-700 hover:text-primary"
              >
                Education
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left py-2 text-gray-700 hover:text-primary"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}