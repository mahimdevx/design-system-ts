"use client";

import { HTMLAttributes } from "react";

import { type VariantProps } from "tailwind-variants";

import { badgeVariants } from "@styles/elements/badge";

type BadgeProps = HTMLAttributes<HTMLSpanElement> &
  VariantProps<typeof badgeVariants> & {
    children: string;
  };

export function Badge({ variant = "primary", className, ...props }: BadgeProps) {
  const badgeClasses = badgeVariants({ variant, className });

  return (
    <span data-slot="badge" data-variant={variant} className={badgeClasses} {...props} />
  );
}
