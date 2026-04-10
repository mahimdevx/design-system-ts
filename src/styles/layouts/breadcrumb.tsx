import { tv } from "tailwind-variants";

import clsx from "clsx";

export const breadcrumbVariants = tv({
  slots: {
    listVariants: clsx(
      "flex flex-wrap items-center gap-x-1.5 gap-y-1",
      "text-muted-foreground text-sm break-words sm:gap-2.5"
    ),
    itemVariants: "inline-flex items-center gap-1.5",
    linkVariants: "hover:text-foreground text-sm text-gray-500 transition-colors"
  }
});
