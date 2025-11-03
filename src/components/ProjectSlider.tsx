import { ChevronRight, ChevronLeft, X } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import project1 from '../assets/project1.png';
// import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';
import project4 from '../assets/project4.png';
import project5 from '../assets/project5.png';
import project6 from '../assets/project6.png';
import project7 from '../assets/project7.png';

interface Project {
    id: number;
    title: string;
    subtitle: string;
    image: string;
    color: string;
    url: string;
}

const ProjectSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [selectedImage, setSelectedImage] = useState<Project | null>(null);
    const scrollContainerRef = useRef(null);
    const [cardsPerView, setCardsPerView] = useState(3);

    const projects: Project[] = [
        {
            id: 1,
            title: 'Slider',
            subtitle: 'Image Slider',
            image: project1,
            color: 'from-purple-200 to-blue-200',
            url: 'https://sneha-m2000.github.io/animalSlider/',
        },
        // {
        //     id: 2,
        //     title: 'Cofee shop website',
        //     subtitle: 'Dashboard',
        //     image: project2,
        //     color: 'from-blue-100 to-gray-100',
        //     url: 'https://sneha-m2000.github.io/DiceGame/',
        // },
        {
            id: 3,
            title: 'Digital Clock',
            subtitle: 'Time-based background',
            image: project4,
            color: 'from-gray-800 to-gray-900',
            url: 'https://sneha-m2000.github.io/DigitalClock/',
        },
        {
            id: 4,
            title: 'Dice Game',
            subtitle: 'Game ui',
            image: project3,
            color: 'from-yellow-200 to-orange-200',
            url: 'https://sneha-m2000.github.io/DiceGame/',
        },
        {
            id: 5,
            title: 'Drum Game',
            subtitle: 'DrumZilla',
            image: project5,
            color: 'from-yellow-200 to-orange-200',
            url: 'https://sneha-m2000.github.io/DrumKit/',
        },
        {
            id: 6,
            title: 'Expanding Cards',
            subtitle: 'Expanding Car Images',
            image: project6,
            color: 'from-yellow-200 to-orange-200',
            url: 'https://sneha-m2000.github.io/ExpandingCards/',
        },
        {
            id: 7,
            title: 'City Weather Tracker',
            subtitle: 'Simple weather tracker',
            image: project7,
            color: 'from-yellow-200 to-orange-200',
            url: 'https://sneha-m2000.github.io/ExpandingCards/',
        },
    ];

    // Calculate cards per view based on screen size
    useEffect(() => {
        const updateCardsPerView = () => {
            if (window.innerWidth >= 1024) {
                setCardsPerView(3);
            } else if (window.innerWidth >= 768) {
                setCardsPerView(2);
            } else {
                setCardsPerView(1);
            }
        };

        updateCardsPerView();
        window.addEventListener('resize', updateCardsPerView);
        return () => window.removeEventListener('resize', updateCardsPerView);
    }, []);

    const maxIndex = Math.max(0, projects.length - cardsPerView);

    const nextSlide = () => {
        setCurrentIndex((prev) => {
            const next = prev + 1;
            return next > maxIndex ? 0 : next;
        });
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => {
            const previous = prev - 1;
            return previous < 0 ? maxIndex : previous;
        });
    };

    useEffect(() => {
        if (!isHovered && !selectedImage) {
            const interval = setInterval(() => {
                nextSlide();
            }, 3000);
            return () => clearInterval(interval);
        }
    });

    // Calculate the actual transform based on card width
    const getTransform = () => {
        const cardWidth = 100 / cardsPerView;
        return `translateX(-${currentIndex * cardWidth}%)`;
    };

    // Handle image click
    const handleImageClick = (project: Project) => {
        setSelectedImage(project);
    };

    // Close modal
    const closeModal = () => {
        setSelectedImage(null);
    };

    // Close modal on escape key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                closeModal();
            }
        };
        window.addEventListener('keydown', handleEscape);
        return () => window.removeEventListener('keydown', handleEscape);
    }, []);

    return (
         <section id="projects" className="min-h-screen bg-[#0a2540] text-white p-8 md:p-16">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                {/* <div className="mb-12 text-center">
                    <p className="border border-blue-500/30 text-gray-300 px-6 py-2 rounded-md text-sm tracking-widest bg-blue-500/10 inline-block hover:bg-[#13233a] transition mb-4">
                        MY WORK
                    </p>
                    <h1 className="text-3xl md:text-3xl font-bold tracking-tight">RECENT PROJECTS</h1>
                </div> */}
                <div className="mb-12">
                    <div className="inline-block bg-slate-800/50 backdrop-blur-sm px-4 py-2 rounded-lg border border-slate-700 mb-4">
                        <span className="text-blue-400 text-sm font-semibold tracking-wider uppercase">MY WORK</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">
                        RECENT PROJECTS
                    </h1>
                </div>

                {/* Slider Container */}
                <div className="relative" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                    {/* Navigation Buttons */}
                    <button
                        onClick={prevSlide}
                        className="absolute -left-16 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all flex items-center justify-center group"
                        aria-label="Previous slide"
                    >
                        <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                    </button>

                    <button
                        onClick={nextSlide}
                        className="absolute -right-16 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all flex items-center justify-center group"
                        aria-label="Next slide"
                    >
                        <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                    </button>

                    {/* Cards Container */}
                    <div className="overflow-hidden">
                        <div
                            ref={scrollContainerRef}
                            className="flex transition-transform duration-500 ease-in-out gap-6"
                            style={{ transform: getTransform() }}
                        >
                            {projects.map((project) => (
                                <div
                                    key={project.id}
                                    className="flex-shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
                                >
                                    <div className="bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-[1.02]">
                                        {/* Image Container */}
                                        <div
                                            className={`relative h-80 bg-gradient-to-br ${project.color} p-8 cursor-pointer group`}
                                        >
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-full object-cover rounded-2xl shadow-xl transition-all duration-300 group-hover:scale-105 group-hover:rotate-1"
                                                onClick={() => handleImageClick(project)}
                                            />
                                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                                                <div className="bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium">
                                                    Click to expand
                                                </div>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="p-8 h-36">
                                            <div className="flex items-center justify-between h-full">
                                                <div className="flex-1 min-w-0 pr-4">
                                                    <h3 className="text-2xl font-bold text-gray-900 mb-2 line-clamp-2">
                                                        {project.title}
                                                    </h3>
                                                    <p className="text-gray-500 line-clamp-2">{project.subtitle}</p>
                                                </div>
                                                <button
                                                    onClick={() => window.open(project.url, '_blank')}
                                                    className="w-14 h-14 rounded-full bg-blue-500 hover:bg-blue-600 transition-colors flex items-center justify-center flex-shrink-0"
                                                    aria-label={`Visit ${project.title}`}
                                                >
                                                    <ChevronRight className="w-6 h-6 text-white" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Dot Indicators */}
                    <div className="flex justify-center gap-2 mt-8">
                        {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentIndex(idx)}
                                className={`h-2 rounded-full transition-all duration-300 ${
                                    idx === currentIndex ? 'w-8 bg-blue-500' : 'w-2 bg-white/30 hover:bg-white/50'
                                }`}
                                aria-label={`Go to slide ${idx + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Image Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 animate-in fade-in duration-300"
                    onClick={closeModal}
                >
                    <button
                        onClick={closeModal}
                        className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 transition-all flex items-center justify-center group"
                        aria-label="Close modal"
                    >
                        <X className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                    </button>

                    <div
                        className="relative max-w-6xl w-full max-h-[90vh] animate-in zoom-in-95 duration-300"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className={`bg-gradient-to-br ${selectedImage.color} p-4 rounded-3xl`}>
                            <img
                                src={selectedImage.image}
                                alt={selectedImage.title}
                                className="w-full h-auto max-h-[80vh] object-contain rounded-2xl shadow-2xl"
                            />
                        </div>
                        <div className="mt-4 text-center">
                            <h3 className="text-2xl font-bold text-white mb-2">{selectedImage.title}</h3>
                            <p className="text-gray-300 text-xs">{selectedImage.subtitle}</p>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default ProjectSlider;