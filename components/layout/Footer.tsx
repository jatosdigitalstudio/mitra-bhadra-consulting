'use client'

import Link from "next/link"
import Image from "next/image"
import React from "react"
import {
    RiMapPinLine,
    RiMessage2Line,
    RiPhoneLine,
    RiInstagramFill,
    RiFacebookBoxFill,
    RiLinkedinBoxFill
} from "react-icons/ri"
import { HiEnvelope, HiPhone, HiMiniBuildingOffice } from "react-icons/hi2";


export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative bg-primary text-white" id="kontak">
            {/* Background Pattern with Overlay */}
            <div 
                className="absolute inset-0 bg-[url('/images/bg-pattern.jpg')] bg-cover bg-center"
                aria-hidden="true"
            />
            <div className="absolute inset-0 bg-primary/95 backdrop-blur-[2px]" />
            <div className="relative max-w-7xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
                    
                    {/* Brand Section */}
                    <div className="lg:col-span-4">
                        <div className="inline-block bg-white px-4 py-2 rounded-lg shadow-sm mb-6">
                            <Link href="/">
                                <Image 
                                    src="/images/mbc-logo.jpg" 
                                    width={180} 
                                    height={90} 
                                    alt="Logo MBC" 
                                    className="object-contain"
                                />
                            </Link>
                        </div>
                        <p className="text-gray-200 text-sm leading-relaxed mb-6 max-w-sm">
                            Providing expert consultancy services with high standards of integrity and professionalism.
                        </p>
                        <div className="flex gap-4">
                            <SocialLink href="https://linkedin.com/..." icon={<RiLinkedinBoxFill size={24} />} />
                            <SocialLink href="https://facebook.com/..." icon={<RiFacebookBoxFill size={24} />} />
                            <SocialLink href="https://instagram.com/..." icon={<RiInstagramFill size={24} />} />
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="lg:col-span-3 lg:offset-1">
                        <h3 className="text-lg font-bold mb-6 border-l-4 border-secondary pl-3">Menu</h3>
                        <ul className="space-y-4">
                            <FooterLink href="/about">Tentang Kami</FooterLink>
                            <FooterLink href="/teams">Tenaga Ahli</FooterLink>
                            <FooterLink href="/knowledge">Pusat Pengetahuan</FooterLink>
                            <FooterLink href="/contact">Hubungi Kami</FooterLink>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="lg:col-span-4">
                        <h3 className="text-lg font-bold mb-6 border-l-4 border-secondary pl-3">Kontak</h3>
                        <ul className="space-y-5">
                            <li className="flex items-start gap-3 group">
                                <HiEnvelope className="text-white mt-1 shrink-0" size={20} />
                                <a href="mailto:general@mitrabhadraconsulting.com" className="text-gray-200 hover:text-white transition-colors break-all">
                                    general@mitrabhadraconsulting.com
                                </a>
                            </li>
                            <li className="flex items-start gap-3 group">
                                <HiPhone className="text-white mt-1 shrink-0" size={20} />
                                <a href="tel:+6282110778860" className="text-gray-200 hover:text-white transition-colors">
                                    0821-1077-8860
                                </a>
                            </li>
                            <li className="flex items-start gap-3">
                                <HiMiniBuildingOffice className="text-white mt-1 shrink-0" size={20} />
                                <address className="not-italic text-gray-200 text-sm leading-relaxed">
                                    <span className="font-semibold text-white">PT Mitra Bhadra Consulting</span><br/>
                                    Gedung Tifa Arum Realty Lt. 3, Ruang 304,<br/>
                                    Jl. Kuningan Barat No.26, Jakarta Selatan,<br/>
                                    12170. Indonesia
                                </address>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="relative bg-black/20 border-t border-white/10 py-6">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <p className="text-sm text-gray-200">
                        &copy; {currentYear} Mitra Bhadra Consulting
                    </p>
                </div>
            </div>
        </footer>
    )
}

// Sub-components for cleaner code
function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
    return (
        <Link href={href} target="_blank" className="p-2 bg-white/10 rounded-full hover:bg-white hover:text-primary transition-all duration-300">
            {icon}
        </Link>
    )
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <li>
            <Link href={href} className="text-gray-300 hover:text-white hover:translate-x-1 inline-block transition-all duration-200">
                {children}
            </Link>
        </li>
    )
}