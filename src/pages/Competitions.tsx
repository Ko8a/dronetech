import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/competitions/HeroSection';
import EventDetails from '../components/competitions/EventDetails';
import PhotoGallery from '../components/competitions/PhotoGallery';
import CompetitionRegulations from '../components/competitions/CompetitionRegulations';
import TestimonialsSection from '../components/competitions/TestimonialsSection';
import { useTranslation } from '../hooks/useTranslation';

const Competitions = () => {
  const { t } = useTranslation();
  
  // Set target date for countdown (April 14, 2025)
  const targetDate = new Date(2025, 3, 14); // Month is 0-indexed, so 3 = April

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

  const testimonials = [
    {
      name: "Askar Muratov",
      role: "MDC 2023 Champion",
      comment: "DroneTech's MDC competition challenged me to push my piloting skills to new heights. The organization was professional, and the course design was incredibly innovative.",
      image: "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      name: "Laura Chen",
      role: "Technical University Team Lead",
      comment: "Participating in MDC was an incredible learning experience for our entire team. The technical challenges and competitive atmosphere prepared us for real-world UAV operations.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
    },
    {
      name: "Marat Bakirov",
      role: "Industry Judge",
      comment: "The level of talent at MDC was impressive. DroneTech has created an event that truly showcases the future of UAV technology and operations.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-20">
        <HeroSection targetDate={targetDate} />
        <EventDetails />
        <PhotoGallery galleryImages={galleryImages} />
        <CompetitionRegulations />
        <TestimonialsSection testimonials={testimonials} />
      </main>
      
      <Footer />
    </div>
  );
};

export default Competitions;
