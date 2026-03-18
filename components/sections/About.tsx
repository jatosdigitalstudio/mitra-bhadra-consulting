'use client'

import { motion } from "framer-motion";

export default function About() {
    return (
        <section className="max-w-7xl mx-auto py-32 px-6" id="about" >
            <div className="flex flex-col lg:flex-row justify-between">
                {/* Minimal Fade-in for Header Block */}
                <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="lg:mr-12 mb-8"
                >
                    <div className="border rounded-md w-20 bg-secondary p-0.5 mb-4" />
                    <div className="bg-primary rounded-2xl px-8 py-6 shadow-xl shadow-primary/10">
                        <h2 className="text-white font-bold leading-tight text-4xl lg:text-5xl">
                        Tentang <span className="italic font-medium opacity-80">MBC</span>
                        </h2>
                    </div>
                </motion.div>

                {/* Minimal Fade-in for Text Block with slight delay */}
                <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="lg:px-12 text-justify lg:max-w-2xl"
                >
                    <p className="mx-auto text-md leading-relaxed w-full text-grey ">
                        Mitra Bhadra Consulting diprakarsai oleh para profesional di berbagai bidang.
                        <span className="font-bold underline"> Masing-masing profesional memiliki pengalaman sebagai top executive 
                        yang menangani beragam bisnis, jabatan publik, Presiden Direktur Bursa Efek Jakarta, CEO Unilever dan Managing Director & Country 
                        Head Bank ING Indonesia.</span> 
                        <br/>
                        <br/>
                        Dengan beragam latar belakang profesi, kami memiliki visi yang sama, yaitu menciptakan proses bisnis yang 
                        berkelanjutan. Fokus utama kami adalah pada implementasi ESG (Environmental, Social, and Governance) serta 
                        GRC (Governance, Risk, and Compliance) untuk memastikan keberlanjutan jangka panjang dan tanggung jawab di 
                        seluruh aspek bisnis
                        <br/>
                        <br/>
                        Di Mitra Bhadra Consulting, pengalaman kami bagikan untuk memberikan strategic
                        advisory kepada perusahaan dalam mengembangkan dan mengimplementasikan strategi bisnis yang 
                        didasari oleh pelaksanaan Good Corporate Governance yang solid serta melaksanakan CSR dalam 
                        rangka peningkatan daya saing.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}