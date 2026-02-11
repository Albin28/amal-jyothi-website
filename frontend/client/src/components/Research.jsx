import React from 'react';

const Research = () => {
    const publications = [
        {
            title: "Molecular transport of aromatic hydrocarbons through nylon6/ethylene propylene rubber blends",
            journal: "J. Sci. Part B: Polym. Phys.",
            year: "2000"
        },
        {
            title: "Carbon black filled SBR Composites: The effect of rubber-filler interaction on transport",
            journal: "J. Macromol. Sci. Phys. Eds.",
            year: "2000"
        },
        {
            title: "Pervaporation separation of chlorinated hydrocarbon and acetone mixtures with crosslinked SBR and natural rubber blend membranes",
            journal: "J. Sci.",
            year: "2000"
        },
        {
            title: "Separation of alkane-acetone mixtures using styrene-butadiene rubber/natural rubber blend membranes",
            journal: "J. Appl. Polym. Sci.",
            year: "1999"
        },
        {
            title: "Novel phototransformation of o-Nitrobenzylic Polymers to Azo Polymers",
            journal: "J. Chem. Soc., Chem. Commun.",
            year: "1994"
        }
    ];

    const conferencePapers = [
        "Diffusion and sorption of aromatic hydrocarbons through styrene-butadiene rubber membranes, 82nd Science Congress, Calcutta, 1995.",
        "Transport of organic solvents through styrene-butadiene membranes, Indo-French International Meeting, 1995.",
        "The Effect of Vulcanizing Systems on the Molecular Transport of Benzene through SBR Membranes, 17th Rubber Conference, IRMRA '95, Mumbai."
    ];

    const researchAreas = [
        { title: "Polymer Blends & Composites", icon: "🧬" },
        { title: "Molecular Transport", icon: "⚗️" },
        { title: "Membrane Technology", icon: "🔬" },
        { title: "Photochemistry", icon: "☀️" }
    ];

    return (
        <section id="research" className="py-24 bg-white relative overflow-hidden">
            {/* Background Details */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-5 pointer-events-none">
                <div className="absolute top-20 left-10 text-9xl">🔬</div>
                <div className="absolute bottom-20 right-10 text-9xl">🧬</div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4 font-serif">Research & <span className="text-ajce-teal">Publications</span></h2>
                    <div className="w-24 h-1 bg-linear-to-r from-ajce-teal to-ajce-blue mx-auto rounded-full mb-6"></div>
                    <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                        Fostering a culture of innovation and discovery. Our Basic Science department leads the way in material science and chemical engineering research.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-12">
                    {/* Featured Researcher / Dept Focus */}
                    <div className="md:col-span-1">
                        <div className="bg-ajce-light/50 rounded-2xl p-8 border border-gray-100 h-full">
                            <h3 className="text-2xl font-bold text-gray-800 mb-6">Research Focus</h3>
                            <div className="space-y-6">
                                {researchAreas.map((area, index) => (
                                    <div key={index} className="flex items-center gap-4 p-3 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                        <span className="text-2xl">{area.icon}</span>
                                        <span className="font-semibold text-gray-700">{area.title}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-12 pt-8 border-t border-gray-200">
                                <h4 className="text-sm uppercase tracking-wider text-gray-500 font-bold mb-4">Key Researcher</h4>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-ajce-blue text-white rounded-full flex items-center justify-center font-bold text-xl">SG</div>
                                    <div>
                                        <p className="font-bold text-gray-800">Dr. Soney C. George</p>
                                        <p className="text-xs text-gray-500">HOD & Professor, Basic Science</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Publications List */}
                    <div className="md:col-span-2">
                        <div className="mb-10">
                            <h3 className="text-2xl font-bold text-gray-800 mb-6 border-l-4 border-ajce-teal pl-4">Selected Journal Publications</h3>
                            <div className="space-y-4">
                                {publications.map((pub, index) => (
                                    <div key={index} className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:border-ajce-teal/30 hover:shadow-md transition-all group">
                                        <h4 className="font-semibold text-gray-800 mb-2 group-hover:text-ajce-teal transition-colors leading-relaxed">
                                            "{pub.title}"
                                        </h4>
                                        <p className="text-sm text-gray-500">
                                            <span className="font-medium text-ajce-blue">{pub.journal}</span> • {pub.year}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-6 border-l-4 border-ajce-gold pl-4">Conference Papers</h3>
                            <ul className="space-y-3">
                                {conferencePapers.map((paper, index) => (
                                    <li key={index} className="flex gap-3 text-gray-600">
                                        <span className="text-ajce-gold mt-1">●</span>
                                        <span className="leading-relaxed">{paper}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Research;
