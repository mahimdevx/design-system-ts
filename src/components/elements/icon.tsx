"use client";

import { forwardRef, type SVGProps } from "react";

import { icons } from "lucide-react";

import { type VariantProps } from "tailwind-variants";

import { iconVariants } from "@styles/elements/icon";

type IconProps = SVGProps<SVGSVGElement> &
  VariantProps<typeof iconVariants> & {
    name: keyof typeof icons;
  };

export const Icon = forwardRef<SVGSVGElement, IconProps>(function Icon(
  { name, size, className, ...props },
  ref
) {
  const Component = icons?.[name];

  const iconClasses = iconVariants({ size, className });

  if (!Component) return <span>{name[0]}</span>;

  return <Component ref={ref} className={iconClasses} {...props} />;
});

Icon.displayName = "Icon";
