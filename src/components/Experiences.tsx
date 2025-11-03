import { useEffect, useState, useRef } from 'react';
import bgImage from '../assets/bg.jpg';

const WorkExperience = () => {
    const [isHeaderVisible, setIsHeaderVisible] = useState(false);
    const [isCardVisible, setIsCardVisible] = useState(false);
    const [isLeftVisible, setIsLeftVisible] = useState(false);
    const [isRightVisible, setIsRightVisible] = useState(false);

    const headerRef = useRef(null);
    const cardRef = useRef(null);
    const leftRef = useRef(null);
    const rightRef = useRef(null);

    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px',
        };

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    if (entry.target === headerRef.current) {
                        setIsHeaderVisible(true);
                    } else if (entry.target === cardRef.current) {
                        setIsCardVisible(true);
                    } else if (entry.target === leftRef.current) {
                        setIsLeftVisible(true);
                    } else if (entry.target === rightRef.current) {
                        setIsRightVisible(true);
                    }
                }
            });
        };


        const observer = new IntersectionObserver(observerCallback, observerOptions);

        if (headerRef.current) observer.observe(headerRef.current);
        if (cardRef.current) observer.observe(cardRef.current);
        if (leftRef.current) observer.observe(leftRef.current);
        if (rightRef.current) observer.observe(rightRef.current);

        return () => {
            observer.disconnect();
        };
    }, []);

    const experience = {
        title: 'Software Engineer',
        company: 'Beagle Security',
        location: 'Trivandrum',
        type: 'INTERNSHIP + CONTRACT',
        duration: 'December 2024 – May 2025',
        description: [
            'Completed a 3-month internship followed by a 3-month contractual role, contributing to the development and maintenance of dynamic web applications using Angular and React frameworks.',
            'Worked on the UI of visitor and user analysis applications using React.js with Tailwind CSS and chart libraries for visualizing behavioral insights.',
            "Contributed to both Version 1 and Version 2 of the company's main application using Angular, focusing on modernizing and enhancing user interfaces.",
            'Integrated RESTful APIs to fetch, create, update, and delete dynamic data from backend services, enhancing interactivity and performance across multiple modules.',
            'Handled authentication tokens and secure headers while consuming protected APIs to maintain user security and session integrity.',
            'Created reusable service layers for API communication, ensuring scalability and maintainability of the codebase.',
            'Debugged and resolved API integration issues by collaborating closely with backend developers and utilizing tools like Postman and browser DevTools.',
            'Implemented pagination, filtering, and sorting logic on API-integrated data tables to improve usability and data management.',
            'Implemented responsive design using SCSS, Bootstrap, and media queries to ensure cross-device compatibility.',
            'Collaborated with cross-functional teams in an agile environment while maintaining clean and reusable code practices.',
        ],
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div
                    ref={headerRef}
                    className={`mb-12 transition-all duration-1000 ${
                        isHeaderVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                    }`}
                >
                    <div className="inline-block bg-slate-800/50 backdrop-blur-sm px-4 py-2 rounded-lg border border-slate-700 mb-4">
                        <span className="text-blue-400 text-sm font-semibold tracking-wider uppercase">Experiences</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">
                        MY WORK <span className="text-blue-400">EXPERIENCE</span>
                    </h1>
                </div>

                {/* Experience Card */}
                <div
                    ref={cardRef}
                    style={{
                        backgroundImage: `url(${bgImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                    className={`bg-slate-900/60 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-slate-700/50 transition-all duration-1000 ${
                        isCardVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                >
                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Left Side - Job Info Card */}
                        <div
                            ref={leftRef}
                            className={`lg:w-1/3 transition-all duration-1000 delay-300 ${
                                isLeftVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
                            }`}
                        >
                            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-slate-700/50 transition-all duration-1000 delay-300">
                                <h2 className="text-2xl font-bold text-white mb-4">{experience.title}</h2>

                                <div className="space-y-3 mb-6">
                                    <p className="text-blue-100 font-medium">
                                        {experience.company} | {experience.location}
                                    </p>
                                    <p className="text-blue-100 font-medium">{experience.duration}</p>
                                </div>

                                <div className="inline-block">
                                    <span className="bg-black text-blue-900 px-4 py-2 rounded-full text-sm font-semibold">
                                        {experience.type}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Company Info */}
                        <div
                            ref={rightRef}
                            className={`lg:w-2/3 transition-all duration-1000 delay-500 ${
                                isRightVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
                            }`}
                        >
                            <div className="inline-block bg-slate-800/50 backdrop-blur-sm px-4 py-2 rounded-lg border border-slate-700 mb-4">
                                <span className="text-blue-400 text-sm font-semibold tracking-wider uppercase">
                                    About Role
                                </span>
                            </div>
                            <div className="text-gray-200 space-y-4 font-bold leading-relaxed">
                                {experience.description.map((item, index) => (
                                    <p key={index} className="text-sm sm:text-base">
                                        • {item}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkExperience;