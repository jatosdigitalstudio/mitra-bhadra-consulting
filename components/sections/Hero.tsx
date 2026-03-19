// 'use client'

// import { motion } from "framer-motion";
// import { RiArrowRightDownLine } from "react-icons/ri";

// export default function Hero() {
//   const scrollToAbout = () => {
//     const element = document.getElementById("about");
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <section 
//       className="relative min-h-screen w-full flex items-center overflow-hidden" 
//       id="beranda"
//     >
//       {/* Background with Overlay */}
//       <div className="absolute inset-0 z-0">
//         <div 
//           className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105"
//           style={{ backgroundImage: "url('/images/mbc-hero.png')" }}
//         />
//       </div>

//       <div className="container mx-auto px-6 relative z-10">
//         <div className="flex flex-col items-start md:items-end w-full">
//           <div className="max-w-2xl text-left md:mr-12 lg:mr-20">
            
//             {/* Sub-heading */}
//             <motion.span 
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//               className="inline-block text-secondary font-style uppercase tracking-[0.28em] text-sm md:text-base mb-4"
//             >
//               Achieve business sustainability by
//             </motion.span>

//             {/* Main Heading */}
//             <motion.h1 
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//               className="text-white font-text font-semibold text-5xl md:text-7xl leading-[1.1] mb-8"
//             >
//               Creating <br className="hidden md:block" /> 
//                 Shared Value
//             </motion.h1>

//             {/* CTA Button */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.4 }}
//             >
//               <button 
//                 onClick={scrollToAbout}
//                 className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white text-slate-900 font-bold rounded-xl overflow-hidden transition-all hover:bg-primary hover:text-white"
//               >
//                 <span className="relative z-10">Tentang Kami</span>
//                 <RiArrowRightDownLine className="relative z-10 transition-transform group-hover:rotate-[-45deg]" size={20} />
//                 <div className="absolute inset-0 bg-primary translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300" />
//               </button>
//             </motion.div>
//           </div>
//         </div>
//       </div>

//       {/* Subtle Scroll Indicator */}
//       <motion.div 
//         animate={{ y: [0, 10, 0] }}
//         transition={{ repeat: Infinity, duration: 2 }}
//         className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block"
//       >
//         <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent opacity-50" />
//       </motion.div>
//     </section>
//   )
// }

'use client'

import { motion } from "framer-motion";
import { RiArrowRightDownLine } from "react-icons/ri";

export default function Hero() {
  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      className="relative min-h-screen w-full flex items-center overflow-hidden" 
      id="beranda"
    >
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 scale-105
                     bg-[url('/images/mbc-hero-mobile.webp')] 
                     md:bg-[url('/images/mbc-hero.webp')]"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col mt-[-14em] md:mt-0 items-left text-left md:items-end md:text-left w-full">
          <div className="max-w-xl w-[90%] md:w-full md:mr-8">
            {/* Sub-heading */}
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block text-white leading-loose font-style uppercase tracking-[0.28em] text-xs md:text-base mb-4 md:bg-transparent px-2 py-1 md:p-0 rounded"
            >
              Achieve business sustainability by
            </motion.span>

            {/* Main Heading */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white font-text font-semibold text-5xl  md:text-7xl leading-[1.1] mb-8"
            >
              Creating <br className="hidden md:block" /> 
              Shared Value
            </motion.h1>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <button 
                onClick={scrollToAbout}
                className="group relative inline-flex items-center  px-4 py-2 gap-3 md:px-8 md:py-4 bg-white text-black font-bold rounded-md overflow-hidden transition-all cursor-pointer hover:bg-primary hover:text-white active:scale-95"
              >
                <span className="relative z-10">Tentang Kami</span>
                <RiArrowRightDownLine className="relative z-10 transition-transform group-hover:rotate-[-45deg]" size={20} />
                <div className="absolute inset-0 bg-primary translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300" />
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent opacity-50" />
      </motion.div>
    </section>
  )
}