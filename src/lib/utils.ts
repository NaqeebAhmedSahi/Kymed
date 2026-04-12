import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const compareArrays = (a: any[], b: any[]) => {
  return a.toString() === b.toString();
};

export const parsePrice = (priceStr: string | number): number => {
  if (typeof priceStr === "number") return priceStr;
  if (!priceStr) return 0;
  // Remove non-numeric characters except for decimal point
  const numeric = priceStr.toString().replace(/[^\d.]/g, "");
  return parseFloat(numeric) || 0;
};
