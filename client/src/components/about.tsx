
import { Card } from "@/components/ui/card";
import { GraduationCap, Code, Lightbulb } from "lucide-react";

export default function About() {
  const highlights = [
    {
      icon: <GraduationCap className="h-8 w-8" />,
      title: "Academic Excellence",
      description: "Maintaining high GPA while participating in tech competitions."
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Technical Skills",
      description: "Learning Core Java and Python with hands-on project experience."
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Problem Solver",
      description: "Tackling challenges through internships and innovative solutions."
    }
  ];

  return (
    <section id="about" className="py-16 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-cyan-400">Me</span>
          </h2>
          <p className="text-gray-300 text-lg">Aspiring software developer</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                I'm Vandana, a passionate Computer Science and Engineering student at KSSEM, with a growing interest in 
                software development and emerging technologies.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                I'm currently focused on learning Core Java and building real-world project experience in Python through 
                my academic work. I enjoy solving problems, exploring programming concepts, and understanding how 
                technology can make a real impact.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                As a self-driven learner, I'm always curious to explore new tools, frameworks, and best practices in 
                development. I'm also working on improving my understanding of object-oriented programming and data 
                structures to strengthen my technical foundation.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Beyond academics, I love reading books—especially those that help me grow technically and personally 
                and I value learning from others through conversations and shared experiences.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="grid grid-cols-1 gap-6">
                {highlights.map((highlight, index) => (
                  <Card key={index} className="bg-slate-800/50 border-slate-700 p-6 hover:bg-slate-700/50 transition-all duration-300 group">
                    <div className="flex items-start gap-4">
                      <div className="text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                        {highlight.icon}
                      </div>
                      <div>
                        <h3 className="text-white font-semibold mb-2">{highlight.title}</h3>
                        <p className="text-gray-300 text-sm">{highlight.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
