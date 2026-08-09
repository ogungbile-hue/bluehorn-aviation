import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FALLBACK_POSTER = 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1920&q=80';

export function BackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let scrollTriggerInstance: ScrollTrigger | null = null;

    const handleLoadedData = () => {
      setIsVideoLoaded(true);
    };

    const initScrollTrigger = () => {
      if (!video.duration || isNaN(video.duration)) return;

      // Force initial frame render
      if (video.currentTime === 0) {
        video.currentTime = 0.001;
      }

      scrollTriggerInstance = ScrollTrigger.create({
        trigger: document.documentElement,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.5, // Smooth scrub
        onUpdate: (self) => {
          if (video.duration) {
            video.currentTime = video.duration * self.progress;
          }
        },
      });
    };

    if (video.readyState >= 2) {
      setIsVideoLoaded(true);
      initScrollTrigger();
    } else {
      video.addEventListener('loadeddata', handleLoadedData);
      video.addEventListener('loadedmetadata', initScrollTrigger);
    }

    return () => {
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('loadedmetadata', initScrollTrigger);
      if (scrollTriggerInstance) {
        scrollTriggerInstance.kill();
      }
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat bg-[#0A0F1A]"
      style={{ backgroundImage: `url(${FALLBACK_POSTER})` }}
    >
      <video
        ref={videoRef}
        src="https://website-assets-precious-ogungbile.s3.eu-north-1.amazonaws.com/jet+interior.mp4"
        poster={FALLBACK_POSTER}
        className={`w-full h-full object-cover transition-opacity duration-700 ${
          isVideoLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        muted
        playsInline
        preload="auto"
      />
      {/* Dark overlay for text readability (z-index: 10) */}
      <div className="absolute inset-0 bg-black/55 backdrop-blur-[1px] z-10" />
    </div>
  );
}
