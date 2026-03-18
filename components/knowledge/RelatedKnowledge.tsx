// import Link from "next/link";
// import { HiArrowLongRight } from "react-icons/hi2";

// export default function RelatedKnowledge({ post }: { post: any }) {
//     return (
//         <Link href={`/knowledge/${post.slug}`} className="group block">
//             <div className="bg-whitegray/5 border border-whitegray/10 p-6 rounded-xl group-hover:bg-primary transition-all duration-500 h-full flex flex-col">
//                 <span className="text-[10px] font-bold uppercase tracking-widest text-secondary mb-4 group-hover:text-white transition-colors">
//                     {post.category}
//                 </span>
//                 <h4 className="text-xl font-black text-primary group-hover:text-white leading-tight mb-4 transition-colors">
//                     {post.title}
//                 </h4>
//                 <div className="mt-auto flex items-center justify-between pt-4 border-t border-whitegray/10 group-hover:border-white/20">
//                     <span className="text-[10px] text-grey group-hover:text-white/60 uppercase font-bold tracking-tighter transition-colors">
//                         {post.date}
//                     </span>
//                     <HiArrowLongRight className="text-secondary group-hover:text-white transform group-hover:translate-x-1 transition-all" />
//                 </div>
//             </div>
//         </Link>
//     );
// }

import Link from "next/link";
import { HiArrowLongRight } from "react-icons/hi2";

export default function RelatedKnowledge({ post }: { post: any }) {
    return (
        <Link href={`/knowledge/${post.slug}`} className="group block h-full">
            <div className="relative overflow-hidden bg-white border border-whitegray/10 p-6 rounded-xl border border-whitegray h-full flex flex-col 
                            transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]
                            hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)]">
                
                {/* Subtle Gradient Reveal on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10 flex flex-col h-full">
                    {/* Category Tag */}
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary mb-6">
                        {post.category}
                    </span>
                    
                    {/* Title with balanced line-height */}
                    <h4 className="text-xl md:text-xl font-bold text-primary leading-[1.2] mb-6 
                                   transition-colors duration-500 group-hover:text-black">
                        {post.title}
                    </h4>

                    {/* Footer with Shifting Arrow */}
                    <div className="mt-auto flex items-center justify-between pt-6 border-t border-whitegray/5">
                        <span className="text-[11px] text-grey/60 uppercase font-bold tracking-widest">
                            {post.date}
                        </span>
                        
                        <div className="flex items-center gap-2 overflow-hidden">
                            <span className="text-[10px] font-bold uppercase tracking-widest text-primary 
                                           translate-x-10 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 
                                           transition-all duration-500 delay-75">
                                Read Article
                            </span>
                            <HiArrowLongRight 
                                className="text-secondary group-hover:text-primary transition-all duration-500 
                                           transform group-hover:scale-110" 
                                size={24} 
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}