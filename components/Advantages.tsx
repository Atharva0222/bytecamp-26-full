import { motion } from 'framer-motion';
import { Code, Lightbulb, Users, Briefcase, UsersRound, Sparkles } from 'lucide-react';
import MagicBento from './MagicBento';

const advantageCards = [
    {
        icon: <Code className="w-5 h-5" />,
        title: 'Skill Development',
        description: 'Gain hands-on coding experience, improve problem-solving skills, and learn to build real-world applications efficiently.',
        label: 'Growth',
        color: '#060010'
    },
    {
        icon: <Lightbulb className="w-5 h-5" />,
        title: 'Innovation & Creativity',
        description: 'Explore new ideas, experiment with technologies, and develop unique solutions to challenging problems.',
        label: 'Ideas',
        color: '#060010'
    },
    {
        icon: <Sparkles className="w-5 h-5" />,
        title: 'Networking',
        description: 'Connect with like-minded peers, industry experts, and mentors, opening doors to collaborations and career opportunities.',
        label: 'Connect',
        color: '#060010'
    },
    {
        icon: <Briefcase className="w-5 h-5" />,
        title: 'Career Advancement',
        description: 'Enhance your portfolio with practical projects, showcasing your technical skills and problem-solving abilities to recruiters.',
        label: 'Career',
        color: '#060010'
    },
    {
        icon: <UsersRound className="w-5 h-5" />,
        title: 'Team Collaboration',
        description: 'Work in teams to improve communication, leadership, and teamwork skills while developing innovative projects.',
        label: 'Teamwork',
        color: '#060010'
    },
    {
        icon: <Users className="w-5 h-5" />,
        title: 'Fun & Motivation',
        description: 'Enjoy the thrill of competition, challenge yourself, and stay inspired in a high-energy, tech-driven environment!',
        label: 'Energy',
        color: '#060010'
    }
];

export default function Advantages() {
    return (
        <section className="py-24 bg-black relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-block mb-6"
                    >
                        {/* <span className="px-5 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium tracking-wider">
                            Advantages
                        </span> */}
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold mb-4"
                    >
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400">
                            Explore the Benefits of
                        </span>
                        <br />
                        <span className="text-white">BYTECAMP'26</span>
                    </motion.h2>
                </div>

                <MagicBento
                    cards={advantageCards}
                    textAutoHide={true}
                    enableStars
                    enableSpotlight
                    enableBorderGlow={true}
                    enableTilt={false}
                    enableMagnetism={false}
                    clickEffect
                    spotlightRadius={400}
                    particleCount={12}
                    glowColor="132, 0, 255"
                    disableAnimations={false}
                />
            </div>
        </section>
    );
}
