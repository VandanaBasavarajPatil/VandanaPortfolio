import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Smartphone, Home, BarChart3, Brain, GraduationCap, Bot } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      icon: <Home className="h-8 w-8" />,
      title: "Smart Home Automation System",
      description: "IoT-based home automation system using Arduino and sensors for controlling lights, temperature, and security systems remotely.",
      technologies: ["Arduino", "C++", "IoT", "Mobile App"],
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Data Analytics Dashboard",
      description: "Interactive web dashboard for analyzing and visualizing large datasets with real-time updates and customizable charts.",
      technologies: ["Python", "Flask", "D3.js", "PostgreSQL"],
      gradient: "from-green-500/20 to-emerald-500/20"
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Campus Resource Manager",
      description: "Mobile application for managing campus resources including library books, room bookings, and event schedules for students.",
      technologies: ["React Native", "Node.js", "MongoDB", "Express"],
      gradient: "from-purple-500/20 to-pink-500/20"
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: "Predictive Maintenance System",
      description: "Machine learning model for predicting equipment failures in manufacturing using sensor data and historical maintenance records.",
      technologies: ["Python", "TensorFlow", "Pandas", "Scikit-learn"],
      gradient: "from-orange-500/20 to-red-500/20"
    },
    {
      icon: <GraduationCap className="h-8 w-8" />,
      title: "E-Learning Platform",
      description: "Full-stack web application for online learning with video streaming, quizzes, progress tracking, and discussion forums.",
      technologies: ["React", "Node.js", "MySQL", "Socket.io"],
      gradient: "from-indigo-500/20 to-blue-500/20"
    },
    {
      icon: <Bot className="h-8 w-8" />,
      title: "Automated Sorting Robot",
      description: "Robotic system for automated sorting of objects based on color and size using computer vision and mechanical engineering principles.",
      technologies: ["Python", "OpenCV", "Raspberry Pi", "Servo Motors"],
      gradient: "from-teal-500/20 to-cyan-500/20"
    }
  ];

  return (
    <section id="projects" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
              <CardHeader className={`bg-gradient-to-br ${project.gradient} p-6`}>
                <div className="flex items-center justify-center text-primary mb-4">
                  {project.icon}
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="flex-1">
                    <Github className="h-4 w-4 mr-1" />
                    Code
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1">
                    <ExternalLink className="h-4 w-4 mr-1" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
