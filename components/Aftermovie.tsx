import React from 'react';
import { motion } from 'framer-motion';
import './Aftermovie.css';

export default function Aftermovie() {
    return (
        <section className="aftermovie-section">
            <div className="max-w-5xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    {/* <span className="px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-sm font-medium tracking-wider">
                        Last Year's Highlights
                    </span> */}
                    <h2 className="text-4xl md:text-5xl font-bold mt-6 mb-4">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400">
                            Aftermovie
                        </span>
                    </h2>
                    <p className="text-gray-500 max-w-lg mx-auto">
                        Relive the magic of BYTECAMP'25 — 24 hours of hacking, creating, and connecting.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="aftermovie-wrapper"
                >
                    <div className="aftermovie-glow" />
                    <div className="aftermovie-iframe-container">
                        {/* Replace VIDEO_ID with your actual YouTube video ID */}
                        <iframe
                            src="https://www.youtube.com/embed/VIDEO_ID"
                            title="BYTECAMP'25 Aftermovie"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
