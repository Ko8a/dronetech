
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/competitions/HeroSection';
import EventDetails from '../components/competitions/EventDetails';
import PhotoGallery from '../components/competitions/PhotoGallery';
import CompetitionRegulations from '../components/competitions/CompetitionRegulations';
import ScheduleSection from '../components/competitions/ScheduleSection';
import TestimonialsSection, { Testimonial } from '../components/competitions/TestimonialsSection';
import { useTranslation } from '../hooks/useTranslation';
import { TestimonialKey } from '../translations/types';

const Competitions = () => {
  const { t } = useTranslation();
  
  // Set target date for countdown (May 25, 2025)
  const targetDate = new Date(2025, 4, 25); // Month is 0-indexed, so 4 = May
  
  // Updated gallery images with competition photos
  const galleryImages = [
    '/lovable-uploads/competition-photos/1c39704c-41cf-4542-8da8-73b317543b84.jpg',
    '/lovable-uploads/competition-photos/39af8e06-09d8-4278-9879-3d80bb67726d.jpg',
    '/lovable-uploads/competition-photos/509db9a5-5b9f-4394-a0bc-ea4fad4fd5ba.jpg',
    '/lovable-uploads/competition-photos/5a730965-4a63-4939-bf41-c3b18e226469.jpg',
    '/lovable-uploads/competition-photos/c2c7286e-ebf8-4fbc-b1c4-a7b4499d53c5.jpg',
    '/lovable-uploads/competition-photos/d3656ecf-e773-425e-ba00-638886b45589.jpg',
    '/lovable-uploads/competition-photos/e3e0e983-697b-4015-ab39-8245875c7102.jpg',
    '/lovable-uploads/competition-photos/e536adfe-7047-42ae-bc6c-d9106edbed45.jpg'
  ];

  // Use the key-based testimonials structure with proper typing
  const testimonials: Testimonial[] = [
    { key: 'askar' as TestimonialKey },
    { key: 'laura' as TestimonialKey },
    { key: 'marat' as TestimonialKey }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-20">
        <HeroSection targetDate={targetDate} />
        <EventDetails />
        <ScheduleSection />
        <PhotoGallery galleryImages={galleryImages} />
        <CompetitionRegulations />
        <TestimonialsSection testimonials={testimonials} />
      </main>
      
      <Footer />
    </div>
  );
};

export default Competitions;
