import { useState } from 'react';
import { Plane, ArrowUpRight, ChevronRight, MapPin } from 'lucide-react';

interface FleetItem {
  id: string;
  name: string;
  category: string;
  range: string;
  speed: string;
  passengers: string;
  cabinHeight: string;
  baggageCapacity: string;
  routeHighlight: string;
  highlights: string[];
  image: string;
}

interface FleetProps {
  onSelectAircraft: (aircraftName: string) => void;
}

export function Fleet({ onSelectAircraft }: FleetProps) {
  const fleetData: FleetItem[] = [
    {
      id: 'g650er',
      name: 'Gulfstream G650ER',
      category: 'Ultra Long Range Flagship',
      range: '7,500 nm (13,890 km)',
      speed: 'Mach 0.90 (956 km/h)',
      passengers: '14 - 18 Passengers',
      cabinHeight: '6 ft 5 in (1.95 m)',
      baggageCapacity: '195 cu ft',
      routeHighlight: 'Non-stop from Abuja (ABV) to New York (JFK) or Beijing (PEK)',
      highlights: ['4 Living Zones', '100% Fresh Air Convection', 'High-Speed Global Satellite Wi-Fi', 'Full Berthing Beds'],
      image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 'global7500',
      name: 'Bombardier Global 7500',
      category: 'Ultra Long Range',
      range: '7,700 nm (14,260 km)',
      speed: 'Mach 0.925 (982 km/h)',
      passengers: '19 Passengers',
      cabinHeight: '6 ft 2 in (1.88 m)',
      baggageCapacity: '195 cu ft',
      routeHighlight: 'Non-stop from Lagos (LOS) to Tokyo (HND) or Los Angeles (LAX)',
      highlights: ['Master Suite with Permanent Bed', 'Nuage Ergonomic Seats', 'Soleil Circadian Lighting', 'Full Kitchen galley'],
      image: 'https://images.unsplash.com/photo-1559689468-9d32d0cb53ed?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 'falcon8x',
      name: 'Dassault Falcon 8X',
      category: 'Heavy Tri-Jet',
      range: '6,450 nm (11,945 km)',
      speed: 'Mach 0.90 (900 km/h)',
      passengers: '12 - 14 Passengers',
      cabinHeight: '6 ft 2 in (1.88 m)',
      baggageCapacity: '140 cu ft',
      routeHighlight: 'Non-stop from Abuja (ABV) to London (FAB) or Paris (LBG)',
      highlights: ['Tri-jet Short Field Runway Performance', 'Whisper-Quiet Cabin', 'Afro-Centric Luxury Interior', 'High Altitude Operations'],
      image: 'https://images.unsplash.com/photo-1519074069444-1ba4eaa1674a?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 'praetor600',
      name: 'Embraer Praetor 600',
      category: 'Super Midsize Jet',
      range: '4,018 nm (7,441 km)',
      speed: 'Mach 0.83 (863 km/h)',
      passengers: '9 - 12 Passengers',
      cabinHeight: '6 ft 0 in (1.83 m)',
      baggageCapacity: '155 cu ft',
      routeHighlight: 'Non-stop from Abuja (ABV) to Johannesburg (JNB) or Dubai (DWC)',
      highlights: ['Active Turbulence Reduction', '6-ft Flat Floor Cabin', 'Trans-Africa Non-Stop', 'HEPA Air Filtered'],
      image: 'https://images.unsplash.com/photo-1520437358207-323b43b5752b?auto=format&fit=crop&w=1200&q=80',
    },
  ];

  const [activeJet, setActiveJet] = useState<FleetItem>(fleetData[0]);

  return (
    <section id="fleet" className="relative py-28 px-6 lg:px-10 z-20">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-[0.3em] text-[#C5A059]">
              <Plane className="w-3.5 h-3.5" />
              <span>Abuja Hangar Fleet</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-light uppercase tracking-tight text-white">
              The Bluehorn <span className="gold-gradient-text font-semibold">Flagship Fleet</span>
            </h2>
          </div>
          <p className="text-gray-400 text-xs md:text-sm font-light max-w-md">
            Stationed at Nnamdi Azikiwe International Airport, Abuja and Murtala Muhammed International Airport, Lagos—engineered for transoceanic range and maximum privacy.
          </p>
        </div>

        {/* Fleet Selection Navigation Tabs */}
        <div className="flex flex-wrap gap-3">
          {fleetData.map((jet) => (
            <button
              key={jet.id}
              onClick={() => setActiveJet(jet)}
              className={`px-5 py-3 rounded-xl text-xs uppercase tracking-wider font-medium transition-all cursor-pointer ${
                activeJet.id === jet.id
                  ? 'bg-[#C5A059] text-black shadow-xl font-semibold scale-105'
                  : 'glass-card text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              {jet.name}
            </button>
          ))}
        </div>

        {/* Selected Jet Feature Detail Card */}
        <div className="glass-card rounded-3xl overflow-hidden border border-white/15 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-0">
          {/* Left Spec Details */}
          <div className="lg:col-span-7 p-8 md:p-12 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-md bg-[#C5A059]/15 border border-[#C5A059]/40 text-[#C5A059] text-[10px] uppercase tracking-widest font-semibold">
                  {activeJet.category}
                </span>
              </div>

              <h3 className="text-3xl md:text-4xl font-light text-white uppercase tracking-wide">
                {activeJet.name}
              </h3>

              {/* Route Highlight Pill */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/60 border border-[#C5A059]/30 text-xs text-gray-200">
                <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>{activeJet.routeHighlight}</span>
              </div>

              {/* Specs Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-4 border-t border-b border-white/10 py-6">
                <div>
                  <span className="text-[10px] text-gray-400 uppercase tracking-widest block font-medium">Range</span>
                  <span className="text-sm md:text-base font-semibold text-white mt-1 block gold-gradient-text">
                    {activeJet.range}
                  </span>
                </div>
                <div>
                  <span className="text-[10px] text-gray-400 uppercase tracking-widest block font-medium">Cruise Speed</span>
                  <span className="text-sm md:text-base font-semibold text-white mt-1 block">
                    {activeJet.speed}
                  </span>
                </div>
                <div>
                  <span className="text-[10px] text-gray-400 uppercase tracking-widest block font-medium">Capacity</span>
                  <span className="text-sm md:text-base font-semibold text-white mt-1 block">
                    {activeJet.passengers}
                  </span>
                </div>
                <div>
                  <span className="text-[10px] text-gray-400 uppercase tracking-widest block font-medium">Cabin Height</span>
                  <span className="text-sm md:text-base font-semibold text-white mt-1 block">
                    {activeJet.cabinHeight}
                  </span>
                </div>
                <div>
                  <span className="text-[10px] text-gray-400 uppercase tracking-widest block font-medium">Baggage Vol</span>
                  <span className="text-sm md:text-base font-semibold text-white mt-1 block">
                    {activeJet.baggageCapacity}
                  </span>
                </div>
              </div>

              {/* Jet Cabin Highlights */}
              <div className="space-y-3">
                <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400 block font-semibold">
                  Cabin Amenities & Custom Specifications
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeJet.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-gray-300">
                      <ChevronRight className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Action CTA */}
            <div className="pt-6 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onSelectAircraft(activeJet.name)}
                className="gold-button text-xs uppercase tracking-[0.2em] px-8 py-3.5 rounded-xl flex items-center gap-2 shadow-xl cursor-pointer"
              >
                <span>Charter {activeJet.name}</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Image Showcase */}
          <div className="lg:col-span-5 relative min-h-[350px] lg:min-h-full">
            <img
              src={activeJet.image}
              alt={activeJet.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent lg:bg-gradient-to-r lg:from-[#0A0F1A] lg:to-transparent" />
            <div className="absolute bottom-6 right-6 px-4 py-2 rounded-lg glass-card text-[11px] uppercase tracking-widest text-white border border-white/20">
              Bluehorn Abuja Asset #{activeJet.id.toUpperCase()}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
