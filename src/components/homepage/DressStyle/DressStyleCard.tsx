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
        "relative w-full md:h-full rounded-[20px] bg-white bg-top text-2xl md:text-4xl font-bold text-left py-4 md:py-[25px] px-6 md:px-9 bg-no-repeat bg-cover transition-transform transform hover:scale-105 hover:brightness-75 overflow-hidden",
        className,
      ])}
      style={style}
    >
      {/* Overlay effect for hover darkness */}
      <div className="absolute inset-0 bg-black/30 rounded-[20px] opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
      {/* Title with z-index to remain visible */}
      <span className="relative z-10">{title}</span>
    </Link>
  );
};

export default DressStyleCard;
