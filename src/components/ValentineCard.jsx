import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './ValentineCard.css';

export default function ValentineCard() {
  const [step, setStep] = useState(1);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const noButtonRef = useRef(null);
  const cardRef = useRef(null);

  // Function to get random position within card bounds
  const getRandomPosition = () => {
    if (!cardRef.current) return { x: 0, y: 0 };
    
    const card = cardRef.current.getBoundingClientRect();
    const button = noButtonRef.current?.getBoundingClientRect();
    
    if (!button) return { x: 0, y: 0 };

    const maxX = card.width - button.width - 10;
    const maxY = card.height - button.height - 10;

    return {
      x: Math.random() * maxX,
      y: Math.random() * maxY,
    };
  };

  // Handle No Button escape
  const handleNoButtonHover = () => {
    const pos = getRandomPosition();
    if (noButtonRef.current) {
      noButtonRef.current.style.position = 'absolute';
      noButtonRef.current.style.left = `${pos.x}px`;
      noButtonRef.current.style.top = `${pos.y}px`;
    }
  };

  const handleNoButtonPointerDown = (e) => {
    e.preventDefault();
    e.stopPropagation();
    handleNoButtonHover();
  };

  // Handle Yes Button
  const handleYesClick = () => {
    setStep(2);
    // Trigger confetti
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#FF69B4', '#F8F8FF', '#FFB6D9', '#FFC0CB']
    });
  };

  // Handle Confirm (Google Calendar)
  const handleConfirm = () => {
    const date = new Date(2026, 1, 14, 17, 0, 0); // Feb 14, 2026, 5:00 PM PST
    const title = 'Valentine\'s Day with Nana';
    const details = 'Nail Salon at Josephine DTLA';
    
    const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${date.toISOString().replace(/[-:]/g, '').split('.')[0]}Z/${date.toISOString().replace(/[-:]/g, '').split('.')[0]}Z&details=${encodeURIComponent(details)}&location=Josephine%20DTLA`;
    
    window.open(calendarUrl, '_blank');
  };

  // Handle Reschedule
  const handleReschedule = () => {
    setShowDatePicker(true);
  };

  // Handle Date Selection
  const handleDateConfirm = (date) => {
    if (date) {
      setSelectedDate(date);
      // Trigger SMS (simulated - in real app would call backend)
      const formattedDate = date.toLocaleDateString('en-US', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      });
      const message = `Hi! Can we reschedule for ${formattedDate}?`;
      
      // Store message (would send via SMS in production)
      alert(`SMS would be sent: "${message}"`);
      
      setShowDatePicker(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cupidPink/10 to-marshmallow flex items-center justify-center p-4">
      <motion.div
        ref={cardRef}
        className="relative w-full max-w-lg h-screen max-h-[450px] bg-marshmallow rounded-3xl shadow-2xl p-8 flex flex-col items-center justify-center overflow-hidden"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Step 1: The Ask */}
        {step === 1 && (
          <motion.div
            className="text-center space-y-6 w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <div className="space-y-4">
              <motion.div
                className="w-32 h-32 mx-auto bg-cupidPink/20 rounded-full flex items-center justify-center text-6xl"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                💝
              </motion.div>
              <h1 className="text-4xl font-bold text-cupidPink">
                Will you be my valentine
              </h1>
              <p className="text-3xl font-bold text-cupidPink italic">
                mi amor, Nana?
              </p>
            </div>

            <div className="flex gap-4 mt-8 relative h-14">
              <motion.button
                onClick={handleYesClick}
                className="flex-1 bg-cupidPink text-marshmallow font-bold py-3 px-6 rounded-lg text-lg hover:bg-cupidPink/90 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Yes! 💕
              </motion.button>

              <motion.button
                ref={noButtonRef}
                onMouseEnter={handleNoButtonHover}
                onPointerDown={handleNoButtonPointerDown}
                className="absolute w-20 bg-white text-cupidPink font-bold py-3 px-4 rounded-lg text-lg border-2 border-cupidPink hover:bg-cupidPink/10 transition-colors cursor-pointer"
                style={{ right: '0', bottom: '0' }}
              >
                No
              </motion.button>
            </div>
          </motion.div>
        )}

        {/* Step 2: Yes Reveal */}
        {step === 2 && (
          <motion.div
            className="text-center space-y-6 w-full"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
          >
            <motion.div
              className="text-6xl mb-4"
              animate={{ rotate: [0, -5, 5, 0] }}
              transition={{ duration: 0.6 }}
            >
              🎉
            </motion.div>
            
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-cupidPink">
                You said YES! 💖
              </h2>
              
              <div className="bg-cupidPink/10 rounded-2xl p-6 space-y-3">
                <div className="text-2xl font-bold text-cupidPink">
                  💅 Nail Salon Gift Card
                </div>
                <p className="text-lg font-semibold text-cupidPink/80">
                  Picking you up at 5:00 PM
                </p>
                <p className="text-lg font-bold text-cupidPink">
                  Destination: Josephine DTLA
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mt-8">
              <motion.button
                onClick={handleConfirm}
                className="bg-cupidPink text-marshmallow font-bold py-3 px-4 rounded-lg text-sm hover:bg-cupidPink/90 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                📅 Add to Calendar
              </motion.button>

              <motion.button
                onClick={handleReschedule}
                className="bg-white text-cupidPink font-bold py-3 px-4 rounded-lg text-sm border-2 border-cupidPink hover:bg-cupidPink/10 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                📅 Reschedule
              </motion.button>
            </div>

            {showDatePicker && (
              <motion.div
                className="mt-4 space-y-3"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <DatePicker
                  selected={selectedDate}
                  onChange={handleDateConfirm}
                  minDate={new Date()}
                  inline
                  className="mx-auto"
                  dateFormat="MMMM d, yyyy"
                />
                <button
                  onClick={() => setShowDatePicker(false)}
                  className="w-full bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-lg text-sm"
                >
                  Close
                </button>
              </motion.div>
            )}
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
