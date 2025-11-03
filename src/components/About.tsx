import { useEffect, useRef, useState } from 'react';
import myImage from '../assets/my_img2.png';

export default function AboutMe() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        const currentSection = sectionRef.current; // ✅ Store ref value

        if (currentSection) observer.observe(currentSection);

        return () => {
            if (currentSection) observer.unobserve(currentSection); // ✅ Use the stored variable
        };
    }, []); // no dependency needed

    return (
        <section
            ref={sectionRef}
            id="about"
            className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 relative overflow-hidden"
        >
            {/* Decorative elements */}
            <div className="absolute right-12 sm:right-20 lg:right-[100px] top-12 sm:top-20 lg:top-[100px] w-32 h-32 sm:w-40 sm:h-40 lg:w-[200px] lg:h-[200px] animate-[spin_15s_linear_infinite_reverse] opacity-60">
                <div className="relative w-full h-full">
                    {[...Array(50)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-[2px] bg-gradient-to-t from-transparent via-cyan-500 to-emerald-400 origin-bottom"
                            style={{
                                left: '50%',
                                bottom: '50%',
                                height: `${40 + (i % 3) * 6}px`,
                                transform: `rotate(${i * 7.2}deg) translateY(-${50 + (i % 3) * 10}px)`,
                                opacity: 0.5,
                            }}
                        />
                    ))}
                </div>
            </div>

            {/* Centered Container */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center py-12 sm:py-16 lg:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center w-full relative z-10">
                    {/* Profile Image - 5 columns with slide-up animation */}
                    <div
                        className={`lg:col-span-5 flex justify-center lg:justify-start transition-all duration-1000 ${
                            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                        }`}
                        style={{ transitionDelay: '200ms' }}
                    >
                        <div className="w-64 h-96 xs:w-72 xs:h-[450px] sm:w-80 sm:h-[500px] md:w-96 md:h-[550px] lg:w-[420px] lg:h-[600px] bg-gradient-to-br from-slate-800/40 to-slate-700/40 rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-700/50 shadow-2xl backdrop-blur-sm">
                            <div className="w-full h-full bg-blue-500/20 flex items-center justify-center text-white text-xl">
                                <img src={myImage} alt="Professional portrait" className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </div>

                    {/* Content - 7 columns with staggered slide-up animations */}
                    <div className="lg:col-span-7 text-white space-y-6 sm:space-y-8">
                        <div
                            className={`transition-all duration-1000 ${
                                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                            }`}
                            style={{ transitionDelay: '400ms' }}
                        >
                            <p className="text-cyan-400 text-xs sm:text-sm font-bold tracking-[0.2em] sm:tracking-[0.3em] mb-3 sm:mb-4 uppercase">
                                ABOUT US
                            </p>
                        </div>

                        <div
                            className={`transition-all duration-1000 ${
                                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                            }`}
                            style={{ transitionDelay: '500ms' }}
                        >
                            <h1 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
                                I AM AVAILABLE FOR <span className="text-cyan-400">UI UX DESIGN</span> PROJECTS
                            </h1>
                        </div>

                        <div
                            className={`transition-all duration-1000 ${
                                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                            }`}
                            style={{ transitionDelay: '600ms' }}
                        >
                            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                                Passionate frontend developer specializing in creating exceptional digital experiences. With
                                expertise in modern web technologies including React, TypeScript, and Tailwind CSS, I
                                transform complex requirements into elegant, user-friendly interfaces. My approach combines
                                clean code architecture with pixel-perfect design implementation, ensuring optimal
                                performance and accessibility across all devices.
                            </p>
                        </div>

                        {/* Stats with slide-up animation */}
                        <div
                            className={`grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 lg:gap-5 transition-all duration-1000 ${
                                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                            }`}
                            style={{ transitionDelay: '700ms' }}
                        >
                            <div className="bg-slate-800/60 border border-slate-700/60 rounded-xl sm:rounded-2xl px-3 sm:px-4 lg:px-6 py-3 sm:py-4 lg:py-6 backdrop-blur-md">
                                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2">10+</div>
                                <div className="text-slate-400 text-xs sm:text-sm font-medium">Projects Completed</div>
                            </div>

                            <div className="bg-slate-800/60 border border-slate-700/60 rounded-xl sm:rounded-2xl px-3 sm:px-4 lg:px-6 py-3 sm:py-4 lg:py-6 backdrop-blur-md">
                                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2">1000+</div>
                                <div className="text-slate-400 text-xs sm:text-sm font-medium">Hours of Coding</div>
                            </div>

                            <div className="bg-slate-800/60 border border-slate-700/60 rounded-xl sm:rounded-2xl px-3 sm:px-4 lg:px-6 py-3 sm:py-4 lg:py-6 backdrop-blur-md col-span-2 sm:col-span-1">
                                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2">5+</div>
                                <div className="text-slate-400 text-xs sm:text-sm font-medium">Tech Stacks Mastered</div>
                            </div>
                        </div>

                        {/* CTA Button with slide-up animation */}
                        <div
                            className={`transition-all duration-1000 ${
                                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                            }`}
                            style={{ transitionDelay: '800ms' }}
                        >
                            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm tracking-wide px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-full transition-all duration-300 flex items-center gap-2 sm:gap-3 group shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 uppercase w-full sm:w-auto justify-center">
                                GET IN TOUCH
                                <svg
                                    className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2.5}
                                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}