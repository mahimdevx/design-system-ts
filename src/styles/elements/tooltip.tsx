import { tv } from "tailwind-variants";

export const tooltipVariants = tv({
  slots: {
    contentVariants: [
      "z-50 inline-flex w-fit max-w-xs px-3 py-1.5",
      "font-sans text-xs leading-3.5 font-medium uppercase",
      "bg-background text-foreground border-foreground rounded-md shadow-md",
      "will-change-[transform,opacity] select-none",
      "origin-(--radix-tooltip-content-transform-origin)",
      "data-[side=top]:animate-slideFromTop",
      "data-[side=bottom]:animate-slideFromBottom",
      "data-[side=right]:animate-slideFromRight",
      "data-[side=left]:animate-slideFromLeft"
      // "data-[state=delayed-open]:animate-in data-[state=delayed-open]:fade-in-0 data-[state=delayed-open]:zoom-in-95 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",
      // "has-data-[slot=kbd]:pr-1.5 **:data-[slot=kbd]:relative",
      // "**:data-[slot=kbd]:isolate **:data-[slot=kbd]:z-50 **:data-[slot=kbd]:rounded-sm"
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
        arrowVariants: "fill-primary bg-primary"
      },
      secondary: {
        contentVariants: "bg-secondary text-secondary-foreground border-secondary",
        arrowVariants: "fill-secondary bg-secondary"
      },
      accent: {
        contentVariants: "bg-accent text-accent-foreground border-accent",
        arrowVariants: "fill-accent bg-accent"
      },
      muted: {
        contentVariants: "bg-muted text-muted-foreground border-muted",
        arrowVariants: "fill-muted bg-muted"
      },
      destructive: {
        contentVariants: "bg-destructive text-primary-foreground border-destructive",
        arrowVariants: "fill-destructive bg-destructive"
      }
    }
  },
  defaultVariants: {
    variant: "primary"
  }
});
