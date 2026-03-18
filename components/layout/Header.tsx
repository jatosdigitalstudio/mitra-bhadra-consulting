'use client'

import * as React from "react";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { RiLinkedinBoxFill, RiInstagramFill, RiMenu3Line, RiCloseLine, RiArrowDownSLine } from 'react-icons/ri';
import { MENU, MenuItem } from "@/constants/routes";

export default function Header() {
  const path = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => setIsOpen(false), [path]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex flex-col items-center">
      <nav 
        className={`mt-4 w-full max-w-[86em] transition-all duration-500 ease-in-out border rounded-md flex items-center justify-between px-6 
        ${scrolled 
          ? "h-[60px] bg-white/80 backdrop-blur-xl shadow-2xl border-slate-200/50" 
          : "h-[70px] bg-white border-transparent shadow-sm"
        }`}
      >
        {/* Logo */}
        <Link href='/' className='relative h-12 w-32 md:w-40 transition-transform active:scale-95'>
          <Image 
            src="/images/mbc-logo-tp.png" 
            fill 
            alt="Logo MBC" 
            priority 
            className="object-contain object-left" 
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-2">
          {MENU.map((link, i) => (
            <li key={i} className="relative group">
              {link.sub ? (
                <div className="relative">
                  <button className="flex items-center gap-1 px-4 py-2 text-[14px] font-semibold text-slate-700 hover:text-primary transition-colors rounded-lg group-hover:bg-slate-50">
                    {link.name}
                    <RiArrowDownSLine className="transition-transform group-hover:rotate-180" />
                  </button>
                  {/* Modern Dropdown */}
                  <div className="absolute top-full left-0 pt-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300">
                    <ul className="bg-white border border-slate-100 shadow-2xl rounded-xl p-2 w-72">
                      {link.sub.map((sub, j) => (
                        <li key={j}>
                          <Link href={sub.path} className="block px-4 py-3 text-[13px] font-medium text-slate-600 hover:bg-primary/5 hover:text-primary rounded-lg transition-all">
                            {sub.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                <Link 
                  href={link.path} 
                  className={`px-4 py-2 text-[14px] font-semibold rounded-lg transition-all ${
                    path === link.path ? "text-primary bg-primary/5" : "text-slate-700 hover:text-primary hover:bg-slate-50"
                  }`}
                >
                  {link.name}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Right Action */}
        <div className="flex items-center gap-4">
          <Link 
            href="/contact" 
            className="hidden md:flex bg-slate-900 text-white px-5 py-2.5 rounded-sm text-[13px] font-bold hover:bg-primary hover:shadow-lg hover:shadow-primary/20 transition-all active:scale-95"
          >
            Get in Touch
          </Link>
          
          <button 
            onClick={() => setIsOpen(true)}
            className="lg:hidden p-2 text-slate-900 hover:bg-slate-100 rounded-xl transition-colors"
          >
            <RiMenu3Line size={26} />
          </button>
        </div>
      </nav>

      {/* 3. Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[60]" 
            />
            <motion.aside 
              initial={{ x: "100%" }} 
              animate={{ x: 0 }} 
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-[85%] max-w-sm bg-white z-[70] shadow-2xl flex flex-col p-8"
            >
              <div className="flex justify-between items-center mb-10">
                <div className="relative h-8 w-24">
                   <Image src="/images/mbc-logo-tp.png" fill alt="Logo" className="object-contain object-left" />
                </div>
                <button onClick={() => setIsOpen(false)} className="p-2 bg-slate-100 rounded-full text-slate-900">
                  <RiCloseLine size={24} />
                </button>
              </div>

              <nav className="flex-1">
                <ul className="flex flex-col gap-2">
                  {MENU.map((link, i) => (
                    <li key={i}>
                      {link.sub ? (
                        <div className="space-y-2">
                          <p className="text-[12px] font-bold text-slate-400 uppercase tracking-widest pl-4">{link.name}</p>
                          <ul className="space-y-1">
                            {link.sub.map((s, j) => (
                              <li key={j}>
                                <Link href={s.path} className="block py-3 px-4 text-slate-700 font-semibold hover:bg-slate-50 rounded-xl">{s.name}</Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ) : (
                        <Link href={link.path} className={`block py-4 px-4 rounded-xl font-bold ${path === link.path ? "bg-primary text-white" : "text-slate-800 hover:bg-slate-50"}`}>
                          {link.name}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}