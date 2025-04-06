
import React from 'react';
import AnimatedElement from '../ui/AnimatedElement';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { toast } from "@/components/ui/use-toast";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { useTranslation } from '../../hooks/useTranslation';

interface PhotoGalleryProps {
  galleryImages: string[];
}

const PhotoGallery = ({ galleryImages }: PhotoGalleryProps) => {
  const { t } = useTranslation();
  const [errorCount, setErrorCount] = React.useState(0);
  const [loadedImages, setLoadedImages] = React.useState<boolean[]>(Array(galleryImages.length).fill(false));
  
  const handleImageError = (image: string, index: number) => {
    console.error(`Failed to load image: ${image}`);
    setErrorCount(prev => prev + 1);
    
    // Update loaded status for this image
    const newLoadedImages = [...loadedImages];
    newLoadedImages[index] = false;
    setLoadedImages(newLoadedImages);
    
    toast({
      title: t('loadingError'),
      description: `${t('imageLoadFailed')}${index + 1}`,
      variant: "destructive",
    });
  };
  
  const handleImageLoad = (index: number) => {
    // Update loaded status for this image
    const newLoadedImages = [...loadedImages];
    newLoadedImages[index] = true;
    setLoadedImages(newLoadedImages);
  };

  return (
    <section className="py-16 bg-secondary/50">
      <div className="container mx-auto px-6">
        <AnimatedElement animation="animate-fade-in" threshold={0.1}>
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary-foreground rounded-full text-sm font-medium mb-3">
              {t('photoGallery')}
            </span>
            <h2 className="text-3xl font-bold mb-4">{t('competitionMoments')}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t('galleryDescription')}
            </p>
          </div>
        </AnimatedElement>
        
        <AnimatedElement animation="animate-fade-in" delay={200} threshold={0.1}>
          <div className="max-w-5xl mx-auto">
            {errorCount > 0 && (
              <Alert variant="destructive" className="mb-4">
                <AlertTitle>{t('imageProblems')}</AlertTitle>
                <AlertDescription>
                  {t('failedToLoad')} {errorCount} {t('outOf')} {galleryImages.length} {t('images')}.
                </AlertDescription>
              </Alert>
            )}
            
            <Carousel className="w-full" opts={{ loop: true }} autoplay={true} autoplayInterval={5000}>
              <CarouselContent>
                {galleryImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <AspectRatio ratio={16/9} className="bg-muted rounded-xl overflow-hidden">
                        <img 
                          src={image} 
                          alt={`${t('competitions')} ${index + 1}`} 
                          className="w-full h-full object-cover transition-opacity duration-300"
                          style={{ opacity: loadedImages[index] ? 1 : 0 }}
                          onError={() => handleImageError(image, index)}
                          onLoad={() => handleImageLoad(index)}
                        />
                      </AspectRatio>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2 bg-white/80 hover:bg-white" />
              <CarouselNext className="right-2 bg-white/80 hover:bg-white" />
            </Carousel>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default PhotoGallery;
