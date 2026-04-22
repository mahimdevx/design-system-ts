import { tv } from "tailwind-variants";

export const buttonVariants = tv({
  base: [
    "relative inline-flex shrink-0 items-center justify-center gap-2",
    "font-poppins text-center font-medium uppercase",
    "cursor-pointer overflow-hidden whitespace-nowrap",
    "border border-transparent focus:outline-none",
    // "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
    "aria-invalid:ring-destructive/20 aria-invalid:border-destructive",
    "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
    "transition-all duration-300 ease-in-out"
    // "[&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
  ],
  variants: {
    size: {
      xxs: "h-6 px-2 py-0.5 text-xs leading-[16px]",
      xs: "h-8 px-4 py-1.5 text-xs leading-[16px]",
      sm: "h-10 px-5 py-2.5 text-sm leading-[16px]",
      base: "h-12 px-6 py-3 text-sm leading-[16px]",
      lg: "h-14 px-7 py-4 text-base leading-[16px]",
      xl: "h-16 px-8 py-5 text-lg leading-[16px]"
    },
    variant: {
      primary: "bg-primary text-primary-foreground",
      secondary: "bg-secondary text-secondary-foreground",
      accent: "bg-accent text-accent-foreground",
      soft: "bg-primary/5 text-primary",
      outline: [
        "border-primary text-primary bg-transparent",
        "hover:bg-primary hover:text-primary-foreground"
      ],
      muted: "bg-muted text-muted-foreground",
      destructive: [
        "bg-destructive text-destructive-foreground",
        "border-transparent",
        "shadow-none"
      ],
      link: ["text-primary bg-transparent underline-offset-4", "hover:underline"]
    },
    iconOnly: {
      true: "",
      false: ""
    },
    rounded: {
      true: "rounded-full",
      false: "rounded-none"
    }
  },
  compoundVariants: [
    {
      size: "xs",
      iconOnly: true,
      class: "h-8 w-8 px-1 py-1 leading-[17px]"
    },
    {
      size: "sm",
      iconOnly: true,
      class: "h-10 w-10 px-2 py-2 leading-[17px]"
    },
    {
      size: "base",
      iconOnly: true,
      class: "h-12 w-12 px-3 py-3 leading-[17px]"
    },
    {
      size: "lg",
      iconOnly: true,
      class: "h-14 w-14 px-3 py-3 leading-[17px]"
    },
    {
      size: "xl",
      iconOnly: true,
      class: "h-16 w-16 px-3 py-3 leading-[17px]"
    }
  ],
  defaultVariants: {
    size: "base",
    variant: "primary",
    iconOnly: false,
    rounded: false
  }
});
