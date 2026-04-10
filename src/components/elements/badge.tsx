"use client";

import { ComponentProps, ReactNode } from "react";

import { type VariantProps } from "tailwind-variants";

import { badgeVariants } from "@styles/elements/badge";

/*
 * Badge Component
 *
 * A flexible UI element used to highlight small pieces of information,
 * such as statuses, labels, or counts.
 *
 * Props:
 * - `variant`: Controls the visual style (e.g., primary, secondary).
 * - `className`: Allows passing custom Tailwind classes.
 * - `children`: The content inside the badge.
 */

type BadgeProps = ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & {
    children: String;
  };

export function Badge({ variant, className, ...props }: BadgeProps) {
  const badgeClasses = badgeVariants({ variant, className });

  return (
    <span data-slot="badge" data-variant={variant} className={badgeClasses} {...props} />
  );
}
