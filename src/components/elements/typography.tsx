"use client";

import { HTMLAttributes, ElementType, ReactNode } from "react";

import { type VariantProps } from "tailwind-variants";

import { typographyVariants } from "@styles/elements/typography";

type TypographyProps = HTMLAttributes<HTMLElement> &
  VariantProps<typeof typographyVariants> & {
    type?: ElementType;
    children: ReactNode;
  };

export function Typography({ type = "p", className, ...props }: TypographyProps) {
  const Component = type as ElementType;

  const typographyClasses = typographyVariants({ type, className });

  return <Component className={typographyClasses} {...props} />;
}
