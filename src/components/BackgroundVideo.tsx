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

    const initScrollTrigger = () => {
      if (onLoaded) {
        onLoaded();
      }

      if (!video.duration || isNaN(video.duration)) return;

      if (!scrollTriggerInstance) {
        scrollTriggerInstance = ScrollTrigger.create({
          trigger: document.documentElement,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.5, // Add a slight smoothing to the scrub effect
          onUpdate: (self) => {
            if (video.duration) {
              // Scrub the video based on scroll progress
              video.currentTime = video.duration * self.progress;
            }
          },
        });
      }
    };

    const handleLoadedData = () => {
      initScrollTrigger();
    };

    // If metadata/data is already loaded (e.g. cached), init immediately
    if (video.readyState >= 2) {
      initScrollTrigger();
    } else {
      video.addEventListener('loadeddata', handleLoadedData);
      video.addEventListener('canplay', handleLoadedData);
      video.addEventListener('loadedmetadata', handleLoadedData);
    }

    return () => {
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('canplay', handleLoadedData);
      video.removeEventListener('loadedmetadata', handleLoadedData);
      if (scrollTriggerInstance) {
        scrollTriggerInstance.kill();
      }
    };
  }, [onLoaded]);

  return (
    <div className="fixed inset-0 z-0 bg-[#05080f]">
      <video
        ref={videoRef}
        src="https://website-assets-precious-ogungbile.s3.eu-north-1.amazonaws.com/jet+interior.mp4"
        className="w-full h-full object-cover"
        muted
        playsInline
        preload="auto"
      />
      {/* Dark overlay for text readability (z-index: 10) */}
      <div className="absolute inset-0 bg-black/50 z-10" />
    </div>
  );
}
