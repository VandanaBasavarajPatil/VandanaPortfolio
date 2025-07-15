
import { Download, ArrowRight, Github, Linkedin, Twitter, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const stats = [
    { number: "4+", label: "Years of Study" },
    { number: "15+", label: "Projects Completed" },
    { number: "3+", label: "Technologies Mastered" },
    { number: "100+", label: "Problems Solved" }
  ];

  const socialLinks = [
    { icon: <Github className="h-5 w-5" />, href: "#", label: "GitHub" },
    { icon: <Linkedin className="h-5 w-5" />, href: "#", label: "LinkedIn" },
    { icon: <Twitter className="h-5 w-5" />, href: "#", label: "Twitter" },
    { icon: <Instagram className="h-5 w-5" />, href: "#", label: "Instagram" }
  ];

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-cyan-400/10"></div>
      <div className="absolute top-20 right-20 w-64 h-64 bg-cyan-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-blue-400/10 rounded-full blur-2xl"></div>
      
      <div className="container mx-auto px-4 pt-20 pb-16 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 min-h-[80vh]">
          {/* Left side - Profile Image */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              {/* Glowing border effect */}
              <div className="w-80 h-80 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full p-1">
                <div className="w-full h-full bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center">
                  {/* Placeholder for profile image - you can replace this with an actual image */}
                  <div className="w-72 h-72 bg-gradient-to-br from-blue-500/30 to-cyan-400/30 rounded-full flex items-center justify-center">
                    <div className="text-6xl font-bold text-white/80">VP</div>
                  </div>
                </div>
              </div>
              {/* Decorative rings */}
              <div className="absolute -top-4 -left-4 w-88 h-88 border border-cyan-400/20 rounded-full"></div>
              <div className="absolute -top-8 -left-8 w-96 h-96 border border-blue-400/10 rounded-full"></div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-xl md:text-2xl text-cyan-400 mb-4">Hello, I'm</h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Vandana Patil
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-6">
              And I'm an <span className="text-white font-semibold">Aspiring Software Developer</span>
            </p>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl leading-relaxed">
              Passionate engineering student dedicated to creating innovative software solutions. 
              Currently building expertise in modern technologies while developing practical 
              experience through hands-on projects and continuous learning.
            </p>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start mb-8">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-12 h-12 bg-blue-700/50 border border-cyan-400/30 rounded-lg flex items-center justify-center text-cyan-400 hover:bg-cyan-400/20 hover:text-white transition-all duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-cyan-400 hover:bg-cyan-300 text-blue-900 font-semibold px-8"
              >
                Hire Me
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-blue-900 px-8"
              >
                Contact Me
              </Button>
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-8 border-t border-blue-700/30">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">
                {stat.number}
              </h3>
              <p className="text-gray-300 text-sm md:text-base">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
