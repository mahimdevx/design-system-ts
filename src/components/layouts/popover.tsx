"use client";

import { ComponentProps } from "react";

import * as PopoverPrimitive from "@radix-ui/react-popover";

import clsx from "clsx";

type PopoverProps = ComponentProps<typeof PopoverPrimitive.Root>;

export function Popover({ ...props }: PopoverProps) {
  return <PopoverPrimitive.Root data-slot="popover" {...props} />;
}

type PopoverTriggerProps = ComponentProps<typeof PopoverPrimitive.Trigger>;

export function PopoverTrigger({ ...props }: PopoverTriggerProps) {
  return <PopoverPrimitive.Trigger data-slot="popover-trigger" {...props} />;
}

type PopoverContentProps = ComponentProps<typeof PopoverPrimitive.Content> & {
  align?: "start" | "center" | "end";
  sideOffset?: number;
};

export function PopoverContent({
  align = "center",
  sideOffset = 4,
  className,
  ...props
}: PopoverContentProps) {
  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        data-slot="popover-content"
        align={align}
        sideOffset={sideOffset}
        className={clsx(
          "bg-popover text-popover-foreground ring-foreground/10",
          "data-[side=bottom]:slide-in-from-top-2",
          "data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2",
          "data-[side=top]:slide-in-from-bottom-2 data-open:animate-in",
          "data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out",
          "data-closed:fade-out-0 data-closed:zoom-out-95 z-50 flex w-72",
          "origin-(--radix-popover-content-transform-origin) flex-col",
          "gap-2.5 rounded-lg p-2.5 text-sm shadow-md ring-1",
          "outline-hidden duration-100",
          className
        )}
        {...props}
      />
    </PopoverPrimitive.Portal>
  );
}

export function PopoverAnchor({
  ...props
}: ComponentProps<typeof PopoverPrimitive.Anchor>) {
  return <PopoverPrimitive.Anchor data-slot="popover-anchor" {...props} />;
}

export function PopoverHeader({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot="popover-header"
      className={clsx("flex flex-col gap-0.5 text-sm", className)}
      {...props}
    />
  );
}

export function PopoverTitle({ className, ...props }: ComponentProps<"h2">) {
  return (
    <h2
      data-slot="popover-title"
      className={clsx("cn-font-heading font-medium", className)}
      {...props}
    />
  );
}

export function PopoverDescription({ className, ...props }: ComponentProps<"p">) {
  return (
    <p
      data-slot="popover-description"
      className={clsx("text-muted-foreground", className)}
      {...props}
    />
  );
}
