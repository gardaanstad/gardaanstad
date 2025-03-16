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
        /* link styling (a) is in globals.css */
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
