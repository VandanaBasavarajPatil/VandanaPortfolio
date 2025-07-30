
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Award, ExternalLink, Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export default function Certifications() {
  const certifications = [
    {
      title: "Microsoft Power Apps Certification",
      issuer: "Microsoft",
      id: "MSFT-PA-2024-001",
      year: "2024",
      description: "Certified in building custom business applications using Microsoft Power Platform",
      skills: ["Power Apps", "Power Automate", "Power BI"],
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop&crop=center"
    },
    {
      title: "AWS Cloud Developing Certificate",
      issuer: "Amazon Web Services",
      id: "AWS-CD-2024-002",
      year: "2024",
      description: "Certified in developing and deploying applications on AWS cloud infrastructure",
      skills: ["AWS Lambda", "EC2", "S3", "DynamoDB"],
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop&crop=center"
    },
    {
      title: "Pinnacle Labs Internship Certificate",
      issuer: "Pinnacle Labs",
      id: "PL-INT-2024-003",
      year: "2024",
      description: "Successfully completed Java Development internship with hands-on project experience",
      skills: ["Java", "Spring Boot", "MySQL", "Git"],
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&h=300&fit=crop&crop=center"
    },
    {
      title: "Sentinel Hack 5.0 Participation Certificate",
      issuer: "KS Institute of Technology",
      id: "SH-PART-2024-004",
      year: "2024",
      description: "Participated in 24-hour state-level hackathon developing AI solutions for student career mapping",
      skills: ["Python", "Machine Learning", "Team Collaboration", "Problem Solving"],
      image: "https://images.unsplash.com/photo-1559223607-b4d0555ae227?w=400&h=300&fit=crop&crop=center"
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

        <div className="max-w-5xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              {certifications.map((cert, index) => (
                <CarouselItem key={index}>
                  <Card className="bg-card border-border overflow-hidden">
                    <div className="md:flex h-full">
                      {/* Certificate Image */}
                      <div className="md:w-2/5 relative">
                        <img 
                          src={cert.image} 
                          alt={cert.title}
                          className="w-full h-64 md:h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"></div>
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-blue-600 text-white">{cert.year}</Badge>
                        </div>
                      </div>
                      
                      {/* Certificate Details */}
                      <div className="md:w-3/5 p-8 flex flex-col justify-center">
                        <div className="flex items-center gap-3 mb-4">
                          <Award className="h-6 w-6 text-primary" />
                          <h3 className="text-2xl font-bold">{cert.title}</h3>
                        </div>
                        
                        <p className="text-primary font-semibold mb-2">Issued by: {cert.issuer}</p>
                        <p className="text-muted-foreground text-sm mb-4">Certificate ID: {cert.id}</p>
                        
                        <p className="text-muted-foreground mb-6">
                          {cert.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2 mb-6">
                          {cert.skills.map((skill, skillIndex) => (
                            <Badge key={skillIndex} variant="secondary" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                        
                        <Button variant="outline" size="sm" className="w-fit">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Verify Certificate
                        </Button>
                      </div>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
          
          {/* Indicators */}
          <div className="flex justify-center mt-6 gap-2">
            {certifications.map((_, index) => (
              <div key={index} className="w-3 h-3 rounded-full bg-muted hover:bg-primary transition-colors cursor-pointer"></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
