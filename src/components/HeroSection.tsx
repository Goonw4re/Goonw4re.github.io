
import React, { useState, useEffect } from 'react';
import { ChevronDown, Monitor, Settings, Shield } from 'lucide-react';

const HeroSection = () => {
  const [isTyping, setIsTyping] = useState(true);
  const [typedText, setTypedText] = useState('');
  const fullText = "Advanced Media Display Software";
  
  useEffect(() => {
    if (typedText.length < fullText.length && isTyping) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }, 100);
      
      return () => clearTimeout(timeout);
    } else if (typedText.length === fullText.length) {
      setIsTyping(false);
    }
  }, [typedText, isTyping]);

  return (
    <section className="relative min-h-screen pt-24 flex flex-col items-center justify-center overflow-hidden">
      {/* Background blobs */}
      <div className="blob top-1/4 left-1/4 opacity-50"></div>
      <div className="blob top-1/2 right-1/4 delay-1000 opacity-40"></div>
      <div className="blob bottom-1/4 left-1/3 delay-2000 opacity-30"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6 animate-fade-in">
            <span className="px-3 py-1 rounded-full bg-purple/10 text-purple text-xs font-medium tracking-wider uppercase">
              Version 1.0 Now Available
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 animate-slide-up">
            <span className="block">Goonware</span>
            <span className="mt-2 block text-purple">
              {typedText}
              <span className={`inline-block h-8 w-1 bg-purple ml-1 ${isTyping ? 'animate-pulse' : 'opacity-0'}`}></span>
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-slide-up animation-delay-100 text-balance">
            A powerful customizable popup display software with advanced features, 
            multi-monitor support, and interactive animations.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-slide-up animation-delay-200">
            <a 
              href="#download" 
              className="inline-flex items-center px-6 py-3 rounded-xl bg-purple text-white font-medium shadow-purple transition-all hover:shadow-lg hover:-translate-y-1 active:translate-y-0 glow"
            >
              Download Now
            </a>
            <a 
              href="#features" 
              className="inline-flex items-center px-6 py-3 rounded-xl bg-secondary text-foreground font-medium transition-colors hover:bg-secondary/80"
            >
              Learn More
            </a>
          </div>
        </div>
        
        {/* Preview Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="glass-card dark:glass-card-dark rounded-2xl p-6 shadow-subtle animate-slide-up animation-delay-300">
            <Monitor className="h-8 w-8 text-purple mb-4" />
            <h3 className="text-lg font-bold mb-2">Multi-Monitor</h3>
            <p className="text-muted-foreground text-sm">Display across all your screens with intelligent distribution.</p>
          </div>
          
          <div className="glass-card dark:glass-card-dark rounded-2xl p-6 shadow-subtle animate-slide-up animation-delay-400">
            <Settings className="h-8 w-8 text-purple mb-4" />
            <h3 className="text-lg font-bold mb-2">Customizable</h3>
            <p className="text-muted-foreground text-sm">Fine-tune every aspect of the display experience.</p>
          </div>
          
          <div className="glass-card dark:glass-card-dark rounded-2xl p-6 shadow-subtle animate-slide-up animation-delay-500">
            <Shield className="h-8 w-8 text-purple mb-4" />
            <h3 className="text-lg font-bold mb-2">Safety Features</h3>
            <p className="text-muted-foreground text-sm">Emergency panic button and privacy controls built-in.</p>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator - Moved to after the content and positioned with margin-top */}
      <div className="flex flex-col items-center mt-16 mb-4 animate-bounce-subtle">
        <span className="text-sm text-muted-foreground mb-2">Scroll to Explore</span>
        <ChevronDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default HeroSection;
