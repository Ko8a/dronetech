
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

  // Updated gallery images with all our uploaded competition photos
  const galleryImages = [
    '/lovable-uploads/5a730965-4a63-4939-bf41-c3b18e226469.png', // Drone close-up
    '/lovable-uploads/c2c7286e-ebf8-4fbc-b1c4-a7b4499d53c5.png', // Kids watching competition
    '/lovable-uploads/39af8e06-09d8-4278-9879-3d80bb67726d.png', // Contestants discussing
    '/lovable-uploads/1c39704c-41cf-4542-8da8-73b317543b84.png', // Kids using controllers
    '/lovable-uploads/23f6956e-106a-45b5-b8ae-c21f0044d091.png', // Competitor organizing equipment
    '/lovable-uploads/e4e0e0b9-f568-4b90-86d9-dc3633d241c6.png', // Award ceremony with confetti
    '/lovable-uploads/382e55ec-b1c2-495d-92d1-282cbe69b392.png', // Goal net view
    '/lovable-uploads/e3e0e983-697b-4015-ab39-8245875c7102.png', // FPV pilots
    '/lovable-uploads/0bbf0597-7a60-4ed3-afb6-4f00bf6d2577.png', // Drone in course structure
    '/lovable-uploads/9cbb2df4-a30a-4c06-a704-945168520318.png', // FPV pilot with red cap
    '/lovable-uploads/0023c51c-f5a9-4fb8-9e93-592434731d20.png' // Drone racing through lit-up course
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
