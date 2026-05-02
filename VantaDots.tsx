import React, { useEffect, useRef } from 'react';

const VantaDots = () => {
  const vantaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let effect: any = null;

    const loadScripts = async () => {
      // 1. Load Three.js if not already present
      if (!(window as any).THREE) {
        await new Promise((resolve, reject) => {
          const script = document.createElement('script');
          script.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js';
          script.onload = resolve;
          script.onerror = reject;
          document.head.appendChild(script);
        });
      }

      // 2. Load Vanta Dots if not already present
      if (!(window as any).VANTA || !(window as any).VANTA.DOTS) {
        await new Promise((resolve, reject) => {
          const script = document.createElement('script');
          script.src = 'https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.dots.min.js';
          script.onload = resolve;
          script.onerror = reject;
          document.head.appendChild(script);
        });
      }

      // 3. Initialize Vanta
      if (vantaRef.current && (window as any).VANTA && (window as any).VANTA.DOTS) {
        try {
          effect = (window as any).VANTA.DOTS({
            el: vantaRef.current,
            THREE: (window as any).THREE,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0x29ff,
            color2: 0x0,
            backgroundColor: 0x000000,
            size: 4.30,
            spacing: 21.00,
          });
        } catch (err) {
          console.error('Vanta initialization failed:', err);
        }
      }
    };

    loadScripts();

    return () => {
      if (effect && typeof effect.destroy === 'function') {
        effect.destroy();
      }
    };
  }, []);

  return <div ref={vantaRef} className="absolute inset-0 w-full h-full" />;
};

export default VantaDots;
