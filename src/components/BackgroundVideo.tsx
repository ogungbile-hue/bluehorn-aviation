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
    let rafId: number | null = null;
    let targetProgress = 0;
    let hasNotifiedLoaded = false;

    const notifyLoaded = () => {
      if (!hasNotifiedLoaded && onLoaded) {
        hasNotifiedLoaded = true;
        onLoaded();
      }
    };

    // Force media load on mobile browsers
    if (video.readyState === 0) {
      video.load();
    }

    // Continuous smooth animation loop
    const renderLoop = () => {
      if (video && video.duration && !isNaN(video.duration)) {
        const targetTime = video.duration * targetProgress;
        const diff = targetTime - video.currentTime;

        // Anti-flicker guard: only update if video is not seeking and difference is significant
        if (!video.seeking && Math.abs(diff) > 0.02) {
          // Lerp for butter-smooth transition across frames
          const nextTime = video.currentTime + diff * 0.2;
          try {
            video.currentTime = nextTime;
          } catch {
            // Safe fallback for browser media restrictions
          }
        }
      }
      rafId = requestAnimationFrame(renderLoop);
    };

    const initScrollTrigger = () => {
      notifyLoaded();

      // Prime video playback engine silently for mobile browsers
      video
        .play()
        .then(() => {
          video.pause();
        })
        .catch(() => {
          // Silent catch for mobile autoplay rules
        });

      if (!video.duration || isNaN(video.duration)) return;

      if (!scrollTriggerInstance) {
        scrollTriggerInstance = ScrollTrigger.create({
          trigger: document.documentElement,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.1,
          onUpdate: (self) => {
            targetProgress = self.progress;
          },
        });

        // Start render loop once ScrollTrigger is initialized
        rafId = requestAnimationFrame(renderLoop);
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
      if (rafId) cancelAnimationFrame(rafId);
      video.removeEventListener('loadedmetadata', handleLoadedData);
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('canplay', handleLoadedData);
      if (scrollTriggerInstance) {
        scrollTriggerInstance.kill();
      }
    };
  }, [onLoaded]);

  return (
    <div className="fixed inset-0 z-0 bg-[#05080f] overflow-hidden pointer-events-none">
      {/* Luxury Jet Interior Backdrop Image */}
      <img
        src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1920&q=80"
        alt="Bluehorn Luxury Jet Interior"
        className="w-full h-full object-cover absolute inset-0 opacity-40 pointer-events-none"
      />

      {/* GPU-Accelerated Anti-Flicker Background Video */}
      <video
        ref={videoRef}
        src="https://website-assets-precious-ogungbile.s3.eu-north-1.amazonaws.com/jet+interior.mp4"
        className="w-full h-full object-cover relative z-1 pointer-events-none transform-gpu translate-z-0"
        muted
        playsInline
        preload="auto"
        style={{
          WebkitTransform: 'translate3d(0, 0, 0)',
          transform: 'translate3d(0, 0, 0)',
          WebkitBackfaceVisibility: 'hidden',
          backfaceVisibility: 'hidden',
          willChange: 'transform',
        }}
      />
      {/* Dark overlay for text readability & glass depth (z-index: 10) */}
      <div className="absolute inset-0 bg-[#05080f]/60 z-10 pointer-events-none" />
    </div>
  );
}
