"use client";

import { forwardRef, ComponentPropsWithoutRef, ReactNode } from "react";

import * as AccordionPrimitive from "@radix-ui/react-accordion";

import clsx from "clsx";

import { Icon } from "@components/elements/icon";

import { accordionVariants } from "@styles/elements/accordion";

// Destructure variant slots
const { itemVariants, triggerVariants, iconVariants, contentVariants } =
  accordionVariants();

// Expose the root Accordion component (Radix handles the logic internally)
export const Accordion = AccordionPrimitive.Root;

/*
 * Accordion Item Component
 *
 * Wraps Radix Accordion.Item.
 * We use `forwardRef` to allow external access to the underlying DOM node (div),
 * which is required for integration with animations, focus control, etc.
 */

type AccordionItemProps = ComponentPropsWithoutRef<typeof AccordionPrimitive.Item> & {
  children: ReactNode;
};

export const AccordionItem = forwardRef<HTMLDivElement, AccordionItemProps>(
  ({ className, ...props }, ref) => {
    const itemClasses = itemVariants({ className });

    return <AccordionPrimitive.Item ref={ref} className={itemClasses} {...props} />;
  }
);

/*
 * Accordion Trigger Component
 *
 * Renders the clickable button inside Accordion.
 * Includes the Chevron icon which rotates based on open/closed state.
 */

type AccordionTriggerProps = ComponentPropsWithoutRef<
  typeof AccordionPrimitive.Trigger
> & {
  children: ReactNode;
};

export const AccordionTrigger = forwardRef<HTMLButtonElement, AccordionTriggerProps>(
  ({ className, children, ...props }, ref) => {
    const triggerClasses = triggerVariants({ className });
    const iconClasses = iconVariants();

    return (
      <AccordionPrimitive.Header>
        <AccordionPrimitive.Trigger ref={ref} className={triggerClasses} {...props}>
          {children}

          <Icon name="ChevronDown" className={iconClasses} />
        </AccordionPrimitive.Trigger>
      </AccordionPrimitive.Header>
    );
  }
);

/*
 * Accordion Content Component
 *
 * This is the collapsible body of the Accordion.
 * We apply custom animations for open/close using Tailwind + Radix data attributes.
 */

type AccordionContentProps = ComponentPropsWithoutRef<
  typeof AccordionPrimitive.Content
> & {
  children: ReactNode;
};

export const AccordionContent = forwardRef<HTMLDivElement, AccordionContentProps>(
  ({ className, children, ...props }, ref) => {
    const contentClasses = contentVariants();

    return (
      <AccordionPrimitive.Content ref={ref} className={contentClasses} {...props}>
        <div className={clsx("pt-0 pb-5", className)}>{children}</div>
      </AccordionPrimitive.Content>
    );
  }
);
