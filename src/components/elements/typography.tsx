"use client";

import { HTMLAttributes, ReactNode } from "react";

import { type VariantProps } from "tailwind-variants";

import { typographyVariants } from "@styles/elements/typography";

type TypographyProps = HTMLAttributes<HTMLElement> &
  VariantProps<typeof typographyVariants> & {
    children: ReactNode;
  };

export function Typography({
  type = "p",
  className,
  ...props
}: TypographyProps) {
  const Component = type;

  const typographyClasses = typographyVariants({ type, className });

  return <Component className={typographyClasses} {...props} />;
}

Typography.displayName = "Typography";
