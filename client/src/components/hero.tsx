import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Github, Linkedin, Twitter } from "lucide-react";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted">
        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-primary/20 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>

        {/* Dynamic gradient based on mouse position */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(59, 130, 246, 0.15), transparent 40%)`,
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Profile Image with VP */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Outer glow ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-accent to-primary blur-md opacity-50 group-hover:opacity-75 transition-opacity duration-500 animate-pulse"></div>

              {/* Main profile circle */}
              <div className="relative w-80 h-80 rounded-full bg-gradient-to-br from-card via-muted to-card border-2 border-primary/30 flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform duration-500">
                {/* Background pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10"></div>

                {/* Background particle field */}
                <div className="absolute inset-0 rounded-full overflow-hidden">
                  {[...Array(25)].map((_, i) => (
                    <div
                      key={`bg-particle-${i}`}
                      className="absolute w-1 h-1 bg-primary/20 rounded-full animate-float-random"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 4}s`,
                        animationDuration: `${3 + Math.random() * 3}s`,
                      }}
                    />
                  ))}
                </div>

                {/* Floating elements inside circle */}
                <div className="absolute inset-4 rounded-full">
                  {[...Array(12)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1.5 h-1.5 bg-primary/50 rounded-full animate-pulse-glow"
                      style={{
                        left: `${15 + Math.random() * 70}%`,
                        top: `${15 + Math.random() * 70}%`,
                        animationDelay: `${Math.random() * 3}s`,
                        animationDuration: `${2 + Math.random() * 2}s`,
                      }}
                    />
                  ))}
                </div>

                {/* VP Text */}
                <div className="relative z-10">
                  <h1 className="text-6xl font-bold text-primary font-mono tracking-wider">VP</h1>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <p className="text-primary text-lg font-medium animate-fade-in">Hello, I'm</p>
              <h1 className="text-4xl md:text-6xl font-bold animate-slide-up">
                <span className="text-primary">Vandana Patil</span>
              </h1>
              <h2 className="text-xl md:text-2xl text-muted-foreground animate-slide-up animation-delay-200">
                And I'm a <span className="text-primary">AI/ML Enthusiast</span>
              </h2>
            </div>

            <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-400">
              Final Year CSE Student and aspiring software developer, focused on 
              hands-on projects and continuous learning to build innovative solutions through code.
            </p>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start animate-fade-in animation-delay-600">
              <Button variant="outline" size="icon" className="hover:bg-primary hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon" className="hover:bg-primary hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon" className="hover:bg-primary hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </Button>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in animation-delay-800">
              <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full">
                Hire Me
              </Button>
              <Button 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-full"
                onClick={scrollToNext}
              >
                Contact Me
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Button
            variant="ghost"
            size="icon"
            onClick={scrollToNext}
            className="text-muted-foreground hover:text-primary"
          >
            <ChevronDown className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
}