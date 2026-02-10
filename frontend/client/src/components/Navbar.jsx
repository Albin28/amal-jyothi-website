import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const topLinks = [
        "AUTONOMOUS", "IQAC", "NAAC", "NBA", "NIRF", "ARIIA", "ISO", "ALUMNI"
    ];

    const mainLinks = [
        { name: "ABOUT", href: "#about" },
        { name: "DEPARTMENTS", href: "#departments" },
        { name: "FACULTY", href: "#faculty" },
        { name: "STUDENT SUPPORT", href: "#support" },
        { name: "RESEARCH", href: "#research" },
        { name: "ADMISSIONS", href: "#admissions" },
        { name: "PLACEMENTS", href: "#placements" },
    ];

    return (
        <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'shadow-lg bg-white/95 backdrop-blur-md' : 'bg-white shadow-sm'}`}>
            {/* Top Bar with Gradient */}
            <div className="bg-gradient-to-r from-ajce-teal to-ajce-blue text-white text-xs py-1.5 px-4 hidden md:flex justify-end gap-5 overflow-x-auto">
                {topLinks.map((link) => (
                    <a key={link} href={`#${link.toLowerCase()}`} className="hover:text-ajce-gold transition-colors whitespace-nowrap font-medium tracking-wide">
                        {link}
                    </a>
                ))}
            </div>

            {/* Main Navbar */}
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo Section */}
                <div className="flex items-center gap-3 group cursor-pointer">
                    <div className="w-12 h-12 bg-white rounded-lg shadow-md flex items-center justify-center text-ajce-teal font-bold text-2xl transform group-hover:rotate-3 transition-transform duration-300 border border-gray-100">
                        A
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold text-gray-800 font-serif leading-none tracking-tight group-hover:text-ajce-teal transition-colors">AJCE</h1>
                        <p className="text-[10px] text-ajce-teal font-bold tracking-[0.2em] uppercase">Autonomous</p>
                    </div>
                </div>

                {/* Desktop Menu */}
                <nav className="hidden lg:flex gap-1 items-center font-medium text-sm text-gray-600">
                    {mainLinks.map((link) => (
                        <a key={link.name} href={link.href} className="px-3 py-2 rounded-md hover:text-ajce-teal hover:bg-teal-50 transition-all duration-200 relative group">
                            {link.name}
                            <span className="absolute bottom-1 left-3 right-3 h-0.5 bg-ajce-teal scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200"></span>
                        </a>
                    ))}
                    <a href="#apply" className="ml-4 px-5 py-2 bg-ajce-gold text-ajce-dark font-bold rounded-full shadow-md hover:bg-ajce-gold-hover hover:scale-105 transition-all transform text-xs tracking-wider">
                        APPLY NOW
                    </a>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden text-gray-800 focus:outline-none p-2 rounded-md hover:bg-gray-100 transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            <div className={`lg:hidden bg-white border-t border-gray-100 overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="flex flex-col py-2">
                    {mainLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="px-6 py-3 text-gray-700 hover:bg-teal-50 hover:text-ajce-teal hover:border-l-4 hover:border-ajce-teal transition-all"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                    <div className="border-t border-gray-100 my-2 pt-2 grid grid-cols-2 gap-2 px-4">
                        {topLinks.map((link) => (
                            <a key={link} href={`#${link.toLowerCase()}`} className="text-xs text-gray-500 hover:text-ajce-teal py-1">
                                {link}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
