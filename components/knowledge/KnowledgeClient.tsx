'use client'

import { useState, useEffect } from "react";
import { useParams } from "next/navigation"; 
import Link from "next/link";
import { HiArrowLongRight } from "react-icons/hi2";
import { motion } from "framer-motion";
import { MDXRemote } from "next-mdx-remote/rsc";
import Loading from "@/app/loading";
import { mdxComponents } from "@/components/knowledge/mdx-custom-components";
import { BLOG } from "@/constants/data";
import RelatedKnowledge from "./RelatedKnowledge";

export default function KnowledgeClient({ content, metadata }: any) {
    const [loading, setLoading] = useState(true);
    const params = useParams(); 
    const currentSlug = params?.slug;

    const relatedPosts = BLOG
        .filter(post => post.slug !== currentSlug)
        .sort(() => Math.random() - 0.5) 
        .slice(0, 2);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1200);
        return () => clearTimeout(timer);
    }, []);

    if (loading) return <Loading />;

    return (
        <section className="bg-white min-h-screen">
            <header className="pt-32 pb-16 px-6 max-w-4xl mx-auto">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                    <div className="w-20 h-1.5 bg-secondary rounded-full mb-6" />
                    <div className="bg-primary inline-block rounded-2xl px-6 py-4 shadow-2xl shadow-primary/10 mb-8">
                        <h1 className="text-white font-bold text-2xl md:text-4xl uppercase leading-tight">
                            {metadata.title}
                        </h1>
                    </div>
                    <p className="text-grey text-xs font-bold uppercase tracking-widest">
                        {metadata.category} • By {metadata.author} • {metadata.date}
                    </p>
                </motion.div>
            </header>

            {/* Manual Markdown Styling */}
            <div className="max-w-4xl mx-auto px-6 pb-12 text-grey text-lg leading-relaxed
                          [&_h2]:text-primary [&_h2]:text-3xl [&_h2]:font-black [&_h2]:mt-16 [&_h2]:mb-6
                          [&_h3]:text-primary [&_h3]:text-2xl [&_h3]:font-bold [&_h3]:mt-10 [&_h3]:mb-4
                          [&_p]:mb-8 [&_p]:text-justify
                          [&_ul]:list-disc [&_ul]:ml-8 [&_ul]:mb-8
                          [&_strong]:text-black [&_strong]:font-bold">
                <MDXRemote source={content} components={mdxComponents} />
            </div>
            
            <section className="bg-whitegray/5 pb-20 px-6">
                <div className="max-w-4xl border-t border-black/60 mx-auto ">
                    <div className="flex items-center justify-between my-10">
                        <h3 className="text-2xl font-bold text-primary uppercase tracking-tight">
                            Read More <span className="italic font-medium text-secondary">Knowledge</span>
                        </h3>
                        <div className="h-px bg-whitegray/20 flex-grow ml-8 hidden md:block" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {relatedPosts.map((post) => (
                            <motion.div 
                                key={post.slug}
                            >
                                <RelatedKnowledge post={post} />
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <Link 
                            href="/knowledge" 
                            className="text-primary font-bold text-sm uppercase tracking-widest hover:text-secondary transition-colors inline-flex items-center gap-2"
                        >
                            Back to Knowledge Center <HiArrowLongRight />
                        </Link>
                    </div>
                </div>
            </section>
        </section>
    );
}