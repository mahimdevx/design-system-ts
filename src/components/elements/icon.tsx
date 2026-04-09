"use client";

import { type SVGProps } from "react";

import { icons } from "lucide-react";

import { type VariantProps } from "tailwind-variants";

import { iconVariants } from "@styles/elements/icon";

type IconProps = SVGProps<SVGSVGElement> &
  VariantProps<typeof iconVariants> & {
    name: keyof typeof icons;
  };

export function Icon({ name, size, className, ...props }: IconProps) {
  const Component = icons?.[name] as React.FC<SVGProps<SVGSVGElement>> | undefined;

  const iconClasses = iconVariants({ size, className });

  if (!Component) return <span>{name[0]}</span>;

  return <Component className={iconClasses} {...props} />;
}
