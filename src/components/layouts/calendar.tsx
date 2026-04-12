"use client";

import { ComponentProps } from "react";

import { DayPicker, DayPickerProps } from "react-day-picker";

import { ArrowLeft, ArrowRight } from "lucide-react";

import { iconVariants } from "@styles/elements/icon";
import { buttonVariants } from "@styles/elements/button";
import { calendarVariants } from "@styles/layouts/calendar";

const variants = calendarVariants();

export type CalendarProps = ComponentProps<typeof DayPicker> & {
  mode: "single" | "range" | "multiple";
  className?: string;
  classNames?: Partial<DayPickerProps["classNames"]>;
};

export function Calendar({ className, classNames, ...props }: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={true}
      components={{
        Chevron: ({ orientation, ...props }) =>
          orientation === "left" ? <ArrowLeft {...props} /> : <ArrowRight {...props} />
      }}
      classNames={{
        root: variants?.rootVariants({ className }),
        months: variants?.monthsVariants(),
        nav: variants?.navVariants(),
        button_previous: buttonVariants({
          size: "xs",
          variant: "link",
          iconOnly: true,
          className: variants?.buttonPreviousVariants()
        }),
        button_next: buttonVariants({
          size: "xs",
          variant: "link",
          iconOnly: true,
          className: variants?.buttonNextVariants()
        }),
        chevron: iconVariants({ size: "sm", className: variants?.chevronVariants() }),
        month: variants?.monthVariants(),
        month_caption: variants?.monthCaptionVariants(),
        caption_label: variants?.captionLabelVariants(),
        month_grid: variants?.monthGridVariants(),
        weekdays: variants?.weekdaysVariants(),
        weekday: variants?.weekdayVariants(),
        weeks: variants?.weeksVariants(),
        week: variants?.weekVariants(),
        day: variants?.dayVariants(),
        day_button: buttonVariants({
          size: "xs",
          variant: "link",
          iconOnly: true,
          className: variants?.dayButtonVariants()
        }),
        today: variants?.todayVariants(),
        outside: variants?.outsideVariants(),
        range_start: variants?.rangeStartVariants(),
        range_middle: variants?.rangeMiddleVariants(),
        range_end: variants?.rangeEndVariants(),
        focused: variants?.selectedVariants(),
        selected: variants?.selectedVariants(),
        disabled: variants?.disabledVariants(),
        hidden: variants?.hiddenVariants(),
        ...classNames
      }}
      {...props}
    />
  );
}

Calendar.displayName = "Calendar";
