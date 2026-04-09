"use client";

import { ComponentProps, ReactNode } from "react";

import * as AccordionPrimitive from "@radix-ui/react-accordion";

import clsx from "clsx";

import { accordionVariants } from "@styles/elements/accordion";

import { Icon } from "@components/elements/icon";

// Destructure variant slots
const { itemVariants, triggerVariants, iconVariants, contentVariants } =
  accordionVariants();

type AccordionProps = ComponentProps<typeof AccordionPrimitive.Root> & {
  children: ReactNode;
};

// Expose the root Accordion component (Radix handles the logic internally)
export function Accordion({ className, ...props }: AccordionProps) {
  return (
    <AccordionPrimitive.Root
      data-slot="accordion"
      className={clsx("flex w-full flex-col", className)}
      {...props}
    />
  );
}

/*
 * Accordion Item Component
 *
 * Wraps Radix Accordion.Item.
 * We use `forwardRef` to allow external access to the underlying DOM node (div),
 * which is required for integration with animations, focus control, etc.
 */

type AccordionItemProps = ComponentProps<typeof AccordionPrimitive.Item> & {
  children: ReactNode;
};

export function AccordionItem({ className, ...props }: AccordionItemProps) {
  const itemClasses = itemVariants({ className });

  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={itemClasses}
      {...props}
    />
  );
}

/*
 * Accordion Trigger Component
 *
 * Renders the clickable button inside Accordion.
 * Includes the Chevron icon which rotates based on open/closed state.
 */

type AccordionTriggerProps = ComponentProps<typeof AccordionPrimitive.Trigger> & {
  children: ReactNode;
};

export function AccordionTrigger({
  className,
  children,
  ...props
}: AccordionTriggerProps) {
  const triggerClasses = triggerVariants({ className });
  const iconClasses = iconVariants();

  return (
    <AccordionPrimitive.Header>
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={triggerClasses}
        {...props}
      >
        {children}

        <Icon
          name="ChevronDown"
          data-slot="accordion-trigger-icon"
          className={iconClasses}
        />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

/*
 * Accordion Content Component
 *
 * This is the collapsible body of the Accordion.
 * We apply custom animations for open/close using Tailwind + Radix data attributes.
 */

type AccordionContentProps = ComponentProps<typeof AccordionPrimitive.Content> & {
  children: ReactNode;
};

export function AccordionContent({
  className,
  children,
  ...props
}: AccordionContentProps) {
  const contentClasses = contentVariants();

  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className={contentClasses}
      {...props}
    >
      <div className={clsx("pt-0 pb-5", className)}>{children}</div>
    </AccordionPrimitive.Content>
  );
}
