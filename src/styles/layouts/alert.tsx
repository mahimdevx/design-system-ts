import { tv } from "tailwind-variants";

export const alertVariants = tv({
  slots: {
    rootVariants: [
      "group/alert relative w-full gap-0.5 rounded-lg border",
      "px-2.5 py-2 text-left text-sm has-data-[slot=alert-action]:relative",
      "has-data-[slot=alert-action]:pr-18 has-[>svg]:grid-cols-[auto_1fr]",
      "has-[>svg]:gap-x-2 *:[svg]:row-span-2 *:[svg]:translate-y-0.5",
      "*:[svg]:text-current *:[svg:not([class*='size-'])]:size-4",
      "[&>svg]:absolute [&>svg]:translate-y-[2px]",
      "[&>svg]:top-4 [&>svg]:left-4",
      "[&>svg~*]:pl-8"
    ],
    titleVariants: [
      "[&_a]:hover:text-foreground mb-1 font-medium tracking-tight",
      "group-has-[>svg]/alert:col-start-2 [&_a]:underline [&_a]:underline-offset-3"
    ],
    descriptionVariants: [
      "text-sm font-normal [&_p]:leading-relaxed",
      "text-muted-foreground [&_a]:hover:text-foreground text-sm",
      "text-balance md:text-pretty [&_a]:underline",
      "[&_a]:underline-offset-3 [&_p:not(:last-child)]:mb-4"
    ],
    actionVariants: "absolute top-2 right-2"
  },
  variants: {
    variant: {
      primary: { rootVariants: "border-primary text-primary [&>svg]:text-primary" },
      secondary: {
        rootVariants: "border-secondary text-secondary [&>svg]:text-secondary"
      },
      accent: { rootVariants: "border-accent text-accent [&>svg]:text-accent" },
      soft: {
        rootVariants: "bg-primary/5 text-accent [&>svg]:text-accent border-transparent"
      },
      outline: {
        rootVariants: "border-primary [&>svg]:text-primary bg-transparent"
      },
      muted: {
        rootVariants: "[&>svg]text-muted-foreground bg-muted border-transparent"
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
