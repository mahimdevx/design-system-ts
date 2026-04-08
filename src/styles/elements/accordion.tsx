import { tv } from "tailwind-variants";

export const accordionVariants = tv({
  slots: {
    itemVariants: "border-b duration-300",
    triggerVariants: [
      "group flex flex-1 items-center justify-between",
      "w-full py-4 text-left text-base font-medium",
      "outline-none"
    ],
    iconVariants: [
      "shrink-0 group-data-[state=open]:-rotate-180",
      "transition-transform duration-300",
      "ease-[cubic-bezier(0.87,_0,_0.13,_1)]"
    ],
    contentVariants: [
      "overflow-hidden",
      "data-[state=closed]:animate-accordion-up",
      "data-[state=open]:animate-accordion-down"
    ]
  }
});
