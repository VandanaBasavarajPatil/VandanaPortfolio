import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Calendar } from "lucide-react";

export default function Projects() {
  const futureProjects = [
    {
      title: "AI-Powered Career Guidance System",
      description: "An AI-based platform to help students identify suitable career paths using resume parsing, skill mapping, and machine learning.",
      status: "In development",
      techStack: ["Python", "NLP", "BERT", "Streamlit", "SQLite"],
      features: ["Resume Analyzer", "Skill Gap Analysis", "Role Matcher", "Career Suggestions"]
    }
  ];

  const notableProjects = [
    {
      title: "Spotify App Clone",
      description: "A web-based Spotify clone with music streaming features, playlists, and search functionality.",
      year: "2024",
      techStack: ["Python", "Flask", "HTML", "CSS", "GitHub Actions", "Render"],
      image: "/api/placeholder/400/200"
    },
    {
      title: "Chat with PDF",
      description: "An AI-based document assistant that reads PDFs and answers user questions using NLP and scikit-learn.",
      year: "2025",
      techStack: ["Python", "scikit-learn", "NLP", "Streamlit"],
      image: "/api/placeholder/400/200"
    },
    {
      title: "Weather App",
      description: "Java-based desktop app that fetches real-time weather data and displays it in a user-friendly GUI.",
      year: "2024",
      techStack: ["Java", "Swing", "OpenWeather API"],
      image: "/api/placeholder/400/200"
    },
    {
      title: "Library Management System",
      description: "A complete student-library record management system using Java and a MySQL database.",
      year: "2024",
      techStack: ["Java", "JDBC", "SQLite"],
      image: "/api/placeholder/400/200"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-primary">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            A showcase of my technical projects, ranging from current developments to completed applications.
          </p>
        </div>

        {/* Future Projects */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">Future Projects</h3>
          {futureProjects.map((project, index) => (
            <Card key={index} className="bg-card border-border mb-8 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 cursor-pointer">
              <CardContent className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-2xl font-bold">{project.title}</h4>
                  <Badge className="bg-yellow-600 text-white">{project.status}</Badge>
                </div>
                <p className="text-muted-foreground mb-6">{project.description}</p>
                
                <div className="mb-6">
                  <h5 className="font-semibold mb-3">Tech Stack:</h5>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h5 className="font-semibold mb-3">Features Planned:</h5>
                  <div className="flex flex-wrap gap-2">
                    {project.features.map((feature, featureIndex) => (
                      <Badge key={featureIndex} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button variant="outline" size="sm">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View Flowchart
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Notable Projects */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12">Notable Projects</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {notableProjects.map((project, index) => (
              <Card key={index} className="bg-card border-border overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer group">
                <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <div className="text-6xl opacity-50">📱</div>
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-xl font-bold">{project.title}</h4>
                    <Badge className="bg-blue-600 text-white">
                      <Calendar className="h-3 w-3 mr-1" />
                      {project.year}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="flex-1 hover:bg-primary hover:text-white hover:scale-105 transition-all duration-200">
                      <Github className="h-4 w-4 mr-1" />
                      Code
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1 hover:bg-primary hover:text-white hover:scale-105 transition-all duration-200">
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Want to see more of my work?</p>
          <Button className="bg-primary hover:bg-primary/90">
            <Github className="h-4 w-4 mr-2" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
}