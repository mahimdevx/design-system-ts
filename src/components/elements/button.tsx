"use client";

import { forwardRef, ButtonHTMLAttributes, ReactNode } from "react";

import { Slot } from "@radix-ui/react-slot";

import { type VariantProps } from "tailwind-variants";

import { buttonVariants } from "@styles/elements/button";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
    children: ReactNode;
  };

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { size, iconOnly, variant, rounded, asChild = false, className, ...props },
  ref
) {
  const Component = asChild ? Slot : "button";

  const btnClasses = buttonVariants({ size, iconOnly, variant, rounded, className });

  return <Component ref={ref} className={btnClasses} {...props} />;
});

Button.displayName = "Button";
