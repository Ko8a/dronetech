
import React from 'react';
import AnimatedElement from '../ui/AnimatedElement';
import { toast } from "@/components/ui/use-toast";
import { useTranslation } from '../../hooks/useTranslation';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { User } from 'lucide-react';
import { TranslationKey } from '../../translations/types';

interface TestimonialCardProps {
  nameKey: TranslationKey;
  roleKey: TranslationKey;
  quoteKey: TranslationKey;
  image: string;
  index: number;
}

const TestimonialCard = ({ nameKey, roleKey, quoteKey, image, index }: TestimonialCardProps) => {
  const { t } = useTranslation();
  const [imageLoaded, setImageLoaded] = React.useState(false);
  
  const handleImageError = (name: string) => {
    console.error(`Failed to load testimonial image for ${name}`);
    toast({
      title: t('loadingError'),
      description: `${t('failedToLoad')} ${name}`,
      variant: "destructive",
    });
  };

  return (
    <AnimatedElement
      animation="animate-fade-in"
      delay={index * 200}
      threshold={0.1}
    >
      <div className="bg-white rounded-xl shadow-sm p-6 relative">
        <div className="absolute -top-5 left-6">
          <Avatar className="w-16 h-16 border-4 border-white">
            <AvatarImage 
              src={image} 
              alt={t(nameKey)} 
              className="object-cover"
              onLoad={() => setImageLoaded(true)}
              onError={(e) => {
                handleImageError(t(nameKey));
                e.currentTarget.src = "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80";
                setImageLoaded(true);
              }}
            />
            <AvatarFallback className="bg-primary/10">
              <User className="w-6 h-6 text-primary" />
            </AvatarFallback>
          </Avatar>
        </div>
        <div className="pt-8">
          <p className="mb-4 text-muted-foreground">{t(quoteKey)}</p>
          <div className="border-t border-border pt-4">
            <h4 className="font-semibold">{t(nameKey)}</h4>
            <p className="text-sm text-primary">{t(roleKey)}</p>
          </div>
        </div>
      </div>
    </AnimatedElement>
  );
};

export default TestimonialCard;
