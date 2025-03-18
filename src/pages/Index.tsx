
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeatureCard from '@/components/FeatureCard';
import DownloadSection from '@/components/DownloadSection';
import Footer from '@/components/Footer';
import { 
  Bell, 
  Command, 
  Image, 
  Layers, 
  Layout, 
  Maximize, 
  MousePointer, 
  Settings, 
  Shield 
} from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main>
        <HeroSection />
        
        {/* Features Section */}
        <section id="features" className="py-20 relative overflow-hidden bg-secondary/50">
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 animate-slide-up">
                Powerful <span className="text-purple">Features</span>
              </h2>
              <p className="text-lg text-muted-foreground animate-slide-up animation-delay-100 text-balance">
                Goonware comes packed with advanced capabilities designed to deliver 
                a premium customizable popup experience.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <FeatureCard 
                title="Advanced Media Display" 
                description="Shows images, animated GIFs, and videos across multiple monitors with proper aspect ratios."
                icon={Image}
                index={0}
              />
              
              <FeatureCard 
                title="Multi-Monitor Support" 
                description="Full support for multiple monitor setups with independent configuration for each screen."
                icon={Layout}
                index={1}
              />
              
              <FeatureCard 
                title="Interactive Animations" 
                description="Dynamic bounce animation with physics-based movement and collision detection."
                icon={MousePointer}
                index={2}
              />
              
              <FeatureCard 
                title="Display Controls" 
                description="Precise control over display intervals, maximum popups, and probabilities."
                icon={Layers}
                index={3}
              />
              
              <FeatureCard 
                title="Safety Features" 
                description="Emergency panic button, system tray icon, and private viewing mode."
                icon={Shield}
                index={4}
              />
              
              <FeatureCard 
                title="Modern Interface" 
                description="Sleek, dark-themed interface with intuitive controls and real-time feedback."
                icon={Command}
                index={5}
              />
              
              <FeatureCard 
                title="Customization" 
                description="Adjust intervals, probabilities, and other settings to your exact preferences."
                icon={Settings}
                index={6}
              />
              
              <FeatureCard 
                title="Full Screen Mode" 
                description="Maximize your experience with full screen support for complete immersion."
                icon={Maximize}
                index={7}
              />
              
              <FeatureCard 
                title="Notifications" 
                description="System tray notifications and alerts keep you informed of important events."
                icon={Bell}
                index={8}
              />
            </div>
          </div>
        </section>
        
        <DownloadSection />
        
        {/* FAQ Section */}
        <section id="faq" className="py-20 relative overflow-hidden">
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 animate-slide-up">
                  Frequently Asked <span className="text-purple">Questions</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-slide-up animation-delay-100 text-balance">
                  Everything you need to know about Goonware and its features.
                </p>
              </div>
              
              <div className="space-y-6">
                <FaqItem 
                  question="What operating systems are supported?" 
                  answer="Goonware is designed for Windows 10 and 11. There are currently no plans for macOS or Linux versions."
                  index={0}
                />
                
                <FaqItem 
                  question="Is the software free to use?" 
                  answer="Yes, Goonware is completely free and open-source. You can download, modify, and distribute it under the MIT license."
                  index={1}
                />
                
                <FaqItem 
                  question="How do I add my own media files?" 
                  answer="Create a ZIP file containing your media (images, GIFs, videos) and place it in the 'models' folder. The application will detect it automatically."
                  index={2}
                />
                
                <FaqItem 
                  question="Does it collect any data or require internet?" 
                  answer="No, Goonware is completely offline and does not collect or transmit any data. All content stays local on your computer."
                  index={3}
                />
                
                <FaqItem 
                  question="What's the emergency panic button?" 
                  answer="The panic button (default: ' key) instantly closes all popup windows. You can customize this key in the settings."
                  index={4}
                />
                
                <FaqItem 
                  question="How do I report bugs or request features?" 
                  answer="Visit our GitHub repository and create an issue. We welcome bug reports, feature requests, and contributions."
                  index={5}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

interface FaqItemProps {
  question: string;
  answer: string;
  index?: number;
}

const FaqItem = ({ question, answer, index = 0 }: FaqItemProps) => {
  const animationDelay = `animation-delay-${index * 100}`;
  
  return (
    <div className={`bg-white/70 dark:bg-black/20 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-2xl p-6 transition-all duration-300 hover:shadow-subtle animate-scale-in ${animationDelay}`}>
      <h3 className="text-xl font-bold mb-3">{question}</h3>
      <p className="text-muted-foreground">{answer}</p>
    </div>
  );
};

export default Index;
