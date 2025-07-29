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
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glowing background */}
              <div className="absolute inset-0 w-80 h-80 rounded-full bg-[#4fc3f7] opacity-10 blur-xl animate-pulse-glow"></div>
              <div className="relative w-80 h-80 rounded-full border-2 border-[#4fc3f7] flex items-center justify-center overflow-hidden shadow-2xl bg-transparent">
                <h1 className="text-6xl font-bold text-white font-mono">VP</h1>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-6 text-center lg:text-left">
            <div className="space-y-4">
              <p className="text-[#4fc3f7] text-lg font-medium animate-fade-in">Hello, I'm</p>
              <h1 className="text-4xl md:text-5xl font-bold text-white animate-slide-up">
                Vandana Patil
              </h1>
              <div className="text-xl md:text-2xl text-gray-300 animate-slide-up animation-delay-200">
                And I'm a <span className="text-[#4fc3f7] font-semibold">{text}</span>
                <span className="animate-pulse text-[#4fc3f7]">|</span>
              </div>
            </div>

            <p className="text-lg text-gray-400 max-w-2xl animate-fade-in animation-delay-600">
              Final Year CSE Student and aspiring software developer, focused on hands-on 
              projects and continuous learning to build innovative solutions through code.
            </p>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start animate-fade-in animation-delay-800">
              <Button variant="outline" size="icon" className="rounded-md border-[#4fc3f7] text-[#4fc3f7] hover:bg-[#4fc3f7] hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-md border-[#4fc3f7] text-[#4fc3f7] hover:bg-[#4fc3f7] hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-md border-[#4fc3f7] text-[#4fc3f7] hover:bg-[#4fc3f7] hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </Button>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in animation-delay-800">
              <Button className="bg-[#4fc3f7] hover:bg-[#29b6f6] text-white px-8 py-3 rounded-md font-medium">
                Hire Me
              </Button>
              <Button 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-black px-8 py-3 rounded-md font-medium"
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
            className="text-gray-400 hover:text-white"
          >
            <ChevronDown className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
}