
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Skills() {
  const skillCategories = [
    {
      title: "Python & Machine Learning",
      color: "blue",
      skills: [
        "Python", "Flask", "scikit-learn", "Pandas", "NumPy", "GitHub Actions", "Render"
      ]
    },
    {
      title: "Java Projects",
      color: "green", 
      skills: [
        "Core Java", "JDBC", "Swing", "SQLite"
      ]
    },
    {
      title: "Tools & Technologies",
      color: "purple",
      skills: [
        "Git", "HTML", "CSS", "JavaScript", "Replit", "VS Code"
      ]
    }
  ];

  const proficiencyLevels = [
    {
      title: "Learning",
      icon: "💎",
      description: "Tools/tech I'm currently studying in college or through personal projects",
      skills: ["Python", "Flask", "scikit-learn", "Pandas", "Java", "Swing", "JDBC", "SQLite", "Git", "GitHub Actions"]
    },
    {
      title: "Familiar", 
      icon: "⚙️",
      description: "Tools I've used briefly or encountered in tutorials",
      skills: ["HTML", "CSS", "JavaScript", "Docker", "APIs", "VS Code", "Replit", "Render (deployment)"]
    },
    {
      title: "Exploring Next",
      icon: "✨", 
      description: "Technologies I plan to learn soon",
      skills: ["React.js", "AWS", "Tailwind CSS", "Advanced Machine Learning"]
    }
  ];

  return (
    <section id="skills" className="py-16 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical <span className="text-cyan-400">Skills</span>
          </h2>
          <p className="text-gray-300 text-lg">
            A comprehensive toolkit built through academic coursework, personal projects, and 
            industry experience.
          </p>
        </div>

        {/* Main Skill Categories */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-slate-800/50 border-slate-700 hover:bg-slate-700/50 transition-all duration-300 group">
              <CardHeader>
                <CardTitle className="flex items-center text-white">
                  <div className={`w-3 h-3 rounded-full mr-3 ${
                    category.color === 'blue' ? 'bg-blue-500' :
                    category.color === 'green' ? 'bg-green-500' : 'bg-purple-500'
                  }`}></div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary" 
                      className="bg-slate-700 text-gray-300 text-xs hover:bg-slate-600 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technical Proficiency */}
        <div>
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">Technical Proficiency</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {proficiencyLevels.map((level, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 hover:bg-slate-700/50 transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <div className="text-3xl mb-2">{level.icon}</div>
                    <h4 className="text-lg font-bold text-white">{level.title}</h4>
                    <p className="text-gray-400 text-sm">{level.description}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {level.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="outline" 
                        className="border-slate-600 text-gray-300 text-xs hover:border-cyan-400 hover:text-cyan-400 transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
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
