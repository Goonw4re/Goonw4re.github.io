
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';
import { AlertTriangle } from 'lucide-react';

interface AgeVerificationDialogProps {
  open: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

const AgeVerificationDialog = ({
  open,
  onConfirm,
  onCancel
}: AgeVerificationDialogProps) => {
  const navigate = useNavigate();

  const handleDecline = () => {
    onCancel();
    navigate('/');
  };

  return (
    <Dialog open={open} onOpenChange={(isOpen) => {
      if (!isOpen) handleDecline();
    }}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl">
            <AlertTriangle className="h-5 w-5 text-amber-500" />
            Age Verification Required
          </DialogTitle>
          <DialogDescription>
            This website contains content intended for adults aged 18 and over.
          </DialogDescription>
        </DialogHeader>
        
        <div className="py-4">
          <p className="mb-4">
            By continuing, you confirm that:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
            <li>You are at least 18 years of age</li>
            <li>You understand the nature of the content you may encounter</li>
            <li>You accept full responsibility for your actions while using this site</li>
            <li>You understand you will not be able to download any content if you decline</li>
          </ul>
        </div>
        
        <DialogFooter className="flex flex-col sm:flex-row gap-2">
          <Button 
            variant="outline" 
            onClick={handleDecline}
          >
            I Decline
          </Button>
          <Button 
            variant="default"
            className="bg-purple hover:bg-purple/90 text-white" 
            onClick={onConfirm}
          >
            I Confirm I'm 18+
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AgeVerificationDialog;
