import React, { useEffect, useRef, useState } from 'react';
import { Code, Smartphone, Globe, Layout } from 'lucide-react';

interface Service {
    icon: React.ReactElement<{ className?: string }>;
    title: string;
    description: string;
    rating: number;
    color: string;
}

interface StarRatingProps {
    rating: number;
}

export default function ServicesSection() {
    const [visibleCards, setVisibleCards] = useState<boolean[]>([false, false, false, false]);
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const observers = cardRefs.current.map((card, index) => {
            if (!card) return null;

            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            setVisibleCards((prev) => {
                                const newVisible = [...prev];
                                newVisible[index] = true;
                                return newVisible;
                            });
                        }
                    });
                },
                { threshold: 0.1 }
            );

            observer.observe(card);
            return observer;
        });

        return () => {
            observers.forEach((observer) => observer?.disconnect());
        };
    }, []);

    const services: Service[] = [
        {
            icon: <Code className="w-8 h-8" />,
            title: 'React Development',
            description:
                'Building modern, scalable web applications using React with best practices, hooks, and state management for optimal performance.',
            rating: 5,
            color: 'bg-blue-500',
        },
        {
            icon: <Globe className="w-8 h-8" />,
            title: 'HTML & CSS Development',
            description:
                'Creating pixel-perfect, responsive websites with semantic HTML5 and modern CSS3, ensuring cross-browser compatibility.',
            rating: 5,
            color: 'bg-green-500',
        },
        {
            icon: <Smartphone className="w-8 h-8" />,
            title: 'React Native Development',
            description:
                'Developing cross-platform mobile applications for iOS and Android with native performance and seamless user experience.',
            rating: 5,
            color: 'bg-purple-500',
        },
        {
            icon: <Layout className="w-8 h-8" />,
            title: 'Frontend Architecture',
            description:
                'Designing and implementing scalable frontend architectures with modern tools, optimized workflows, and clean code practices.',
            rating: 5,
            color: 'bg-orange-500',
        },
    ];

    const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
        return (
            <div className="flex gap-1">
                {[...Array(5)].map((_, index) => (
                    <svg
                        key={index}
                        className={`w-5 h-5 ${index < rating ? 'text-yellow-400 fill-current' : 'text-gray-400'}`}
                        viewBox="0 0 20 20"
                    >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                ))}
            </div>
        );
    };

    return (
        <section
            id="services"
            className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-16 px-4 sm:px-6 lg:px-8"
        >
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-12">
                    <div className="inline-block bg-slate-800/50 backdrop-blur-sm px-4 py-2 rounded-lg border border-slate-700 mb-4">
                        <span className="text-blue-400 text-sm font-semibold tracking-wider uppercase">Services</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">
                        DESIGN <span className="text-blue-500">SERVICES</span> I AM PROVIDING
                    </h1>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
                    {services.map((service, index) => (
                        // <div
                        //     key={index}
                        //     ref={(el) => {
                        //         cardRefs.current[index] = el;
                        //     }}
                        //     className={`group relative h-[480px] rounded-2xl overflow-hidden border border-white/10 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-105 shadow-xl ${
                        //         visibleCards[index] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
                        //     }`}
                        //     style={{
                        //         transition: `opacity 0.8s ease-out ${index * 0.15}s, transform 0.8s ease-out ${
                        //             index * 0.15
                        //         }s`,
                        //     }}
                        // >
                        <div
                            key={index}
                            ref={(el) => {
                                cardRefs.current[index] = el;
                            }}
                            className={`group relative h-[480px] w-full rounded-2xl overflow-hidden border border-white/10 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-105 shadow-xl flex flex-col ${
                                visibleCards[index] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
                            }`}
                            style={{
                                transition: `opacity 0.8s ease-out ${index * 0.15}s, transform 0.8s ease-out ${
                                    index * 0.15
                                }s`,
                            }}
                        >
                            {/* Background Image */}
                            <div className="absolute inset-0">
                                <img
                                    src={`https://images.unsplash.com/photo-${
                                        index === 0
                                            ? '1633356122544-f134324a6cee?w=800&q=80'
                                            : index === 1
                                            ? '1547658719-da2b51169166?w=800&q=80'
                                            : index === 2
                                            ? '1512941937669-90a1b58e7e9c?w=800&q=80'
                                            : '1498050108023-c5249f4df085?w=800&q=80'
                                    }`}
                                    alt={service.title}
                                    className="w-full h-full object-cover"
                                />
                                {/* Dark Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80"></div>
                            </div>

                            {/* Content Container with Glassmorphism */}
                            <div className="relative z-10 h-full flex flex-col justify-between p-6">
                                {/* Icon with Glassmorphism */}
                                <div className="flex justify-start">
                                    <div
                                        className={`${service.color} bg-opacity-90 backdrop-blur-md p-4 rounded-xl shadow-2xl border border-white/20 group-hover:scale-110 transition-transform duration-300`}
                                    >
                                        {React.cloneElement(service.icon, { className: 'w-8 h-8 text-white' })}
                                    </div>
                                </div>

                                {/* Text Content with Glassmorphism Background */}
                                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-5 border border-white/20 shadow-lg">
                                    <h3 className="text-xs font-bold text-white mb-3 tracking-widest uppercase border-l-4 border-blue-400 pl-2 group-hover:border-blue-300 group-hover:text-blue-300 transition-all duration-300">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-200 text-sm leading-relaxed mb-4">{service.description}</p>
                                    {/* Rating */}
                                    <StarRating rating={service.rating} />
                                </div>
                            </div>

                            {/* Hover Effect Border Glow */}
                            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20"></div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Decoration */}
                <div className="mt-16 flex justify-center">
                    <div className="flex gap-2">
                        <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                        <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                        <div className="w-2 h-2 rounded-full bg-blue-300"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}