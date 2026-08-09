import { useState, useEffect } from 'react';
import { Menu, X, Phone, Plane } from 'lucide-react';
import logo from '../../assets/images/bluehorn-logo.png';

interface NavbarProps {
  onOpenBookingModal: () => void;
}

export function Navbar({ onOpenBookingModal }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        isScrolled
          ? 'glass-nav py-3 shadow-2xl shadow-black/80'
          : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <a href="#" className="flex items-center gap-3.5 group">
          <div className="relative w-10 h-10 md:w-11 md:h-11 rounded-lg overflow-hidden flex items-center justify-center bg-black/60 border border-white/10 group-hover:border-[#C5A059]/50 transition-colors">
            <img
              src={logo}
              alt="Bluehorn Aviation Logo"
              className="w-full h-full object-contain p-1 transform group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="text-white text-base md:text-lg font-bold tracking-[0.25em] uppercase font-sans leading-none gold-gradient-text">
                BLUEHORN
              </span>
            </div>
            <span className="text-[10px] md:text-[11px] text-gray-400 font-light tracking-[0.35em] uppercase leading-tight mt-0.5">
              PRIVATE AVIATION
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center space-x-9 text-xs text-gray-300 uppercase tracking-[0.2em] font-medium">
          <a href="#experience" className="hover:text-[#C5A059] transition-colors py-1 relative group">
            Experience
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#C5A059] transition-all duration-300 group-hover:w-full" />
          </a>
          <a href="#fleet" className="hover:text-[#C5A059] transition-colors py-1 relative group">
            Fleet
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#C5A059] transition-all duration-300 group-hover:w-full" />
          </a>
          <a href="#services" className="hover:text-[#C5A059] transition-colors py-1 relative group">
            Services
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#C5A059] transition-all duration-300 group-hover:w-full" />
          </a>
          <a href="#safety" className="hover:text-[#C5A059] transition-colors py-1 relative group">
            Safety & NCAA
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#C5A059] transition-all duration-300 group-hover:w-full" />
          </a>
          <a href="#contact" className="hover:text-[#C5A059] transition-colors py-1 relative group">
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#C5A059] transition-all duration-300 group-hover:w-full" />
          </a>
        </div>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href="tel:+2349095002583"
            className="flex items-center gap-2 text-xs uppercase tracking-wider text-gray-300 hover:text-white px-3.5 py-2 rounded-lg border border-white/10 hover:border-white/25 transition-all"
          >
            <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
            <span className="hidden xl:inline">+234 (0) 909 500 BLUE</span>
          </a>
          <button
            onClick={onOpenBookingModal}
            className="gold-button text-xs uppercase tracking-[0.15em] px-5 py-2.5 rounded-lg flex items-center gap-2 shadow-lg cursor-pointer"
          >
            <Plane className="w-3.5 h-3.5" />
            <span>Book Charter</span>
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-gray-300 hover:text-white p-2 rounded-lg border border-white/10 glass-card"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden glass-nav border-t border-white/10 mt-3 px-6 py-6 space-y-4 animate-fadeIn">
          <div className="flex flex-col space-y-3 text-sm text-gray-200 uppercase tracking-widest font-medium">
            <a
              href="#experience"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#C5A059] transition-colors py-2 border-b border-white/5"
            >
              Experience
            </a>
            <a
              href="#fleet"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#C5A059] transition-colors py-2 border-b border-white/5"
            >
              Fleet
            </a>
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#C5A059] transition-colors py-2 border-b border-white/5"
            >
              Services
            </a>
            <a
              href="#safety"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#C5A059] transition-colors py-2 border-b border-white/5"
            >
              Safety & NCAA
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#C5A059] transition-colors py-2 border-b border-white/5"
            >
              Contact
            </a>
          </div>

          <div className="pt-2 flex flex-col gap-3">
            <a
              href="tel:+2349095002583"
              className="flex items-center justify-center gap-2 text-xs uppercase tracking-wider text-gray-300 px-4 py-3 rounded-lg border border-white/10"
            >
              <Phone className="w-4 h-4 text-[#C5A059]" />
              <span>+234 (0) 909 500 BLUE</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBookingModal();
              }}
              className="gold-button text-xs uppercase tracking-widest w-full py-3 rounded-lg flex items-center justify-center gap-2"
            >
              <Plane className="w-4 h-4" />
              <span>Book Charter</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
