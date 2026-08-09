import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface BackgroundVideoProps {
  onLoaded?: () => void;
}

export function BackgroundVideo({ onLoaded }: BackgroundVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let scrollTriggerInstance: ScrollTrigger | null = null;
    let requestID: number | null = null;

    // Force media engine load on mobile devices
    if (video.readyState === 0) {
      video.load();
    }

    const initScrollTrigger = () => {
      if (onLoaded) {
        onLoaded();
      }

      // Prime video playback engine for mobile browsers
      video
        .play()
        .then(() => {
          video.pause();
        })
        .catch(() => {
          // Autoplay policy silent catch for touch devices
        });

      if (!video.duration || isNaN(video.duration)) return;

      if (!scrollTriggerInstance) {
        scrollTriggerInstance = ScrollTrigger.create({
          trigger: document.documentElement,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.3,
          onUpdate: (self) => {
            if (video.duration) {
              const targetTime = video.duration * self.progress;
              if (requestID) cancelAnimationFrame(requestID);
              requestID = requestAnimationFrame(() => {
                if ('fastSeek' in video && typeof video.fastSeek === 'function') {
                  try {
                    video.fastSeek(targetTime);
                  } catch {
                    video.currentTime = targetTime;
                  }
                } else {
                  video.currentTime = targetTime;
                }
              });
            }
          },
        });
      }
    };

    const handleLoadedData = () => {
      initScrollTrigger();
    };

    if (video.readyState >= 1) {
      initScrollTrigger();
    } else {
      video.addEventListener('loadedmetadata', handleLoadedData);
      video.addEventListener('loadeddata', handleLoadedData);
      video.addEventListener('canplay', handleLoadedData);
    }

    return () => {
      if (requestID) cancelAnimationFrame(requestID);
      video.removeEventListener('loadedmetadata', handleLoadedData);
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('canplay', handleLoadedData);
      if (scrollTriggerInstance) {
        scrollTriggerInstance.kill();
      }
    };
  }, [onLoaded]);

  return (
    <div className="fixed inset-0 z-0 bg-[#05080f]">
      {/* Luxury Jet Interior Poster Image (Fallback for Mobile Low Power Mode) */}
      <img
        src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1920&q=80"
        alt="Bluehorn Luxury Jet Interior"
        className="w-full h-full object-cover absolute inset-0 opacity-40"
      />

      <video
        ref={videoRef}
        src="https://website-assets-precious-ogungbile.s3.eu-north-1.amazonaws.com/jet+interior.mp4"
        className="w-full h-full object-cover relative z-1"
        muted
        autoPlay
        loop
        playsInline
        preload="auto"
      />
      {/* Dark overlay for text readability (z-index: 10) */}
      <div className="absolute inset-0 bg-black/50 z-10" />
    </div>
  );
}
