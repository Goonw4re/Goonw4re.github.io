
import React from 'react';
import { Github } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-10 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center space-x-2">
            <img 
              src="./lovable-uploads/513106cb-cf3c-41f7-93a8-edbda54a764f.png" 
              alt="Goonware Logo" 
              className="h-8 w-8 rounded-md"
            />
            <span className="text-foreground font-display font-medium">Goonware</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <a 
              href="https://github.com/username/goonware" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-secondary transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
          </div>
          
          <div className="text-sm text-muted-foreground">
            &copy; {currentYear} Goonware. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
