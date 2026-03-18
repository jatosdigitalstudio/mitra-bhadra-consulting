'use client'

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Loading from "@/app/loading";
import ServiceCTA from "@/components/ui/ServicesCTA";
import { TbUserStar } from "react-icons/tb";
import { BiNetworkChart } from "react-icons/bi";
import { GrGroup } from "react-icons/gr";
import { PiHandshake, PiNumberSquareOneFill, PiNumberSquareTwoFill, PiNumberSquareThreeFill } from "react-icons/pi";

export default function DirectorshipClient() {
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
                    <motion.div 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-16"
                    >
                        <div className="w-20 h-1.5 bg-secondary rounded-full mb-6" />
                        <div className="bg-primary inline-block rounded-xl px-8 py-4 shadow-xl shadow-primary/10">
                            <h1 className="text-white font-bold leading-tight text-3xl lg:text-4xl uppercase tracking-tight">
                                Directorship <span className="italic font-medium opacity-80">Program Module</span>
                            </h1>
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-20">
                        <motion.div 
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="lg:col-span-12 space-y-6"
                        >
                            <h3 className="text-2xl font-bold text-black border-l-4 border-secondary pl-6 italic">
                                Optimalisasi Kinerja Dewan Komisaris & Direksi
                            </h3>
                            <div className="text-grey leading-relaxed text-justify grid grid-cols-1 lg:grid-cols-2 gap-8 text-base lg:text-lg">
                                <p>
                                    Demi tercapainya optimalisasi kinerja Dewan Komisaris/ Pengawas dan Direksi untuk mencapai target perusahaan, maka perlu adanya pemahaman tugas, fungsi, tanggung jawab dan hubungan kerja antara Direksi dan Dewan Komisaris sesuai dengan rujukan regulasi yang berlaku.
                                </p>
                                <p>
                                    Pelatihan ini bukan hanya membahas teori pengelolaan perusahaan di Indonesia, tetapi juga aspek krusial Board seperti Praktik GCG, Risk Management, Executive Softskills, Strategic Thinking, hingga Financial Reporting Data Analytics.
                                </p>
                            </div>
                            <p className="font-medium text-primary bg-primary/5 p-6 rounded-2xl border-dashed border-2 border-primary/20 text-justify">
                                Diharapkan setelah adanya pelatihan ini, jajaran pimpinan memiliki keharmonisan kerja untuk mendukung Visi/Misi Perusahaan serta meningkatkan kemampuan strategis dan pengambilan keputusan sebagai role model di Perusahaan.
                            </p>
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-br from-primary to-[#014a08] rounded-xl p-8 lg:p-10 text-white shadow-2xl"
                        >
                            <h4 className="font-black text-2xl lg:text-3xl mb-6">Tujuan & Manfaat Pelatihan</h4>
                            <div className="space-y-8">
                                <BenefitItem 
                                    icon={<TbUserStar size={32}/>} 
                                    text="Memahami pelaksanaan GCG sesuai praktik terbaik regulator nasional & internasional untuk mengoptimalkan peran Direksi dan Komisaris."
                                />
                                <BenefitItem 
                                    icon={<BiNetworkChart size={32}/>} 
                                    text="Membangun komitmen dan sistem GRC perusahaan sesuai acuan praktik terbaik untuk peningkatan kinerja."
                                />
                                <BenefitItem 
                                    icon={<GrGroup size={32}/>} 
                                    text="Membangun awareness GRC sebagai pendukung peranan strategis pimpinan untuk diedukasikan kepada seluruh karyawan."
                                />
                                <BenefitItem 
                                    icon={<PiHandshake size={32}/>} 
                                    text="Meningkatkan kolaborasi Top Management agar terus selaras dalam upaya pencapaian tujuan (business sustainability)."
                                />
                            </div>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="space-y-8"
                        >
                            <div>
                                <h4 className="font-black text-primary text-2xl lg:text-3xl mb-4">Target & Metode</h4>
                                <p className="text-grey mb-8">
                                    Target peserta dalam pelatihan ini adalah para calon <span className="font-bold text-black">Direksi</span> yang akan menjadi <span className="font-bold text-black">leader dan role model perusahaan</span>.
                                </p>
                            </div>

                            <div className="space-y-4">
                                <MethodItem icon={<PiNumberSquareOneFill size={48}/>} title="Pemaparan Konsep" />
                                <MethodItem icon={<PiNumberSquareTwoFill size={48}/>} title="Studi Kasus" />
                                <MethodItem icon={<PiNumberSquareThreeFill size={48}/>} title="Focus Group Discussion" />
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>
            <ServiceCTA />
        </>
    );
}

function BenefitItem({ icon, text }: { icon: any, text: string }) {
    return (
        <div className="flex gap-5 items-start group">
            <div className="bg-white/10 p-3 rounded-xl group-hover:bg-secondary transition-colors duration-300">
                {icon}
            </div>
            <p className="text-sm lg:text-base leading-relaxed opacity-90">{text}</p>
        </div>
    );
}

function MethodItem({ icon, title }: { icon: any, title: string }) {
    return (
        <div className="flex items-center gap-6 bg-whitegray/5 border border-whitegray/10 p-5 rounded-2xl hover:border-primary/30 transition-all">
            <div className="text-primary">{icon}</div>
            <p className="text-lg font-bold text-primary">{title}</p>
        </div>
    );
}