'use client'

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BsCheckCircleFill } from "react-icons/bs";
import Loading from "@/app/loading";
import ServiceCTA from "@/components/ui/ServicesCTA";

export default function ComplianceClient() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1500);
        return () => clearTimeout(timer);
    }, []);

    if (loading) return <Loading />;

    return (
        <>
            <section className="bg-white py-28 md:py-32 px-6">
                <div className="max-w-7xl mx-auto">
                    
                    {/* --- Header Section --- */}
                    <motion.div 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-16"
                    >
                        <div className="w-20 h-1.5 bg-secondary rounded-full mb-6" />
                        <div className="bg-primary inline-block rounded-xl px-6 py-4 shadow-xl shadow-primary/10">
                            <h1 className="text-white font-bold leading-tight text-2xl lg:text-4xl uppercase tracking-tight">
                                Integrated Governance, Risk & Compliance
                            </h1>
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                        
                        {/* --- Narrative Text (Left) --- */}
                        <motion.div 
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="lg:col-span-6 space-y-6"
                        >
                            <h3 className="text-2xl font-bold text-black border-l-4 border-secondary pl-6 italic">
                                Menghapus Silo, Memperkuat Integritas Bisnis
                            </h3>
                            <div className="text-grey leading-relaxed text-justify space-y-4 text-base lg:text-lg">
                                <p>
                                    Tekanan regulasi terus meningkat terhadap perusahaan. Di lingkungan bisnis saat ini, manajemen eksekutif perlu memiliki pemahaman mendalam tentang risiko bisnis utama mereka serta bagaimana mengelolanya untuk menciptakan keuntungan terbesar.
                                </p>
                                <p>
                                    Banyak organisasi mengelola prakarsa Tata Kelola, Risiko, dan Kepatuhan secara terpisah (silo). Padahal, inisiatif tersebut saling terkait. Pengelolaan secara terpisah mengakibatkan duplikasi proses, dokumentasi yang berlebihan, bahkan kontradiksi yang meningkatkan risiko bisnis.
                                </p>
                                <p className="font-medium text-primary bg-primary/5 p-6 rounded-2xl border-dashed border-2 border-primary/20">
                                    Solusi GRC Terintegrasi memberikan proses yang jelas dan tidak ambigu, memberikan satu titik acuan untuk organisasi, serta menghilangkan duplikasi pekerjaan yang tidak efisien.
                                </p>
                            </div>
                        </motion.div>

                        {/* --- Services List (Right) --- */}
                        <motion.div 
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="lg:col-span-6"
                        >
                            <div className="bg-whitegray/5 border border-whitegray/10 rounded-xl py-8 px-6 lg:p-10 shadow-sm">
                                <h4 className="font-bold text-primary text-2xl mb-8 leading-tight">
                                    Layanan MBC Dalam GRC Terintegrasi
                                </h4>
                                
                                <div className="grid grid-cols-1 gap-4">
                                    {[
                                        "Mendesain, Implementasi dan Pemeliharaan Infrastruktur GRC",
                                        "GRC Roadmap"
                                    ].map((service, index) => (
                                        <motion.div 
                                            key={index}
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 }}
                                            className="flex items-center gap-4 p-5 bg-white rounded-xl border border-whitegray/10 hover:border-secondary/30 hover:shadow-md transition-all group"
                                        >
                                            <BsCheckCircleFill className="text-secondary shrink-0 group-hover:scale-110 transition-transform" size={24} />
                                            <span className="text-grey font-bold text-base lg:text-lg">{service}</span>
                                        </motion.div>
                                    ))}
                                </div>

                                <div className="mt-8 p-6 bg-secondary/5 rounded-2xl border border-secondary/10">
                                    <p className="text-sm text-grey italic">
                                        "Memberikan satu titik acuan untuk organisasi dan menghilangkan duplikasi pekerjaan yang berlebihan."
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
            <ServiceCTA />
        </>
    );
}