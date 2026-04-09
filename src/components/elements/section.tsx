"use client";

import { HTMLAttributes, ReactNode } from "react";

import { tv } from "tailwind-variants";

const sectionVariants = tv({
  base: "relative w-full py-8 sm:py-12 xl:py-16 2xl:py-20"
});

type SectionProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
};

export function Section({ className, ...props }: SectionProps) {
  const sectionClasses = sectionVariants({ className });

  return <section className={sectionClasses} {...props} />;
}
