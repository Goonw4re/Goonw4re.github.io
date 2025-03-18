
import React, { useEffect } from 'react';
import { ArrowDown, Github, Lock, Package, TerminalSquare } from 'lucide-react';
import { GITHUB_LINKS } from '@/config/github-links';
import { useAgeVerification } from '@/hooks/use-age-verification';
import AgeVerificationDialog from './AgeVerificationDialog';
import { useToast } from '@/components/ui/use-toast';

const DownloadSection = () => {
  const { isVerified, setVerified, showDialog, setShowDialog } = useAgeVerification();
  const { toast } = useToast();

  // Show the dialog when scrolling to this section if not verified
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('download');
      if (section && !isVerified) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          setShowDialog(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isVerified, setShowDialog]);

  const handleAgeConfirm = () => {
    setVerified(true);
    toast({
      title: "Access Granted",
      description: "You now have full access to all downloads.",
      duration: 3000,
    });
  };

  const handleAgeCancel = () => {
    setShowDialog(false);
    toast({
      title: "Access Restricted",
      description: "You must be 18+ to download this content.",
      variant: "destructive",
      duration: 5000,
    });
  };

  const handleUnverifiedClick = (e: React.MouseEvent) => {
    if (!isVerified) {
      e.preventDefault();
      setShowDialog(true);
    }
  };

  return (
    <section id="download" className="py-20 relative overflow-hidden">
      {/* Background blobs */}
      <div className="blob top-1/3 left-1/3 opacity-30"></div>
      <div className="blob bottom-1/3 right-1/3 opacity-20"></div>
      
      <AgeVerificationDialog 
        open={showDialog} 
        onConfirm={handleAgeConfirm} 
        onCancel={handleAgeCancel} 
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 animate-slide-up">
              Ready to <span className="text-purple">Download</span>?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-slide-up animation-delay-100 text-balance">
              Get the latest release from our GitHub repository and start experiencing Goonware's powerful features.
              {!isVerified && (
                <span className="block mt-2 text-amber-500 font-medium">
                  Age verification (18+) required to download.
                </span>
              )}
            </p>
          </div>
          
          <div className="glass-card dark:glass-card-dark rounded-2xl p-8 md:p-10 shadow-subtle animate-scale-in">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex-1">
                <div className="flex items-center mb-4">
                  <Package className="h-5 w-5 text-purple mr-2" />
                  <h3 className="text-xl font-bold">Goonware v1.0.0</h3>
                </div>
                
                <p className="text-muted-foreground mb-6 text-balance">
                  The latest stable release with all features, including multi-monitor support and animation controls.
                </p>
                
                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="px-3 py-1 rounded-full bg-purple/10 text-purple text-xs font-medium">
                    Windows 10/11
                  </span>
                  <span className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium">
                    64-bit
                  </span>
                  <span className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium">
                    15.2 MB
                  </span>
                </div>
                
                {isVerified ? (
                  <a 
                    href={GITHUB_LINKS.LATEST_RELEASE} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 rounded-xl bg-purple text-white font-medium shadow-purple transition-all hover:shadow-lg hover:-translate-y-1 active:translate-y-0 glow"
                  >
                    <ArrowDown className="h-4 w-4 mr-2" />
                    Download Latest Release
                  </a>
                ) : (
                  <button
                    onClick={() => setShowDialog(true)}
                    className="inline-flex items-center px-6 py-3 rounded-xl bg-secondary text-muted-foreground font-medium transition-colors"
                  >
                    <Lock className="h-4 w-4 mr-2" />
                    Verify Age to Download
                  </button>
                )}
              </div>
              
              <div className="h-px w-full md:h-40 md:w-px bg-border"></div>
              
              <div className="flex-1">
                <div className="flex items-center mb-4">
                  <Github className="h-5 w-5 text-foreground mr-2" />
                  <h3 className="text-xl font-bold">Source Code</h3>
                </div>
                
                <p className="text-muted-foreground mb-6 text-balance">
                  Access the complete source code, contribute to the project, or create custom modifications.
                </p>
                
                <div className="flex flex-col gap-3">
                  <a 
                    href={GITHUB_LINKS.APP_REPO} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={handleUnverifiedClick}
                    className={`inline-flex items-center px-4 py-2 rounded-xl bg-secondary text-foreground font-medium transition-colors ${!isVerified ? "opacity-75" : "hover:bg-secondary/80"}`}
                  >
                    <Github className="h-4 w-4 mr-2" />
                    View on GitHub
                  </a>
                  
                  <a 
                    href={GITHUB_LINKS.ISSUES} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={handleUnverifiedClick}
                    className={`inline-flex items-center px-4 py-2 rounded-xl bg-secondary text-foreground font-medium transition-colors ${!isVerified ? "opacity-75" : "hover:bg-secondary/80"}`}
                  >
                    <TerminalSquare className="h-4 w-4 mr-2" />
                    Report Issue
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-border">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple/10 flex items-center justify-center text-purple">
                  <span className="text-sm font-bold">i</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  By downloading, you confirm that you understand this software's purpose and will use it responsibly 
                  and in accordance with local laws and regulations. This software is provided as-is without warranty.
                  <strong className="text-purple block mt-1">You must be 18+ to use this software.</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
