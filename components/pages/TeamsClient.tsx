'use client'

import Image from "next/image"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Loading from "@/app/loading";

export default function TeamsClient() {
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 2000);
        return () => clearTimeout(timer);
    }, []);

    if (loading) return <Loading />

    return (
        <section className="bg-white py-30">
            {/* --- Tenaga Ahli Section --- */}
            <div className="md:max-w-7xl mx-auto px-6">
                <div className="flex flex-col items-center mb-20">
                    <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: 80 }}
                        className="h-1.5 bg-secondary rounded-full mb-4" 
                    />
                    <div className="bg-primary rounded-2xl px-8 py-4 shadow-xl shadow-primary/10">
                        <h1 className="text-white font-bold leading-tight text-3xl lg:text-5xl text-center">
                            Tenaga Ahli <span className="italic font-medium opacity-80">MBC</span>
                        </h1>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                    {/* Expert 1 */}
                    <TeamCard 
                        image="/images/team-1.png"
                        name="Dr. Mas Achmad Daniri, MEc"
                        description="Mas Achmad Daniri menjabat sebagai Ketua Komite Nasional Kebijakan Governance (KNKG). Beliau ahli di bidang pasar modal (capital market), industri manufaktur, corporate governance dan corporate social responsibility dengan pengalaman lebih dari 30 tahun. Beliau pendiri dan Senior Advisor PT Mitra Bhadra Consulting, serta telah menulis beberapa buku terkait penerapan GCG dan ES-GRC."
                        experience={[
                            "Komisaris Utama PT Chubb Insurance Indonesia (2016-Present)",
                            "Komisaris Panasonic Manufacturing Indonesia (2008-Juni 2022)",
                            "Ketua Komite Nasional Kebijakan Governance (1999 – 2019)",
                            "Anggota Komite Etik Otoritas Jasa Keuangan (2013 – 2016)",
                            "Wakil Direktur Utama Panasonic Manufacturing Indonesia (2002 – 2009)",
                            "Direktur Utrama Bursa Efek Jakarta (1999 – 2002)",
                            "Direktur Bursa Efek Jakarta (1991 - 1999)"
                        ]}
                    />

                    {/* Expert 2 */}
                    <TeamCard 
                        image="/images/team-2.png"
                        name="Irwan M. Habsjah, MA"
                        delay={0.2}
                        description="Memiliki kompetensi di bidang perbankan, pasar modal, dan corporate governance sebagai hasil dari pengalamannya selama lebih dari 30 tahun pada sektor perbankan korporasi. Sejak tahun 2009 beliau terlibat aktif dalam kegiatan financial inclusion di Indonesia."
                        experience={[
                            "Komisaris Independen PT Bank Tabungan Pensiunan Nasional Tbk (2009-Present)",
                            "Komisaris Utama PT Sriboga Marugame Indonesia",
                            "Presiden Direktur PT BT Sekurities Indonesia (1996-1999)",
                            "Komisaris PT Sari Melati Kencana (2011)",
                            "Anggota Komite Audit PT BAT Indonesia (2008)",
                            "Presiden Direktur PT ING Indonesia Bank (2000-2004)"
                        ]}
                    />

                    {/* Expert 3 */}
                    <TeamCard 
                        image="/images/team-3.png"
                        name="Syahnan Poerba, S.E., MEc"
                        delay={0.4}
                        description="Memiliki pengalaman sebagai Direktur selama 30 tahun di perusahaan jasa keuangan maupun non keuangan. Praktisi dalam penerapan sukses Good Governance, Enterprise Risk Management, Corporate Social Responsibility didukung dengan pengalaman lainnya dalam organization development serta membawa perusahaan melakukan Initial Public Offering (IPO)."
                        experience={[
                            "Senior Partner PT Mitra Bhadra Consulting (2020-Present)",
                            "Direktur PT UI Corpora (2019-Present)",
                            "Chief Corporate Support Directors PT ABM Investama Tbk (2009-2019)",
                            "Country Manager PT D&B (Dun & Bradstreet) Indonesia (2007-2009)",
                            "Direktur Operasional AXA Mandiri, joint venture AXA France and Bank Mandiri (2004-2007)",
                            "Direktur Keuangan John Hancoock, US Company (2000-2007)",
                            "Property and Development PT Bangun Tjipta Pratama, Group of Bangun Tjipta Group (1992-1999)"
                        ]}
                    />
                </div>
            </div>

            {/* --- Konsultan Section --- */}
            <div className="lg:max-w-[70rem] mx-auto mt-32 px-8">
                <div className="flex flex-col items-center mb-16">
                    <div className="w-20 h-1.5 bg-secondary rounded-full mb-4" />
                    <div className="bg-primary rounded-2xl px-8 py-4">
                        <h2 className="text-white font-bold leading-tight text-3xl lg:text-5xl text-center">
                            Konsultan <span className="italic font-medium opacity-80">MBC</span>
                        </h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Consultant 1 */}
                    <TeamCard 
                        image="/images/team-4.png"
                        name="Evelyna Theresa"
                        description="Memiliki pengalaman selama dua belas tahun sebagai konsultan GRC dengan Sertifikasi Governance Risk and Compliance Profesional dan Certified Risk Management Professional, aktif menjadi narasumber dan moderator dalam berbagai kesempatan, membangun infrastruktur GCG, memiliki pengetahuan mengenai OECD principles, Asean Corporate Governance Scorecards, POJK, mereview Annual Report dan Sustainability report, menyusun Roadmap GRC BUMN dan BUMD, melakukan asistensi implementasi dan penyusunan infrastruktur dan Roadmap Environment, Social and Governance (ESG) di BUMN."
                        experience={[
                            "BPJS Ketenagakerjaan (2015/2016)",
                            "PT Jakarta International Container Terminal (2018)",
                            "PT Humpus Intermoda Transportasi (2018)",
                            "PT Sarana Multigriya Finansial (2018/2019)",
                            "Lembaga Pembiayaan Ekspor Impor Indonesia (2019)",
                            "Jakarta Propertindo Group (2019/2020)",
                            "Lembaga Penjamin Simpanan (2022)",
                            "PT Pupuk Kalimantan Timur (2022)",
                            "IFG Life (2022)"
                        ]}
                    />

                    {/* Consultant 2 */}
                    <TeamCard 
                        image="/images/team-5.png"
                        name="Edoh Permatasari"
                        delay={0.2}
                        description="Memiliki pengalaman sebagai konsultan GRC dan Sustainability selama 10 (sepuluh) tahun yang berpengalaman dalam membangun infrastruktur GCG di beberapa BUMN perusahaan swasta serta lembaga publik, mereview dan menyusun pedoman Tata Kelola, Laporan Tahunan, Laporan Keberlanjutan serta telah mengikuti pelatihan AA1000 Stakeholder Engagement Series. Selain itu pernah mendampingi perusahaan dalam menyusun infrastruktur implementasi Environment, Social and Governance (ESG). Memiliki latar belakang pendidikan Magister Management of Sustainability di Universitas Trisakti, Sertifikasi Governance Risk and Compliance Profesional dan Sertifikasi Lead Auditor ISO 37001 Sistem Manajemen Anti Penyuapan."
                        experience={[
                            "BPJS Ketenagakerjaan (2015/2016)",
                            "PT Jakarta International Container Terminal (2018)",
                            "PT Humpus Intermoda Transportasi (2018)",
                            "PT Sarana Multigriya Finansial (2018/2019)",
                            "Jakarta Propertindo Group (2019/2020)",
                            "Lembaga Penjamin Simpanan (2022)",
                            "PT Pupuk Kalimantan Timur (2022)",
                            "IFG Life (2022)"
                        ]}
                    />
                </div>
            </div>
        </section>
    )
}

// Sub-component for Team Cards
function TeamCard({ image, name, description, experience, delay = 0 }: any) {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            className="flex flex-col bg-whitegray/5 rounded-2xl p-6 border border-whitegray/10 hover:border-primary/20 transition-all group"
        >
            <div className="relative w-48 h-48 mb-6 overflow-hidden rounded-2xl shadow-lg mx-auto lg:mx-0">
                <Image 
                    src={image} 
                    fill
                    alt={name} 
                    className="object-cover"
                />
            </div>
            <h3 className="font-black text-2xl text-primary mb-4 leading-tight">{name}</h3>
            <p className="text-grey text-sm leading-relaxed mb-6 text-justify">
                {description}
            </p>
            <div className="mt-auto pt-6 border-t border-whitegray/20">
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-secondary mb-3">Key Experience</h4>
                <ul className="space-y-2">
                    {experience.slice(0, 7).map((item: string, idx: number) => (
                        <li key={idx} className="flex gap-2 text-[11px] text-grey/80 leading-snug">
                            <span className="text-primary">•</span>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </motion.div>
    )
}