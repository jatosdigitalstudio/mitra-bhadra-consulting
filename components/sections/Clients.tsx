'use client'

import Image from "next/image"
import { motion } from "framer-motion"
import { CLIENTS, ClientItem} from "@/constants/data"

export default function Clients() {
  return (
    <section className="bg-white py-24 lg:py-32" id="clients">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        
        {/* Signature MBC Header */}
        <div className="mb-12 flex flex-col items-center">
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            className="h-1.5 bg-secondary rounded-full mb-4" 
          />
          <div className="bg-primary rounded-2xl px-10 py-6 shadow-xl shadow-primary/10">
            <h2 className="text-white font-bold leading-tight text-3xl md:text-5xl text-center">
              Klien <span className="italic font-medium opacity-80">Kami</span>
            </h2>
          </div>
        </div>

       {/* Regular Show Logo Grid */}
        <div className="w-full bg-white rounded-[2rem] p-4 md:p-10 border border-whitegray/20">
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center">
            {CLIENTS.map((client: ClientItem) => (
              <div
                key={client.id}
                className="relative flex justify-center items-center h-16 w-full"
              >
                <div className="relative w-full h-full">
                  <Image 
                    src={client.src} 
                    alt={client.alt}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 12vw"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* <div className="mt-16 flex items-center gap-4 opacity-30">
          <div className="h-px w-20 bg-grey" />
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-grey">Proven Track Record</span>
          <div className="h-px w-20 bg-grey" />
        </div> */}
      </div>
    </section>
  )
}