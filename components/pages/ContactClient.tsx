'use client'

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Loading from "@/app/loading";
import { HiEnvelope, HiPhone, HiMiniBuildingOffice } from "react-icons/hi2";
import { sendContactEmail } from "@/app/contact/action"; 

export default function ContactClient() {
    const [loading, setLoading] = useState(true)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [formValues, setFormValues] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
        service: "General Inquiry" 
    })

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1500);
        return () => clearTimeout(timer);
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormValues(prev => ({ ...prev, [name]: value }));
    }

    async function handleSubmit(event: React.FormEvent) {
        event.preventDefault()
        setIsSubmitting(true)
        
        try {
            const formData = new FormData();
            Object.entries(formValues).forEach(([key, value]) => formData.append(key, value));

            const result = await sendContactEmail(formData);

            if (result.success) {
                alert("Pesan Anda telah berhasil dikirim ke tim MBC!");
                setFormValues({ name: "", email: "", phone: "", message: "", service: "General Inquiry" });
            } else {
                alert("Gagal mengirim pesan: " + result.message);
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Terjadi kesalahan sistem. Silakan coba lagi nanti.");
        } finally {
            setIsSubmitting(false)
        }
    }

    if (loading) return <Loading />

    return (
        <section className="bg-white py-28 md:py-32 px-6">
            <div className="max-w-7xl mx-auto">
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col items-start mb-12 lg:mb-20"
                >
                    <div className="w-20 h-1.5 bg-secondary rounded-full mb-4" />
                    <div className="bg-primary rounded-xl px-6 py-3 shadow-xl shadow-primary/10">
                        <h1 className="text-white font-bold leading-tight text-2xl md:text-5xl uppercase tracking-tight">
                            Hubungi <span className="italic font-medium opacity-80">Kami</span>
                        </h1>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
                    
                    {/* --- Information Column Stays Same --- */}
                    <div className="lg:col-span-5 space-y-8 order-2 lg:order-1">
                        <motion.div 
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-whitegray/5 border border-whitegray/10 p-4 md:p-8 rounded-xl h-full"
                        >
                            <h4 className="font-black text-primary text-2xl mb-10 tracking-tight uppercase">Informasi <span className="text-secondary italic font-medium">Lengkap</span></h4>
                            
                            <div className="space-y-10">
                                <ContactItem 
                                    icon={<HiMiniBuildingOffice size={24}/>}
                                    title="Kantor Pusat"
                                    content={
                                        <>
                                            <span className="font-bold text-black">PT Mitra Bhadra Consulting</span> <br/>
                                            Gedung Tifa Arum Realty Lt. 3, Ruang 304, <br/>
                                            Jl. Kuningan Barat No.26, Jakarta Selatan, <br/>
                                            12170. Indonesia
                                        </>
                                    }
                                />
                                <ContactItem 
                                    icon={<HiPhone size={24}/>}
                                    title="Telepon / WhatsApp"
                                    content="0821 1077 8860"
                                />
                                <ContactItem 
                                    icon={<HiEnvelope size={24}/>}
                                    title="Email Resmi"
                                    content="general@mitrabhadraconsulting.com"
                                />
                            </div>
                        </motion.div>
                    </div>

                    {/* --- Form Column --- */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="lg:col-span-7 order-1 lg:order-2"
                    >
                        <form onSubmit={handleSubmit} className="bg-primary p-8 lg:p-12 rounded-xl shadow-2xl shadow-primary/30">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <FormInput 
                                    label="Nama Lengkap" 
                                    name="name" 
                                    value={formValues.name} 
                                    onChange={handleChange} 
                                    placeholder="Nama Anda" 
                                />
                                <FormInput 
                                    label="Nomor Handphone" 
                                    name="phone" 
                                    type="tel"
                                    value={formValues.phone} 
                                    onChange={handleChange} 
                                    placeholder="0812..." 
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <FormInput 
                                    label="Alamat Email" 
                                    name="email" 
                                    type="email"
                                    value={formValues.email} 
                                    onChange={handleChange} 
                                    placeholder="email@perusahaan.com" 
                                />
                                <div className="flex flex-col gap-2">
                                    <label className="text-white/70 text-[10px] font-black uppercase tracking-[0.2em] ml-1">Kebutuhan Konsultasi</label>
                                    <select 
                                        name="service"
                                        value={formValues.service}
                                        onChange={handleChange}
                                        className="w-full rounded-lg bg-white/10 border border-white/20 p-4 text-white focus:bg-white/15 focus:outline-none transition-all appearance-none text-sm"
                                    >
                                        <option className="text-black" value="General Inquiry">General Inquiry</option>
                                        <option className="text-black" value="GCG Assessment">GCG Assessment</option>
                                        <option className="text-black" value="ESG Strategy">ESG Strategy</option>
                                        <option className="text-black" value="Risk Management">Risk Management</option>
                                    </select>
                                </div>
                            </div>

                            <div className="mb-8">
                                <label className="text-white/70 text-[10px] font-black uppercase tracking-[0.2em] ml-1 mb-2 block">Pesan</label>
                                <textarea
                                    required
                                    name="message"
                                    rows={4}
                                    className="w-full rounded-2xl bg-white/10 border border-white/20 p-6 text-white placeholder:text-white/30 focus:bg-white/15 focus:outline-none transition-all resize-none text-sm leading-relaxed"
                                    value={formValues.message}
                                    onChange={handleChange}
                                    placeholder="Tuliskan pesan atau kebutuhan konsultasi Anda secara mendalam..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-secondary hover:bg-white hover:text-primary text-white font-bold py-5 rounded-xl transition-all duration-500 flex justify-center items-center gap-3 disabled:opacity-50 uppercase tracking-[0.1em] text-sm shadow-xl shadow-black/10"
                            >
                                {isSubmitting ? "SEDANG MENGIRIM..." : "KIRIM PERMINTAAN"}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

function FormInput({ label, ...props }: any) {
    return (
        <div className="flex flex-col gap-2">
            <label className="text-white/70 text-xs font-bold uppercase tracking-widest ml-1">{label}</label>
            <input
                required
                className="w-full rounded-lg bg-white/10 border border-white/20 p-4 text-white placeholder:text-white/20 focus:bg-white/15 focus:outline-none transition-all"
                {...props}
            />
        </div>
    );
}

function ContactItem({ icon, title, content }: any) {
    return (
        <div className="flex gap-6 items-start">
            <div className="bg-primary text-white p-3 rounded-xl shadow-lg shadow-primary/20">
                {icon}
            </div>
            <div>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary mb-1">{title}</p>
                <div className="text-grey text-sm leading-relaxed">{content}</div>
            </div>
        </div>
    );
}