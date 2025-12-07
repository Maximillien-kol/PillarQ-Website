import React, { useState } from "react";
import Masthead from "@/components/Masthead";
import NewsSection from "@/components/NewsSection";
import ArticleCard from "@/components/ArticleCard";
import HeroImage from "@/components/HeroImage";
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, ChevronDown } from "lucide-react";
import { AnimateOnScroll } from "@/components/animations";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const Index = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      console.log('Submitting form with data:', formData);
      
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      console.log('Response status:', response.status);
      console.log('Response headers:', response.headers);

      const result = await response.json();
      console.log('Response result:', result);

      if (response.ok) {
        toast({
          title: "Message sent successfully! 🎉",
          description: "Thank you for reaching out. I'll get back to you soon!",
          duration: 5000,
        });
        setFormData({ name: '', email: '', message: '' });
        setIsContactOpen(false);
      } else {
        console.error('Server error response:', result);
        toast({
          title: "Failed to send message ❌",
          description: result.error || "Please try again or email me directly at bagiramaximillien@gmail.com",
          variant: "destructive",
          duration: 7000,
        });
      }
    } catch (error) {
      console.error('Network error details:', error);
      toast({
        title: "Network error ⚠️",
        description: `Error: ${error.message}. Please check your connection and try again, or email me directly at bagiramaximillien@gmail.com`,
        variant: "destructive",
        duration: 7000,
      });
      console.error('Network error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-6 py-8">
        
        {/* Masthead - Full Height Hero Section */}
        <div className="min-h-screen flex items-center justify-center py-16 -mt-8 relative">
          <div className="w-full">
            <Masthead 
              name="Maximillien Kolbe I. Bagira"
              title="Visionary trying to help and inspire others through technology"
              location="Nyarugenge, Kigali city"
              onContactClick={() => setIsContactOpen(true)}
            />
          </div>
          
          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-muted-foreground" />
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16">
          
          {/* Left Column - Hero & About */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* About Section */}
            <AnimateOnScroll animation="slideUp" threshold={0.2}>
              <div id="about">
                <NewsSection 
                  headline="About the Me"
                  byline="Lead Story - Professional Background"
                >
                <div className="newspaper-column columns-1 md:columns-2 text-justify">
                  <p className="mb-4">
                    Maximillien Kolbe Bagira Inezayse, is a Rwandan student specializing in Computer 
                    Systems and Architecture. My academic focus combines electronics, software, and problem-solving, 
                    supported by hands-on experience with innovative projects.
                  </p>
                  <p className="mb-4">
                    I have developed solutions like Kira, an SMS-based medication reminder platform for hospitals; 
                    and Opportunity.ini.rw, a growing job platform serving hundreds of daily users. 
                    These projects reflect my passion for applying technology to real-world African challenges.
                  </p>
                  <p>
                    My background blends technical knowledge, innovation, and community impact, with a strong 
                    vision for creating scalable solutions that empower underserved communities and contribute to
                    Africa’s technological growth.
                  </p>
                </div>
              </NewsSection>
              </div>
            </AnimateOnScroll>

            {/* Skills Section */}
            <AnimateOnScroll animation="slideUp" threshold={0.2}>
              <div id="technical-expertise">
                <NewsSection 
                headline="Technical Expertise"
                byline="Skills & Capabilities"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="newspaper-byline mb-3">Technical Skills</h4>
                    <div className="space-y-2">
                      {['Programming & Development', 'Software & Hardware','Electronics and electricity','Systems & Science', 'QA & Product Management'].map((skill) => (
                        <div key={skill} className="newspaper-body text-sm border-l-2 border-foreground pl-3">
                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="newspaper-byline mb-3">Soft skills </h4>
                    <div className="space-y-2">
                      {['Technical Support', 'Problem-Solving & Innovation', 'Communication', 'Networking & Community Engagement', 'Adaptability & Learning'].map((skill) => (
                        <div key={skill} className="newspaper-body text-sm border-l-2 border-foreground pl-3">
                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </NewsSection>
              </div>
            </AnimateOnScroll>

            {/* Experience and Education Section */}
            <AnimateOnScroll animation="slideUp" threshold={0.2}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                {/* Experience Section */}
                <div id="experience">
                  <NewsSection 
                  headline="Experience"
                  byline="Professional Journey"
                >
                    
                    <div className="space-y-4">
                      <div className="border-l-2 border-foreground pl-4">
                      <h5 className="newspaper-byline text-sm font-bold">Digital Marketer</h5>
                      <p className="newspaper-body text-xs text-muted-foreground">On safari with emile • November 2025 - Present</p>
                      <p className="newspaper-body text-sm mt-2">
                        Designed and maintain different platform's activeness keeping of daily users. 
                        Implemented different marketing strategies to grow and adapt in ocean full of sharks.
                      </p>
                    </div> 
                    <div className="border-l-2 border-foreground pl-4">
                      <h5 className="newspaper-byline text-sm font-bold">Creativity Lead</h5>
                      <p className="newspaper-body text-xs text-muted-foreground">Opportunity ini rwanda • May 2025 - Present</p>
                      <p className="newspaper-body text-sm mt-2">
                        Developed and maintain a job platform serving hundreds of daily users. 
                        Built comprehensive features including CV comparison tools and career resources.
                      </p>
                    </div> 
                    
                    <div className="border-l-2 border-foreground pl-4">
                      <h5 className="newspaper-byline text-sm font-bold">IT Support Intern</h5>
                      <p className="newspaper-body text-xs text-muted-foreground">Ministry of Youth and Art • March 2025 - May 2025</p>
                      <p className="newspaper-body text-sm mt-2">
                        Provided technical support, maintained systems, troubleshot 
                        hardware/software issues, and assisted in IT operations.
                      </p>
                    </div>
                  </div>
                </NewsSection>
                </div>

                {/* Education Section */}
               <div id="education">
                  <NewsSection 
                  headline="Education"
                  byline="Academic Background"
                >
                  <div className="space-y-4">
                    <div className="border-l-2 border-foreground pl-4">
                      <h5 className="newspaper-byline text-sm font-bold">Computer Systems and Architecture</h5>
                      <p className="newspaper-body text-xs text-muted-foreground">Higher Education • Sj joseph Nyamirambo</p>
                      <p className="newspaper-body text-sm mt-2">
                        Specializing in the intersection of CAD, QA, OS, and system architecture design. 
                        Focusing on innovative problem-solving and hands-on project experience.
                      </p>
                    </div>
                                        
                    <div className="border-l-2 border-foreground pl-4">
                      <h5 className="newspaper-byline text-sm font-bold">Technical Certifications</h5>
                      <p className="newspaper-body text-xs text-muted-foreground">Various Providers • 2022-Now</p>
                      <p className="newspaper-body text-sm mt-2">
                        Completed certifications in Generative AI, Ethical Hacking, PHP,  
                        and Entrepreneurship from different providers including Ingazi, Codingal, and Wavumbuzi,
                        Equiping me strong foundation in System & software design.
                      </p>
                    </div>
                  </div>
                </NewsSection>
                </div>

              </div>
            </AnimateOnScroll>

          </div>

          {/* Right Column - Image & Contact */}
          <div className="space-y-8">
            
            {/* Hero Image */}
            <AnimateOnScroll animation="scaleIn" threshold={0.3}>
              <HeroImage 
                caption="."
              />
            </AnimateOnScroll>

            {/* Contact Section */}
            <AnimateOnScroll animation="slideInRight" threshold={0.3}>
              <NewsSection 
                headline="Contact Information"
                byline="Get in Touch"
              >
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-4 h-4" />
                    <span className="newspaper-body">bagiramaximillien@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-4 h-4" />
                    <span className="newspaper-body">+250 783 638 813</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-4 h-4" />
                    <span className="newspaper-body">Nyarugenge, Kigali city</span>
                  </div>
                  <div className="pt-4 border-t border-border">
                    <div className="flex space-x-4 mb-4">
                      <a href="https://github.com/Maximillien-kol" className="newspaper-byline hover:text-accent transition-colors">
                        <Github className="w-5 h-5" />
                      </a>
                      <a href="https://www.linkedin.com/in/kolbe-maximillien/" className="newspaper-byline hover:text-accent transition-colors">
                        <Linkedin className="w-5 h-5" />
                      </a>
                    </div>
                    
                    {/* Contact Me Button */}
                    <Button 
                      className="w-full newspaper-byline bg-foreground text-background hover:bg-foreground/90"
                      onClick={() => setIsContactOpen(true)}
                    >
                      Contact Me
                    </Button>
                  </div>
                </div>
              </NewsSection>
            </AnimateOnScroll>

          </div>
        </div>

        {/* Projects Section */}
        <AnimateOnScroll animation="slideUp" threshold={0.1}>
          <div id="projects">
            <NewsSection 
              headline="Featured Projects"
              byline="Portfolio Highlights"
              className="mt-12"
            >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              <ArticleCard 
                headline="Opportunity ini Rwanda"
                description=" a Rwandan job-sharing and career platform that connects job seekers with tailored opportunities, CV comparison tools, and resources to enhance employability and professional growth."
                technologies={['Go', 'Node.js', 'PostgreSQL', 'Typescript']}
                link="https://opportunity.ini.rw/"
              />

              <ArticleCard 
                headline="Kira Health"
                description="A collaborative health management tool with real-time updates, file sharing, and advanced analytics. Built for doctor and patients to easie doctor booking and productivity."
                technologies={['Next.js', 'TypeScript', 'Prisma', 'WebSocket']}
                link="https://trykira.vercel.app/"
              />

              <ArticleCard 
                headline="Mpuza inc. Redesign"
                description="An interactive dashboard for data analysis and visualization, featuring customizable charts, real-time data streaming, and export capabilities for business intelligence."
                technologies={['Figma', 'Framer Motion', 'Spline']}
                link="https://dribbble.com/shots/25922822-Mpuza-Inc-Redesign"
              />

              <ArticleCard 
                headline="Rwandair Redesign"
                description="A progressive web application optimized for mobile devices, featuring offline capabilities, push notifications, and seamless cross-platform performance."
                technologies={['Figma', 'Framer Motion', 'Spline']}
                link="https://dribbble.com/shots/25984631-RwandaAir-Website-Redesign"
              />

              <ArticleCard 
                headline="On safari with emile"
                description="A tourism application leveraging safaris and tour for effective and seamless of interaction, keeping platform and social media active and operate."
                technologies={['management', 'Social media', 'marketing']}
                link="https://www.onsafariwithemile.guide/"
              />

              <ArticleCard 
                headline="Notes AI"
                description="An AI-powered note-cleaner and smart assistant for organizing and improving your notes effortlessly."
                technologies={['TypeScript', 'ReactJs', 'Supabase', 'PLpgSQL']}
                link="https://trynotes.vercel.app/"
              />

            </div>
          </NewsSection>
          </div>
        </AnimateOnScroll>

        {/* Shared Contact Dialog */}
        <Dialog open={isContactOpen} onOpenChange={setIsContactOpen}>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle className="newspaper-headline text-xl">Get In Touch</DialogTitle>
              <DialogDescription className="newspaper-body">
                Send me a message and I'll get back to you as soon as possible.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4 py-4">
              <div className="space-y-2">
                <label htmlFor="name" className="newspaper-byline text-sm font-medium">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                  className="newspaper-body"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="newspaper-byline text-sm font-medium">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                  className="newspaper-body"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="newspaper-byline text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project or how I can help you..."
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                  className="newspaper-body resize-none"
                />
              </div>
              <div className="flex justify-end pt-4">
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="newspaper-byline bg-foreground text-background hover:bg-foreground/90 disabled:opacity-50"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t-4 border-foreground text-center">
          <p className="newspaper-caption">
            © 2025 Maximillien Kolbe • All rights reserved • Built for Differenciating.
          </p>
        </footer>

      </div>
    </div>
  );
};

export default Index;