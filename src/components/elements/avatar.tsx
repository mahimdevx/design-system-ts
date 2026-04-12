"use client";

import { ComponentProps, HTMLAttributes, ReactNode } from "react";

import * as AvatarPrimitive from "@radix-ui/react-avatar";

import { avatarVariants } from "@styles/elements/avatar";

const {
  rootVariants,
  imageVariants,
  fallbackVariants,
  badgeVariants,
  groupVariants,
  groupCountVariants
} = avatarVariants();

type AvatarProps = ComponentProps<typeof AvatarPrimitive.Root> & {
  size?: "sm" | "base" | "lg";
  children: ReactNode;
};

export function Avatar({ size = "base", className, ...props }: AvatarProps) {
  const rootClasses = rootVariants({ size, className });

  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      data-size={size}
      className={rootClasses}
      {...props}
    />
  );
}

type AvatarImageProps = ComponentProps<typeof AvatarPrimitive.Image>;

export function AvatarImage({ className, ...props }: AvatarImageProps) {
  const imageClasses = imageVariants({ className });

  return (
    <AvatarPrimitive.Image data-slot="avatar-image" className={imageClasses} {...props} />
  );
}

type AvatarFallbackProps = ComponentProps<typeof AvatarPrimitive.Fallback> & {
  children: string;
};

export function AvatarFallback({ className, ...props }: AvatarFallbackProps) {
  const fallbackClasses = fallbackVariants({ className });

  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={fallbackClasses}
      {...props}
    />
  );
}

type AvatarBadgeProps = HTMLAttributes<HTMLSpanElement> & {
  children: ReactNode;
};

export function AvatarBadge({ className, ...props }: AvatarBadgeProps) {
  const badgeClasses = badgeVariants({ className });

  return <span data-slot="avatar-badge" className={badgeClasses} {...props} />;
}

type AvatarGroupProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export function AvatarGroup({ className, ...props }: AvatarGroupProps) {
  const groupClasses = groupVariants({ className });

  return <div data-slot="avatar-group" className={groupClasses} {...props} />;
}

type AvatarGroupCountProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export function AvatarGroupCount({ className, ...props }: AvatarGroupCountProps) {
  const groupCountClasses = groupCountVariants({ className });

  return <div data-slot="avatar-group-count" className={groupCountClasses} {...props} />;
}
