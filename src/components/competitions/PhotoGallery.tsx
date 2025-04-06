
import React, { useState } from 'react';
import AnimatedElement from '../ui/AnimatedElement';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { toast } from "@/components/ui/use-toast";
import { Slider } from "@/components/ui/slider";

interface PhotoGalleryProps {
  galleryImages: string[];
}

const PhotoGallery = ({ galleryImages }: PhotoGalleryProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplaySpeed, setAutoplaySpeed] = useState(5000);
  
  const handleImageError = (image: string, index: number) => {
    console.error(`Failed to load image: ${image}`);
    toast({
      title: "Ошибка загрузки",
      description: `Не удалось загрузить изображение #${index + 1}`,
      variant: "destructive",
    });
  };

  const handleSlideChange = (index: number) => {
    setActiveIndex(index);
  };

  const handleSpeedChange = (value: number[]) => {
    setAutoplaySpeed(value[0]);
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
            <Carousel 
              className="w-full" 
              opts={{ loop: true }} 
              autoplay={true} 
              autoplayInterval={autoplaySpeed}
              setApi={(api) => {
                if (api) {
                  api.on("select", () => {
                    setActiveIndex(api.selectedScrollSnap());
                  });
                }
              }}
            >
              <CarouselContent>
                {galleryImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <AspectRatio ratio={16/9} className="bg-muted rounded-xl overflow-hidden">
                        <img 
                          src={image} 
                          alt={`Соревнование дронов ${index + 1}`} 
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            handleImageError(image, index);
                            e.currentTarget.src = "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80";
                          }}
                        />
                      </AspectRatio>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2 bg-white/80 hover:bg-white" />
              <CarouselNext className="right-2 bg-white/80 hover:bg-white" />
            </Carousel>
            
            <div className="mt-4 flex justify-center">
              <div className="flex gap-1 overflow-x-auto py-2 px-4 max-w-full">
                {galleryImages.map((image, index) => (
                  <div 
                    key={index}
                    className={`h-2 w-2 rounded-full cursor-pointer transition-all duration-300 ${activeIndex === index ? 'bg-primary w-4' : 'bg-gray-300'}`}
                    onClick={() => handleSlideChange(index)}
                  />
                ))}
              </div>
            </div>

            <div className="mt-6 max-w-xs mx-auto">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">Скорость слайдера</span>
                <span className="text-sm font-medium">{autoplaySpeed/1000}с</span>
              </div>
              <Slider
                defaultValue={[5000]}
                min={2000}
                max={10000}
                step={1000}
                value={[autoplaySpeed]}
                onValueChange={handleSpeedChange}
              />
            </div>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default PhotoGallery;
