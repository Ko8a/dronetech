
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

  // Updated gallery images with images from the specified path
  const galleryImages = [
    'public/lovable-uploads/e536adfe-7047-42ae-bc6c-d9106edbed45.png',
    'public/lovable-uploads/509db9a5-5b9f-4394-a0bc-ea4fad4fd5ba.png',
    'public/lovable-uploads/d3656ecf-e773-425e-ba00-638886b45589.png',
    '/Ko8a/dronetech/public/lovable-uploads/careusel/ee3ee671-cf15-4060-9273-0bca95a35423.png',
    '/Ko8a/dronetech/public/lovable-uploads/careusel/a65c3213-4056-42f3-ae94-33f0339330d6.png',
    '/Ko8a/dronetech/public/lovable-uploads/careusel/ff5d085b-300a-4dbd-a683-cbc90b6ff400.png',
    '/Ko8a/dronetech/public/lovable-uploads/careusel/c73e89f6-12e9-4641-a741-22912c8b1b56.png',
    '/Ko8a/dronetech/public/lovable-uploads/careusel/8d11d15c-daee-4746-b9db-d0c6a636fb7e.png',
    '/Ko8a/dronetech/public/lovable-uploads/careusel/9ca102c4-5a54-4dba-9cea-aa3bb783c1ef.png',
    '/Ko8a/dronetech/public/lovable-uploads/careusel/31b0508e-ba66-48fb-9b72-2b61ee31eee5.png',
    '/Ko8a/dronetech/public/lovable-uploads/careusel/9572de63-7396-4ab0-9971-b178fb8784fc.png',
    '/Ko8a/dronetech/public/lovable-uploads/careusel/6daf7bf7-96bf-4469-aad8-b0f6f3a76acf.png',
    '/Ko8a/dronetech/public/lovable-uploads/careusel/57c173d7-d5bc-4752-898c-72d61f5638cb.png',
    '/Ko8a/dronetech/public/lovable-uploads/careusel/f7ad6df3-591c-436b-97cd-da99364160ad.png'
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
