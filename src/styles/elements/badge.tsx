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
      primary: "border-transparent bg-primary text-primary-foreground",
      secondary: "border-transparent bg-secondary text-secondary-foreground",
      soft: "border-transparent bg-primary/5 text-primary",
      outline: "border-primary bg-transparent text-primary",
      accent: "border-transparent bg-accent text-accent-foreground",
      muted: "border-transparent bg-muted text-muted-foreground",
      destructive: "border-transparent bg-destructive text-destructive-foreground"
    }
  },
  defaultVariants: {
    variant: "primary"
  }
});
