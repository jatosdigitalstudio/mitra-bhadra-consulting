'use client'

import { useState, useEffect } from "react"
import Loading from "@/app/loading";
import Link from "next/link";
import { motion } from "framer-motion";
import { BLOG } from "@/constants/data";
import { HiArrowLongRight } from "react-icons/hi2";

export default function KnowledgeListClient() {
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 2000);
        return () => clearTimeout(timer);
    }, []);

    if (loading) return <Loading />
    return (
        <section className="bg-white py-24 lg:py-32 px-6">
            <div className="max-w-[85rem] mx-auto">
                
                {/* --- Branded Header --- */}
                <div className="flex flex-col items-center mb-20 text-center">
                    <div className="w-20 h-1.5 bg-secondary rounded-full mb-6" />
                    <div className="bg-primary rounded-2xl px-8 py-4 shadow-xl shadow-primary/10">
                        <h1 className="text-white font-bold text-2xl lg:text-5xl uppercase">
                            Knowledge <span className="italic font-medium opacity-80">Center</span>
                        </h1>
                    </div>
                </div>

                {/* --- Articles Grid --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {BLOG.map((post, idx) => (
                        <motion.div
                            key={post.slug}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                        >
                            <Link 
                                href={`/knowledge/${post.slug}`}
                                className="group flex flex-col h-full bg-whitegray/5 border border-whitegray/10 rounded-xl p-4 md:p-8 hover:bg-primary transition-all duration-500"
                            >
                                <div className="mb-6 flex justify-between items-start">
                                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary bg-secondary/10 px-4 py-1.5 rounded-full group-hover:bg-white group-hover:text-primary transition-colors">
                                        {post.category}
                                    </span>
                                </div>
                                
                                <h2 className="text-2xl font-black text-primary leading-tight mb-4 group-hover:text-white transition-colors">
                                    {post.title}
                                </h2>
                                
                                <p className="text-grey text-sm line-clamp-3 mb-10 group-hover:text-white/70 transition-colors">
                                    {post.excerpt}
                                </p>

                                <div className="mt-auto pt-6 border-t border-whitegray/10 group-hover:border-white/20 flex items-center justify-between">
                                    <div className="flex flex-col">
                                        <span className="text-black font-bold text-xs group-hover:text-white">{post.author}</span>
                                        <span className="text-grey text-[10px] group-hover:text-white/50">{post.date}</span>
                                    </div>
                                    <HiArrowLongRight className="text-secondary group-hover:text-white transform group-hover:translate-x-2 transition-all" size={24} />
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}