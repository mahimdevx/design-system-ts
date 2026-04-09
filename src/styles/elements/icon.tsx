import { tv } from "tailwind-variants";

export const iconVariants = tv({
  base: "inline-block shrink-0 text-current",
  variants: {
    size: {
      xs: "h-3 w-3",
      sm: "h-4 w-4",
      base: "h-5 w-5",
      lg: "h-6 w-6",
      xl: "h-7 w-7"
    }
  },
  defaultVariants: {
    size: "base"
  }
});
