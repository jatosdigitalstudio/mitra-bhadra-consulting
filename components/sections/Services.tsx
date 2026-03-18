'use client'

import Link from "next/link";
import { motion } from "framer-motion";
import { SERVICE, ServiceItem } from "@/constants/data";
import { RiArrowRightUpLine } from "react-icons/ri";
import React from "react";

export default function Services() {
  return (
    <section className="w-full bg-white" id="service">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full border-t border-whitegray/20">
        {SERVICE.map((item: ServiceItem, idx: number) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="h-full"
          >
            <Link 
              href={item.path}
              className={`group relative flex flex-col h-full min-h-[500px] p-10 lg:p-12 transition-all duration-500 overflow-hidden ${item.style}`}
            >
              {/* Centered Active Icon Container */}
              <div className="relative z-10 mb-10 self-center"> 
                <div className="flex p-5 bg-white/10 rounded-full backdrop-blur-md border border-white/20 transition-all duration-500 group-hover:scale-110 group-hover:bg-white/20 group-hover:shadow-xl group-hover:shadow-black/10">
                  {React.isValidElement(item.icons) && React.cloneElement(item.icons as React.ReactElement<any>, { 
                    size: 56, // Slightly larger for the centered look
                    className: "text-white" 
                  })}
                </div>
              </div>

              {/* Text Content - Keeping text left-aligned for a professional look */}
              <div className="relative z-10 flex flex-col h-full text-center md:text-left">
                <h3 className="text-white font-black text-2xl mb-6 leading-tight min-h-[4rem]">
                  {item.title}
                </h3>
                
                <p className="text-white/80 text-sm md:text-base leading-relaxed mb-8 text-justify">
                  {item.text}
                </p>

                {/* Footer Action */}
                <div className="mt-auto flex items-center justify-center md:justify-start gap-3 text-white font-bold text-xs uppercase opacity-0 translate-x-[-10px] transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0">
                  Pelajari Lebih Lanjut <RiArrowRightUpLine size={18} className="text-white" />
                </div>
              </div>

              {/* Hover Darken Effect */}
              <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10 pointer-events-none" />
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}