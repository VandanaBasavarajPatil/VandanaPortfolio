import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Code, Globe, Database, Wrench, Compass, Users } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 85 },
        { name: "Java", level: 75 },
        { name: "C++", level: 70 },
        { name: "JavaScript", level: 65 }
      ]
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Web Development",
      skills: [
        { name: "HTML/CSS", level: 85 },
        { name: "React.js", level: 70 },
        { name: "Node.js", level: 65 },
        { name: "Bootstrap", level: 75 }
      ]
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Databases",
      skills: [
        { name: "MySQL", level: 75 },
        { name: "MongoDB", level: 60 },
        { name: "PostgreSQL", level: 50 }
      ]
    },
    {
      icon: <Wrench className="h-6 w-6" />,
      title: "Tools & Technologies",
      skills: [
        { name: "Git/GitHub", level: 80 },
        { name: "Docker", level: 45 },
        { name: "AWS", level: 40 }
      ]
    },
    {
      icon: <Compass className="h-6 w-6" />,
      title: "Engineering Software",
      skills: [
        { name: "AutoCAD", level: 75 },
        { name: "MATLAB", level: 65 },
        { name: "SolidWorks", level: 60 }
      ]
    }
  ];

  const softSkills = [
    "Problem Solving",
    "Team Leadership",
    "Communication",
    "Project Management",
    "Critical Thinking"
  ];

  return (
    <section id="skills" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Technical Skills</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-white shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-primary">
                  {category.icon}
                  <span className="ml-2">{category.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-xs text-gray-500">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
          
          {/* Soft Skills Card */}
          <Card className="bg-white shadow-sm hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center text-primary">
                <Users className="h-6 w-6" />
                <span className="ml-2">Soft Skills</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {softSkills.map((skill, index) => (
                  <Badge key={index} variant="secondary" className="text-xs">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
