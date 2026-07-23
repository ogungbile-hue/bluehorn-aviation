import React, { useState, FormEvent } from 'react';
import { Phone, Mail, MapPin, ShieldCheck, ArrowRight, Check } from 'lucide-react';
import logo from '../../assets/images/bluehorn-logo.png';

export function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
    }
  };

  const hubs = [
    { city: 'Abuja (ABV) • HQ', location: 'Nnamdi Azikiwe Int Airport (Presidential Wing)' },
    { city: 'Lagos (LOS)', location: 'Murtala Muhammed Int Airport (MM2 Executive Hangar)' },
    { city: 'Port Harcourt (PHC)', location: 'Port Harcourt Int Airport (Oil & Gas Terminal)' },
    { city: 'Kano (KAN)', location: 'Mallam Aminu Kano Int Airport' },
    { city: 'London (FAB)', location: 'Farnborough Airport, United Kingdom' },
    { city: 'Dubai (DWC)', location: 'Al Maktoum Int Airport, United Arab Emirates' },
  ];

  return (
    <footer id="contact" className="relative z-20 bg-black/90 border-t border-white/10 pt-20 pb-12 px-6 lg:px-10 text-gray-400 font-light">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Top Newsletter & Alert Banner */}
        <div className="glass-card p-8 md:p-12 rounded-3xl border border-white/15 bg-gradient-to-r from-black via-[#0A0F1A] to-black flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center lg:text-left">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#C5A059] font-semibold">
              Nigerian & West African Empty-Leg Alerts
            </span>
            <h3 className="text-2xl md:text-3xl font-light text-white uppercase tracking-wide">
              Subscribe to VIP <span className="gold-gradient-text font-semibold">Empty-Leg Deals</span>
            </h3>
            <p className="text-xs text-gray-400 max-w-lg">
              Receive instant notification on discounted repositioning legs between Abuja, Lagos, London, Dubai, and European capitals.
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="w-full lg:w-auto flex flex-col sm:flex-row gap-3">
            {!subscribed ? (
              <>
                <input
                  type="email"
                  required
                  placeholder="Enter executive email..."
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="bg-black/60 border border-white/20 rounded-xl px-4 py-3.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#C5A059] min-w-[280px]"
                />
                <button
                  type="submit"
                  className="gold-button text-xs uppercase tracking-[0.15em] px-6 py-3.5 rounded-xl flex items-center justify-center gap-2 cursor-pointer shadow-lg shrink-0"
                >
                  <span>Join VIP List</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </>
            ) : (
              <div className="flex items-center gap-2 text-xs text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 px-6 py-3.5 rounded-xl">
                <Check className="w-4 h-4" />
                <span>Subscribed to Bluehorn Abuja Dispatch Alerts</span>
              </div>
            )}
          </form>
        </div>

        {/* Main Footer Links & Hubs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 border-b border-white/10 pb-16">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-6">
            <a href="#" className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-xl bg-black/60 border border-white/10 flex items-center justify-center p-1.5">
                <img src={logo} alt="Bluehorn Aviation Logo" className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="text-white text-lg font-bold tracking-[0.25em] uppercase gold-gradient-text">
                    BLUEHORN
                  </span>
                  <span className="text-[9px] font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-1.5 py-0.5 rounded">
                    NG
                  </span>
                </div>
                <span className="text-[10px] text-gray-400 tracking-[0.35em] uppercase">
                  AVIATION • ABUJA
                </span>
              </div>
            </a>

            <p className="text-xs text-gray-400 leading-relaxed max-w-sm">
              Bluehorn Aviation Nigeria is West Africa's flagship private jet charter operator, state diplomatic air transport provider, and fleet management authority. Operating under NCAA Air Operator Certificate #BHA-NG-2026.
            </p>

            <div className="space-y-2.5 pt-2 text-xs">
              <div className="flex items-center gap-2 text-gray-300">
                <Phone className="w-4 h-4 text-[#C5A059]" />
                <a href="tel:+2349095002583" className="hover:text-white transition-colors font-medium">
                  +234 (0) 909 500 BLUE / +234 (9) 291 8000
                </a>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Mail className="w-4 h-4 text-[#C5A059]" />
                <a href="mailto:charter@bluehorn.ng" className="hover:text-white transition-colors">
                  charter@bluehorn.ng / vip@bluehorn.ng
                </a>
              </div>
              <div className="flex items-start gap-2 text-gray-300">
                <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <span>Plot 462 Constitution Avenue, Central Business District, Abuja, FCT, Nigeria</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold text-white uppercase tracking-[0.25em] border-b border-white/10 pb-2">
              Abuja Fleet
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#fleet" className="hover:text-[#C5A059] transition-colors">Gulfstream G650ER</a></li>
              <li><a href="#fleet" className="hover:text-[#C5A059] transition-colors">Bombardier Global 7500</a></li>
              <li><a href="#fleet" className="hover:text-[#C5A059] transition-colors">Dassault Falcon 8X</a></li>
              <li><a href="#fleet" className="hover:text-[#C5A059] transition-colors">Embraer Praetor 600</a></li>
              <li><a href="#experience" className="hover:text-[#C5A059] transition-colors">Dual-Currency Jet Card</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold text-white uppercase tracking-[0.25em] border-b border-white/10 pb-2">
              Bespoke Services
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#services" className="hover:text-[#C5A059] transition-colors">Executive & State Charter</a></li>
              <li><a href="#services" className="hover:text-[#C5A059] transition-colors">Oil & Gas Offshore Shuttles</a></li>
              <li><a href="#services" className="hover:text-[#C5A059] transition-colors">Hajj & Umrah VVIP Flights</a></li>
              <li><a href="#services" className="hover:text-[#C5A059] transition-colors">West Africa Air Medevac</a></li>
              <li><a href="#services" className="hover:text-[#C5A059] transition-colors">Armored SUV & Protocol Escort</a></li>
            </ul>
          </div>

          {/* Nigerian & Global Hubs */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold text-white uppercase tracking-[0.25em] border-b border-white/10 pb-2">
              FBO Bases & Hubs
            </h4>
            <ul className="space-y-2.5 text-xs">
              {hubs.map((hub, i) => (
                <li key={i} className="flex flex-col">
                  <span className="text-gray-200 font-medium">{hub.city}</span>
                  <span className="text-[10px] text-gray-500">{hub.location}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Legal Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-gray-500">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>© 2026 Bluehorn Aviation Nigeria Ltd. All Rights Reserved. NCAA AOC #BHA-NG-2026.</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Terms of Charter</a>
            <a href="#" className="hover:text-gray-300 transition-colors">NCAA Passenger Charter</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
