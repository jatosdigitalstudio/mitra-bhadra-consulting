'use client'

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BsCheckCircleFill } from "react-icons/bs";
import Loading from "@/app/loading";
import ServiceCTA from "@/components/ui/ServicesCTA";

export default function EnviromentClient() {
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
                        <div className="bg-primary inline-block rounded-xl px-8 py-4 shadow-xl shadow-primary/10">
                            <h1 className="text-white font-bold leading-tight text-3xl lg:text-4xl uppercase tracking-tight">
                                Environment, Social, Governance (ESG)
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
                                Membangun Fondasi Bisnis Berkelanjutan
                            </h3>
                            <div className="text-grey leading-relaxed text-justify space-y-4 text-base lg:text-lg">
                                <p>
                                    Di era modern, keberhasilan perusahaan tidak lagi hanya diukur dari profitabilitas semata, namun juga dari dampaknya terhadap lingkungan dan masyarakat. Perubahan menyeluruh perlu dilakukan terhadap pola pikir dan strategi bisnis agar selaras dengan nilai-nilai keberlanjutan.
                                </p>
                                <p>
                                    Implementasi ESG bukan sekadar kepatuhan terhadap regulasi, melainkan instrumen strategis untuk meningkatkan nilai perusahaan (corporate value) dan kepercayaan para pemangku kepentingan dalam jangka panjang.
                                </p>
                                <p className="font-medium text-primary bg-primary/5 p-6 rounded-2xl border-dashed border-2 border-primary/20">
                                    Kami siap mendampingi perusahaan Anda dalam menyusun strategi ESG yang terintegrasi, mulai dari kebijakan internal hingga roadmap pelaksanaan yang akurat untuk menciptakan keunggulan kompetitif yang berkelanjutan.
                                </p>
                            </div>
                        </motion.div>

                        {/* --- Services List (Right) --- */}
                        <motion.div 
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="lg:col-span-6 space-y-8"
                        >
                            {/* Goals Grid */}
                            <div className="bg-whitegray/5 border border-whitegray/10 rounded-xl py-8 px-6 lg:p-10 shadow-sm">
                                <h4 className="font-black text-primary text-2xl mb-6 leading-tight">
                                    Tujuan Strategi ESG
                                </h4>
                                <div className="grid grid-cols-1 gap-2">
                                    {[
                                        "Memberikan arahan jangka panjang program ESG",
                                        "Meningkatkan efisiensi dan efektifitas program",
                                        "Panduan bisnis berlandaskan nilai-nilai ESG",
                                        "Prioritas alokasi sumber daya dan waktu",
                                        "Penyelarasan dengan Visi, Misi, dan Nilai perusahaan",
                                        "Integrasi dengan Manajemen Risiko dan Compliance",
                                        "Meningkatkan nilai tambah bagi Stakeholders"
                                    ].map((text, index) => (
                                        <div key={index} className="flex items-start gap-3">
                                            <BsCheckCircleFill className="text-secondary mt-1 shrink-0" size={18} />
                                            <span className="text-grey text-sm lg:text-base leading-tight">{text}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Services Grid */}
                            <div className="bg-primary/5 border border-primary/10 rounded-xl py-8 px-6 lg:p-10 shadow-sm">
                                <h4 className="font-black text-primary text-2xl mb-6 leading-tight">
                                    Layanan Implementasi ESG
                                </h4>
                                <div className="grid grid-cols-1 gap-2">
                                    {[
                                        "Penyusunan Kebijakan & Mitigasi Risiko Keberlanjutan",
                                        "Penyusunan KPI Kuantitatif & Monitoring Evaluasi",
                                        "Penyusunan Roadmap ESG yang Selaras dengan Rencana Strategis",
                                        "Pengembangan Program Unggulan Jangka Pendek & Panjang",
                                        "Penyusunan Action Plan dengan Tahapan yang Jelas",
                                        "Strategic Advisory Implementasi Sistematik"
                                    ].map((service, index) => (
                                        <div key={index} className="flex items-start gap-3 ">
                                            <BsCheckCircleFill className="text-secondary mt-1 shrink-0" size={18} />
                                            <span className="text-grey font-medium text-sm lg:text-base leading-tight">{service}</span>
                                        </div>
                                    ))}
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