
import React, { useState } from 'react';
import { Github, Settings as SettingsIcon, Save, X } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface SettingsProps {
  className?: string;
}

const Settings = ({ className }: SettingsProps) => {
  const [githubRepo, setGithubRepo] = useState<string>("username/goonware");
  const [modelRepo, setModelRepo] = useState<string>("username/goonware-models");
  const { toast } = useToast();

  const handleSaveSettings = () => {
    // In a real app, this would save to localStorage or a backend
    toast({
      title: "Settings saved",
      description: "Your GitHub repositories have been configured.",
    });
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button 
          className={`p-2 rounded-full hover:bg-secondary transition-colors ${className}`}
          aria-label="Settings"
        >
          <SettingsIcon className="h-5 w-5" />
        </button>
      </SheetTrigger>
      <SheetContent className="w-[380px] sm:w-[540px]">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <SettingsIcon className="h-5 w-5 text-purple" />
            <span>Goonware Settings</span>
          </SheetTitle>
          <SheetDescription>
            Configure your GitHub repositories for the application and model downloads.
          </SheetDescription>
        </SheetHeader>
        <Separator className="my-4" />
        <ScrollArea className="h-[calc(100vh-180px)] pr-4">
          <div className="space-y-6 pb-10">
            <div className="space-y-2">
              <h3 className="text-lg font-medium">GitHub Repository</h3>
              <p className="text-sm text-muted-foreground">
                Set the main GitHub repository for the Goonware application.
              </p>
              <div className="flex items-center gap-2 mt-2">
                <Github className="h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="username/repository" 
                  value={githubRepo}
                  onChange={(e) => setGithubRepo(e.target.value)}
                  className="max-w-xs"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-lg font-medium">Models Repository</h3>
              <p className="text-sm text-muted-foreground">
                Configure the GitHub repository for model downloads.
              </p>
              <div className="flex items-center gap-2 mt-2">
                <Github className="h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="username/repository" 
                  value={modelRepo}
                  onChange={(e) => setModelRepo(e.target.value)}
                  className="max-w-xs"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-lg font-medium">Other Settings</h3>
              <p className="text-sm text-muted-foreground">
                Additional configuration options for Goonware.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-3">
                <div className="glass-card dark:glass-card-dark rounded-xl p-4">
                  <h4 className="text-md font-semibold mb-2">Display Settings</h4>
                  <p className="text-xs text-muted-foreground">Configure display settings and intervals</p>
                </div>
                <div className="glass-card dark:glass-card-dark rounded-xl p-4">
                  <h4 className="text-md font-semibold mb-2">Safety Controls</h4>
                  <p className="text-xs text-muted-foreground">Emergency panic button and privacy settings</p>
                </div>
              </div>
            </div>
          </div>
        </ScrollArea>
        <div className="flex justify-end gap-2 pt-4">
          <Button variant="outline" className="gap-1" asChild>
            <SheetTrigger>
              <X className="h-4 w-4" />
              <span>Cancel</span>
            </SheetTrigger>
          </Button>
          <Button onClick={handleSaveSettings} className="gap-1 bg-purple hover:bg-purple/90">
            <Save className="h-4 w-4" />
            <span>Save Settings</span>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Settings;
