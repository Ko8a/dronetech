
import React from 'react';
import AnimatedElement from '../ui/AnimatedElement';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { toast } from "@/components/ui/use-toast";

interface PhotoGalleryProps {
  galleryImages: string[];
}

const PhotoGallery = ({ galleryImages }: PhotoGalleryProps) => {
  const handleImageError = (image: string, index: number) => {
    console.error(`Failed to load image: ${image}`);
    toast({
      title: "Ошибка загрузки",
      description: `Не удалось загрузить изображение #${index + 1}`,
      variant: "destructive",
    });
  };

  return (
    <section className="py-16 bg-secondary/50">
      <div className="container mx-auto px-6">
        <AnimatedElement animation="animate-fade-in" threshold={0.1}>
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary-foreground rounded-full text-sm font-medium mb-3">
              Competition Gallery
            </span>
            <h2 className="text-3xl font-bold mb-4">Moments from Past Events</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Relive the excitement and innovation from our previous MDC competitions.
            </p>
          </div>
        </AnimatedElement>
        
        <AnimatedElement animation="animate-fade-in" delay={200} threshold={0.1}>
          <div className="max-w-5xl mx-auto">
            <Carousel className="w-full" opts={{ loop: true }} autoplay={true} autoplayInterval={3000}>
              <CarouselContent>
                {galleryImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <div className="overflow-hidden rounded-xl bg-muted">
                        <img 
                          src={image} 
                          alt={`Competition Scene ${index + 1}`} 
                          className="w-full aspect-[16/9] object-cover"
                          onError={(e) => {
                            handleImageError(image, index);
                            e.currentTarget.src = "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80";
                          }}
                        />
                      </div>
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
