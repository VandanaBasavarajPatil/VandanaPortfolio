import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Github, Linkedin, Twitter } from "lucide-react";

export default function Hero() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const phrases = ["Web Developer", "AI/ML Enthusiast", "Tech Explorer"];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % phrases.length;
      const fullText = phrases[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 500);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, phrases]);

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glowing background */}
              <div className="absolute inset-0 w-80 h-80 rounded-full bg-[#12bade] opacity-30 blur-xl animate-pulse-glow"></div>
              <div className="relative w-80 h-80 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-[#12bade] flex items-center justify-center overflow-hidden shadow-2xl">
                <h1 className="text-6xl font-bold text-white font-mono">VP</h1>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <p className="text-blue-400 text-lg font-medium animate-fade-in">Hello, I'm</p>
              <h1 className="text-4xl md:text-6xl font-bold text-white animate-slide-up">
                Vandana Patil
              </h1>
              <h2 className="text-xl md:text-2xl text-gray-300 animate-slide-up animation-delay-200">
                Final Year CSE Student | Aspiring Software Developer
              </h2>
              <div className="text-xl md:text-2xl text-blue-400 animate-slide-up animation-delay-400">
                <span>{text}</span>
                <span className="animate-pulse">|</span>
              </div>
            </div>

            <p className="text-lg text-gray-400 max-w-lg animate-fade-in animation-delay-600">
              Passionate about creating innovative solutions through code and 
              exploring the endless possibilities of technology.
            </p>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start animate-fade-in animation-delay-800">
              <Button variant="outline" size="icon" className="hover:bg-blue-600 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon" className="hover:bg-blue-600 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon" className="hover:bg-blue-600 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </Button>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in animation-delay-800">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full">
                Download CV
              </Button>
              <Button 
                variant="outline" 
                className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-full"
                onClick={scrollToNext}
              >
                About Me
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
            className="text-gray-400 hover:text-white"
          >
            <ChevronDown className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
}