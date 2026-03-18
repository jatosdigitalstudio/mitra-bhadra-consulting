import { BsCheckCircleFill } from "react-icons/bs";

export const mdxComponents = {
    // Usage: <Highlight>text</Highlight>
    Highlight: ({ children }: any) => (
        <span className="font-bold text-primary underline decoration-secondary decoration-2 underline-offset-4">
            {children}
        </span>
    ),
    // Usage: <Callout>text</Callout>
    Callout: ({ children }: any) => (
        <div className="my-8 p-8 bg-primary/5 rounded-[2rem] border-l-8 border-secondary italic text-primary font-medium">
            {children}
        </div>
    ),
    // Usage: <Point>text</Point>
    Point: ({ children }: any) => (
        <div className="flex gap-4 items-start my-4">
            <BsCheckCircleFill className="text-secondary mt-1.5 shrink-0" size={20} />
            <span className="text-grey text-lg leading-relaxed">{children}</span>
        </div>
    ),
};