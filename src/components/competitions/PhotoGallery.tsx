
import React from 'react';
import AnimatedElement from '../ui/AnimatedElement';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { toast } from "@/components/ui/use-toast";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { useTranslation } from '../../hooks/useTranslation';

interface PhotoGalleryProps {
  galleryImages?: string[];
}

const PhotoGallery = ({ galleryImages }: PhotoGalleryProps) => {
  const { t } = useTranslation();
  const [errorCount, setErrorCount] = React.useState(0);
  
  // Use uploaded images or provided images
  const competitionImages = [
    "/lovable-uploads/competition-photos/745a6994-1b63-4bdd-ac55-577a6b48560a.png",
    "/lovable-uploads/competition-photos/8f742b1a-aaa8-4e2c-baca-e7d4efec735a.png",
    "/lovable-uploads/competition-photos/94bedda3-4093-4cce-9fe8-6c58c75eb2dc.png",
    "/lovable-uploads/competition-photos/bb68df05-b021-45fa-a307-ba9d9f0a5dd3.png",
    "/lovable-uploads/competition-photos/8825dab7-d044-404d-9075-3f409c4c9722.png",
    "/lovable-uploads/competition-photos/14437bb9-e199-4ff6-9462-07a2dffedf0d.png",
    "/lovable-uploads/competition-photos/c785e0df-e780-4d0a-aed8-6b7510397e60.png",
    "/lovable-uploads/competition-photos/d2321178-f432-4d3e-9999-f1111b3f2b8c.png"
  ];
  
  const images = galleryImages || competitionImages;
  const [loadedImages, setLoadedImages] = React.useState<boolean[]>(Array(images.length).fill(false));
  
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
                  {t('failedToLoad')} {errorCount} {t('outOf')} {images.length} {t('images')}.
                </AlertDescription>
              </Alert>
            )}
            
            <Carousel className="w-full" opts={{ loop: true }} autoplay={true} autoplayInterval={5000}>
              <CarouselContent>
                {images.map((image, index) => (
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
