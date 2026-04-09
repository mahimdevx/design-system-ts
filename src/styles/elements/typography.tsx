import { tv } from "tailwind-variants";

export const typographyVariants = tv({
  variants: {
    type: {
      h1: [
        "font-poppins scroll-m-20 text-5xl !leading-none lg:text-7xl",
        "font-extrabold tracking-tight uppercase"
      ],
      h2: [
        "font-poppins scroll-m-20 text-4xl !leading-none lg:text-6xl",
        "font-extrabold tracking-tight uppercase"
      ],
      h3: [
        "font-poppins scroll-m-20 text-3xl !leading-none lg:text-5xl",
        "font-extrabold tracking-tight uppercase"
      ],
      h4: [
        "font-poppins scroll-m-20 text-2xl !leading-tight lg:text-4xl",
        "font-bold tracking-tight uppercase"
      ],
      h5: [
        "font-poppins scroll-m-20 text-xl !leading-tight lg:text-3xl",
        "font-bold tracking-tight uppercase"
      ],
      h6: [
        "font-poppins scroll-m-20 text-lg !leading-tight lg:text-2xl",
        "font-semibold tracking-tight uppercase"
      ],
      p: ["font-poppins text-base leading-tight", "font-medium tracking-normal"],
      small: ["font-poppins text-sm leading-tight", "font-medium tracking-normal"]
    }
  },
  defaultVariants: {
    type: "p"
  }
});
