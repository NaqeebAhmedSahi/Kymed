import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

type DressStyleCardProps = {
  title: string;
  url: string;
  className?: string;
  style?: React.CSSProperties; // Accept inline styles
};

const DressStyleCard = ({ title, url, className, style }: DressStyleCardProps) => {
  return (
    <Link
      href={url}
      className={cn([
        "relative w-full md:h-full rounded-[20px] bg-white bg-top text-2xl md:text-4xl font-bold text-left py-4 md:py-[25px] px-6 md:px-9 bg-no-repeat bg-cover transition-all duration-300 transform hover:scale-[1.02] overflow-hidden group",
        className,
      ])}
      style={style}
    >
      {/* Subtle permanent overlay for readability, intensifies on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="absolute inset-0 bg-[#008C99]/10 group-hover:bg-[#008C99]/30 transition-all duration-300"></div>
      
      {/* Title with z-index and black text shadow */}
      <span 
        className="relative z-10 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] group-hover:scale-105 transition-transform duration-300 inline-block"
      >
        {title}
      </span>
    </Link>
  );
};

export default DressStyleCard;