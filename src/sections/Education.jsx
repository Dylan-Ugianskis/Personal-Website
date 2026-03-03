import { useScrollReveal } from '../hooks/useScrollReveal'

const Education = () => {
    const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.1, once: true });

    return (
        <section id="education" className="c-space section-spacing">
            <h2 className="text-heading mb-10">Education</h2>

            <div
                ref={sectionRef}
                className={`scroll-reveal ${isVisible ? 'visible' : ''}`}
            >
                {/* OSU Education Card */}
                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#0D0D0D] via-[#1a1a2e] to-[#0D0D0D]">

                    {/* Top accent bar — OSU Orange */}
                    <div className="h-1.5 w-full bg-gradient-to-r from-transparent via-[#DC4405] to-transparent" />

                    <div className="p-8 md:p-12">
                        <div className="flex flex-col md:flex-row gap-8 md:gap-12">

                            {/* Left: Degree info with OSU shield */}
                            <div className="flex-1">
                                <div className="flex items-center gap-4 mb-6">
                                    {/* OSU Shield Icon */}
                                    <div className="w-16 h-16 rounded-xl flex items-center justify-center bg-gradient-to-br from-[#DC4405] to-[#C73A00] shadow-lg shadow-[#DC4405]/20 shrink-0">
                                        <span className="text-2xl font-black text-white tracking-tighter leading-none">OSU</span>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl md:text-3xl font-bold text-white">
                                            Oregon State University
                                        </h3>
                                        <p className="text-[#DC4405] font-semibold text-lg">
                                            B.S. Computer Science
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 mb-8">
                                    <span className="px-4 py-1.5 rounded-full text-sm font-semibold bg-[#DC4405]/15 text-[#DC4405] border border-[#DC4405]/20">
                                        Class of 2024
                                    </span>
                                    <span className="px-4 py-1.5 rounded-full text-sm font-semibold bg-white/5 text-neutral-300 border border-white/10">
                                        Corvallis, OR
                                    </span>
                                </div>

                                {/* Focus area with cyber shield icon */}
                                <div className="mb-8 p-5 rounded-xl bg-gradient-to-r from-[#DC4405]/5 to-transparent border border-[#DC4405]/10">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-10 h-10 rounded-lg bg-[#DC4405]/10 flex items-center justify-center">
                                            <svg className="w-5 h-5 text-[#DC4405]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                                            </svg>
                                        </div>
                                        <h4 className="text-lg font-bold text-white">
                                            Focus: Cyber Security
                                        </h4>
                                    </div>
                                    <p className="text-neutral-400 text-sm leading-relaxed pl-13">
                                        Specialized in secure software development, network architecture, and defensive security practices.
                                    </p>
                                </div>

                                {/* Capstone */}
                                <div className="p-5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-10 h-10 rounded-lg bg-lavender/10 flex items-center justify-center">
                                            <svg className="w-5 h-5 text-lavender" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342" />
                                            </svg>
                                        </div>
                                        <h4 className="text-lg font-bold text-white">
                                            Capstone Project
                                        </h4>
                                    </div>
                                    <p className="text-neutral-300 text-sm leading-relaxed">
                                        <span className="font-semibold text-white">eGrape</span> — AI-powered multi-vendor e-commerce platform for complex pricing models in construction and landscaping industries.
                                    </p>
                                </div>
                            </div>

                            {/* Right: Skills / Topics grid */}
                            <div className="md:w-80 shrink-0">
                                <h4 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider mb-4">
                                    Key Coursework & Skills
                                </h4>
                                <div className="grid grid-cols-2 gap-2">
                                    {[
                                        { icon: "🔐", label: "Network Security" },
                                        { icon: "🛡️", label: "Secure Dev" },
                                        { icon: "💻", label: "Systems Programming" },
                                        { icon: "🗄️", label: "Databases" },
                                        { icon: "🌐", label: "Web Development" },
                                        { icon: "⚙️", label: "Operating Systems" },
                                        { icon: "📊", label: "Data Structures" },
                                        { icon: "🧮", label: "Algorithms" },
                                        { icon: "🔑", label: "Cryptography" },
                                        { icon: "🏗️", label: "Software Eng." },
                                    ].map((skill, i) => (
                                        <div
                                            key={i}
                                            className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.06] hover:border-white/10 transition-colors group"
                                        >
                                            <span className="text-base group-hover:scale-110 transition-transform">{skill.icon}</span>
                                            <span className="text-xs font-medium text-neutral-300 group-hover:text-white transition-colors">{skill.label}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Cyber terminal decoration */}
                                <div className="mt-6 p-4 rounded-xl bg-black/40 border border-green-500/10 font-mono text-xs">
                                    <div className="flex items-center gap-2 mb-2">
                                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                        <span className="text-green-500/70">secure_terminal</span>
                                    </div>
                                    <p className="text-green-400/60">
                                        <span className="text-green-500">$</span> nmap -sV --script vuln target<br />
                                        <span className="text-green-500">$</span> openssl s_client -connect<br />
                                        <span className="text-green-500">$</span> wireshark -i eth0 -f "tcp"<br />
                                        <span className="text-neutral-500">// Go Beavs! 🦫</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom accent bar */}
                    <div className="h-px w-full bg-gradient-to-r from-transparent via-[#DC4405]/30 to-transparent" />
                </div>
            </div>
        </section>
    )
}

export default Education
