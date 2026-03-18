import { Metadata } from "next";
import KnowledgeListClient from "@/components/pages/KnowledgeListClient";

export const metadata: Metadata = {
  title: "Knowledge Center | Strategic Insights & Business Advisory",
  description: "Jelajahi artikel mendalam mengenai GCG, ESG, Manajemen Risiko, dan strategi bisnis berkelanjutan dari para ahli di Mitra Bhadra Consulting.",
  openGraph: {
    title: "Knowledge Center | Mitra Bhadra Consulting",
    description: "Executive insights on Governance, Risk, and Sustainability.",
    type: "website",
  },
};

export default function KnowledgePage() {
  return <KnowledgeListClient />;
}