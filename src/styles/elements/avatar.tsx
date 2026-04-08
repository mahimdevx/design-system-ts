import { tv } from "tailwind-variants";

export const avatarVariants = tv({
  slots: {
    rootVariants: "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
    imageVariants: "aspect-square h-full w-full",
    fallbackVariants: "bg-muted flex h-full w-full items-center justify-center rounded-full"
  }
});
