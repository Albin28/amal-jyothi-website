import React from 'react';
import mapBg from '../assets/map-bg.png';

const Footer = () => {
    return (
        <footer className="bg-ajce-dark text-white pt-20 pb-10 border-t-4 border-ajce-gold">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
                <div>
                    <h3 className="text-3xl font-bold mb-8 text-white flex items-center gap-2">
                        <span className="text-ajce-gold">AJ</span>CE
                    </h3>
                    <p className="text-gray-400 mb-8 leading-relaxed">
                        Amal Jyothi College of Engineering<br />
                        Kanjirappally, Koovappally P. O.<br />
                        Kottayam Dt., Kerala, India.<br />
                        Pin - 686518
                    </p>

                </div>

                <div>
                    <h4 className="text-lg font-bold mb-8 text-white">Quick Links</h4>
                    <ul className="space-y-4 text-gray-400">
                        {['Admissions', 'Student Portal', 'Alumni Association', 'Careers at AJCE', 'Contact Us'].map(link => (
                            <li key={link} className="hover:text-ajce-gold transition-colors cursor-pointer flex items-center gap-2 group">
                                <span className="w-1 h-1 bg-ajce-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                {link}
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h4 className="text-lg font-bold mb-8 text-white">Locate Us</h4>
                    <a
                        href="https://www.google.com/maps/place/Amal+Jyothi+College+of+Engineering/@9.5285782,76.8226057,17z"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full h-48 bg-gray-800 rounded-xl overflow-hidden relative shadow-inner group block border border-gray-700 hover:border-ajce-gold transition-colors"
                    >
                        {/* Background Image */}
                        <img src={mapBg} alt="Map Background" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-100 transition-opacity duration-500" />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gray-900/80 group-hover:bg-gray-900/60 flex flex-col items-center justify-center transition-all duration-300 backdrop-blur-sm group-hover:backdrop-blur-none">
                            <div className="w-12 h-12 bg-gray-800/80 rounded-full flex items-center justify-center mb-3 group-hover:bg-ajce-gold group-hover:text-ajce-dark transition-all shadow-lg text-2xl border border-gray-600 group-hover:border-ajce-gold">
                                📍
                            </div>
                            <span className="text-gray-300 group-hover:text-white transition-colors font-medium shadow-black drop-shadow-md">
                                View on Google Maps
                            </span>
                            <span className="text-xs text-gray-400 mt-1 group-hover:text-white font-light">
                                Kanjirappally, Kerala
                            </span>
                        </div>
                    </a>
                </div>
            </div>

            <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
                <p>&copy; {new Date().getFullYear()} Amal Jyothi College of Engineering. All rights reserved.</p>
                <div className="mt-4 md:mt-0 space-x-6">
                    <span className="hover:text-ajce-gold cursor-pointer transition-colors">Privacy Policy</span>
                    <span className="hover:text-ajce-gold cursor-pointer transition-colors">Terms of Service</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
