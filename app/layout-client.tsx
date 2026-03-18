"use client";

import { useEffect, useState } from "react";
import Loading from "./loading";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/ui/SmoothScroll";
import { AnimatePresence } from "framer-motion";

export default function LayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Shorter timeout for better UX, or keep 2000 if preferred
    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <Loading key="loader" />
      ) : (
        <div key="content" className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <SmoothScroll>{children}</SmoothScroll>
          </main>
          <Footer /> 
        </div>
      )} 
    </AnimatePresence>
  );
}