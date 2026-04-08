"use client";

import { forwardRef, type SVGProps } from "react";

import { icons } from "lucide-react";

import { type VariantProps } from "tailwind-variants";

import { iconVariants } from "@styles/elements/icon";

type IconProps = Omit<SVGProps<SVGSVGElement>, "ref"> &
  VariantProps<typeof iconVariants> & {
    name: keyof typeof icons;
  };

export const Icon = forwardRef<SVGSVGElement, IconProps>(function Icon({ name, size, className, ...props }) {
  const Component = icons?.[name];

  const iconClasses = iconVariants({ size, className });

  if (!Component) return <span>{name[0]}</span>;

  // Lucide icons are SVG components but don't support ref forwarding
  return <Component className={iconClasses} {...props} />;
});

Icon.displayName = "Icon";
