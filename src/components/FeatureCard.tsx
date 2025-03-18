
import React from 'react';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
  iconClassName?: string;
  index?: number;
}

const FeatureCard = ({ 
  title, 
  description, 
  icon: Icon, 
  className,
  iconClassName,
  index = 0 
}: FeatureCardProps) => {
  const animationDelay = `animation-delay-${index * 100}`;
  
  return (
    <div 
      className={cn(
        "group relative p-6 rounded-2xl transition-all duration-300 animate-scale-in",
        "bg-white/70 dark:bg-black/20 backdrop-blur-md border border-white/20 dark:border-white/10",
        "hover:shadow-xl hover:-translate-y-1 hover:bg-white/80 dark:hover:bg-black/30",
        animationDelay,
        className
      )}
    >
      <div className={cn(
        "w-12 h-12 rounded-xl flex items-center justify-center mb-4",
        "bg-purple/10 text-purple transition-colors duration-300",
        "group-hover:bg-purple group-hover:text-white",
        iconClassName
      )}>
        <Icon className="h-6 w-6" />
      </div>
      
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

export default FeatureCard;
