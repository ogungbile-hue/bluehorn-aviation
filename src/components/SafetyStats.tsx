import { ShieldCheck, Award, Lock, FileCheck, CheckCircle2 } from 'lucide-react';

export function SafetyStats() {
  const stats = [
    { label: 'Safety Record', value: '100%', subtext: 'Zero Incidents in West Africa' },
    { label: 'Flight Hours Logged', value: '50,000+', subtext: 'Across African & Global Airspace' },
    { label: 'Nigerian Destinations', value: '36 States', subtext: 'Executive Airfield Coverage' },
    { label: 'Abuja Flight Operations Desk', value: '24/7/365', subtext: 'Real-Time Flight Dispatch' },
  ];

  const safetyItems = [
    'NCAA Air Operator Certificate (AOC) compliant with international ICAO Annex safety norms.',
    'Dual Senior Captain Flight Crews assigned to every long-range jet departure out of Abuja and Lagos.',
    'Biannual simulator flight training at FlightSafety International & CAE centers in London & Montreal.',
    'Full hull & passenger liability insurance underwritten by leading international aviation syndicates.',
  ];

  return (
    <section id="safety" className="relative py-28 px-6 lg:px-10 z-20">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((st, i) => (
            <div
              key={i}
              className="glass-card p-6 md:p-8 rounded-2xl border border-white/10 text-center space-y-2 group hover:border-[#C5A059]/40 transition-colors"
            >
              <span className="text-3xl md:text-5xl font-extralight gold-gradient-text block">
                {st.value}
              </span>
              <span className="text-xs uppercase tracking-widest text-white font-medium block">
                {st.label}
              </span>
              <span className="text-[10px] text-gray-400 font-light block">{st.subtext}</span>
            </div>
          ))}
        </div>

        {/* Safety & Compliance Section */}
        <div className="glass-card rounded-3xl p-8 md:p-12 border border-white/15 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[10px] uppercase tracking-[0.3em] text-emerald-400 font-medium">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>NCAA & Global Compliance</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-light uppercase text-white tracking-wide">
              Regulatory Excellence in <span className="gold-gradient-text font-semibold">Abuja, Nigeria</span>
            </h3>
            <p className="text-gray-300 text-xs md:text-sm font-light leading-relaxed">
              Operating out of Nnamdi Azikiwe International Airport (Abuja) and Murtala Muhammed International Airport (Lagos), Bluehorn Aviation strictly enforces international flight safety management systems (SMS).
            </p>

            <div className="space-y-3 pt-2">
              {safetyItems.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 text-xs text-gray-200">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                  <span className="font-light">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="glass-card p-6 rounded-2xl border border-white/10 text-center space-y-3">
              <Award className="w-8 h-8 text-[#C5A059] mx-auto" />
              <h4 className="text-xs font-semibold text-white uppercase tracking-wider">NCAA Certified AOC</h4>
              <p className="text-[10px] text-gray-400 font-light">Licensed Commercial Executive Air Operator Certificate in Nigeria.</p>
            </div>
            <div className="glass-card p-6 rounded-2xl border border-white/10 text-center space-y-3">
              <FileCheck className="w-8 h-8 text-[#C5A059] mx-auto" />
              <h4 className="text-xs font-semibold text-white uppercase tracking-wider">ARG/US Platinum</h4>
              <p className="text-[10px] text-gray-400 font-light">Highest safety audit rating awarded to elite charter fleets.</p>
            </div>
            <div className="glass-card p-6 rounded-2xl border border-white/10 text-center space-y-3">
              <Lock className="w-8 h-8 text-[#C5A059] mx-auto" />
              <h4 className="text-xs font-semibold text-white uppercase tracking-wider">FAAN Hangar Permit</h4>
              <p className="text-[10px] text-gray-400 font-light">Federal Airports Authority of Nigeria private hangar authorization.</p>
            </div>
            <div className="glass-card p-6 rounded-2xl border border-white/10 text-center space-y-3">
              <ShieldCheck className="w-8 h-8 text-[#C5A059] mx-auto" />
              <h4 className="text-xs font-semibold text-white uppercase tracking-wider">IS-BAO Stage 3</h4>
              <p className="text-[10px] text-gray-400 font-light">International standard for business aircraft safety compliance.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
