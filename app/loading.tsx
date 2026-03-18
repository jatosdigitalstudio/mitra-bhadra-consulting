// 'use client'

// import { motion } from "framer-motion";

// export default function Loading() {
//   return (
//     <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-[9999]">
//       <div className="relative flex flex-col items-center">
        
//         {/* Abstract "Governance" Bars Animation */}
//         <div className="flex items-end gap-1.5 h-12 mb-8">
//           {[...Array(4)].map((_, i) => (
//             <motion.div
//               key={i}
//               initial={{ height: 8 }}
//               animate={{ 
//                 height: [8, 48, 8],
//                 backgroundColor: i % 2 === 0 ? "#026A0B" : "#F97500" // Alternating brand colors
//               }}
//               transition={{
//                 duration: 1.2,
//                 repeat: Infinity,
//                 delay: i * 0.15,
//                 ease: "easeInOut",
//               }}
//               className="w-3 rounded-full"
//             />
//           ))}
//         </div>

//         {/* Brand Text Reveal */}
//         <motion.div
//           initial={{ opacity: 0, y: 10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="flex flex-col items-center"
//         >
//           <span className="text-primary font-black tracking-[0.3em] uppercase text-sm">
//             Mitra Bhadra
//           </span>
//           <div className="flex items-center gap-2 mt-1">
//             <div className="h-[1px] w-4 bg-secondary" />
//             <span className="text-grey text-[10px] uppercase tracking-widest font-bold">
//               Consulting
//             </span>
//             <div className="h-[1px] w-4 bg-secondary" />
//           </div>
//         </motion.div>

//         {/* Progress Line */}
//         <div className="absolute -bottom-12 w-48 h-[2px] bg-whitegray/20 overflow-hidden">
//           <motion.div 
//             initial={{ x: "-100%" }}
//             animate={{ x: "100%" }}
//             transition={{ 
//               duration: 1.5, 
//               repeat: Infinity, 
//               ease: "linear" 
//             }}
//             className="w-1/2 h-full bg-gradient-to-r from-transparent via-secondary to-transparent"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

'use client'

import Image from "next/image";
import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-[9999]">
      <div className="relative flex flex-col items-center">
        
        {/* Logo Container with Breathing Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ 
            opacity: [0.5, 1, 0.5],
            scale: [0.98, 1, 0.98] 
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="relative w-64 h-32 md:w-60 md:h-30"
        >
          <Image
            src="/images/mbc-logo-tp.png" // Ensure this path matches your public folder
            alt="Mitra Bhadra Consulting"
            fill
            priority
            className="object-contain"
          />
        </motion.div>

        {/* Professional Progress Bar */}
        <div className="mt-8 w-48 h-[2px] bg-whitegray/20 relative overflow-hidden rounded-full">
          <motion.div
            initial={{ left: "-100%" }}
            animate={{ left: "100%" }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-0 h-full w-1/2 bg-gradient-to-r from-transparent via-secondary to-transparent"
          />
        </div>

        {/* Loading Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-4 text-[10px] font-bold uppercase tracking-[0.4em] text-primary"
        >
          Preparing Excellence
        </motion.p>
      </div>
    </div>
  );
}