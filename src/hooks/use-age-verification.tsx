
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface AgeVerificationContextType {
  isVerified: boolean;
  setVerified: (value: boolean) => void;
  showDialog: boolean;
  setShowDialog: (value: boolean) => void;
}

const AgeVerificationContext = createContext<AgeVerificationContextType | undefined>(undefined);

export const AgeVerificationProvider = ({ children }: { children: ReactNode }) => {
  // Check localStorage for existing verification
  const [isVerified, setIsVerified] = useState<boolean>(() => {
    const saved = localStorage.getItem('age-verified');
    return saved === 'true';
  });
  
  // Control dialog visibility
  const [showDialog, setShowDialog] = useState<boolean>(!isVerified);

  // Save verification state to localStorage
  useEffect(() => {
    if (isVerified) {
      localStorage.setItem('age-verified', 'true');
    }
  }, [isVerified]);

  const setVerified = (value: boolean) => {
    setIsVerified(value);
    if (value) {
      setShowDialog(false);
    }
  };

  return (
    <AgeVerificationContext.Provider value={{ isVerified, setVerified, showDialog, setShowDialog }}>
      {children}
    </AgeVerificationContext.Provider>
  );
};

export const useAgeVerification = () => {
  const context = useContext(AgeVerificationContext);
  if (context === undefined) {
    throw new Error('useAgeVerification must be used within an AgeVerificationProvider');
  }
  return context;
};
