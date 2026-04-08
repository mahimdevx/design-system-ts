"use client";

import { HTMLAttributes, ReactNode, createElement } from "react";

import { type VariantProps } from "tailwind-variants";

import { typographyVariants } from "@styles/elements/typography";

type TextProps = HTMLAttributes<HTMLElement> &
  VariantProps<typeof typographyVariants> & {
    type?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "small";
    children: ReactNode;
  };

export function Text({ type = "p", className, children, ...props }: TextProps) {
  const typographyClasses = typographyVariants({ type, className });

  return createElement(type, { className: typographyClasses, ...props }, children);
}
