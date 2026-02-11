import React, { useState } from 'react';
import { TRACKS_CARDS } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';

function TrackCard({
  title,
  description,
  icon,
  accentColor,
  perks,
  prize,
  prizeLabel,
  index
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  accentColor: string;
  perks: string[];
  prize: string;
  prizeLabel: string;
  index: number;
}) {
  const trackNumber = String(index + 1).padStart(2, '0');
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.5 }}
      className="w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="relative rounded-lg overflow-hidden h-full cursor-pointer"
        style={{
          background: 'linear-gradient(160deg, rgba(20,20,25,1) 0%, rgba(10,10,14,1) 100%)',
        }}
        animate={{
          y: isHovered ? -8 : 0,
          boxShadow: isHovered
            ? `0 20px 40px ${accentColor}20, 0 0 60px ${accentColor}10, inset 0 0 40px ${accentColor}06`
            : `0 0 20px ${accentColor}08`,
          borderColor: isHovered ? `${accentColor}80` : `${accentColor}25`,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        whileTap={{ scale: 0.98 }}
      >
        {/* Animated border */}
        <div
          className="absolute inset-0 rounded-lg pointer-events-none"
          style={{ border: `1px solid ${isHovered ? accentColor + '80' : accentColor + '25'}`, transition: 'border-color 0.4s ease' }}
        />

        {/* Shimmer sweep on hover */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              className="absolute inset-0 pointer-events-none z-20"
              initial={{ x: '-100%' }}
              animate={{ x: '200%' }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7, ease: 'easeInOut' }}
              style={{
                background: `linear-gradient(90deg, transparent 0%, ${accentColor}08 40%, ${accentColor}15 50%, ${accentColor}08 60%, transparent 100%)`,
                width: '50%',
              }}
            />
          )}
        </AnimatePresence>

        {/* Top edge glow line */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-[1px] pointer-events-none"
          style={{ background: `linear-gradient(90deg, transparent, ${accentColor}, transparent)` }}
          animate={{ opacity: isHovered ? 0.8 : 0 }}
          transition={{ duration: 0.4 }}
        />

        {/* Watermark icon - scales up on hover */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          style={{ color: accentColor }}
          animate={{
            scale: isHovered ? 1.15 : 1,
            opacity: isHovered ? 0.08 : 0.04,
          }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        >
          <div className="w-48 h-48 flex items-center justify-center [&_svg]:w-48 [&_svg]:h-48">
            {icon}
          </div>
        </motion.div>

        {/* Corner accent glow - expands on hover */}
        <motion.div
          className="absolute -top-12 -left-12 rounded-full blur-3xl pointer-events-none"
          style={{ background: accentColor }}
          animate={{
            width: isHovered ? 200 : 128,
            height: isHovered ? 200 : 128,
            opacity: isHovered ? 0.25 : 0.15,
          }}
          transition={{ type: 'spring', stiffness: 150, damping: 20 }}
        />

        {/* Content */}
        <div className="relative z-10 p-6 flex flex-col h-full min-h-[340px]">
          {/* Track badge - fills on hover */}
          <div className="mb-5">
            <motion.span
              className="inline-block px-3 py-1 text-[10px] font-bold tracking-[0.2em] uppercase rounded-sm"
              animate={{
                backgroundColor: isHovered ? accentColor + '20' : 'transparent',
                borderColor: accentColor,
                color: accentColor,
              }}
              transition={{ duration: 0.3 }}
              style={{ border: `1px solid ${accentColor}` }}
            >
              Track {trackNumber}
            </motion.span>
          </div>

          {/* Title - slight color shift on hover */}
          <motion.h3
            className="text-2xl font-extrabold uppercase tracking-wide mb-4"
            style={{ fontFamily: "'Inter', sans-serif" }}
            animate={{ color: isHovered ? accentColor : '#ffffff' }}
            transition={{ duration: 0.3 }}
          >
            {title}
          </motion.h3>

          {/* Perks - stagger reveal on hover */}
          <div className="mb-auto">
            <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-2">Perks:</p>
            <ul className="space-y-1.5">
              {perks.map((perk, i) => (
                <motion.li
                  key={i}
                  className="flex items-start gap-2 text-sm"
                  animate={{
                    color: isHovered ? 'rgba(209,213,219,1)' : 'rgba(156,163,175,1)',
                    x: isHovered ? 4 : 0,
                  }}
                  transition={{ duration: 0.3, delay: isHovered ? i * 0.05 : 0 }}
                >
                  <motion.span
                    className="mt-1.5 rounded-full flex-shrink-0"
                    style={{ background: accentColor }}
                    animate={{
                      width: isHovered ? 6 : 4,
                      height: isHovered ? 6 : 4,
                    }}
                    transition={{ duration: 0.3, delay: isHovered ? i * 0.05 : 0 }}
                  />
                  {perk}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Prize section - bar pulses on hover */}
          <motion.div
            className="mt-6 pt-4"
            animate={{
              borderLeftWidth: isHovered ? 4 : 3,
              borderLeftColor: accentColor,
              paddingLeft: isHovered ? 2 : 0,
            }}
            transition={{ duration: 0.3 }}
            style={{ borderLeftStyle: 'solid' }}
          >
            <div className="pl-3">
              <motion.p
                className="font-bold text-lg leading-tight"
                animate={{ color: isHovered ? accentColor : '#ffffff' }}
                transition={{ duration: 0.3 }}
              >
                {prize}
              </motion.p>
              <p
                className="text-[10px] font-bold tracking-[0.15em] uppercase mt-0.5"
                style={{ color: accentColor }}
              >
                {prizeLabel}
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Tracks() {
  return (
    <section id="tracks" className="py-32 bg-black relative">
      {/* Subtle star background dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-[1px] h-[1px] bg-white rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: 0.2 + Math.random() * 0.3,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-20 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Problem Tracks
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            Choose your arena. Each track comes with unique perks and prizes.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRACKS_CARDS.map((card, index) => (
            <TrackCard
              key={index}
              title={card.title}
              description={card.description}
              icon={card.icon}
              accentColor={card.accentColor}
              perks={card.perks}
              prize={card.prize}
              prizeLabel={card.prizeLabel}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}