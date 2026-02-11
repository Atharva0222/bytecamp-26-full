import React from 'react';
import { motion } from 'framer-motion';
import './Gallery.css';

// ─── Gallery Data ──────────────────────────────────────
// Replace gradient placeholders with actual photos:
//   import photo1 from '../assets/gallery/photo1.jpg';
//   Then change: { src: photo1, caption: '...' }
const row1 = [
    { gradient: 'linear-gradient(135deg, #1a1a2e, #16213e, #0f3460)', caption: 'Opening Ceremony' },
    { gradient: 'linear-gradient(135deg, #0f3460, #533483, #e94560)', caption: 'Hacking Begins' },
    { gradient: 'linear-gradient(135deg, #2d1b69, #11998e)', caption: 'Teams Building' },
    { gradient: 'linear-gradient(135deg, #1a1a2e, #e94560)', caption: 'Mentoring Session' },
    { gradient: 'linear-gradient(135deg, #0f3460, #6366f1)', caption: 'Project Demos' },
    { gradient: 'linear-gradient(135deg, #533483, #0f3460)', caption: 'Keynote Talk' },
    { gradient: 'linear-gradient(135deg, #11998e, #1a1a2e)', caption: 'Late Night Coding' },
];

const row2 = [
    { gradient: 'linear-gradient(135deg, #6366f1, #e94560)', caption: 'Team Collaboration' },
    { gradient: 'linear-gradient(135deg, #e94560, #533483)', caption: 'Prize Ceremony' },
    { gradient: 'linear-gradient(135deg, #16213e, #11998e)', caption: 'Winners Celebration' },
    { gradient: 'linear-gradient(135deg, #1a1a2e, #6366f1)', caption: 'Group Photo' },
    { gradient: 'linear-gradient(135deg, #533483, #e94560, #0f3460)', caption: 'Closing Event' },
    { gradient: 'linear-gradient(135deg, #0f3460, #2d1b69)', caption: 'Fun Activities' },
    { gradient: 'linear-gradient(135deg, #11998e, #6366f1)', caption: 'Networking' },
];

interface GalleryItem {
    gradient?: string;
    src?: string;
    caption: string;
}

const GalleryCard = ({ item }: { item: GalleryItem }) => (
    <div className="gallery-card">
        {item.src ? (
            <img src={item.src} alt={item.caption} loading="lazy" />
        ) : (
            <div
                className="gallery-placeholder"
                style={{ background: item.gradient }}
            />
        )}
        <div className="gallery-overlay">
            <span>{item.caption}</span>
        </div>
    </div>
);

const MarqueeRow = ({ items, direction }: { items: GalleryItem[]; direction: 'left' | 'right' }) => {
    // Duplicate items to create seamless infinite loop
    const doubled = [...items, ...items];
    return (
        <div className="marquee-gallery">
            <div className={`marquee-track scroll-${direction}`}>
                {doubled.map((item, i) => (
                    <GalleryCard key={i} item={item} />
                ))}
            </div>
        </div>
    );
};

export default function Gallery() {
    return (
        <section className="py-24 bg-black relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-14">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-block mb-6"
                    >
                        {/* <span className="px-5 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-sm font-medium tracking-wider">
                            Memories
                        </span> */}
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold mb-4"
                    >
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400">
                            Glimpses from
                        </span>
                        <br />
                        <span className="text-white">Last Year</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-500 max-w-md mx-auto"
                    >
                        Relive the energy, innovation, and excitement from BYTECAMP'25
                    </motion.p>
                </div>
            </div>

            {/* Full-width marquee rows */}
            <div className="space-y-4">
                <MarqueeRow items={row1} direction="left" />
                <MarqueeRow items={row2} direction="right" />
            </div>
        </section>
    );
}
