"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/components/theme";

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    // Only show custom cursor on desktop
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    setIsVisible(true);

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  if (!isVisible) return null;

  // Gradient ID based on theme to avoid conflicts
  const gradientId = theme === 'dark' ? 'cursorGradientDark' : 'cursorGradientLight';

  return (
    <>
      {/* Hide default cursor */}
      <style jsx global>{`
        * {
          cursor: none !important;
        }
      `}</style>

      {/* Custom SVG cursor - no border, gradient fill matching website */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
          scale: isClicking ? 0.85 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 800,
          damping: 35,
          mass: 0.3,
        }}
      >
        <svg 
          width="28" 
          height="28" 
          viewBox="0 0 32 32" 
          xmlns="http://www.w3.org/2000/svg"
          style={{ marginLeft: '-2px', marginTop: '-2px' }}
        >
          <defs>
            {/* Website gradient: cyan #00D4FF to purple #7C3AED */}
            <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
              {theme === 'dark' ? (
                <>
                  <stop offset="0%" stopColor="#00D4FF" />
                  <stop offset="100%" stopColor="#7C3AED" />
                </>
              ) : (
                <>
                  <stop offset="0%" stopColor="#0891b2" />
                  <stop offset="100%" stopColor="#6d28d9" />
                </>
              )}
            </linearGradient>
            <filter id="cursorShadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="1" dy="2" stdDeviation="1" floodColor="#000" floodOpacity="0.2" />
            </filter>
          </defs>
          {/* Rounded cursor pointer - no stroke/border */}
          <path 
            d="M5 3 
               C4 2.5 3 3 3 4 
               L3 24 
               C3 25.5 4.5 26 5.5 25 
               L10 20 
               C10.5 19.5 11 19.5 11.5 20.5 
               L15 28 
               C15.5 29 16.5 29 17 28.5 
               L19.5 27 
               C20 26.5 20.2 25.5 19.7 25 
               L16 18 
               C15.5 17 16 16.5 17 16.5 
               L22 16.5 
               C23 16.5 23.5 15.5 22.8 14.8 
               L6.5 3.5 
               C6 3 5.5 3 5 3 
               Z" 
            fill={`url(#${gradientId})`}
            filter="url(#cursorShadow)"
          />
        </svg>
      </motion.div>
    </>
  );
}
