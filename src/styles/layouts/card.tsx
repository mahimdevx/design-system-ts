import { tv } from "tailwind-variants";

export const cardVariants = tv({
  slots: {
    containerVariants: [
      "group/card bg-card text-card-foreground ring-foreground/10",
      "flex flex-col gap-0 overflow-hidden rounded-xl pb-4 text-sm ring-1",
      "has-data-[slot=card-footer]:pb-0 has-[>img:first-child]:pt-0",
      "data-[size=sm]:gap-3 data-[size=sm]:py-3",
      "data-[size=sm]:has-data-[slot=card-footer]:pb-0",
      "*:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl"
    ],
    headerVariants: [
      "group/card-header @container/card-header",
      "items-startgap-1 grid auto-rows-min rounded-t-xl px-4",
      "group-data-[size=sm]/card:px-3 has-data-[slot=card-action]:grid-cols-[1fr_auto]",
      "has-data-[slot=card-description]:grid-rows-[auto_auto] [.border-b]:pb-4",
      "group-data-[size=sm]/card:[.border-b]:pb-3"
    ],
    titleVariants: [
      "cn-font-heading text-base leading-snug font-medium",
      "group-data-[size=sm]/card:text-sm"
    ],
    descriptionVariants: "text-muted-foreground text-sm",
    contentVariants: "px-4 group-data-[size=sm]/card:px-3",
    actionVariants: "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
    footerVariants: [
      "bg-muted/50 flex items-center rounded-b-xl border-t p-4",
      "group-data-[size=sm]/card:p-3"
    ]
  }
});
