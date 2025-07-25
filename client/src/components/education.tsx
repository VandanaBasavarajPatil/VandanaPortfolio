import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, MapPin, Calendar, Building } from "lucide-react";

export default function Education() {
  const educationData = [
    {
      type: "Secondary Education",
      level: "Pre-University", 
      institution: "CSA COMP PU College",
      location: "Gokak, Belagavi",
      period: "2020 – 2022",
      description: "Affiliated with Department of Pre-University Education, Karnataka",
      icon: "🎓"
    },
    {
      type: "Bachelor of Engineering – Computer Science",
      level: "Engineering",
      institution: "K.S. School of Engineering and Management", 
      location: "Bengaluru",
      period: "2022 – Present",
      description: "Currently pursuing final year with focus on software development and machine learning projects.",
      icon: "🏫"
    }
  ];

  return (
    <section id="education" className="py-16 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-cyan-400">Education</span>
          </h2>
          <p className="text-gray-300 text-lg">
            Academic journey and educational background
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {educationData.map((edu, index) => (
            <Card key={index} className="bg-slate-800/50 border-slate-700 hover:bg-slate-700/50 transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-cyan-400/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="h-6 w-6 text-cyan-400" />
                  </div>
                  <div className="flex-1">
                    <Badge variant="outline" className="border-cyan-400 text-cyan-400 mb-2">
                      {edu.level}
                    </Badge>
                    <h3 className="text-xl font-bold text-white mb-1">{edu.type}</h3>
                  </div>
                </div>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-2 text-cyan-400">
                    <Building className="h-4 w-4" />
                    <span className="font-medium">{edu.institution}</span>
                  </div>

                  <div className="flex items-center gap-2 text-gray-400">
                    <MapPin className="h-4 w-4" />
                    <span>{edu.location}</span>
                  </div>

                  <div className="flex items-center gap-2 text-gray-400">
                    <Calendar className="h-4 w-4" />
                    <span>{edu.period}</span>
                  </div>
                </div>

                <p className="text-gray-300 text-sm leading-relaxed">
                  {edu.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}