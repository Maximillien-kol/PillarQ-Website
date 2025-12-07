import { Calendar, Menu } from "lucide-react";
import { FadeIn } from "@/components/animations";
import CharacterSwap from "@/components/ui/CharacterSwap";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";

interface MastheadProps {
  name: string;
  title: string;
  location: string;
  onContactClick?: () => void;
}

const Masthead = ({ name, title, location, onContactClick }: MastheadProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  // Split the name into three parts
  const firstName = "Maximillien";
  const middleName = "Kolbe";
  const lastName = "I. Bagira";

  const navigationItems = [
    { name: "About", href: "#about" },
    { name: "Technical Expertise", href: "#technical-expertise" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Projects", href: "#projects" },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header at the top */}
      <FadeIn delay={200}>
        <div className="flex justify-between items-center pt-8 pb-4 px-4 md:px-6 lg:px-8">
          {/* Date and Location - Hidden on mobile */}
          <div className="hidden sm:block newspaper-byline text-base sm:text-lg lg:text-xl">
            <Calendar className="inline-block w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 mr-2" />
            {today} • {location}
          </div>
          
          {/* Mobile Hamburger Menu - Shown only on mobile */}
          <div className="block sm:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="border-2 border-foreground">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[280px] sm:w-[400px]">
                <SheetHeader>
                  <SheetTitle className="newspaper-headline text-left">Navigation</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col space-y-4 mt-8">
                  {navigationItems.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => scrollToSection(item.href)}
                      className="newspaper-byline text-left text-lg hover:text-accent transition-colors p-2 border-l-2 border-transparent hover:border-foreground"
                    >
                      {item.name}
                    </button>
                  ))}
                  <div className="pt-4 border-t border-border">
                    <button
                      onClick={() => {
                        onContactClick?.();
                        setIsMobileMenuOpen(false);
                      }}
                      className="newspaper-byline text-left text-lg hover:text-accent transition-colors p-2 border-l-2 border-transparent hover:border-foreground w-full"
                    >
                      Contact Me
                    </button>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
          
          {/* Contact Button - Hidden on mobile, shown on desktop */}
          <Button 
            variant="outline" 
            size="lg"
            onClick={onContactClick}
            className="hidden sm:block newspaper-byline text-base sm:text-lg lg:text-xl font-bold border-2 border-foreground hover:bg-foreground hover:text-background transition-all duration-300"
          >
            CONTACT ME
          </Button>
        </div>
      </FadeIn>
      
      {/* Main content centered */}
      <header className="newspaper-masthead flex-1 flex flex-col justify-center px-4 md:px-6 lg:px-8">
        <div className="text-center">
          <div className="newspaper-headline text-3xl sm:text-4xl md:text-9xl lg:text-6xl xl:text-8xl 2xl:text-9xl leading-tight tracking-tight max-w-full overflow-hidden m-0 p-0">
            <div className="block max-w-full m-0 p-0">
              <CharacterSwap 
                text={firstName}
                delay={800}
                swapDuration={60}
                className="block m-0 p-0"
              />
              <CharacterSwap 
                text={middleName}
                delay={1200}
                swapDuration={60}
                className="block m-0 p-0"
              />
              <CharacterSwap 
                text={lastName}
                delay={1600}
                swapDuration={60}
                className="block m-0 p-0"
              />
            </div>
          </div>
          <FadeIn delay={2000}>
            <p className="newspaper-subhead text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mt-4">
              {title}
            </p>
          </FadeIn>
        </div>
      </header>
    </div>
  );
};

export default Masthead;