"use client";

import { HTMLAttributes, ReactNode } from "react";

import { Slot } from "@radix-ui/react-slot";

import { tv } from "tailwind-variants";

const gridVariants = tv({
  base: "grid"
});

type GridProps = HTMLAttributes<HTMLDivElement> & {
  asChild?: boolean;
  children: ReactNode;
};

export function Grid({ asChild = false, className, ...props }: GridProps) {
  const Component = asChild ? Slot : "div";

  const gridClasses = gridVariants({ className });

  return <Component className={gridClasses} {...props} />;
}

const gridItemVariants = tv({});

type GridItemProps = HTMLAttributes<HTMLDivElement> & {
  asChild?: boolean;
  children: ReactNode;
};

export function GridItem({ asChild = false, className, ...props }: GridItemProps) {
  const Component = asChild ? Slot : "div";

  const gridItemClasses = gridItemVariants({ className });

  return <Component className={gridItemClasses} {...props} />;
}
