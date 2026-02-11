import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TARGET_DATE = new Date('2026-03-14T09:00:00').getTime();

const TimeBlock = ({ value, label }: { value: number; label: string }) => (
  <div className="flex flex-col items-center">
    <span className="text-6xl md:text-9xl font-extrabold font-mono tabular-nums bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent leading-none">
      {String(Math.max(0, value)).padStart(2, '0')}
    </span>
    <span className="text-xs md:text-sm font-bold text-gray-500 uppercase tracking-[0.2em] mt-3">{label}</span>
  </div>
);

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = TARGET_DATE - now;

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  return (
    <section className="bg-black py-12 md:py-20 border-y border-white/5 relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <h3 className="text-blue-400 font-mono text-sm mb-8 tracking-wider">HACKING BEGINS IN</h3>

          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            <TimeBlock value={timeLeft.days} label="Days" />
            <div className="hidden md:flex items-start pt-8">
              <span className="text-6xl md:text-8xl text-gray-700 font-bold">:</span>
            </div>
            <TimeBlock value={timeLeft.hours} label="Hours" />
            <div className="hidden md:flex items-start pt-8">
              <span className="text-6xl md:text-8xl text-gray-700 font-bold">:</span>
            </div>
            <TimeBlock value={timeLeft.minutes} label="Minutes" />
            <div className="hidden md:flex items-start pt-8">
              <span className="text-6xl md:text-8xl text-gray-700 font-bold">:</span>
            </div>
            <TimeBlock value={timeLeft.seconds} label="Seconds" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}