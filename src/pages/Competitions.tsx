import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/competitions/HeroSection';
import EventDetails from '../components/competitions/EventDetails';
import PhotoGallery from '../components/competitions/PhotoGallery';
import CompetitionRegulations from '../components/competitions/CompetitionRegulations';
import TestimonialsSection from '../components/competitions/TestimonialsSection';

const Competitions = () => {
  // Set target date for countdown (April 14, 2025)
  const targetDate = new Date(2025, 3, 14); // Month is 0-indexed, so 3 = April

  // Updated gallery images with new uploaded images
  const galleryImages = [
    '/lovable-uploads/e0878807-6ab3-44d2-a3f1-75f01588f337.png',
    '/lovable-uploads/d09771f6-5954-4c69-bfb9-c741b2ba2951.png',
    '/lovable-uploads/a7fa151f-3e18-45f2-ac36-041394603f0e.png',
    '/lovable-uploads/20e7d01a-034b-4ca7-834a-449887552fca.png',
    '/lovable-uploads/a7f07bbc-9105-4c22-b441-29089ca6defa.png',
    '/lovable-uploads/9da651f0-8862-4b52-b9d4-fa47849f1058.png',
    '/lovable-uploads/e8d4c583-2c1d-4bf7-9776-8d5b41b7a8c8.png',
    '/lovable-uploads/61e5a18d-0c96-4a5a-86cf-9ec967479eed.png',
    '/lovable-uploads/945bfa72-1ba0-43cc-a3b8-f651c2eab635.png',
    '/lovable-uploads/f94ffc42-97d5-4454-8995-80046c03854f.png',
    '/lovable-uploads/85a3a55c-a9b1-495b-a49f-57f0b2fb24a0.png'
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
