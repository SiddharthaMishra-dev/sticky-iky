import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const COLOR = [
    "#fed7aa",
  "#fde68a",
  "#bbf7d0",
  "#bfdbfe",
  "#fecaca",
  "#e9d5ff",
  "#c7d2fe",
  "#fbcfe8",
  "#a5f3fc",
  "#fde68a",
]