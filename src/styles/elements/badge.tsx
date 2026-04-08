import { tv } from "tailwind-variants";

export const badgeVariants = tv({
  base: [
    "inline-flex h-6 items-center px-3 py-0.5",
    "font-sans text-xs font-semibold tracking-tight",
    "rounded-md border outline-none",
    "transition-colors duration-150 ease-in-out"
  ],
  variants: {
    variant: {
      primary: "bg-primary text-primary-foreground border-transparent",
      secondary: "bg-secondary text-secondary-foreground border-transparent",
      soft: "bg-primary/5 text-primary border-transparent",
      outline: "border-primary text-primary bg-transparent",
      accent: "bg-accent text-accent-foreground border-transparent",
      muted: "bg-muted text-muted-foreground border-transparent",
      destructive: "bg-destructive text-destructive-foreground border-transparent"
    }
  },
  defaultVariants: {
    variant: "primary"
  }
});
