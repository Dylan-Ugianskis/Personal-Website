import React from "react";
import { experiences } from "../constants";
import { useScrollReveal } from "../hooks/useScrollReveal";

const WorkGrid = () => {
    const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.1, once: true });

    return (
        <section id="work" className="c-space section-spacing">
            <h2 className="text-heading mb-12">My Work Experience</h2>

            <div
                ref={sectionRef}
                className={`grid grid-cols-1 md:grid-cols-3 gap-6 scroll-reveal ${isVisible ? 'visible' : ''}`}
            >
                {experiences.map((exp, index) => (
                    <div
                        key={exp.id || index}
                        className={`
              relative p-6 rounded-2xl overflow-hidden group hover:-translate-y-2 duration-300
              ${index === 0 ? "md:col-span-3 bg-gradient-to-r from-royal to-lavender border border-white/10" : ""}
              ${index === 1 ? "md:col-span-2 bg-gradient-to-r from-storm to-indigo" : ""}
              ${index === 2 ? "bg-gradient-to-b from-slate-900 to-slate-800 border border-white/10" : ""}
              ${index === 3 ? "md:col-span-3 bg-gradient-to-tr from-gray-900 via-slate-900 to-black border border-white/10" : ""}
            `}
                    >
                        {/* Background Details */}
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <h3 className="text-6xl font-bold text-white select-none">{exp.date.split(" ")[0]}</h3>
                        </div>

                        <div className="relative z-10 flex flex-col h-full justify-between">
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-1">{exp.title}</h3>
                                <p className="text-lg text-sand mb-4">{exp.job}</p>
                                <p className="text-sm text-neutral-400 mb-6 font-mono border-l-2 border-white/20 pl-3">{exp.date}</p>

                                <ul className="space-y-2">
                                    {exp.contents.map((item, i) => (
                                        <li key={i} className="text-neutral-300 text-sm flex items-start group-hover:text-white transition-colors">
                                            <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-sand rounded-full shrink-0"></span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Glow Effect */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WorkGrid;
