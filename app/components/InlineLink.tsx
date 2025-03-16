import Link from "next/link";
import { ReactNode } from "react";

interface InlineLinkProps {
  href: string;
  text: string;
  icon?: ReactNode;
  target?: string;
  rel?: string;
}

export default function InlineLink({ 
  href, 
  text, 
  icon, 
  target = "_blank", 
  rel = "noopener noreferrer" 
}: InlineLinkProps) {
  return (
    <span className="whitespace-normal">
      {" "}
      <Link 
        href={href} 
        target={target}
        rel={rel}
        className="border-b border-white md:border-zinc-800 md:hover:border-zinc-600 md:hover:text-white md:transition-colors"
      >
        {text}
      </Link>
      {icon && (
        <span className="inline-flex align-middle ml-1">
          {icon}
        </span>
      )}
    </span>
  );
}
