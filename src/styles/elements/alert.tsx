import { tv } from "tailwind-variants";

export const alertVariants = tv({
  slots: {
    rootVariants: [
      "relative w-full rounded-lg border p-4",
      "[&>svg]:absolute [&>svg]:translate-y-[2px]",
      "[&>svg]:left-4 [&>svg]:top-4",
      "[&>svg~*]:pl-8"
    ],
    titleVariants: "mb-1 font-medium tracking-tight",
    descriptionVariants: "text-sm font-normal [&_p]:leading-relaxed"
  },
  variants: {
    variant: {
      primary: { rootVariants: "border-primary text-primary [&>svg]:text-primary" },
      secondary: {
        rootVariants: "border-secondary text-secondary [&>svg]:text-secondary"
      },
      accent: { rootVariants: "border-accent text-accent [&>svg]:text-accent" },
      soft: {
        rootVariants: "border-transparent bg-primary/5 text-accent [&>svg]:text-accent"
      },
      outline: {
        rootVariants: "border-primary bg-transparent [&>svg]:text-primary"
      },
      muted: {
        rootVariants: "[&>svg]text-muted-foreground border-transparent bg-muted"
      },
      destructive: {
        rootVariants: "border-destructive text-destructive [&>svg]:text-destructive"
      }
    }
  },
  defaultVariants: {
    variant: "primary"
  }
});
