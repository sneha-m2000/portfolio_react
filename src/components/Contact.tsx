import { Mail, Phone, Linkedin, Instagram } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import myPhoto from '../assets/contact_pic.png';

export default function Contact() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState<string | null>(null);

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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setStatus(null);

        try {
            const response = await fetch('https://portfolio-backend-2-49gz.onrender.com/send-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (result.success) {
                setStatus('✅ Message sent successfully!');
                setFormData({ name: '', email: '', subject: '', message: '' });
            } else {
                setStatus('❌ Failed to send message. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            setStatus('⚠️ Something went wrong. Try again later.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <section
            ref={sectionRef}
            id="contact"
            className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center px-6 py-16"
        >
            <div className="w-full max-w-6xl bg-slate-800/60 border border-slate-700 rounded-3xl shadow-2xl grid md:grid-cols-2 overflow-hidden backdrop-blur-md">
                {/* Left Section */}
                <div
                    className={`p-10 flex flex-col items-center text-center border-b md:border-b-0 md:border-r border-slate-700 transition-all duration-1000 ${
                        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
                    }`}
                >
                    <div className="w-56 h-56 rounded-2xl overflow-hidden mb-6">
                        <img src={myPhoto} alt="Sneha" className="w-full h-full object-cover" />
                    </div>
                    <h2 className="text-white text-3xl font-semibold mb-2">Let's Discuss Your Project</h2>
                    <p className="text-slate-300 mb-8 max-w-md">
                        Always available for freelancing if the right project comes along. Feel free to contact me.
                    </p>

                    {/* <div className="space-y-4 text-slate-300">
                        <div className="flex items-center justify-center gap-2">
                            <Mail className="text-blue-900" />
                            <span>ammuswitz@gmail.com</span>
                        </div>
                        <div className="flex items-center justify-center gap-2">
                            <Phone className="text-blue-900" />
                            <span>+91 8943 666 234</span>
                        </div>
                    </div> */}
                    {/* <div className="space-y-4 text-slate-300">
                        <div className="flex items-center justify-center gap-2 group">
                            <Mail
                                className="text-[#5072A7] transform transition-transform duration-300 group-hover:scale-125 group-hover:text-[#002b5b]"
                                size={22}
                            />
                            <span>ammuswitz@gmail.com</span>
                        </div>

                        <div className="flex items-center justify-center gap-2 group">
                            <Phone
                                className="text-[#5072A7] transform transition-transform duration-300 group-hover:scale-125 group-hover:text-[#002b5b]"
                                size={22}
                            />
                            <span>+91 8943 666 234</span>
                        </div>
                    </div> */}
                    {/* <div className="space-y-4 text-slate-300">
                        <div className="flex items-center justify-center gap-2 group">
                            <Mail
                                className="text-[#5072A7] transform transition-all duration-500 group-hover:scale-125 group-hover:rotate-12 group-hover:text-[#002b5b] group-hover:-translate-y-1"
                                size={22}
                            />
                            <span className="transition-all duration-300 group-hover:translate-x-1">
                                ammuswitz@gmail.com
                            </span>
                        </div>

                        <div className="flex items-center justify-center gap-2 group">
                            <Phone
                                className="text-[#5072A7] transform transition-all duration-500 group-hover:scale-125 group-hover:rotate-[-12deg] group-hover:text-[#002b5b] group-hover:-translate-y-1"
                                size={22}
                            />
                            <span className="transition-all duration-300 group-hover:translate-x-1">+91 8943 666 234</span>
                        </div>
                    </div> */}

                    <div className="space-y-4 text-slate-300">
                        <div className="flex items-center justify-center gap-2 group cursor-pointer">
                            <Mail
                                className="text-[#5072A7] transform transition-all duration-300 animate-bounce group-hover:animate-none group-hover:scale-125 group-hover:rotate-12 group-hover:text-[#002b5b]"
                                size={22}
                            />
                            <span className="transition-all duration-300 group-hover:translate-x-1 group-hover:font-medium">
                                ammuswitz@gmail.com
                            </span>
                        </div>

                        <div className="flex items-center justify-center gap-2 group cursor-pointer">
                            <Phone
                                className="text-[#5072A7] transform transition-all duration-300 animate-bounce group-hover:animate-none group-hover:scale-125 group-hover:rotate-[-12deg] group-hover:text-[#002b5b]"
                                size={22}
                            />
                            <span className="transition-all duration-300 group-hover:translate-x-1 group-hover:font-medium">
                                +91 8943 666 234
                            </span>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className="flex gap-4 mt-8">
                        {/* <a
                            href="https://facebook.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-700 hover:bg-sky-500 transition"
                        >
                            <Facebook className="text-white" />
                        </a> */}
                        <a
                            href="https://www.instagram.com/ammuswitz?igsh=aXE2YWQ3cXo2M2sx"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-700 hover:bg-pink-500 transition"
                        >
                            <Instagram className="text-white" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/developersneha/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-700 hover:bg-blue-600 transition"
                        >
                            <Linkedin className="text-white" />
                        </a>
                    </div>
                </div>

                {/* Right Section (Form) */}
                <form
                    onSubmit={handleSubmit}
                    className={`p-10 space-y-6 transition-all duration-1000 delay-200 ${
                        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
                    }`}
                >
                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <label className="text-slate-300 text-sm block mb-1">Your Name</label>
                            <input
                                name="name"
                                type="text"
                                placeholder="Name *"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-lg bg-slate-700/50 border border-slate-600 text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
                                required
                            />
                        </div>
                        <div>
                            <label className="text-slate-300 text-sm block mb-1">Your Email</label>
                            <input
                                name="email"
                                type="email"
                                placeholder="Email *"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-lg bg-slate-700/50 border border-slate-600 text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <label className="text-slate-300 text-sm block mb-1">Subject</label>
                        <input
                            name="subject"
                            type="text"
                            placeholder="Subject *"
                            value={formData.subject}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg bg-slate-700/50 border border-slate-600 text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
                            required
                        />
                    </div>

                    <div>
                        <label className="text-slate-300 text-sm block mb-1">Your Message</label>
                        <textarea
                            name="message"
                            placeholder="Your message *"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full px-4 py-3 h-32 rounded-lg bg-slate-700/50 border border-slate-600 text-white focus:outline-none focus:ring-2 focus:ring-sky-500 resize-none"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-sky-500 hover:bg-sky-600 text-white font-semibold py-3 rounded-full transition disabled:opacity-60"
                    >
                        {loading ? 'Sending...' : 'Send Message'}
                    </button>

                    {status && (
                        <p
                            className={`text-center font-medium ${
                                status.includes('✅')
                                    ? 'text-green-400'
                                    : status.includes('❌')
                                    ? 'text-red-400'
                                    : 'text-yellow-400'
                            }`}
                        >
                            {status}
                        </p>
                    )}
                </form>
            </div>
        </section>
    );
}
