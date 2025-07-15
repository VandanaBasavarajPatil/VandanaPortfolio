import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Calendar, MapPin } from "lucide-react";

export default function Education() {
  const coursework = [
    "Data Structures & Algorithms",
    "Object-Oriented Programming",
    "Database Management Systems",
    "Software Engineering",
    "Computer Networks"
  ];

  const achievements = [
    "Current CGPA: 8.2/10",
    "Dean's List - 3 semesters",
    "Winner - College Project Competition",
    "Active Member - Technical Society",
    "Completed 2 Industry Internships"
  ];

  return (
    <section id="education" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Education</h2>
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white shadow-sm">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <div className="w-full h-48 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <GraduationCap className="h-16 w-16 text-primary mx-auto mb-4" />
                      <p className="text-gray-600 font-medium">Engineering Campus</p>
                    </div>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <div className="flex items-start gap-3 mb-4">
                    <GraduationCap className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="text-2xl font-semibold mb-2">Bachelor of Engineering</h3>
                      <p className="text-lg text-primary mb-2">Computer Science Engineering</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 mb-4 text-gray-600">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>Expected Graduation: 2025</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>Mumbai, India</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-6">
                    Currently pursuing my Bachelor's degree in Computer Science Engineering with a focus on 
                    software development, data structures, algorithms, and system design. Maintaining a strong 
                    academic record while actively participating in practical projects and internships.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <Award className="h-4 w-4 text-primary" />
                        Relevant Coursework:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {coursework.map((course, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {course}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <Award className="h-4 w-4 text-primary" />
                        Achievements:
                      </h4>
                      <ul className="text-gray-600 space-y-1 text-sm">
                        {achievements.map((achievement, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
