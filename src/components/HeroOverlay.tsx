import React, { useState, FormEvent } from 'react';
import { Plane, Calendar, Users, MapPin, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

interface HeroOverlayProps {
  onOpenBookingModal: () => void;
}

export function HeroOverlay({ onOpenBookingModal }: HeroOverlayProps) {
  const [tripType, setTripType] = useState<'one-way' | 'round-trip'>('one-way');
  const [origin, setOrigin] = useState('Abuja (ABV)');
  const [destination, setDestination] = useState('Lagos (LOS)');
  const [departureDate, setDepartureDate] = useState('');
  const [passengers, setPassengers] = useState('4');

  const handleSearchSubmit = (e: FormEvent) => {
    e.preventDefault();
    onOpenBookingModal();
  };

  return (
    <section className="relative min-h-screen pt-32 pb-20 flex flex-col justify-between items-center px-6 lg:px-10 z-20 pointer-events-none">
      {/* Top Tagline & Branding Headline */}
      <div className="max-w-4xl mx-auto text-center mt-12 md:mt-20 pointer-events-auto space-y-6">
        {/* Floating Luxury Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-[#C5A059]/40 backdrop-blur-md shadow-xl">
          <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
          <span className="text-[11px] uppercase tracking-[0.3em] font-semibold text-[#E2D1B3]">
            NIGERIA'S PREMIER PRIVATE JET AUTHORITY
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extralight tracking-tight text-white uppercase leading-[1.1]">
          Excellence <br />
          <span className="font-semibold gold-gradient-text">Above The Clouds</span>
        </h1>

        {/* Subtitle */}
        <p className="text-gray-300 text-sm md:text-lg font-light tracking-wide max-w-2xl mx-auto leading-relaxed drop-shadow-md">
          Headquartered in <strong className="text-white font-medium">Abuja, Nigeria</strong>—providing bespoke executive jet charters, diplomatic air transport, and transcontinental private flight logistics across West Africa and global capitals.
        </p>

        {/* Action Pills */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <button
            onClick={onOpenBookingModal}
            className="gold-button text-xs uppercase tracking-[0.2em] px-8 py-3.5 rounded-xl flex items-center gap-3 shadow-2xl cursor-pointer"
          >
            <span>Request Flight Quote</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <a
            href="#fleet"
            className="glass-card hover:bg-white/10 text-white text-xs uppercase tracking-[0.2em] px-8 py-3.5 rounded-xl border border-white/20 transition-all"
          >
            View Flagship Fleet
          </a>
        </div>
      </div>

      {/* Flight Estimator / Search Bar Container */}
      <div className="w-full max-w-5xl mx-auto mt-16 pointer-events-auto">
        <div className="glass-card p-6 md:p-8 rounded-2xl border border-white/15 shadow-2xl backdrop-blur-xl">
          {/* Trip Type Selector Header */}
          <div className="flex items-center justify-between mb-6 border-b border-white/10 pb-4">
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => setTripType('one-way')}
                className={`text-xs uppercase tracking-widest px-4 py-1.5 rounded-lg transition-all ${
                  tripType === 'one-way'
                    ? 'bg-[#C5A059] text-black font-semibold shadow-md'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                One Way
              </button>
              <button
                type="button"
                onClick={() => setTripType('round-trip')}
                className={`text-xs uppercase tracking-widest px-4 py-1.5 rounded-lg transition-all ${
                  tripType === 'round-trip'
                    ? 'bg-[#C5A059] text-black font-semibold shadow-md'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Round Trip
              </button>
            </div>
            <div className="hidden md:flex items-center gap-2 text-[11px] text-gray-400 uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
              <span>NCAA & ARG/US Platinum Certified Operator</span>
            </div>
          </div>

          {/* Search Inputs */}
          <form onSubmit={handleSearchSubmit} className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Origin */}
            <div className="space-y-1.5">
              <label className="text-[10px] text-gray-400 uppercase tracking-widest flex items-center gap-1.5 font-medium">
                <MapPin className="w-3 h-3 text-[#C5A059]" /> From (Abuja / Nigerian Hub)
              </label>
              <input
                type="text"
                placeholder="e.g. Abuja (ABV)"
                value={origin}
                onChange={(e) => setOrigin(e.target.value)}
                className="w-full bg-black/50 border border-white/15 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#C5A059] transition-colors"
              />
            </div>

            {/* Destination */}
            <div className="space-y-1.5">
              <label className="text-[10px] text-gray-400 uppercase tracking-widest flex items-center gap-1.5 font-medium">
                <MapPin className="w-3 h-3 text-[#C5A059]" /> To (Destination Airport)
              </label>
              <input
                type="text"
                placeholder="e.g. Lagos (LOS) or London (FAB)"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="w-full bg-black/50 border border-white/15 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#C5A059] transition-colors"
              />
            </div>

            {/* Departure Date */}
            <div className="space-y-1.5">
              <label className="text-[10px] text-gray-400 uppercase tracking-widest flex items-center gap-1.5 font-medium">
                <Calendar className="w-3 h-3 text-[#C5A059]" /> Departure Date
              </label>
              <input
                type="date"
                value={departureDate}
                onChange={(e) => setDepartureDate(e.target.value)}
                className="w-full bg-black/50 border border-white/15 rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#C5A059] transition-colors"
              />
            </div>

            {/* Passengers & Action Button */}
            <div className="space-y-1.5 flex flex-col justify-between">
              <label className="text-[10px] text-gray-400 uppercase tracking-widest flex items-center gap-1.5 font-medium">
                <Users className="w-3 h-3 text-[#C5A059]" /> Passengers
              </label>
              <div className="flex gap-2">
                <select
                  value={passengers}
                  onChange={(e) => setPassengers(e.target.value)}
                  className="w-1/3 bg-black/50 border border-white/15 rounded-lg px-2 py-2.5 text-xs text-white focus:outline-none focus:border-[#C5A059] transition-colors"
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="4">4</option>
                  <option value="6">6</option>
                  <option value="8">8</option>
                  <option value="12+">12+</option>
                </select>
                <button
                  type="submit"
                  className="w-2/3 gold-button text-xs uppercase tracking-wider py-2.5 rounded-lg flex items-center justify-center gap-1.5 font-semibold cursor-pointer shadow-lg"
                >
                  <Plane className="w-3.5 h-3.5" />
                  <span>Search Flight</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
