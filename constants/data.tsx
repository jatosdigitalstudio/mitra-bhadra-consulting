import { JSX } from "react";
import { HiMiniBuildingLibrary, HiMiniPresentationChartLine } from "react-icons/hi2";
import { FaHandshake, FaHammer } from "react-icons/fa";

export interface ServiceItem {
  icons: JSX.Element; 
  style: string;
  path: string;
  title: string;
  text: string;
}

export interface TeamMember {
  name: string;
  text: string;
}

export interface ClientItem {
  id: number;
  src: string;
  alt: string;
}

export const SERVICE: ServiceItem[] = [
  {
    icons: <HiMiniBuildingLibrary />, 
    style: "bg-primary",
    path: "/services/good-corporate-governance",
    title: "Good Corporate Governance",
    text: "Tekanan regulasi serta tuntutan dari Shareholders/Lenders terus meningkat. Untuk memberikan rasa aman dan kepastian akan kelangsungan bisnis. Prinsip prinsip GCG harus terrefleksikan didalam budaya maupun kegiatan sehari hari perusahaan.",
  }, // Fixed: Ensure comma is here
  {
    icons: <FaHandshake />,
    style: "bg-secondary",
    path: "/services/corporate-social-responsibility",
    title: "Corporate Social Responsibility",
    text: "Keberlangsungan suatu Organisasi juga sangat bergantung kepada masyarakat sekitar dan bagaimana kita berdamai dengan lingkungan tempat Anda melakukan aktivitas bisnis. Strategi CSR yang baik dapat menciptakan manfaat yang timbal balik (CSV).",
  },
  {
    icons: <HiMiniPresentationChartLine />,
    style: "bg-primary",
    path: "/services/integrated-governance-risk-and-compliance",
    title: "Annual / Sustainability Reporting",
    text: "Laporan Tahunan dan Laporan Berkelanjutan merupakan sarana Organisasi didalam penerapan prinsip GCG yaitu transparansi. Laporan Tahunan juga merupakan sarana penting untuk berkomunikasi dengan Shareholders.",
  },
  {
    icons: <FaHammer />,
    style: "bg-secondary",
    path: "/services/sistem-manajemen-anti-penyuapan",
    title: "Anti Bribery Management System",
    text: "Pemerintah Indonesia sangat mendukung aktivitas untuk memerangi korupsi agar terciptanya lingkungan bisnis yang bersih. BoD tetap bertanggung jawab atas praktik yang dilakukan karyawannya. Perusahaan perlu memperkuat sistem manajemen anti-suap.",
  }
];

export const TEAMS: TeamMember[] = [
  {
    name: "Dr. Mas Achmad Daniri, MEc",
    text: "Mas Achmad Daniri menjabat sebagai Ketua Komite Nasional Kebijakan Governance (KNKG). Beliau ahli di bidang pasar modal (capital market), industri manufaktur, corporate governance dan corporate social responsibility dengan pengalaman lebih dari 30 tahun. Beliau pendiri dan Senior Advisor PT Mitra Bhadra Consulting, serta telah menulis beberapa buku terkait penerapan GCG dan ES-GRC.",
    
  },
  {
    name: "Irwan M. Habsjah, MA",
    text: "Memiliki kompetensi di bidang perbankan, pasar modal, dan corporate governance sebagai hasil dari pengalamannya selama lebih dari 30 tahun pada sektor perbankan korporasi. Sejak tahun 2009 beliau terlibat aktif dalam kegiatan financial inclusion di Indonesia.",
  },
  {
    name: "Syahnan Poerba, S.E., MEc",
    text: "Memiliki pengalaman sebagai Direktur selama 30 tahun di perusahaan jasa keuangan maupun non keuangan. Praktisi dalam penerapan sukses Good Governance, Enterprise Risk Management, Corporate Social Responsibility didukung dengan pengalaman lainnya dalam organization development serta membawa perusahaan melakukan Initial Public Offering (IPO)."
  }
];

export const CLIENTS: ClientItem[] = Array.from({ length: 40 }, (_, i) => ({
  id: i + 1,
  src: `/images/client/client-${i + 1}.png`,
  alt: `Logo Client ${i + 1}`,
}));


export interface BlogType {
    slug: string;
    author: string;
    title: string;
    date: string;
    category: string;
    excerpt: string;
}

export const BLOG: BlogType[] = [
    {
        slug: "bribery-no-gcg-yes",
        author: "Edoh Permatasari",
        title: "Bribery No, GCG Yes!",
        date: "2020-03-07",
        category: "Governance",
        excerpt: "Penyuapan merupakan tantangan integritas terbesar. Pelajari bagaimana GCG menjadi solusi fundamental untuk membangun bisnis yang bersih."
    },
    {
        slug: "mengapa-manajemen-grc-penting",
        author: "Edoh Permatasari",
        title: "Mengapa Manajemen GRC Menjadi Semakin Penting Di Seluruh Dunia?",
        date: "2020-03-07",
        category: "Risk & Compliance",
        excerpt: "Dunia bisnis penuh ketidakpastian. Integrasi Governance, Risk, dan Compliance (GRC) menghapus sistem kerja silo dan meningkatkan efisiensi."
    },
    {
        slug: "esg-is-it-a-must",
        author: "Edoh Permatasari",
        title: "Environment, Sosial, Governance (ESG) is it a Must?",
        date: "2021-11-09",
        category: "Sustainability",
        excerpt: "ESG kini menjadi bahasa universal bagi investor global. Temukan mengapa keberlanjutan adalah investasi jangka panjang yang tidak bisa diabaikan."
    },
];