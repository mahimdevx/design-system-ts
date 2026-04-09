"use client";

import { HTMLAttributes, ReactNode } from "react";

import { Slot } from "@radix-ui/react-slot";

import { tv, type VariantProps } from "tailwind-variants";

const containerVariants = tv({
  base: "relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
  variants: {
    fluid: {
      true: "max-w-full",
      false: "max-w-screen-xl"
    }
  },
  defaultVariants: {
    fluid: false
  }
});

type ContainerProps = HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof containerVariants> & {
    asChild?: boolean;
    children: ReactNode;
  };

export function Container({
  fluid = false,
  asChild = false,
  className,
  ...props
}: ContainerProps) {
  const Component = asChild ? Slot : "div";

  const containerClasses = containerVariants({ fluid, className });

  return <Component className={containerClasses} {...props} />;
}
