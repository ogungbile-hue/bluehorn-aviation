import { ShieldCheck, Compass, Clock, Globe, Coffee, Lock, Award, HeartHandshake, MapPin } from 'lucide-react';

export function Experience() {
  const pillars = [
    {
      icon: Coffee,
      title: 'Afro-Continental Fine Dining',
      description:
        'Custom inflight dining curated by executive chefs in Abuja and Lagos—featuring fine Nigerian delicacies alongside international culinary selections and vintage champagne pairings.',
    },
    {
      icon: Globe,
      title: '36 States & 5,000+ Global Hubs',
      description:
        'Seamless access across all 36 Nigerian state capitals, regional West African hubs (Lagos, Port Harcourt, Accra, Malabo), and direct transcontinental air routes to London, Dubai, and Paris.',
    },
    {
      icon: Lock,
      title: 'Diplomatic & Executive Privacy',
      description:
        'Specialized Presidential & VIP terminal protocols at Nnamdi Azikiwe International Airport (Abuja). Discreet tarmac transfers, encrypted flight manifests, and armed security escorts.',
    },
    {
      icon: Award,
      title: 'NCAA & ARG/US Platinum Certified',
      description:
        'Licensed under the Nigerian Civil Aviation Authority (NCAA) Air Operator Certificate. Governed by dual-captain crews with rigorous biannual recurrent simulator training at CAE & FlightSafety.',
    },
  ];

  return (
    <section id="experience" className="relative py-28 px-6 lg:px-10 z-20">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-[0.3em] text-[#C5A059]">
            <HeartHandshake className="w-3.5 h-3.5" />
            <span>The Bluehorn Nigeria Advantage</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-light uppercase tracking-tight text-white">
            Unrivaled Standards of <span className="gold-gradient-text font-semibold">Nigerian Private Flight</span>
          </h2>
          <p className="text-gray-400 text-sm md:text-base font-light leading-relaxed">
            Operating from our primary hub at Nnamdi Azikiwe International Airport, Abuja—we deliver precision aviation logistics tailored for business leaders, government delegations, and private families.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="glass-card glass-card-hover p-8 rounded-2xl flex flex-col justify-between space-y-6 group"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-[#C5A059]/10 border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059] group-hover:bg-[#C5A059] group-hover:text-black transition-colors duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-medium text-white tracking-wide">{pillar.title}</h3>
                  <p className="text-xs text-gray-400 font-light leading-relaxed">{pillar.description}</p>
                </div>
                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-[10px] uppercase tracking-widest text-gray-500 group-hover:text-[#C5A059] transition-colors">
                  <span>Pillar 0{idx + 1}</span>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity">Explore &rarr;</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Highlight Banner */}
        <div className="glass-card p-8 md:p-12 rounded-3xl border border-[#C5A059]/20 flex flex-col lg:flex-row items-center justify-between gap-8 bg-gradient-to-r from-black/80 via-[#0A0F1A]/90 to-black/80">
          <div className="space-y-3 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2 text-xs text-[#C5A059] uppercase tracking-widest font-semibold">
              <MapPin className="w-4 h-4" />
              <span>Abuja Operations Command Center</span>
            </div>
            <h3 className="text-xl md:text-2xl font-light text-white uppercase tracking-wider">
              Need Non-Stop Flight Clearances from <span className="gold-gradient-text font-semibold">Abuja to Europe or Asia?</span>
            </h3>
            <p className="text-gray-400 text-xs md:text-sm font-light max-w-xl">
              Our 24/7 Abuja Flight Operations Center handles overflight permits, landing clearances across ECOWAS countries, diplomatic protocol, and VIP helicopter transfers to oilfields & private estates.
            </p>
          </div>
          <a
            href="tel:+2349095002583"
            className="gold-button text-xs uppercase tracking-[0.2em] px-8 py-4 rounded-xl flex items-center gap-3 whitespace-nowrap shadow-xl shrink-0"
          >
            <Clock className="w-4 h-4" />
            <span>Speak With Abuja Dispatch Desk</span>
          </a>
        </div>
      </div>
    </section>
  );
}
