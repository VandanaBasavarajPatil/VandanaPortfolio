
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar, MapPin } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      title: "Java Development Intern",
      company: "Pinnacle Labs",
      type: "Internship",
      period: "Feb 17 – Mar 19, 2025",
      location: "",
      points: [
        "Contributed to multiple Java desktop applications including Currency Converter and Library Management System.",
        "Worked with Java Swing and integrated MySQL/SQLite for backend.",
        "Learned core Java development best practices in a structured internship."
      ],
      technologies: ["Java", "Swing", "MySQL", "SQLite", "JDBC"]
    },
    {
      title: "Participant – Sentinel Hack 5.0",
      company: "KS Institute of Technology (State-level Hackathon)",
      type: "Hackathon",
      period: "April 28–29, 2025",
      location: "",
      points: [
        "Participated in a 24-hour hackathon and developed an AI model for student career mapping using Python and ML libraries (scikit-learn, pandas).",
        "Worked in a team of 3 and presented a functional prototype."
      ],
      technologies: ["Python", "scikit-learn", "pandas", "Machine Learning"]
    },
    {
      title: "Spotify App Project",
      company: "Academic Project",
      type: "Academic",
      period: "Oct – Dec 2024",
      location: "",
      points: [
        "Built a Spotify-like music player using Flask for backend.",
        "Deployed using Render and automated CI/CD with GitHub Actions."
      ],
      technologies: ["Python", "Flask", "Render", "GitHub Actions", "CI/CD"]
    }
  ];

  const certifications = [
    {
      title: "Microsoft Power Apps Certification",
      issuer: "Microsoft",
      id: "MSFT-PA-2024-001",
      year: "2024",
      description: "Certified in building custom business applications using Microsoft Power Platform",
      technologies: ["Power Apps", "Power Automate", "Power BI"]
    }
  ];

  return (
    <section id="experience" className="py-16 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experience & <span className="text-cyan-400">Journey</span>
          </h2>
          <p className="text-gray-300 text-lg">
            My hands-on experience through internships, hackathons, and academic projects that 
            have shaped my technical skills.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-cyan-400/30"></div>
            
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-start gap-8 mb-12">
                {/* Timeline dot */}
                <div className="w-16 h-16 bg-cyan-400/20 border-2 border-cyan-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <Building className="h-6 w-6 text-cyan-400" />
                </div>
                
                {/* Content */}
                <Card className="flex-1 bg-slate-800/50 border-slate-700 hover:bg-slate-700/50 transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                        <p className="text-cyan-400 flex items-center gap-2">
                          <Building className="h-4 w-4" />
                          {exp.company}
                        </p>
                      </div>
                      <Badge variant="outline" className="border-cyan-400 text-cyan-400 w-fit">
                        {exp.type}
                      </Badge>
                    </div>
                    
                    <div className="flex items-center gap-4 text-gray-400 text-sm mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {exp.period}
                      </div>
                    </div>
                    
                    <ul className="text-gray-300 mb-4 space-y-2">
                      {exp.points.map((point, pointIndex) => (
                        <li key={pointIndex} className="flex items-start gap-2">
                          <span className="text-cyan-400 mt-1.5 text-xs">•</span>
                          <span className="text-sm">{point}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="bg-slate-700 text-gray-300 text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              My <span className="text-cyan-400">Certifications</span>
            </h3>
            <p className="text-gray-300">
              Professional certifications and credentials earned during my learning journey.
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            {certifications.map((cert, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 hover:bg-slate-700/50 transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex items-start gap-6">
                    <div className="w-24 h-24 bg-slate-700 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">🏆</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="text-xl font-bold text-white">{cert.title}</h4>
                        <Badge className="bg-blue-600 text-white">{cert.year}</Badge>
                      </div>
                      <p className="text-cyan-400 mb-2">Issued by: {cert.issuer}</p>
                      <p className="text-gray-400 text-sm mb-2">ID: {cert.id}</p>
                      <p className="text-gray-300 text-sm mb-4">{cert.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {cert.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary" className="bg-slate-700 text-gray-300 text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <button className="mt-4 text-cyan-400 hover:text-white text-sm flex items-center gap-1 transition-colors">
                        <span>🔗</span>
                        Verify Certificate
                      </button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
