import React from 'react';
import { motion } from 'framer-motion';
import './Sponsors.css';

// ─── Sponsor Data ──────────────────────────────────────
// Replace with actual sponsor logos:
//   import sponsorLogo from '../assets/sponsors/sponsor.png';
//   Then use: { name: 'Sponsor', logo: sponsorLogo, tier: 'gold' }

interface Sponsor {
    name: string;
    logo?: string;
    tier: 'gold' | 'silver' | 'bronze';
}

const sponsors: Sponsor[] = [
    // Gold tier
    { name: 'Gold Sponsor 1', tier: 'gold' },
    { name: 'Gold Sponsor 2', tier: 'gold' },
    // Silver tier
    { name: 'Silver Sponsor 1', tier: 'silver' },
    { name: 'Silver Sponsor 2', tier: 'silver' },
    { name: 'Silver Sponsor 3', tier: 'silver' },
    // Bronze tier
    { name: 'Bronze Sponsor 1', tier: 'bronze' },
    { name: 'Bronze Sponsor 2', tier: 'bronze' },
    { name: 'Bronze Sponsor 3', tier: 'bronze' },
    { name: 'Bronze Sponsor 4', tier: 'bronze' },
];

const tierOrder = ['gold', 'silver', 'bronze'] as const;
const tierLabels: Record<string, string> = {
    gold: 'Gold Partners',
    silver: 'Silver Partners',
    bronze: 'Bronze Partners',
};

const SponsorCard = ({ sponsor, index }: { sponsor: Sponsor; index: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.08, duration: 0.5 }}
        className={`sponsor-card ${sponsor.tier}`}
    >
        <span className={`tier-badge ${sponsor.tier}`}>
            {sponsor.tier}
        </span>
        {sponsor.logo ? (
            <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="sponsor-logo"
                loading="lazy"
            />
        ) : (
            <span className="sponsor-placeholder">{sponsor.name}</span>
        )}
    </motion.div>
);

export default function Sponsors() {
    return (
        <section id="sponsors" className="py-24 bg-black relative overflow-hidden">
            {/* Subtle ambient glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-yellow-500/[0.03] rounded-full blur-[150px] pointer-events-none" />

            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-block mb-6"
                    >
                        {/* <span className="px-5 py-2 rounded-full border border-yellow-600/30 bg-yellow-600/10 text-yellow-500 text-sm font-medium tracking-wider">
                            Our Partners
                        </span> */}
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold mb-4"
                    >
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400">
                            Backed by
                        </span>
                        <br />
                        <span className="text-white">Industry Leaders</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-500 max-w-md mx-auto"
                    >
                        Proudly supported by organizations that believe in innovation
                    </motion.p>
                </div>

                {tierOrder.map((tier) => {
                    const tierSponsors = sponsors.filter((s) => s.tier === tier);
                    if (tierSponsors.length === 0) return null;

                    return (
                        <div key={tier} className="mb-12 last:mb-0">
                            <motion.h3
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="text-sm font-semibold uppercase tracking-widest text-gray-600 mb-6 pl-1"
                            >
                                {tierLabels[tier]}
                            </motion.h3>
                            <div
                                className={`grid gap-5 ${tier === 'gold'
                                    ? 'grid-cols-1 md:grid-cols-2'
                                    : tier === 'silver'
                                        ? 'grid-cols-1 md:grid-cols-3'
                                        : 'grid-cols-2 md:grid-cols-4'
                                    }`}
                            >
                                {tierSponsors.map((sponsor, idx) => (
                                    <SponsorCard key={sponsor.name} sponsor={sponsor} index={idx} />
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
