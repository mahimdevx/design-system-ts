"use client";

import { forwardRef, type SVGProps } from "react";

import { icons } from "lucide-react";

import { type VariantProps } from "tailwind-variants";

import { iconVariants } from "@styles/elements/icon";

type IconProps = Omit<SVGProps<SVGSVGElement>, "ref"> &
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

  // Lucide icons are SVG components but don't support ref forwarding
  // The ref is provided for API compatibility but Lucide components are functional
  return <Component className={iconClasses} {...props} />;
});

Icon.displayName = "Icon";
