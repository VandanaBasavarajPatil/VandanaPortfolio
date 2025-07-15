import { Download, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-primary/10 via-white to-accent/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Hi, I'm <span className="text-primary">Vandana Patil</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-6">
              Fourth Year Engineering Student
            </p>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl">
              Passionate about creating innovative solutions through engineering excellence. 
              Currently pursuing my degree while building practical experience in software development and system design.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                onClick={() => scrollToSection("projects")}
                className="bg-primary hover:bg-primary/90 text-white"
              >
                View My Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <div className="w-80 h-80 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center">
              <div className="w-72 h-72 bg-gradient-to-br from-primary/30 to-accent/30 rounded-full flex items-center justify-center">
                <div className="w-64 h-64 bg-gradient-to-br from-primary/40 to-accent/40 rounded-full flex items-center justify-center">
                  <div className="text-6xl font-bold text-primary/60">VP</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
