"use client";

import { ComponentProps, ReactNode } from "react";

import * as TooltipPrimitive from "@radix-ui/react-tooltip";

import { type VariantProps } from "tailwind-variants";

import { tooltipVariants } from "@styles/elements/tooltip";

type TooltipProviderProps = ComponentProps<typeof TooltipPrimitive.Provider>;

export function TooltipProvider({
  delayDuration = 0,
  ...props
}: TooltipProviderProps) {
  return (
    <TooltipPrimitive.Provider
      data-slot="tooltip-provider"
      // Global configuration for all tooltips
      delayDuration={300}
      skipDelayDuration={0}
      disableHoverableContent={true}
      {...props}
    />
  );
}

type TooltipProps = ComponentProps<typeof TooltipPrimitive.Root>;

export function TooltipRoot({ ...props }: TooltipProps) {
  return (
    <TooltipProvider>
      <TooltipPrimitive.Root data-slot="tooltip" {...props} />
    </TooltipProvider>
  );
}

type TooltipTriggerProps = ComponentProps<typeof TooltipPrimitive.Trigger>;

export function TooltipTrigger({ ...props }: TooltipTriggerProps) {
  return <TooltipPrimitive.Trigger data-slot="tooltip-trigger" {...props} />;
}

type ContentProps = ComponentProps<typeof TooltipPrimitive.Content> &
  VariantProps<typeof tooltipVariants>;

const { contentVariants, arrowVariants } = tooltipVariants();

export function TooltipContent({
  sideOffset = -4,
  variant,
  className,
  children,
  ...props
}: ContentProps) {
  const contentClasses = contentVariants({ variant, className });
  const arrowClasses = arrowVariants({ variant });

  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        data-slot="tooltip-content"
        sideOffset={sideOffset}
        className={contentClasses}
        {...props}
      >
        {children}
        <TooltipPrimitive.Arrow className={arrowClasses} />
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
  );
}

interface TooltipAltProps {
  children: ReactNode;
  content: string;
}

export function Tooltip({ children, content, ...props }: TooltipAltProps) {
  return (
    <TooltipRoot>
      <TooltipTrigger className="mx-1 inline-flex" asChild>
        {children}
      </TooltipTrigger>

      <TooltipContent {...props}>
        {content}
        <TooltipPrimitive.Arrow />
      </TooltipContent>
    </TooltipRoot>
  );
}
