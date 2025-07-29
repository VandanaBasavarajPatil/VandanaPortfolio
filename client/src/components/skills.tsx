import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Skills() {
  const skillCategories = [
    {
      title: "Python & Machine Learning",
      icon: "🐍",
      color: "text-blue-500",
      skills: ["Python", "Flask", "scikit-learn", "Pandas", "NumPy", "GitHub Actions", "Render"]
    },
    {
      title: "Java Projects", 
      icon: "☕",
      color: "text-green-500",
      skills: ["Core Java", "JDBC", "Swing", "SQLite"]
    },
    {
      title: "Tools & Technologies",
      icon: "⚡",
      color: "text-purple-500",
      skills: ["Git", "HTML", "CSS", "JavaScript", "Replit", "VS Code"]
    }
  ];

  const proficiencyLevels = [
    {
      title: "Learning",
      icon: "💎",
      color: "text-blue-500",
      description: "Tools/tech I'm currently studying in college or through personal projects",
      skills: ["Python", "Flask", "scikit-learn", "Pandas", "Java", "Swing", "JDBC", "SQLite", "Git", "GitHub Actions"]
    },
    {
      title: "Familiar", 
      icon: "⚙️",
      color: "text-gray-400",
      description: "Tools I've used briefly or encountered in tutorials",
      skills: ["HTML", "CSS", "JavaScript", "Docker", "APIs", "VS Code", "Replit", "Render (deployment)"]
    },
    {
      title: "Exploring Next",
      icon: "✨", 
      color: "text-yellow-500",
      description: "Technologies I plan to learn soon",
      skills: ["ReactJS", "AWS", "Tailwind CSS", "Advanced Machine Learning"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="text-primary">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            A comprehensive toolkit built through academic coursework, personal projects, and industry experience.
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-card border-border hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
              <CardHeader>
                <CardTitle className={`flex items-center gap-3 ${category.color}`}>
                  <span className="text-2xl">{category.icon}</span>
                  <span className="text-lg font-semibold">{category.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technical Proficiency */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">Technical Proficiency</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {proficiencyLevels.map((level, index) => (
              <Card key={index} className="bg-card border-border hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
                <CardHeader>
                  <CardTitle className={`flex items-center gap-3 ${level.color}`}>
                    <span className="text-2xl">{level.icon}</span>
                    <span className="text-lg font-semibold">{level.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    {level.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {level.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="outline" className="text-xs">
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