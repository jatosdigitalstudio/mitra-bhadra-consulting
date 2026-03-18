'use client'

import { MENU } from "@/constants/routes"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { HiArrowRight } from "react-icons/hi2"

export default function ServiceCTA() {
    const path = usePathname();
    
    const services = MENU[2]?.sub || [];

    return (
        <section className="px-6 pb-24">
            <div className="relative md:max-w-7xl mx-auto overflow-hidden rounded-xl shadow-xl shadow-primary/20">
                {/* Background Pattern with Overlay */}
                <div 
                    className="absolute inset-0 bg-[url('/images/bg-pattern.jpg')] bg-cover bg-center"
                    aria-hidden="true"
                />
                <div className="absolute inset-0 bg-primary/90 backdrop-blur-[2px]" />

                {/* Content */}
                <div className="relative p-6 md:py-16 md:px-8 md:px-20">
                    <div className="flex flex-col items-center mt-4 md:mt-0 mb-8 md:mb-12">
                        <h4 className="text-2xl lg:text-4xl font-bold text-white text-center tracking-tight">
                            Layanan <span className="text-secondary italic">MBC</span> Lainnya
                        </h4>
                        <div className="w-12 h-1 bg-secondary rounded-full mt-4" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {services.map((data, idx) => {
                            const isActive = data.path === path;
                            
                            return (
                                <Link 
                                    key={idx} 
                                    href={data.path} 
                                    className="group relative"
                                >
                                    <motion.div
                                        whileTap={{ scale: 0.98 }}
                                        className={`
                                            h-full flex items-center justify-between p-5 rounded-xl transition-all duration-300
                                            ${isActive 
                                                ? "bg-secondary text-white shadow-lg shadow-secondary/20" 
                                                : "bg-white/10 border border-white/20 text-white hover:bg-white hover:text-primary"
                                            }
                                        `}
                                    >
                                        <span className={`text-sm lg:text-base font-medium tracking-wide leading-tight ${isActive ? "opacity-100" : "opacity-90"}`}>
                                            {data.name}
                                        </span>
                                        
                                        <HiArrowRight 
                                            className={`shrink-0 transition-transform duration-300 ${isActive ? "rotate-0" : "-rotate-45 group-hover:rotate-0"}`} 
                                            size={20} 
                                        />
                                    </motion.div>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}