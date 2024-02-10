import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

type ClassNames = string | undefined | null | { [className: string]: boolean };
type CnFunction = (...classNames: ClassNames[]) => string;

export const cn: CnFunction = (...inputs) => {
  return twMerge(clsx(inputs));
};
