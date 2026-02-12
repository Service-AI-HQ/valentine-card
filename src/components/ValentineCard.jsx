import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';

export default function ValentineCard() {
  const [step, setStep] = useState(1);
  const [noButtonPos, setNoButtonPos] = useState({ x: 0, y: 0 });
  const noButtonRef = useRef(null);
  const containerRef = useRef(null);

  // Get random position within container (never behind Yes button)
  const getRandomPosition = () => {
    if (!containerRef.current || !noButtonRef.current) return { x: 0, y: 0 };
    
    const container = containerRef.current.getBoundingClientRect();
    const button = noButtonRef.current.getBoundingClientRect();
    
    const maxX = container.width - button.width - 20;
    const maxY = container.height - button.height - 80; // Leave room below for buttons area
    
    let newX, newY;
    let validPosition = false;
    
    // Ensure it's not in the button zone
    while (!validPosition) {
      newX = Math.random() * Math.max(maxX, 50);
      newY = Math.random() * Math.max(maxY, 50);
      
      // Check it's not in the "buttons area" at the bottom
      if (newY < container.height - 100) {
        validPosition = true;
      }
    }
    
    return { x: newX, y: newY };
  };

  const handleNoButtonTrigger = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const pos = getRandomPosition();
    setNoButtonPos(pos);
  };

  const handleYesClick = () => {
    setStep(2);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#FF69B4', '#F8F8FF', '#FFB6D9', '#FFC0CB']
    });
  };

  const handleAddToCalendar = () => {
    const date = new Date(2026, 1, 14, 17, 0, 0);
    const title = 'Valentine\'s Day with Nana';
    const details = 'Nail Salon at Josephine DTLA';
    const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${date.toISOString().replace(/[-:]/g, '').split('.')[0]}Z/${date.toISOString().replace(/[-:]/g, '').split('.')[0]}Z&details=${encodeURIComponent(details)}&location=Josephine%20DTLA`;
    window.open(calendarUrl, '_blank');
  };

  const handleReschedule = () => {
    const userPhone = import.meta.env.VITE_USER_PHONE || '+1-YOUR-PHONE';
    const message = `Hi! Can we reschedule our date?`;
    window.location.href = `sms:${userPhone}?body=${encodeURIComponent(message)}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-pink-50 to-pink-100 flex flex-col items-center justify-center p-4">
      <motion.div
        ref={containerRef}
        className="relative max-w-[90vw] w-[350px] bg-white rounded-[32px] shadow-2xl p-8 flex flex-col items-center justify-center min-h-[450px]"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Step 1: The Ask */}
        {step === 1 && (
          <motion.div
            className="text-center space-y-8 w-full flex flex-col items-center justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {/* Heart Animation */}
            <motion.div
              className="text-6xl"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              💝
            </motion.div>

            {/* Main Text */}
            <div className="space-y-2">
              <h1 className="text-3xl font-bold text-pink-600">
                Will you be my valentine
              </h1>
              <p className="text-3xl font-bold text-pink-600 italic">
                mi amor, Nana?
              </p>
            </div>

            {/* Buttons Container */}
            <div className="flex gap-4 mt-8 relative h-12 w-full justify-center items-center">
              {/* Yes Button - Fixed */}
              <motion.button
                onClick={handleYesClick}
                className="w-32 h-12 bg-pink-500 text-white font-bold rounded-lg text-base hover:bg-pink-600 transition-colors cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Yes! 💕
              </motion.button>

              {/* No Button - Teleporting with Absolute Positioning */}
              <motion.button
                ref={noButtonRef}
                onMouseEnter={handleNoButtonTrigger}
                onPointerDown={handleNoButtonTrigger}
                animate={{
                  x: noButtonPos.x,
                  y: noButtonPos.y,
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                className="absolute w-32 h-12 bg-white text-pink-600 font-bold rounded-lg text-base border-2 border-pink-500 hover:bg-pink-50 transition-colors cursor-pointer"
                style={{ left: 0, top: 0 }}
              >
                No
              </motion.button>
            </div>
          </motion.div>
        )}

        {/* Step 2: Celebration */}
        {step === 2 && (
          <motion.div
            className="text-center space-y-6 w-full"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <motion.div
              className="text-5xl"
              animate={{ rotate: [0, -5, 5, 0] }}
              transition={{ duration: 0.6 }}
            >
              🎉
            </motion.div>

            <h2 className="text-3xl font-bold text-pink-600">
              You said YES! 💖
            </h2>

            <div className="bg-pink-100 rounded-2xl p-6 space-y-3">
              <div className="text-2xl font-bold text-pink-600">
                💅 Nail Salon Gift Card
              </div>
              <p className="text-lg font-semibold text-pink-700">
                Picking you up at 5:00 PM
              </p>
              <p className="text-lg font-bold text-pink-600">
                Destination: Josephine DTLA
              </p>
            </div>

            <div className="flex flex-col gap-3 mt-6">
              <motion.button
                onClick={handleAddToCalendar}
                className="w-full bg-pink-500 text-white font-bold py-3 rounded-lg text-base hover:bg-pink-600 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                📅 Add to Calendar
              </motion.button>

              <motion.button
                onClick={handleReschedule}
                className="w-full bg-white text-pink-600 font-bold py-3 rounded-lg text-base border-2 border-pink-500 hover:bg-pink-50 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                📅 Reschedule
              </motion.button>
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
