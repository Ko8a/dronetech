
import React from 'react';
import AnimatedElement from '../ui/AnimatedElement';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { toast } from "@/components/ui/use-toast";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

interface PhotoGalleryProps {
  galleryImages: string[];
}

const PhotoGallery = ({ galleryImages }: PhotoGalleryProps) => {
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
      title: "Ошибка загрузки",
      description: `Не удалось загрузить изображение #${index + 1}`,
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
              Фотогалерея соревнований
            </span>
            <h2 className="text-3xl font-bold mb-4">Моменты с прошедших мероприятий</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Переживите заново захватывающие моменты и инновации с наших предыдущих MDC соревнований.
            </p>
          </div>
        </AnimatedElement>
        
        <AnimatedElement animation="animate-fade-in" delay={200} threshold={0.1}>
          <div className="max-w-5xl mx-auto">
            {errorCount > 0 && (
              <Alert variant="destructive" className="mb-4">
                <AlertTitle>Проблемы с изображениями</AlertTitle>
                <AlertDescription>
                  Не удалось загрузить {errorCount} из {galleryImages.length} изображений.
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
                          alt={`Соревнование дронов ${index + 1}`} 
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
