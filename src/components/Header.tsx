// import React, { useState } from 'react';
// import { Menu, X } from 'lucide-react'; // for mobile icons

// const GlassmorphismHeader: React.FC = () => {
//     const [active, setActive] = useState('home');
//     const [menuOpen, setMenuOpen] = useState(false);

//     const links = [
//         { name: 'HOME', href: '#home' },
//         { name: 'ABOUT ME', href: '#about' },
//         { name: 'PROJECTS', href: '#projects' },
//         { name: 'SERVICES', href: '#services' },
//         { name: 'CONTACT', href: '#contact' },
//     ];

//     return (
//         <header
//             className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md"
//             style={{
//                 background:
//                     'linear-gradient(90deg, rgba(7,35,59,0.6) 1.67%, rgba(4,29,52,0.6) 39.95%, rgba(4,25,45,0.6) 58.24%, rgba(4,14,24,0.6) 80.28%, rgba(5,12,22,0.6) 101.48%)',
//             }}
//         >
//             {/* Centered Container */}
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                 <nav className="py-4 flex items-center justify-between">
//                     {/* Logo */}
//                     <div className="flex items-center gap-2">
//                         <img src="/src/assets/logo.png" alt="Profile" className="w-16 h-16 rounded-lg object-cover" />
//                         <span className="text-white text-xl sm:text-2xl md:text-3xl font-bold">Sneha</span>
//                     </div>

//                     {/* Desktop Menu */}
//                     <div className="hidden md:flex items-center gap-6 lg:gap-10">
//                         {links.map((link) => (
//                             <a
//                                 key={link.href}
//                                 href={link.href}
//                                 onClick={() => setActive(link.name)}
//                                 className={`text-white text-sm lg:text-base tracking-[1px] font-medium transition-all ${
//                                     active === link.name
//                                         ? 'border-b-2 border-white'
//                                         : 'hover:border-b-2 hover:border-white/50 border-b-0'
//                                 }`}
//                             >
//                                 {link.name}
//                             </a>
//                         ))}
//                     </div>

//                     {/* Desktop Button */}
//                     <button className="hidden md:block bg-blue-500 hover:bg-blue-600 text-white font-semibold px-5 py-2 rounded-full transition">
//                         LET'S TALK
//                     </button>

//                     {/* Mobile Menu Button */}
//                     <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-white">
//                         {menuOpen ? <X size={28} /> : <Menu size={28} />}
//                     </button>
//                 </nav>

//                 {/* Mobile Menu Dropdown */}
//                 {menuOpen && (
//                     <div className="md:hidden flex flex-col items-center bg-[rgba(7,35,59,0.95)] backdrop-blur-md border-t border-white/10 px-6 pb-4">
//                         {links.map((link) => (
//                             <a
//                                 key={link.href}
//                                 href={link.href}
//                                 onClick={() => {
//                                     setActive(link.name);
//                                     setMenuOpen(false);
//                                 }}
//                                 className={`text-white text-sm py-2 w-full text-center font-medium ${
//                                     active === link.name ? 'border-b-2 border-white' : 'border-b border-transparent'
//                                 }`}
//                             >
//                                 {link.name}
//                             </a>
//                         ))}
//                         <button className="mt-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-4 rounded-full w-full">
//                             LET'S TALK
//                         </button>
//                     </div>
//                 )}
//             </div>
//         </header>
//     );
// };


// export default GlassmorphismHeader;


import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; // for mobile icons

const GlassmorphismHeader: React.FC = () => {
    const [active, setActive] = useState('home');
    const [menuOpen, setMenuOpen] = useState(false);

    const links = [
        { name: 'HOME', href: '#home' },
        { name: 'ABOUT ME', href: '#about' },
        { name: 'PROJECTS', href: '#projects' },
        { name: 'SERVICES', href: '#services' },
        { name: 'CONTACT', href: '#contact' },
    ];

    // Function to scroll smoothly to contact section
    const handleScrollToContact = () => {
        const contactSection = document.querySelector('#contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
        setActive('CONTACT');
        setMenuOpen(false); // close mobile menu if open
    };

    return (
        <header
            className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md"
            style={{
                background:
                    'linear-gradient(90deg, rgba(7,35,59,0.6) 1.67%, rgba(4,29,52,0.6) 39.95%, rgba(4,25,45,0.6) 58.24%, rgba(4,14,24,0.6) 80.28%, rgba(5,12,22,0.6) 101.48%)',
            }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <nav className="py-4 flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <img src="/src/assets/logo.png" alt="Profile" className="w-12 h-12 rounded-lg object-cover" />
                        <span className="text-white text-xl sm:text-2xl md:text-3xl font-bold mt-4">Sneha</span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-6 lg:gap-10">
                        {links.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={() => setActive(link.name)}
                                className={`text-white text-sm lg:text-base tracking-[1px] font-medium transition-all ${
                                    active === link.name
                                        ? 'border-b-2 border-white'
                                        : 'hover:border-b-2 hover:border-white/50 border-b-0'
                                }`}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* Desktop Button */}
                    <button
                        onClick={handleScrollToContact}
                        className="hidden md:block bg-blue-500 hover:bg-blue-600 text-white font-semibold px-5 py-2 rounded-full transition"
                    >
                        LET'S TALK
                    </button>

                    {/* Mobile Menu Button */}
                    <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-white">
                        {menuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </nav>

                {/* Mobile Menu Dropdown */}
                {menuOpen && (
                    <div className="md:hidden flex flex-col items-center bg-[rgba(7,35,59,0.95)] backdrop-blur-md border-t border-white/10 px-6 pb-4">
                        {links.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={() => {
                                    setActive(link.name);
                                    setMenuOpen(false);
                                }}
                                className={`text-white text-sm py-2 w-full text-center font-medium ${
                                    active === link.name ? 'border-b-2 border-white' : 'border-b border-transparent'
                                }`}
                            >
                                {link.name}
                            </a>
                        ))}
                        <button
                            onClick={handleScrollToContact}
                            className="mt-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-4 rounded-full w-full"
                        >
                            LET'S TALK
                        </button>
                    </div>
                )}
            </div>
        </header>
    );
};

export default GlassmorphismHeader;

