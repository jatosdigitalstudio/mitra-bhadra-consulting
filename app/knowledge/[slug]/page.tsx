// import fs from "fs";
// import path from "path";
// import matter from "gray-matter";
// import { Metadata } from "next";
// import { notFound } from "next/navigation";
// import KnowledgeClient from "@/components/knowledge/KnowledgeClient";

// export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
//     const { slug } = await params;
//     try {
//         const filePath = path.join(process.cwd(), "src/content/blog", `${slug}.mdx`);
//         const fileContent = fs.readFileSync(filePath, "utf-8");
//         const { data } = matter(fileContent);
//         return { title: `${data.title} | MBC`, description: data.excerpt };
//     } catch (e) {
//         return { title: "Knowledge Center | MBC" };
//     }
// }

// export default async function KnowledgePostPage({ params }: { params: Promise<{ slug: string }> }) {
//     const { slug } = await params;
//     const filePath = path.join(process.cwd(), "src/content/blog", `${slug}.mdx`);

//     // Guard: If file doesn't exist, show Next.js 404 page
//     if (!fs.existsSync(filePath)) {
//         notFound();
//     }

//     const fileContent = fs.readFileSync(filePath, "utf-8");
//     const { content, data } = matter(fileContent);

//     return <KnowledgeClient content={content} metadata={data} />;
// }


import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import KnowledgeClient from "@/components/knowledge/KnowledgeClient";

// 1. Generate SEO Metadata (Awaiting params is required here too)
export async function generateMetadata({ 
    params 
}: { 
    params: Promise<{ slug: string }> 
}): Promise<Metadata> {
    const { slug } = await params; // Resolve the promise
    
    try {
        const filePath = path.join(process.cwd(), "constants/knowledge", `${slug}.mdx`);
        const fileContent = fs.readFileSync(filePath, "utf-8");
        const { data } = matter(fileContent);

        return {
            title: `${data.title}`,
            description: data.excerpt,
        };
    } catch (e) {
        return { title: "Knowledge Center | MBC" };
    }
}

// 2. The Server Page Logic
export default async function KnowledgePostPage({ 
    params 
}: { 
    params: Promise<{ slug: string }> 
}) {
    // IMPORTANT: You must await the params in Next.js 15
    const { slug } = await params; 

    const filePath = path.join(process.cwd(), "constants/knowledge", `${slug}.mdx`);

    // 3. Safety Check: If file doesn't exist, trigger 404
    if (!fs.existsSync(filePath)) {
        console.error(`File not found at: ${filePath}`);
        notFound();
    }

    try {
        const fileContent = fs.readFileSync(filePath, "utf-8");
        const { content, data } = matter(fileContent);

        // Pass the raw content and metadata to the Client Component
        return <KnowledgeClient content={content} metadata={data} />;
    } catch (error) {
        console.error("Error reading MDX file:", error);
        notFound();
    }
}