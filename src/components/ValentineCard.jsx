import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';

export default function ValentineCard() {
  const [step, setStep] = useState(1);
  const [noButtonPos, setNoButtonPos] = useState({ x: 80, y: 280 });
  const noButtonRef = useRef(null);
  const cardRef = useRef(null);

  // Get random position within card (350px width, 30px padding = 290px usable)
  const getRandomPosition = () => {
    if (!cardRef.current) return { x: 80, y: 280 };
    
    // Card is 350px wide with 30px padding = 290px usable width
    // Buttons area starts around y: 250
    const maxX = Math.random() * 200 + 20; // Random between 20-220px
    const maxY = Math.random() * 120 + 80;  // Random between 80-200px (above buttons)
    
    return { x: maxX, y: maxY };
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
      particleCount: 120,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#ff4d6d', '#fce4ec', '#ffccd5', '#ff69b4']
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
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      overflow: 'hidden',
      background: 'linear-gradient(135deg, #fce4ec 0%, #ffebee 100%)',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <motion.div
        ref={cardRef}
        style={{
          width: '350px',
          background: 'white',
          borderRadius: '40px',
          padding: '30px',
          boxShadow: '0 20px 60px rgba(255, 105, 180, 0.2)',
          border: '2px solid #ffccd5',
          position: 'relative'
        }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Step 1: The Ask */}
        {step === 1 && (
          <motion.div
            style={{ textAlign: 'center', width: '100%' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {/* Polaroid-style Image Container */}
            <div style={{
              width: '100%',
              aspectRatio: '1',
              background: '#fdf2f2',
              borderRadius: '20px',
              overflow: 'hidden',
              marginBottom: '25px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <motion.div
                animate={{ scale: [1, 1.08, 1] }}
                transition={{ duration: 2.5, repeat: Infinity }}
                style={{ fontSize: '80px' }}
              >
                💝
              </motion.div>
            </div>

            {/* Typography */}
            <h1 style={{
              fontWeight: 900,
              color: '#333',
              fontSize: '28px',
              lineHeight: 1.1,
              marginBottom: '5px',
              margin: '0 0 5px 0'
            }}>
              Will you be my valentine
            </h1>
            
            <p style={{
              color: '#ff4d6d',
              fontSize: '22px',
              marginBottom: '25px',
              fontStyle: 'italic',
              fontWeight: 500,
              margin: '5px 0 25px 0'
            }}>
              mi amor, Nana?
            </p>

            {/* Buttons Container */}
            <div style={{
              position: 'relative',
              height: '60px',
              display: 'flex',
              gap: '15px',
              justifyContent: 'center',
              alignItems: 'flex-end'
            }}>
              {/* Yes Button */}
              <motion.button
                onClick={handleYesClick}
                style={{
                  width: '110px',
                  height: '50px',
                  background: '#ff4d6d',
                  color: 'white',
                  border: 'none',
                  borderRadius: '50px',
                  fontWeight: 'bold',
                  fontSize: '16px',
                  cursor: 'pointer',
                  boxShadow: '0 10px 20px rgba(255, 77, 109, 0.3)',
                  transition: 'all 0.3s ease'
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onMouseEnter={(e) => e.target.style.boxShadow = '0 14px 28px rgba(255, 77, 109, 0.4)'}
                onMouseLeave={(e) => e.target.style.boxShadow = '0 10px 20px rgba(255, 77, 109, 0.3)'}
              >
                Yes! 💕
              </motion.button>

              {/* No Button - Teleporting */}
              <motion.button
                ref={noButtonRef}
                onMouseEnter={handleNoButtonTrigger}
                onPointerDown={handleNoButtonTrigger}
                animate={{
                  x: noButtonPos.x,
                  y: noButtonPos.y,
                }}
                transition={{ type: 'tween', duration: 0.15 }}
                style={{
                  position: 'absolute',
                  width: '110px',
                  height: '50px',
                  background: 'transparent',
                  color: '#ff4d6d',
                  border: '2px solid #ff4d6d',
                  borderRadius: '50px',
                  fontWeight: 'bold',
                  fontSize: '16px',
                  cursor: 'pointer',
                  left: 0,
                  top: 0
                }}
              >
                No
              </motion.button>
            </div>
          </motion.div>
        )}

        {/* Step 2: Celebration */}
        {step === 2 && (
          <motion.div
            style={{ textAlign: 'center', width: '100%' }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <motion.div
              style={{ fontSize: '60px', marginBottom: '20px' }}
              animate={{ rotate: [0, -5, 5, 0] }}
              transition={{ duration: 0.6 }}
            >
              🎉
            </motion.div>

            <h2 style={{
              fontWeight: 900,
              color: '#ff4d6d',
              fontSize: '28px',
              marginBottom: '20px'
            }}>
              You said YES! 💖
            </h2>

            <div style={{
              background: '#fdf2f2',
              borderRadius: '20px',
              padding: '20px',
              marginBottom: '25px',
              textAlign: 'center'
            }}>
              <div style={{
                fontSize: '24px',
                fontWeight: 'bold',
                color: '#ff4d6d',
                marginBottom: '10px'
              }}>
                💅 Nail Salon Gift Card
              </div>
              <p style={{
                fontSize: '16px',
                color: '#666',
                marginBottom: '8px',
                fontWeight: 500
              }}>
                Picking you up at 5:00 PM
              </p>
              <p style={{
                fontSize: '16px',
                color: '#ff4d6d',
                fontWeight: 'bold'
              }}>
                Destination: Josephine DTLA
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <motion.button
                onClick={handleAddToCalendar}
                style={{
                  width: '100%',
                  height: '50px',
                  background: '#ff4d6d',
                  color: 'white',
                  border: 'none',
                  borderRadius: '50px',
                  fontWeight: 'bold',
                  fontSize: '16px',
                  cursor: 'pointer',
                  boxShadow: '0 10px 20px rgba(255, 77, 109, 0.3)',
                  transition: 'all 0.3s ease'
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onMouseEnter={(e) => e.target.style.boxShadow = '0 14px 28px rgba(255, 77, 109, 0.4)'}
                onMouseLeave={(e) => e.target.style.boxShadow = '0 10px 20px rgba(255, 77, 109, 0.3)'}
              >
                📅 Add to Calendar
              </motion.button>

              <motion.button
                onClick={handleReschedule}
                style={{
                  width: '100%',
                  height: '50px',
                  background: 'transparent',
                  color: '#ff4d6d',
                  border: '2px solid #ff4d6d',
                  borderRadius: '50px',
                  fontWeight: 'bold',
                  fontSize: '16px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onMouseEnter={(e) => {
                  e.target.style.background = '#fff5f7';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'transparent';
                }}
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
