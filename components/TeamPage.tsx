import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Navbar from './Navbar';
import './TeamPage.css';

// ─── Team Data ──────────────────────────────────────
// To add photos:
//   1. Drop images into assets/team/core/ or assets/team/crew/
//   2. Import them below and add to the photo field:
//
//   import corePhoto1 from '../assets/team/core/name.jpg';
//   { name: 'Name', role: 'Role', photo: corePhoto1 }

interface TeamMember {
    name: string;
    role?: string;
    photo?: string;
}

const coreTeam: TeamMember[] = [
    { name: 'Rithvik Shetty', role: 'Secretary' },
    { name: 'Sanket Dhonde', role: 'Secretary' },
    { name: 'Advait Deshmukh', role: 'Management' },
    { name: 'Atharva Deshmukh', role: 'Management' },
    { name: 'Meera Patil', role: 'Management' },
    { name: 'Suhail Shaikh', role: 'Management' },
    { name: 'Suraj Gore', role: 'Management' },
    { name: 'Abuzar Hajwane', role: 'Management' },
    { name: 'Omer Ovias', role: 'Management' },
    { name: 'Ovee Wakchaure', role: 'Management' },
    { name: 'Sakshi Sukre', role: 'Management' },
    { name: 'Soham Kulkarni', role: 'Management' },
    { name: 'Subhronil Chattoraj', role: 'Management' },
];

const organizers: TeamMember[] = [
    { name: 'Soham Sawant', role: 'Organizer' },
    { name: 'Samiksha Dhole', role: 'Organizer' },
];

const crew: TeamMember[] = [
    { name: 'Karan Chand' },
    { name: 'Atharva Gadekar' },
    { name: 'Tanushree Gadekar' },
    { name: 'Sushmita Das' },
    { name: 'Khushi Shetty' },
    { name: 'Priyanka Gounder' },
    { name: 'Soham Sawant' },
    { name: 'Devika Nair' },
    { name: 'Rutuparna Kolte' },
    { name: 'Sujit Shiravle' },
    { name: 'Nikita Mulam' },
    { name: 'Vignesh Gadhari' },
    { name: 'Sathish Nadar' },
    { name: 'Manobharathi Mugilan' },
    { name: 'Atharva Bendale' },
    { name: 'Aditya Jaiswal' },
    { name: 'Ashwin Kumaar' },
    { name: 'Mahesh Vaishnav' },
    { name: 'Priyanka Kambampati' },
    { name: 'Krish Yagyik' },
    { name: 'Arnav Mangaonkar' },
    { name: 'Samiksha Dhole' },
    { name: 'Sarang Patil' },
    { name: 'Tanmayi Nayak' },
    { name: 'Aaliya Hussain' },
    { name: 'Ananya Acharya' },
    { name: 'Pratham Mendon' },
    { name: 'Shatakshi Marathe' },
    { name: 'Dwithi Poojary' },
    { name: 'Keerthana C M' },
    { name: 'Sohan Rai' },
    { name: 'Akriti Thapliyal' },
    { name: 'Haripreet Ajaykumar' },
    { name: 'Ishan Mishra' },
    { name: 'Manikaraj Anburaj' },
    { name: 'Gargie Kapte' },
    { name: 'Hariom Mohare' },
    { name: 'Manas Suryawanshi' },
    { name: 'Rahul Nadar' },
    { name: 'Soham Lone' },
];

const getInitials = (name: string) =>
    name.split(' ').map((w) => w[0]).join('').toUpperCase().slice(0, 2);

const MemberCard = ({ member, index }: { member: TeamMember; index: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.05, duration: 0.4 }}
        className="team-card"
    >
        {/* Pulsing glow behind card */}
        <div className="team-card-glow" />

        <div className="team-card-inner">
            <div className="team-card-image-wrapper">
                {member.photo ? (
                    <img
                        src={member.photo}
                        alt={member.name}
                        className="team-card-image"
                        loading="lazy"
                    />
                ) : (
                    <div className="team-card-avatar-placeholder">
                        {getInitials(member.name)}
                    </div>
                )}
                {/* Shine sweep */}
                <div className="team-card-shine" />
            </div>

            {/* Floating particles */}
            <div className="team-card-particles">
                <span /><span /><span /><span /><span /><span />
            </div>

            <div className="team-card-info">
                <p className="team-card-name">{member.name}</p>
                {member.role && <p className="team-card-role">{member.role}</p>}
            </div>
        </div>
    </motion.div>
);

export default function TeamPage() {
    return (
        <div className="min-h-screen bg-black text-white">
            <Navbar />
            {/* Ambient glow */}
            <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-600/[0.04] rounded-full blur-[150px] pointer-events-none" />

            <div className="max-w-6xl mx-auto px-6 pt-28 pb-24">
                {/* Back button */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4 }}
                    className="mb-12"
                >
                    <Link to="/" className="back-button">
                        <ArrowLeft size={16} />
                        Back to Home
                    </Link>
                </motion.div>

                {/* Page header */}
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-block mb-6"
                    >
                        <span className="px-5 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium tracking-wider">
                            The People Behind ByteCamp
                        </span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-6xl font-bold mb-4"
                    >
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400">
                            Our Team
                        </span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-500 max-w-lg mx-auto"
                    >
                        The dedicated students and professionals bringing BYTECAMP'26 to life
                    </motion.p>
                </div>

                {/* Core Team */}
                <div className="mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-3 mb-8"
                    >
                        <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
                        <h2 className="text-2xl font-bold text-white">Core Team</h2>
                    </motion.div>
                    <div className="team-grid core">
                        {coreTeam.map((member, i) => (
                            <MemberCard key={member.name} member={member} index={i} />
                        ))}
                    </div>
                </div>

                {/* Organizers */}
                <div className="mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3 mb-8"
                    >
                        <div className="w-1 h-8 bg-gradient-to-b from-green-500 to-emerald-500 rounded-full" />
                        <h2 className="text-2xl font-bold text-white">Organizers</h2>
                    </motion.div>
                    <div className="team-grid core">
                        {organizers.map((member, i) => (
                            <MemberCard key={member.name} member={member} index={i} />
                        ))}
                    </div>
                </div>

                {/* Crew */}
                <div>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3 mb-8"
                    >
                        <div className="w-1 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full" />
                        <h2 className="text-2xl font-bold text-white">The Crew</h2>
                    </motion.div>
                    <div className="team-grid crew">
                        {crew.map((member, i) => (
                            <MemberCard key={member.name} member={member} index={i} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
