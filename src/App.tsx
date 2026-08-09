import { useState, useEffect, useCallback } from 'react';
import { BackgroundVideo } from './components/BackgroundVideo';
import { Navbar } from './components/Navbar';
import { HeroOverlay } from './components/HeroOverlay';
import { Experience } from './components/Experience';
import { Fleet } from './components/Fleet';
import { Services } from './components/Services';
import { SafetyStats } from './components/SafetyStats';
import { Footer } from './components/Footer';
import { CharterBookingModal } from './components/CharterBookingModal';
import { Preloader } from './components/Preloader';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedAircraft, setSelectedAircraft] = useState<string | undefined>(undefined);

  const handleVideoLoaded = useCallback(() => {
    setIsLoading(false);
  }, []);

  useEffect(() => {
    // Fallback timer: dismiss preloader after 2.5s if video loading takes time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  const handleOpenBooking = (aircraftName?: string) => {
    setSelectedAircraft(aircraftName);
    setBookingModalOpen(true);
  };

  const handleCloseBooking = () => {
    setBookingModalOpen(false);
    setSelectedAircraft(undefined);
  };

  return (
    <div className="bg-[#05080f] min-h-screen text-white font-sans selection:bg-[#C5A059] selection:text-black relative overflow-hidden">
      {/* Luxury Airplane Preloader Screen */}
      <Preloader isLoading={isLoading} />

      {/* GSAP ScrollTrigger Background Video */}
      <BackgroundVideo onLoaded={handleVideoLoaded} />

      {/* Navigation Bar with Logo & Actions */}
      <Navbar onOpenBookingModal={() => handleOpenBooking()} />

      {/* Main Content Sections over scrubbable background video */}
      <main className="relative z-20 space-y-12">
        <HeroOverlay onOpenBookingModal={() => handleOpenBooking()} />
        <Experience />
        <Fleet onSelectAircraft={(aircraft) => handleOpenBooking(aircraft)} />
        <Services onOpenBookingModal={() => handleOpenBooking()} />
        <SafetyStats />
      </main>

      {/* Comprehensive Footer */}
      <Footer />

      {/* Interactive Booking Inquiry Modal */}
      <CharterBookingModal
        isOpen={bookingModalOpen}
        onClose={handleCloseBooking}
        preselectedAircraft={selectedAircraft}
      />
    </div>
  );
}
