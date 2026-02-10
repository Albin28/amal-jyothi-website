import React from 'react';

const About = () => {
    return (
        <section id="about" className="py-20 bg-white relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-ajce-teal/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-ajce-blue/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>

            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">
                <div className="order-2 md:order-1">
                    <div className="inline-block px-3 py-1 bg-ajce-light text-ajce-teal font-semibold text-xs rounded-full mb-4 tracking-wider uppercase">Since 2001</div>
                    <h2 className="text-4xl font-bold text-gray-800 mb-6 leading-tight font-serif">
                        Empowering Future <br />
                        <span className="text-ajce-teal">Technology Leaders</span>
                    </h2>
                    <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                        Amal Jyothi College of Engineering (AJCE), Kanjirappally, is a visionary project by the Diocese of Kanjirappally.
                        As the first new-generation engineering college in Kerala with <span className="font-semibold text-gray-800">NAAC 'A' grade accreditation</span>, we are committed to looking beyond the horizon of conventional education.
                    </p>
                    <p className="text-gray-600 mb-8 leading-relaxed">
                        We provide a comprehensive digital portal for students, faculty, and visitors, offering seamless access to academic resources, research facilities, and campus life.
                    </p>

                    <div className="space-y-4">
                        {[
                            { title: 'Visionary Leadership', desc: 'Guided by the Diocese of Kanjirappally' },
                            { title: 'State-of-the-art Infrastructure', desc: 'World-class labs and TBI' },
                            { title: 'Excellent Placement Record', desc: 'Top recruiters including MNCs' }
                        ].map((item, index) => (
                            <div key={index} className="flex items-start p-4 bg-ajce-light rounded-xl hover:bg-white hover:shadow-lg transition-all border border-transparent hover:border-gray-100 group">
                                <div className="mt-1 w-10 h-10 rounded-full bg-ajce-teal/10 flex items-center justify-center text-ajce-teal group-hover:bg-ajce-teal group-hover:text-white transition-colors">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                </div>
                                <div className="ml-4">
                                    <h4 className="font-bold text-gray-800 group-hover:text-ajce-teal transition-colors">{item.title}</h4>
                                    <p className="text-sm text-gray-500">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="order-1 md:order-2 relative">
                    <div className="relative h-[500px] w-full bg-gray-200 rounded-3xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
                        {/* Placeholder for about image */}
                        <div className="absolute inset-0 bg-gradient-to-br from-ajce-dark to-gray-800 flex items-center justify-center group">
                            <div className="text-center p-8">
                                <div className="w-20 h-20 bg-white/10 rounded-full mx-auto mb-4 backdrop-blur-md flex items-center justify-center">
                                    <span className="text-4xl">🏛️</span>
                                </div>
                                <span className="text-2xl font-medium text-white block mb-2">Campus Life</span>
                                <span className="text-gray-400 text-sm">Experience the vibrant atmosphere of AJCE</span>
                            </div>
                        </div>
                    </div>
                    {/* Floating Stats Card */}
                    <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 hidden md:block animate-bounce duration-[4000ms]">
                        <div className="flex gap-8">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-ajce-teal">20+</div>
                                <div className="text-xs text-gray-500 uppercase font-semibold">Years</div>
                            </div>
                            <div className="text-center border-l border-gray-100 pl-8">
                                <div className="text-3xl font-bold text-ajce-gold">100%</div>
                                <div className="text-xs text-gray-500 uppercase font-semibold">Dedication</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
