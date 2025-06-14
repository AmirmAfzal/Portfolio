import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const useTypeOptions = [
  { value: "RESIDENTIAL", label: "مسکونی" },
  { value: "COMMERCIAL_RESIDENTIAL", label: "تجاری مسکونی" },
  {
    value: "COMMERCIAL_RESIDENTIAL_ENTERTAINMENT",
    label: "مسکونی تجاری تفریحی",
  },
  { value: "COMMERCIAL_ENTERTAINMENT", label: "تجاری تفریحی" },
  { value: "HOTEL", label: "هتل" },
  { value: "OFFICE", label: "اداری" },
  { value: "HOSPITAL", label: "بیمارستان" },
  { value: "CLINIC", label: "درمانگاه" },
];