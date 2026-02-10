import React from 'react';

const Departments = () => {
    const depts = [
        { name: "Computer Science", code: "CSE", color: "bg-blue-500", icon: "💻" },
        { name: "Electronics & Comm.", code: "ECE", color: "bg-green-500", icon: "📡" },
        { name: "Mechanical Engg", code: "ME", color: "bg-orange-500", icon: "⚙️" },
        { name: "Civil Engineering", code: "CE", color: "bg-yellow-600", icon: "🏗️" },
        { name: "Electrical & Electronics", code: "EEE", color: "bg-red-500", icon: "⚡" },
        { name: "Information Tech", code: "IT", color: "bg-indigo-500", icon: "🖥️" },
        { name: "Chemical Engg", code: "CHE", color: "bg-purple-500", icon: "⚗️" },
        { name: "Metallurgy", code: "MME", color: "bg-gray-600", icon: "🔨" }
    ];

    return (
        <section id="departments" className="py-24 bg-ajce-light relative">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4 font-serif">Academic Departments</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-ajce-teal to-ajce-blue mx-auto rounded-full mb-6"></div>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        Explore our diverse range of engineering programs designed to foster innovation and leadership.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {depts.map((dept) => (
                        <div key={dept.code} className="bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 group cursor-pointer overflow-hidden border border-gray-100 hover:border-ajce-teal/20 transform hover:-translate-y-2">
                            <div className={`h-2 w-full ${dept.color}`}></div>
                            <div className="p-8">
                                <div className={`w-14 h-14 ${dept.color} bg-opacity-10 text-2xl rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                    <span>{dept.icon}</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-ajce-teal transition-colors">
                                    {dept.name}
                                </h3>
                                <p className="text-gray-500 text-sm mb-4">
                                    B.Tech, M.Tech, and Ph.D. programs available.
                                </p>
                                <div className="flex items-center text-sm font-semibold text-ajce-teal opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-[-10px] group-hover:translate-x-0">
                                    Learn More <span className="ml-1">→</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Departments;
