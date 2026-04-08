import { tv } from "tailwind-variants";

export const tooltipVariants = tv({
  slots: {
    contentVariants: [
      "z-50 w-fit overflow-hidden px-3 py-1.5 font-sans text-xs leading-3.5 font-medium uppercase",
      "bg-background text-foreground border-foreground rounded-md shadow-md",
      "origin-(--radix-tooltip-content-transform-origin)",
      "data-[side=top]:animate-slideFromTop",
      "data-[side=bottom]:animate-slideFromBottom",
      "data-[side=right]:animate-slideFromRight",
      "data-[side=left]:animate-slideFromLeft"
    ],
    arrowVariants: [
      "bg-foreground fill-foreground z-50 size-2.5",
      "translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]"
    ]
  },
  variants: {
    variant: {
      primary: {
        contentVariants: "bg-primary text-primary-foreground border-primary",
        arrowVariants: "fill-primary"
      },
      secondary: {
        contentVariants:
          "bg-secondary text-secondary-foreground border-secondary",
        arrowVariants: "fill-secondary"
      },
      accent: {
        contentVariants: "bg-accent text-accent-foreground border-accent",
        arrowVariants: "fill-accent"
      },
      muted: {
        contentVariants: "bg-muted text-muted-foreground border-muted",
        arrowVariants: "fill-muted"
      },
      destructive: {
        contentVariants:
          "bg-destructive text-primary-foreground border-destructive",
        arrowVariants: "fill-destructive"
      }
    }
  },
  defaultVariants: {
    variant: "primary"
  }
});
