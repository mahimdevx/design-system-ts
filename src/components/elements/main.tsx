"use client";

import { ReactNode, HTMLAttributes } from "react";

import { tv } from "tailwind-variants";

const mainVariants = tv({});

type MainProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
};

export function Main({ className, ...props }: MainProps) {
  const mainClasses = mainVariants({ className });

  return <main className={mainClasses} {...props} />;
}
