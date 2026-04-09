import { tv } from "tailwind-variants";

export const accordionVariants = tv({
  slots: {
    itemVariants: "duration-300 not-last:border-b",
    triggerVariants: [
      "group relative flex flex-1 items-center justify-start",
      "rounded-lg border border-transparent transition-all outline-none",
      "w-full py-4 text-left text-base font-medium",
      "outline-none",
      "group/accordion-trigger focus-visible:border-ring",
      "focus-visible:ring-ring/50 focus-visible:after:border-ring",
      "**:data-[slot=accordion-trigger-icon]:text-muted-foreground",
      "hover:underline focus-visible:ring-3 **:data-[slot=accordion-trigger-icon]:ml-auto",
      "disabled:pointer-events-none disabled:opacity-50",
      "**:data-[slot=accordion-trigger-icon]:size-4"
    ],
    iconVariants: [
      "shrink-0 group-data-[state=open]:-rotate-180",
      "transition-transform duration-300",
      "ease-[cubic-bezier(0.16,_1,_0.3,_1)]",
      "pointer-events-none shrink-0"
      // "group-aria-expanded/accordion-trigger:hidden"
    ],
    contentVariants: [
      "overflow-hidden",
      "data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up",
      "overflow-hidden text-sm"
    ]
  }
});
