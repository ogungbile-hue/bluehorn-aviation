import React, { useState, FormEvent } from 'react';
import { X, Plane, Calendar, MapPin, CheckCircle, Phone, Mail, User } from 'lucide-react';

interface CharterBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedAircraft?: string;
}

export function CharterBookingModal({ isOpen, onClose, preselectedAircraft }: CharterBookingModalProps) {
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [tripType, setTripType] = useState('one-way');
  const [aircraftClass, setAircraftClass] = useState(preselectedAircraft || 'Gulfstream G650ER');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [origin, setOrigin] = useState('Lagos (LOS)');
  const [destination, setDestination] = useState('London (FAB)');
  const [departureDate, setDepartureDate] = useState('');
  const [notes, setNotes] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStep('success');
  };

  const handleReset = () => {
    setStep('form');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl glass-card rounded-3xl border border-white/20 shadow-2xl p-5 sm:p-8 md:p-10 overflow-hidden max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 text-gray-400 hover:text-white p-2 rounded-full border border-white/10 hover:bg-white/10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {step === 'form' ? (
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-[#C5A059] font-medium">
                <Plane className="w-3.5 h-3.5" />
                <span>Bluehorn Flight Operations Request</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-light text-white uppercase tracking-tight mt-1">
                Book Your <span className="gold-gradient-text font-semibold">Private Jet</span>
              </h3>
              <p className="text-xs text-gray-400 font-light mt-1">
                Our executive flight operations desk will respond with an exact quote within 15 minutes.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Trip Type Selector */}
              <div className="grid grid-cols-3 gap-2 p-1 bg-black/40 rounded-xl border border-white/10">
                {['one-way', 'round-trip', 'multi-leg'].map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setTripType(type)}
                    className={`py-2 text-[10px] sm:text-[11px] uppercase tracking-wider font-semibold rounded-lg transition-all ${
                      tripType === type
                        ? 'bg-[#C5A059] text-black shadow-md'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {type.replace('-', ' ')}
                  </button>
                ))}
              </div>

              {/* Route */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] text-gray-400 uppercase tracking-widest block font-medium mb-1">
                    Origin Airport / City
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-[#C5A059] absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Lagos (LOS)"
                      value={origin}
                      onChange={(e) => setOrigin(e.target.value)}
                      className="w-full bg-black/60 border border-white/15 rounded-xl pl-9 pr-3 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#C5A059]"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[10px] text-gray-400 uppercase tracking-widest block font-medium mb-1">
                    Destination Airport / City
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-[#C5A059] absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. London (FAB) or Dubai (DWC)"
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                      className="w-full bg-black/60 border border-white/15 rounded-xl pl-9 pr-3 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#C5A059]"
                    />
                  </div>
                </div>
              </div>

              {/* Date & Aircraft Class */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] text-gray-400 uppercase tracking-widest block font-medium mb-1">
                    Departure Date
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-[#C5A059] absolute left-3 top-3" />
                    <input
                      type="date"
                      required
                      value={departureDate}
                      onChange={(e) => setDepartureDate(e.target.value)}
                      className="w-full bg-black/60 border border-white/15 rounded-xl pl-9 pr-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#C5A059]"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[10px] text-gray-400 uppercase tracking-widest block font-medium mb-1">
                    Aircraft Preference
                  </label>
                  <select
                    value={aircraftClass}
                    onChange={(e) => setAircraftClass(e.target.value)}
                    className="w-full bg-black/60 border border-white/15 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#C5A059]"
                  >
                    <option value="Gulfstream G650ER">Gulfstream G650ER (Ultra Long Range)</option>
                    <option value="Bombardier Global 7500">Bombardier Global 7500 (Ultra Long Range)</option>
                    <option value="Dassault Falcon 8X">Dassault Falcon 8X (Heavy Jet)</option>
                    <option value="Embraer Praetor 600">Embraer Praetor 600 (Super Midsize)</option>
                    <option value="Advisor Recommendation">Let Our Advisors Recommend Aircraft</option>
                  </select>
                </div>
              </div>

              {/* Contact Information */}
              <div className="pt-2 border-t border-white/10 space-y-4">
                <span className="text-[10px] uppercase tracking-widest text-[#C5A059] block font-semibold">
                  Passenger Contact Details
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="relative">
                    <User className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      placeholder="Full Name"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full bg-black/60 border border-white/15 rounded-xl pl-9 pr-3 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#C5A059]"
                    />
                  </div>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                    <input
                      type="email"
                      required
                      placeholder="Email Address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-black/60 border border-white/15 rounded-xl pl-9 pr-3 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#C5A059]"
                    />
                  </div>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                    <input
                      type="tel"
                      required
                      placeholder="+234 (0) 80..."
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-black/60 border border-white/15 rounded-xl pl-9 pr-3 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#C5A059]"
                    />
                  </div>
                </div>

                <div>
                  <textarea
                    rows={2}
                    placeholder="Special requests (e.g., Gourmet inflight dining, Presidential protocol escort, Armored SUV)..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full bg-black/60 border border-white/15 rounded-xl p-3 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#C5A059]"
                  />
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="gold-button text-xs uppercase tracking-[0.2em] w-full py-4 rounded-xl flex items-center justify-center gap-2 shadow-xl cursor-pointer mt-4 font-semibold"
              >
                <Plane className="w-4 h-4" />
                <span>Submit Private Flight Request</span>
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-8 space-y-6 animate-fadeIn">
            <div className="w-16 h-16 rounded-full bg-[#C5A059]/20 border border-[#C5A059] text-[#C5A059] flex items-center justify-center mx-auto">
              <CheckCircle className="w-10 h-10" />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl md:text-3xl font-light text-white uppercase tracking-wide">
                Charter Request <span className="gold-gradient-text font-semibold">Received</span>
              </h3>
              <p className="text-xs text-gray-300 font-light max-w-md mx-auto leading-relaxed">
                Thank you, <strong className="text-white">{fullName}</strong>. Flight Dispatch Ref:{' '}
                <span className="text-[#C5A059] font-mono">BHA-VIP-2026-9041</span>.
              </p>
              <p className="text-xs text-gray-400 font-light max-w-md mx-auto">
                A Senior Aviation Advisor at our Central Command Center has been assigned to your itinerary and will contact you via phone (+234) and email shortly.
              </p>
            </div>
            <button
              onClick={handleReset}
              className="gold-button text-xs uppercase tracking-widest px-8 py-3 rounded-xl cursor-pointer"
            >
              Return to Site
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
