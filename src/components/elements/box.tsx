"use client";

import { forwardRef, HTMLAttributes, ReactNode } from "react";

import { tv } from "tailwind-variants";

const boxVariants = tv({});

type BoxProps = HTMLAttributes<HTMLDivElement> & {
  children?: ReactNode;
};

export const Box = forwardRef<HTMLDivElement, BoxProps>(function Box(
  { className, ...props },
  ref
) {
  const boxClasses = boxVariants({ className });

  return <div ref={ref} className={boxClasses} {...props} />;
});
