'use client'

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BsCheckCircleFill } from "react-icons/bs";
import Loading from "@/app/loading";
import ServiceCTA from "@/components/ui/ServicesCTA";

export default function BusinessClient() {
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
                                Business <span className="italic font-medium opacity-80">Strategy</span>
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
                                Navigasi Transformasi di Era Globalisasi
                            </h3>
                            <div className="text-grey leading-relaxed text-justify space-y-4 text-base lg:text-lg">
                                <p>
                                    Persaingan bisnis di era globalisasi akan semakin tajam dan keras. Hanya perusahaan yang kuat, sehat dan kompetitif
                                    yang akan dapat bertahan. Diperlukan perubahan-perubahan fundamental agar perusahaan tetap eksis. Untuk
                                    memenangi persiangan diperlukan sebuah transformasi bisnis agar dapat menghadapi tantangan bisnis di masa depan.
                                </p>
                                <p>
                                    Transformasi bisnis merupakan keseluruhan proses perubahan oleh suatu korporasi untuk memposisikan diri agar lebih
                                    baik dalam menyikapi dan menjawab tantangan bisnis dan perubahan lingkungan usaha yang bergerak secara cepat.
                                    Transformasi juga diperlukan dalam merespon tantangan & harapan baru yang muncul dari dalam perusahaan.
                                </p>
                                <p className="font-medium text-primary bg-primary/5 p-6 rounded-2xl border-dashed border-2 border-primary/20">
                                    Perubahan perlu dilakukan secara menyeluruh dan berkesinambungan terhadap pola pikir, pola pandang dan pola tindak
                                    perusahaan, strategi bisnis, budaya perusahaan maupun perilaku dan kemampuan organisasi.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="lg:col-span-6"
                        >
                            <div className="bg-whitegray/5 border border-whitegray/10 rounded-xl py-8 px-6 lg:p-10 shadow-sm">
                                <h4 className="font-bold text-primary text-2xl mb-4 leading-tight">
                                    Layanan MBC Dalam Strategi Bisnis Dan Transformasi Bisnis
                                </h4>
                                
                                <div className="grid grid-cols-1 gap-2">
                                    {[
                                        "Vision, Mision, & Strategic Development & Management",
                                        "Portfolio Management",
                                        "Branding Strategy",
                                        "Sustainable Marketing",
                                        "Integrated Human Resources Strategy",
                                        "Organization Transformation",
                                        "Medium and Long Term Business Strategy",
                                        "Implementation Strategy"
                                    ].map((service, index) => (
                                        <motion.div 
                                            key={index}
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 }}
                                            className="flex items-center gap-4  p-2 bg-white rounded-xl border border-whitegray/10 hover:border-secondary/30 hover:shadow-md transition-all group"
                                        >
                                            <BsCheckCircleFill className="text-secondary shrink-0 group-hover:scale-110 transition-transform" size={22} />
                                            <span className="text-grey font-medium text-sm lg:text-base">{service}</span>
                                        </motion.div>
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