import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function BackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let scrollTriggerInstance: ScrollTrigger | null = null;

    const initScrollTrigger = () => {
      // In case metadata is loaded, or we have a reliable duration
      if (!video.duration || isNaN(video.duration)) return;

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
    };

    // If metadata is already loaded (e.g. cached), init immediately
    if (video.readyState >= 1) {
      initScrollTrigger();
    } else {
      video.addEventListener('loadedmetadata', initScrollTrigger);
    }

    return () => {
      video.removeEventListener('loadedmetadata', initScrollTrigger);
      if (scrollTriggerInstance) {
        scrollTriggerInstance.kill();
      }
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 bg-black">
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
