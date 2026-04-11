import { tv } from "tailwind-variants";

export const avatarVariants = tv({
  slots: {
    rootVariants: [
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      "group/avatar relative flex size-8 shrink-0 overflow-hidden rounded-full",
      "select-none data-[size=lg]:size-10 data-[size=sm]:size-6"
    ],
    imageVariants: "aspect-square size-full object-cover",
    fallbackVariants: [
      "bg-muted text-muted-foreground flex size-full",
      "items-center justify-center rounded-full",
      "text-sm group-data-[size=sm]/avatar:text-xs"
    ],
    badgeVariants: [
      "bg-primary text-primary-foreground ring-background",
      "absolute right-0 bottom-0 z-10 inline-flex items-center justify-center",
      "rounded-full ring-2 select-none",
      "group-data-[size=sm]/avatar:size-2 group-data-[size=sm]/avatar:[&>svg]:hidden",
      "group-data-[size=default]/avatar:size-2.5 group-data-[size=default]/avatar:[&>svg]:size-2",
      "group-data-[size=lg]/avatar:size-3 group-data-[size=lg]/avatar:[&>svg]:size-2"
    ],
    groupVariants: [
      "group/avatar-group *:data-[slot=avatar]:ring-background",
      "flex -space-x-2 *:data-[slot=avatar]:ring-2"
    ],
    groupCountVariants: [
      "bg-muted text-muted-foreground ring-background",
      "relative flex size-8 shrink-0 items-center justify-center",
      "rounded-full text-sm ring-2 group-has-data-[size=lg]/avatar-group:size-10",
      "group-has-data-[size=sm]/avatar-group:size-6 [&>svg]:size-4",
      "group-has-data-[size=lg]/avatar-group:[&>svg]:size-5",
      "group-has-data-[size=sm]/avatar-group:[&>svg]:size-3"
    ]
  }
});
