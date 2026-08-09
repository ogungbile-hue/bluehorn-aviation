import { Plane, Compass, ShieldAlert, Car, CreditCard, Sparkles, ArrowRight, Sun } from 'lucide-react';

interface ServicesProps {
  onOpenBookingModal: () => void;
}

export function Services({ onOpenBookingModal }: ServicesProps) {
  const servicesList = [
    {
      icon: Plane,
      title: 'Executive & Diplomatic Charter',
      subtitle: '36 States & Worldwide Destinations',
      description:
        'Custom flight itineraries across major Nigerian hubs for government dignitaries, corporate CEOs, and VIP delegations with full protocol handling.',
    },
    {
      icon: CreditCard,
      title: 'Bluehorn Jet Card (NGN / USD)',
      subtitle: 'Guaranteed Availability & Fixed Rates',
      description:
        'Seamless dual-currency booking in Naira or USD with zero FX delay, guaranteed aircraft readiness within 4 hours, and zero repositioning surcharges across Nigeria.',
    },
    {
      icon: Compass,
      title: 'Offshore Oil & Gas Executive Transport',
      subtitle: 'Port Harcourt & Delta Coast Shuttles',
      description:
        'Dedicated corporate shuttles connecting major corporate headquarters directly to offshore oil hubs in Port Harcourt, Eket, and Warri.',
    },
    {
      icon: Sun,
      title: 'Hajj & Umrah VVIP Charters',
      subtitle: 'Direct Flights to Jeddah & Madinah',
      description:
        'Luxury long-range group charters with dedicated Islamic dietary catering, private VIP terminal check-ins, and luxury Saudi transfers.',
    },
    {
      icon: ShieldAlert,
      title: 'West African Air Ambulance (Medevac)',
      subtitle: 'ICU Transport to Europe & Middle East',
      description:
        'Rapid 24/7 airborne ICU deployments from regional hubs to specialist medical centers in London, Frankfurt, Geneva, or Dubai.',
    },
    {
      icon: Car,
      title: 'Armored Escort & Heli-Transfer',
      subtitle: 'End-to-End Nigerian Protocol Logistics',
      description:
        'Bulletproof SUV motorcades, police protocol escorts, and direct executive helicopter transfers to private compounds and offshore platforms.',
    },
  ];

  return (
    <section id="services" className="relative py-28 px-6 lg:px-10 z-20">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-[0.3em] text-[#C5A059]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Bespoke Nigerian Aviation</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-light uppercase tracking-tight text-white">
            Tailored <span className="gold-gradient-text font-semibold">Executive Services</span>
          </h2>
          <p className="text-gray-400 text-sm md:text-base font-light leading-relaxed">
            Engineered specifically for the demands of West African enterprise, state diplomatic travel, and transcontinental VIP mobility.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((srv, idx) => {
            const Icon = srv.icon;
            return (
              <div
                key={idx}
                className="glass-card glass-card-hover p-8 rounded-2xl flex flex-col justify-between space-y-6 group border border-white/10"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-[#C5A059]/10 border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059] group-hover:bg-[#C5A059] group-hover:text-black transition-colors duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-[#C5A059] font-medium">
                      {srv.subtitle}
                    </span>
                    <h3 className="text-xl font-medium text-white tracking-wide mt-1">{srv.title}</h3>
                  </div>
                  <p className="text-xs text-gray-400 font-light leading-relaxed">{srv.description}</p>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <button
                    onClick={onOpenBookingModal}
                    className="text-xs uppercase tracking-wider text-gray-300 group-hover:text-[#C5A059] flex items-center gap-2 transition-colors cursor-pointer"
                  >
                    <span>Inquire Service</span>
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
