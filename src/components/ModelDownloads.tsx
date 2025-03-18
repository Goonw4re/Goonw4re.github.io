
import React from 'react';
import { Package } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface ModelDownloadsProps {
  className?: string;
}

const ModelDownloads = ({ className }: ModelDownloadsProps) => {
  const openGitHubModels = () => {
    window.open('https://github.com/username/goonware-models', '_blank');
  };

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button 
          variant="ghost" 
          size="icon" 
          className={`rounded-full ${className}`}
          onClick={openGitHubModels}
          aria-label="Model Downloads"
        >
          <Package className="h-5 w-5" />
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>GitHub Models</p>
      </TooltipContent>
    </Tooltip>
  );
};

export default ModelDownloads;
