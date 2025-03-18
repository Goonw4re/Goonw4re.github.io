
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import ModelDownloads from './ModelDownloads';
import { ModeToggle } from './ModeToggle';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 py-4 px-6 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-lg shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <img 
              src="./lovable-uploads/513106cb-cf3c-41f7-93a8-edbda54a764f.png" 
              alt="Goonware Logo" 
              className="h-8 w-8 rounded-md"
            />
            <span className={`font-display font-medium ${isScrolled ? "text-foreground" : "text-foreground"}`}>
              Goonware
            </span>
          </a>
          
          <nav className="hidden md:block">
            <ul className="flex items-center gap-6">
              <li>
                <a 
                  href="#features" 
                  className={`text-sm link-underline ${isScrolled ? "text-foreground" : "text-foreground"}`}
                >
                  Features
                </a>
              </li>
              <li>
                <a 
                  href="#download" 
                  className={`text-sm link-underline ${isScrolled ? "text-foreground" : "text-foreground"}`}
                >
                  Download
                </a>
              </li>
              <li>
                <a 
                  href="#faq" 
                  className={`text-sm link-underline ${isScrolled ? "text-foreground" : "text-foreground"}`}
                >
                  FAQ
                </a>
              </li>
              <li className="flex items-center gap-2">
                <ModelDownloads className="text-foreground" />
                <ModeToggle />
              </li>
            </ul>
          </nav>
          
          {/* Mobile menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>
                    <div className="flex items-center gap-2">
                      <img 
                        src="./lovable-uploads/513106cb-cf3c-41f7-93a8-edbda54a764f.png" 
                        alt="Goonware Logo" 
                        className="h-8 w-8 rounded-md" 
                      />
                      Goonware
                    </div>
                  </SheetTitle>
                  <SheetDescription>
                    Navigate to different sections
                  </SheetDescription>
                </SheetHeader>
                <nav className="mt-6">
                  <ul className="space-y-4">
                    <li>
                      <a 
                        href="#features" 
                        className="text-foreground hover:text-primary transition-colors block py-2"
                      >
                        Features
                      </a>
                    </li>
                    <li>
                      <a 
                        href="#download" 
                        className="text-foreground hover:text-primary transition-colors block py-2"
                      >
                        Download
                      </a>
                    </li>
                    <li>
                      <a 
                        href="#faq" 
                        className="text-foreground hover:text-primary transition-colors block py-2"
                      >
                        FAQ
                      </a>
                    </li>
                    <li className="flex items-center gap-2 py-2">
                      <ModelDownloads className="text-foreground" />
                      <ModeToggle />
                    </li>
                  </ul>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
