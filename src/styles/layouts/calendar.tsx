import { tv } from "tailwind-variants";

export const calendarVariants = tv({
  slots: {
    rootVariants:
      "border-input bg-background w-full max-w-fit overflow-hidden border p-4",
    monthsVariants: "relative flex flex-col gap-4 sm:flex-row",
    navVariants: [
      "absolute top-0 left-0 z-10",
      "flex w-full items-center justify-between"
    ],
    buttonPreviousVariants: "m-0.5",
    buttonNextVariants: "m-0.5",
    chevronVariants: "",
    monthVariants: "",
    monthCaptionVariants: "pt-[7px] pb-[5px] text-center",
    captionLabelVariants: "text-base font-semibold",
    monthGridVariants: "",
    weekdaysVariants: "flex items-center justify-between",
    weekdayVariants: [
      "m-0.5 flex h-8 w-8 items-center justify-center p-1.5",
      "font-mono text-sm leading-[17px] font-semibold",
      "text-muted-foreground/40"
    ],
    weeksVariants: "",
    weekVariants:
      "flex items-center justify-between first:justify-end last:justify-start",
    dayVariants: "group relative m-0.5 p-0",
    dayButtonVariants: [
      "font-mono text-sm leading-[17px] font-semibold",
      "hover:bg-muted hover:no-underline",
      "group-data-[today]:bg-muted group-data-[outside]:opacity-25",
      "group-data-[selected]:bg-primary group-data-[selected]:text-primary-foreground",
      "group-data-[selected]:group-data-[today]:bg-primary",
      "group-data-[selected]:group-[.range-middle]:text-primary",
      "group-data-[selected]:group-[.range-middle]:bg-muted"
    ],
    rangeStartVariants: "",
    rangeMiddleVariants: "range-middle",
    rangeEndVariants: "",
    todayVariants: "",
    outsideVariants: "",
    focusedVariants: "",
    selectedVariants: "",
    disabledVariants: "",
    hiddenVariants: "invisible"
  }
});
