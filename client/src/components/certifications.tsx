import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Award, ExternalLink, Calendar } from "lucide-react";

export default function Certifications() {
  const certifications = [
    {
      title: "Microsoft Power Apps Certification",
      issuer: "Microsoft",
      id: "MSFT-PA-2024-001",
      year: "2024",
      description: "Certified in building custom business applications using Microsoft Power Platform",
      skills: ["Power Apps", "Power Automate", "Power BI"],
      image: "/api/placeholder/300/200"
    }
  ];

  return (
    <section id="certifications" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-primary">Certifications</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Professional certifications and credentials earned during my learning journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <Card key={index} className="bg-card border-border hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                <Award className="h-16 w-16 text-primary" />
              </div>
              <CardContent className="p-6">
                <div className="mb-4">
                  <h3 className="text-lg font-bold mb-2">{cert.title}</h3>
                  <p className="text-primary font-semibold text-sm">{cert.issuer}</p>
                  <p className="text-muted-foreground text-xs mb-2">ID: {cert.id}</p>
                  <Badge className="bg-blue-600 text-white text-xs">
                    <Calendar className="h-3 w-3 mr-1" />
                    {cert.year}
                  </Badge>
                </div>
                
                <p className="text-muted-foreground text-sm mb-4">{cert.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-sm mb-2">Skills Covered:</h4>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="relative">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-primary/30 blur-sm"></div>
                        <Badge variant="outline" className="relative text-xs bg-card/80 backdrop-blur-sm border-2 hover:scale-110 transition-transform duration-200">
                          {skill}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </div>

                <Button size="sm" variant="outline" className="w-full">
                  <ExternalLink className="h-3 w-3 mr-2" />
                  View Certificate
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

        <div className="max-w-4xl mx-auto">
          {/* Certification Carousel */}
          <div className="relative">
            <Card className="bg-card border-border overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center p-8">
                  <div className="text-center">
                    <Award className="h-16 w-16 text-primary mx-auto mb-4" />
                    <div className="text-4xl mb-2">🏆</div>
                    <p className="text-muted-foreground font-medium">Microsoft Certification</p>
                  </div>
                </div>
                
                <div className="md:w-2/3 p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3 mb-2">
                      <Award className="h-6 w-6 text-primary" />
                      <Badge className="bg-blue-600 text-white">2024</Badge>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-2">Microsoft Power Apps Certification</h3>
                  <p className="text-primary font-semibold mb-2">Issued by: Microsoft</p>
                  <p className="text-muted-foreground text-sm mb-4">ID: MSFT-PA-2024-001</p>
                  
                  <p className="text-muted-foreground mb-6">
                    Certified in building custom business applications using Microsoft Power Platform
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {["Power Apps", "Power Automate", "Power BI"].map((skill, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button variant="outline" size="sm">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Verify Certificate
                  </Button>
                </div>
              </div>
            </Card>
            
            {/* Carousel indicators */}
            <div className="flex justify-center mt-6 gap-2">
              <div className="w-3 h-3 rounded-full bg-primary"></div>
              <div className="w-3 h-3 rounded-full bg-muted"></div>
              <div className="w-3 h-3 rounded-full bg-muted"></div>
              <div className="w-3 h-3 rounded-full bg-muted"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}