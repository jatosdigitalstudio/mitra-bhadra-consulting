// src/app/about/page.tsx
import AboutClient from "@/components/pages/AboutClient";

export const metadata = {
  title: "Tentang Kami | Mitra Bhadra Consulting",
  description: "Mengenal lebih dekat Mitra Bhadra Consulting, visi, misi, dan nilai-nilai kami.",
};

export default function AboutPage() {
  return <AboutClient />;
}