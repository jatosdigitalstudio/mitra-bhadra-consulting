// src/app/about/AboutClient.tsx
'use client'

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Loading from "@/app/loading"; 

export default function AboutClient() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1500);
        return () => clearTimeout(timer);
    }, []);

    if (loading) return <Loading />;

    return (
        <section className="bg-white overflow-hidden">
            <div className="md:max-w-7xl mx-auto py-32 px-6">
                
                {/* --- Header Section --- */}
                <div className="flex flex-col lg:flex-row justify-between mb-32">
                    <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:mr-12 mb-8"
                    >
                        <div className="border rounded-md w-20 bg-secondary p-0.5 mb-4" />
                        <div className="bg-primary rounded-2xl px-6 py-4 shadow-xl shadow-primary/10">
                            <h2 className="text-white font-bold leading-tight text-4xl lg:text-5xl">
                            Tentang <span className="italic font-medium opacity-80">Kami</span>
                            </h2>
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-justify md:max-w-xl"
                    >
                        <p className="text-base leading-relaxed text-grey">
                            Mitra Bhadra Consulting diprakarsai oleh para profesional di berbagai bidang.
                            <span className="font-bold underline block mt-4 text-black decoration-secondary decoration-2 underline-offset-4"> 
                                Masing-masing profesional memiliki pengalaman sebagai top executive 
                                yang menangani beragam bisnis, jabatan publik, Presiden Direktur Bursa Efek Jakarta, 
                                CEO Unilever dan Managing Director & Country Head Bank ING Indonesia.
                            </span> 
                            <br/>
                            Dengan beragam latar belakang profesi, kami memiliki visi yang sama, yaitu menciptakan proses bisnis 
                            yang berkelanjutan. Fokus utama kami adalah pada implementasi ESG serta GRC untuk memastikan keberlanjutan 
                            jangka panjang dan tanggung jawab di seluruh aspek bisnis.
                        </p>
                    </motion.div>
                </div>

                {/* --- Vision, Mission, Values Grid --- */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    
                    {/* Vision Block */}
                    <VMVBlock title="Visi" delay={0.1}>
                        <p className="text-sm leading-relaxed text-grey text-justify italic border-l-4 border-secondary pl-4 py-2">
                            "Menjadi konsultan multidisiplin profesional pilihan yang memberikan solusi bisnis 
                            melalui tinjauan bisnis secara menyeluruh yang berpedoman pada good governance dan 
                            social responsibility sesuai praktik terbaik (best practices)."
                        </p>
                    </VMVBlock>

                    {/* Mission Block */}
                    <VMVBlock title="Misi" delay={0.3}>
                        <ul className="space-y-4">
                            {[
                                "Didukung pengalaman panjang, integritas, dan profesionalisme.",
                                "Menyeimbangkan Profit, People, Planet (GCG & CSR).",
                                "Membangun hubungan klien menjadi rekan kerja strategis.",
                                "Akurat mematuhi sistem, kebijakan, dan peraturan.",
                                "Pelayanan prima dengan komitmen kualitas tinggi."
                            ].map((text, i) => (
                                <li key={i} className="flex gap-3 text-sm text-grey text-justify">
                                    <span className="text-secondary font-bold shrink-0">{i + 1}.</span>
                                    {text}
                                </li>
                            ))}
                        </ul>
                    </VMVBlock>

                    {/* Values Block */}
                    <VMVBlock title="Nilai" delay={0.5}>
                        <ul className="space-y-4">
                            {[
                                "Memahami kebutuhan unik klien di setiap layanan.",
                                "Berkomunikasi secara terbuka dan jujur.",
                                "Komitmen kuat terhadap kualitas hasil akhir.",
                                "Sense of urgency dalam setiap tenggat waktu.",
                                "Bertindak dengan integritas dan etika profesional."
                            ].map((text, i) => (
                                <li key={i} className="flex gap-3 text-sm text-grey text-justify">
                                    <span className="text-secondary font-bold shrink-0">{i + 1}.</span>
                                    {text}
                                </li>
                            ))}
                        </ul>
                    </VMVBlock>

                </div>
            </div>
        </section>
    );
}

// Helper Sub-component for the Grid Items
function VMVBlock({ title, children, delay }: { title: string, children: React.ReactNode, delay: number }) {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay }}
            className="flex flex-col h-full bg-whitegray/5 p-8 rounded-3xl border border-whitegray/10 hover:border-primary/20 transition-colors"
        >
            <div className="mb-6">
                <div className="w-12 h-1 bg-secondary rounded-full mb-3" />
                <h2 className="text-primary font-black text-2xl uppercase tracking-widest">{title}</h2>
            </div>
            {children}
        </motion.div>
    );
}