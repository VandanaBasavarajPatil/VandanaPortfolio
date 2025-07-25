
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Eye } from "lucide-react";

export default function Projects() {
  const futureProjects = [
    {
      title: "AI-Powered Career Guidance System",
      status: "In development",
      description: "An AI-based platform to help students identify suitable career paths using resume parsing, skill mapping, and machine learning.",
      techStack: ["Python", "NLP", "BERT", "Streamlit", "SQLite"],
      features: ["Resume Analyzer", "Skill Gap Analysis", "Role Matcher", "Career Suggestions"]
    }
  ];

  const notableProjects = [
    {
      title: "Spotify App Clone",
      year: "2024",
      description: "A web-based Spotify clone with music streaming features, playlists, and search functionality.",
      image: "/api/placeholder/400/200",
      technologies: ["Python", "Flask", "HTML", "CSS", "GitHub Actions", "Render"],
      category: "Web Development"
    },
    {
      title: "Chat with PDF", 
      year: "2025",
      description: "An AI-based document assistant that reads PDFs and answers user questions using NLP and scikit-learn.",
      image: "/api/placeholder/400/200",
      technologies: ["Python", "scikit-learn", "NLP", "Streamlit"],
      category: "AI/ML"
    },
    {
      title: "Weather App",
      year: "2024", 
      description: "Java-based desktop app that fetches real-time weather data and displays it in a user-friendly GUI.",
      image: "/api/placeholder/400/200",
      technologies: ["Java", "Swing", "OpenWeather API"],
      category: "Desktop Application"
    },
    {
      title: "Library Management System",
      year: "2024",
      description: "A complete student-library record management system using Java and a MySQL database.",
      image: "/api/placeholder/400/200", 
      technologies: ["Java", "JDBC", "SQLite"],
      category: "Database Management"
    }
  ];

  return (
    <section id="projects" className="py-16 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-cyan-400">Projects</span>
          </h2>
          <p className="text-gray-300 text-lg">
            A showcase of my technical projects, ranging from current developments to completed 
            applications.
          </p>
        </div>

        {/* Future Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white text-center mb-8">Future Projects</h3>
          <div className="max-w-4xl mx-auto">
            {futureProjects.map((project, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 hover:bg-slate-700/50 transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-2xl font-bold text-white">{project.title}</h4>
                    <Badge className="bg-orange-600 text-white">{project.status}</Badge>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                  
                  <div className="mb-6">
                    <h5 className="text-white font-semibold mb-3">Tech Stack:</h5>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="border-cyan-400 text-cyan-400 text-sm">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h5 className="text-white font-semibold mb-3">Features Planned:</h5>
                    <div className="flex flex-wrap gap-2">
                      {project.features.map((feature, featureIndex) => (
                        <Badge key={featureIndex} variant="secondary" className="bg-slate-700 text-gray-300 text-sm">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <Button variant="outline" className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900">
                    <Eye className="h-4 w-4 mr-2" />
                    View Flowchart
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Notable Projects */}
        <div>
          <h3 className="text-2xl font-bold text-white text-center mb-8">Notable Projects</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {notableProjects.map((project, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 hover:bg-slate-700/50 transition-all duration-300 group overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-slate-700 to-slate-600 relative overflow-hidden">
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-blue-600 text-white">{project.year}</Badge>
                  </div>
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <span className="text-4xl">📱</span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-white mb-2">{project.title}</h4>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="bg-slate-700 text-gray-300 text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="flex-1 border-gray-400 text-gray-300 hover:bg-gray-300 hover:text-slate-900">
                      <Github className="h-4 w-4 mr-1" />
                      Code
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1 border-gray-400 text-gray-300 hover:bg-gray-300 hover:text-slate-900">
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-300 mb-4">Want to see more of my work?</p>
            <Button variant="outline" className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900">
              <Github className="h-4 w-4 mr-2" />
              View All Projects on GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
