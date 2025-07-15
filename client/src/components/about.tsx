import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Users, Zap, Target } from "lucide-react";

export default function About() {
  const qualities = [
    {
      icon: <Target className="h-5 w-5" />,
      title: "Problem Solver",
      description: "Analytical thinking and creative solutions"
    },
    {
      icon: <Users className="h-5 w-5" />,
      title: "Team Player",
      description: "Collaborative approach to complex challenges"
    },
    {
      icon: <Zap className="h-5 w-5" />,
      title: "Quick Learner",
      description: "Adaptable to new technologies and methodologies"
    },
    {
      icon: <CheckCircle className="h-5 w-5" />,
      title: "Detail-Oriented",
      description: "Committed to quality and precision"
    }
  ];

  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">Engineering Excellence</h3>
            <p className="text-gray-700 mb-6">
              As a fourth-year engineering student, I've developed a strong foundation in both theoretical concepts 
              and practical application. My journey has been focused on bridging the gap between academic learning 
              and real-world problem-solving.
            </p>
            <p className="text-gray-700 mb-6">
              I'm particularly interested in software development, system design, and emerging technologies. 
              My goal is to contribute to innovative projects that make a meaningful impact on society.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {qualities.map((quality, index) => (
                <Card key={index} className="bg-gray-50 border-none">
                  <CardContent className="p-4">
                    <div className="flex items-center mb-2 text-primary">
                      {quality.icon}
                      <h4 className="font-semibold ml-2">{quality.title}</h4>
                    </div>
                    <p className="text-sm text-gray-600">{quality.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-full max-w-md h-96 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <div className="text-8xl mb-4">👩‍💻</div>
                <p className="text-gray-600 font-medium">Engineering Workspace</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
