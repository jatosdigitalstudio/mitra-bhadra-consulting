'use client'

import Image from "next/image"
import { motion } from "framer-motion"
import { TEAMS, TeamMember } from "@/constants/data"

export default function Teams() {
  return (
    <section className="max-w-7xl mx-auto py-32 px-6" id="tentang">
      <div className="flex flex-col items-center">
        
        <div className="mb-20 flex flex-col items-center lg:items-start w-full">
          <div className="w-20 h-1.5 bg-secondary rounded-full mb-4" />
          <div className="bg-primary rounded-2xl px-8 py-6 shadow-xl shadow-primary/10">
            <h2 className="text-white font-bold leading-tight text-3xl lg:text-5xl">
              Tenaga Ahli <span className="italic font-medium opacity-80">MBC</span>
            </h2>
          </div>
        </div>

        {/* Dynamic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 w-full">
          {TEAMS.map((member: TeamMember, idx: number) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col group"
            >
              {/* Image with Accent Ring */}
              <div className="relative w-48 h-48 mb-8 self-center lg:self-start">
                <div className="absolute inset-0 bg-primary rounded-2xl rotate-3 group-hover:rotate-6 transition-transform duration-500" />
                <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-white z-10 shadow-lg">
                  <Image 
                    src={`/images/team-${idx + 1}.png`} 
                    fill 
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                    alt={member.name} 
                  />
                </div>
              </div>

              {/* Identity */}
              <h3 className="font-bold text-2xl text-black mb-4 group-hover:text-primary transition-colors">
                {member.name}
              </h3>
              
              <div className="w-12 h-1 bg-secondary mb-6 rounded-full" />

              <p className="text-grey text-justify text-sm leading-relaxed">
                {member.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}