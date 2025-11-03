import { useState, useEffect } from 'react';
import { Instagram, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

export default function HeroHomepage() {
    const [titleText, setTitleText] = useState('');
    const [descText, setDescText] = useState('');
    const [showCursor, setShowCursor] = useState(true);
    const [isTitleComplete, setIsTitleComplete] = useState(false);

    const config = {
        name: 'Sneha',
        title: 'Developer',
        description:
            'I am a passionate developer who loves building innovative solutions and exploring new technologies. I enjoy turning ideas into functional, user-friendly applications.',
        imageSrc: '/src/assets/my_image.png',
        social: {
            instagram: '',
            linkedin: 'https://www.linkedin.com/in/developersneha/',
        },
    };

    const fullTitle = `I'M A ${config.title.toUpperCase()}`;

    // useEffect(() => {
    //     let titleIndex = 0;
    //     let descIndex = 0;
    //     let descInterval: number | undefined;

    //     const titleInterval = setInterval(() => {
    //         if (titleIndex <= fullTitle.length) {
    //             setTitleText(fullTitle.slice(0, titleIndex));
    //             titleIndex++;
    //         } else {
    //             clearInterval(titleInterval);
    //             setIsTitleComplete(true);

    //             descInterval = setInterval(() => {
    //                 if (descIndex <= config.description.length) {
    //                     setDescText(config.description.slice(0, descIndex));
    //                     descIndex++;
    //                 } else {
    //                     clearInterval(descInterval);
    //                     setShowCursor(false);
    //                 }
    //             }, 30);
    //         }
    //     }, 50);

    //     const cursorInterval = setInterval(() => {
    //         setShowCursor((prev) => !prev);
    //     }, 500);

    //     return () => {
    //         clearInterval(titleInterval);
    //         clearInterval(cursorInterval);
    //         if (descInterval) clearInterval(descInterval);
    //     };
    // }, []);
    useEffect(() => {
        let titleIndex = 0;
        let descIndex = 0;
        let descInterval: number | undefined;

        const titleInterval = setInterval(() => {
            if (titleIndex <= fullTitle.length) {
                setTitleText(fullTitle.slice(0, titleIndex));
                titleIndex++;
            } else {
                clearInterval(titleInterval);
                setIsTitleComplete(true);

                descInterval = setInterval(() => {
                    if (descIndex <= config.description.length) {
                        setDescText(config.description.slice(0, descIndex));
                        descIndex++;
                    } else {
                        clearInterval(descInterval);
                        setShowCursor(false);
                    }
                }, 30);
            }
        }, 50);

        const cursorInterval = setInterval(() => {
            setShowCursor((prev) => !prev);
        }, 500);

        return () => {
            clearInterval(titleInterval);
            clearInterval(cursorInterval);
            if (descInterval) clearInterval(descInterval);
        };
    }, [fullTitle, config.description]); // ✅ dependencies added

    const slideUp: Variants = {
        hidden: { opacity: 0, y: 60 },
        visible: (custom) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                delay: typeof custom === 'number' ? custom : 0,
                ease: 'easeOut',
            },
        }),
    };

    return (
        <section
            id="home"
            className="min-h-screen relative overflow-hidden"
            style={{
                background:
                    'linear-gradient(90deg, rgba(7,35,59,0.6) 1.67%, rgba(4,29,52,0.6) 39.95%, rgba(4,25,45,0.6) 58.24%, rgba(4,14,24,0.6) 80.28%, rgba(5,12,22,0.6) 101.48%)',
            }}
        >
            {/* Decorative orbs */}
            <div className="absolute top-20 right-1/4 w-32 h-32 bg-teal-500/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-32 right-1/3 w-40 h-40 bg-teal-500/20 rounded-full blur-3xl"></div>

            {/* Centered Container */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center pt-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full">
                    {/* Left Content - 7 columns */}
                    <motion.div
                        className="lg:col-span-7 space-y-6 z-10"
                        initial="hidden"
                        animate="visible"
                        variants={slideUp}
                        custom={0}
                    >
                        {/* Name tag */}
                        <motion.div className="inline-block" variants={slideUp} custom={0.1}>
                            <div className="border border-blue-500/30 bg-blue-500/10 backdrop-blur-sm px-6 py-2 rounded">
                                <p className="text-blue-100 text-sm tracking-widest uppercase font-light">{config.name}</p>
                            </div>
                        </motion.div>

                        {/* Main heading */}
                        <motion.div className="space-y-2" variants={slideUp} custom={0.3}>
                            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                                HAY! I'M {config.name.toUpperCase().split(' ')[0]}
                            </h1>
                            <h2 className="text-blue-400 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight flex items-center gap-2 sm:gap-4">
                                {titleText}
                                {showCursor && !isTitleComplete && (
                                    <span className="inline-block w-0.5 h-8 sm:h-12 bg-blue-400 animate-pulse"></span>
                                )}
                            </h2>
                        </motion.div>

                        {/* Description */}
                        <motion.div className="min-h-24" variants={slideUp} custom={0.5}>
                            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                                {descText}
                                {showCursor && descText.length > 0 && descText.length < config.description.length && (
                                    <span className="inline-block w-0.5 h-5 bg-gray-300 ml-1 animate-pulse"></span>
                                )}
                            </p>
                        </motion.div>

                        {/* CTA and Social Links */}
                        <motion.div className="flex flex-wrap items-center gap-4 pt-4" variants={slideUp} custom={0.7}>
                            <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-300 flex items-center gap-2 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50">
                                GET IN TOUCH
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                                    />
                                </svg>
                            </button>

                            <a
                                href={config.social.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 rounded-full bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 hover:opacity-90 flex items-center justify-center transition-all duration-300 shadow-lg hover:scale-110"
                            >
                                <Instagram className="w-5 h-5 text-white" />
                            </a>

                            <a
                                href={config.social.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center transition-all duration-300 shadow-lg hover:scale-110"
                            >
                                <Linkedin className="w-5 h-5 text-white" />
                            </a>
                        </motion.div>
                    </motion.div>

                    {/* Right Content - Image - 5 columns */}
                    <motion.div
                        className="lg:col-span-5 relative flex justify-center lg:justify-end sm:mr-0 md:-mr-10 lg:-mr-[100px]"
                        initial="hidden"
                        animate="visible"
                        variants={slideUp}
                        custom={0.9}
                    >
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 space-y-3 z-0 hidden md:block">
                            {[...Array(12)].map((_, i) => (
                                <div
                                    key={i}
                                    className="h-0.5 bg-gradient-to-l from-white to-transparent"
                                    style={{
                                        width: `${200 + Math.random() * 200}px`,
                                        opacity: 0.3,
                                    }}
                                ></div>
                            ))}
                        </div>

                        {/* image */}
                        <div className="relative z-10">
                            <div className="relative w-72 h-72 sm:w-96 sm:h-96 md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px]">
                                <svg viewBox="0 0 200 200" className="w-full h-full">
                                    <defs>
                                        <clipPath id="blobClip">
                                            <path
                                                d="M39.5,-60.9C51.8,-53.6,62.6,-43.6,66.9,-31.4C71.2,-19.1,69,-4.8,67.1,9.7C65.1,24.2,63.4,38.8,56.5,51.7C49.6,64.6,37.6,75.8,24.8,75.4C12,75,-1.5,63,-16.1,57.5C-30.8,52,-46.5,53,-56.3,46.3C-66,39.5,-69.6,25,-69.6,11.3C-69.5,-2.4,-65.7,-15.4,-60.7,-28.2C-55.6,-41.1,-49.2,-53.8,-38.9,-62C-28.5,-70.1,-14.3,-73.7,-0.3,-73.2C13.6,-72.7,27.3,-68.2,39.5,-60.9Z"
                                                transform="translate(100 100)"
                                            />
                                        </clipPath>
                                    </defs>

                                    <image
                                        href={config.imageSrc}
                                        x="0"
                                        y="0"
                                        width="200"
                                        height="200"
                                        clipPath="url(#blobClip)"
                                        preserveAspectRatio="xMidYMid slice"
                                    />

                                    <path
                                        d="M39.5,-60.9C51.8,-53.6,62.6,-43.6,66.9,-31.4C71.2,-19.1,69,-4.8,67.1,9.7C65.1,24.2,63.4,38.8,56.5,51.7C49.6,64.6,37.6,75.8,24.8,75.4C12,75,-1.5,63,-16.1,57.5C-30.8,52,-46.5,53,-56.3,46.3C-66,39.5,-69.6,25,-69.6,11.3C-69.5,-2.4,-65.7,-15.4,-60.7,-28.2C-55.6,-41.1,-49.2,-53.8,-38.9,-62C-28.5,-70.1,-14.3,-73.7,-0.3,-73.2C13.6,-72.7,27.3,-68.2,39.5,-60.9Z"
                                        transform="translate(100 100)"
                                        fill="none"
                                        stroke="rgba(59, 130, 246, 0.3)"
                                        strokeWidth="2"
                                    />
                                </svg>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
