import { useEffect, useState } from 'react';
import { Plane } from 'lucide-react';
import logo from '../assets/images/bluehorn-logo.png';

interface PreloaderProps {
  isLoading: boolean;
}

export function Preloader({ isLoading }: PreloaderProps) {
  const [progress, setProgress] = useState(15);
  const [isFading, setIsFading] = useState(false);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    // Progress increment animation
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (!isLoading) return 100;
        if (prev >= 90) return 92;
        const bump = Math.floor(Math.random() * 12) + 5;
        return Math.min(prev + bump, 90);
      });
    }, 180);

    return () => clearInterval(interval);
  }, [isLoading]);

  useEffect(() => {
    if (!isLoading) {
      setProgress(100);
      const timer = setTimeout(() => {
        setIsFading(true);
      }, 300);

      const removeTimer = setTimeout(() => {
        setShouldRender(false);
      }, 900); // 300ms delay + 600ms fade duration

      return () => {
        clearTimeout(timer);
        clearTimeout(removeTimer);
      };
    }
  }, [isLoading]);

  if (!shouldRender) return null;

  return (
    <div
      className={`fixed inset-0 z-50 bg-[#05080f] flex flex-col items-center justify-center p-6 transition-opacity duration-600 ease-in-out ${
        isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Ambient background glow */}
      <div className="absolute w-[350px] h-[350px] bg-[#C5A059]/10 rounded-full blur-[100px] pointer-events-none animate-pulse" />

      {/* Main Container */}
      <div className="relative z-10 flex flex-col items-center text-center space-y-8 max-w-sm w-full">
        {/* Animated Jet Emblem Container */}
        <div className="relative flex items-center justify-center w-24 h-24">
          {/* Outer Rotating Radar Ring */}
          <div className="absolute inset-0 rounded-full border border-[#C5A059]/30 animate-spin [animation-duration:8s]" />
          <div className="absolute -inset-2 rounded-full border border-dashed border-[#C5A059]/20 animate-spin [animation-duration:14s]" />

          {/* Jet Icon with Flight Pulse */}
          <div className="w-16 h-16 rounded-2xl bg-black/80 border border-[#C5A059]/40 flex items-center justify-center shadow-[0_0_30px_rgba(197,160,89,0.25)]">
            <Plane className="w-8 h-8 text-[#C5A059] -rotate-45 animate-bounce [animation-duration:2s]" />
          </div>
        </div>

        {/* Brand Header */}
        <div className="space-y-1">
          <div className="flex items-center justify-center gap-2">
            <img src={logo} alt="Bluehorn" className="w-5 h-5 object-contain" />
            <span className="text-lg font-bold tracking-[0.3em] uppercase gold-gradient-text">
              BLUEHORN
            </span>
          </div>
          <span className="text-[10px] text-gray-400 font-light tracking-[0.35em] uppercase block">
            AVIATION NIGERIA • ABUJA HQ
          </span>
        </div>

        {/* Progress Bar & Status Text */}
        <div className="w-full space-y-3">
          <div className="flex justify-between items-center text-[10px] uppercase tracking-widest text-gray-400 font-medium">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] animate-ping" />
              Initializing Flight Desk...
            </span>
            <span className="text-[#C5A059] font-mono font-semibold">{progress}%</span>
          </div>

          {/* Progress Bar Track */}
          <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden p-0.5 border border-white/10">
            <div
              className="h-full bg-gradient-to-r from-[#9E7C3B] via-[#C5A059] to-[#E2D1B3] rounded-full transition-all duration-300 ease-out shadow-[0_0_12px_rgba(197,160,89,0.8)]"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Footnote */}
        <p className="text-[10px] text-gray-500 font-light tracking-wider">
          Preparing High-Definition Aerial Experience
        </p>
      </div>
    </div>
  );
}
