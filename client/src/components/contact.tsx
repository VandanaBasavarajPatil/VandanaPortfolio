
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const contactMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    },
    onError: (error) => {
      toast({
        title: "Error sending message",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    contactMutation.mutate(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-16 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="text-cyan-400">Touch</span>
          </h2>
          <p className="text-gray-300 text-lg">
            I'm always open to discussing new opportunities, collaborations, or just having a chat 
            about technology. Feel free to reach out!
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Send Me a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-gray-300">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="bg-slate-700 border-slate-600 text-white placeholder-gray-400"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-gray-300">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      className="bg-slate-700 border-slate-600 text-white placeholder-gray-400"
                      required
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="subject" className="text-gray-300">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    className="bg-slate-700 border-slate-600 text-white placeholder-gray-400"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="message" className="text-gray-300">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, opportunity, or just say hello!"
                    className="bg-slate-700 border-slate-600 text-white placeholder-gray-400"
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-blue-600 hover:bg-blue-500 text-white"
                  disabled={contactMutation.isPending}
                >
                  <Send className="h-4 w-4 mr-2" />
                  {contactMutation.isPending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-cyan-400/20 rounded-lg flex items-center justify-center">
                    <Mail className="h-5 w-5 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <p className="text-white">vandanabasavaraja@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-cyan-400/20 rounded-lg flex items-center justify-center">
                    <Phone className="h-5 w-5 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Phone</p>
                    <p className="text-white">+91 8088492647</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-cyan-400/20 rounded-lg flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Location</p>
                    <p className="text-white">Kanakapura, Bengaluru South</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Connect With Me</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  <a href="#" className="w-12 h-12 bg-slate-700 hover:bg-cyan-400 rounded-lg flex items-center justify-center text-cyan-400 hover:text-slate-900 transition-all duration-300">
                    <Github className="h-5 w-5" />
                  </a>
                  <a href="#" className="w-12 h-12 bg-slate-700 hover:bg-cyan-400 rounded-lg flex items-center justify-center text-cyan-400 hover:text-slate-900 transition-all duration-300">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href="#" className="w-12 h-12 bg-slate-700 hover:bg-cyan-400 rounded-lg flex items-center justify-center text-cyan-400 hover:text-slate-900 transition-all duration-300">
                    <Twitter className="h-5 w-5" />
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 text-green-400">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="font-semibold">Available for Opportunities</span>
                </div>
                <p className="text-gray-300 text-sm mt-2">
                  I'm actively seeking internship and full-time opportunities for 2025. Open to 
                  remote work and relocation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="text-center mt-16 pt-8 border-t border-slate-700">
          <p className="text-gray-400">
            Final Year CSE Student at KSSEM | Bengaluru | © 2025 Vandana Patil
          </p>
        </div>
      </div>
    </section>
  );
}
