import { tv } from "tailwind-variants";

export const badgeVariants = tv({
  base: [
    "inline-flex h-6 w-fit shrink-0 items-center justify-center gap-1 px-3 py-0.5",
    "font-sans text-xs font-semibold tracking-tight uppercase",
    "overflow-hidden rounded-md border whitespace-nowrap outline-none",
    "transition-colors duration-150 ease-in-out [&>svg]:pointer-events-none [&>svg]:size-3",
    "aria-invalid:border-destructive aria-invalid:ring-destructive/20"
  ],
  variants: {
    variant: {
      primary:
        "bg-primary text-primary-foreground [a&]:hover:bg-primary/90 border-transparent",
      secondary:
        "bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90 border-transparent",
      soft: "bg-primary/5 text-primary [a&]:hover:bg-primary/10 border-transparent",
      outline:
        "border-primary text-primary [a&]:hover:bg-accent [a&]:hover:text-accent-foreground bg-transparent",
      accent:
        "bg-accent text-accent-foreground [a&]:hover:bg-accent/90 border-transparent",
      muted: "bg-muted text-muted-foreground [a&]:hover:bg-muted/90 border-transparent",
      destructive:
        "bg-destructive text-destructive-foreground [a&]:hover:bg-destructive/90 border-transparent"
    }
  },
  defaultVariants: {
    variant: "primary"
  }
});
