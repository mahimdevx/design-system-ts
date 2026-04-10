"use client";

import { forwardRef, ComponentPropsWithoutRef, ReactNode } from "react";

import * as AvatarPrimitive from "@radix-ui/react-avatar";

import { avatarVariants } from "@styles/elements/avatar";

const { rootVariants, imageVariants, fallbackVariants } = avatarVariants();

/*
 * Avatar Root Component
 *
 * Wraps Radix UI's Avatar.Root.
 * Applies base styling from Tailwind variants.
 * Uses `forwardRef` to expose DOM access externally (e.g., animations or focus control).
 */

type AvatarProps = ComponentPropsWithoutRef<typeof AvatarPrimitive.Root> & {
  children: ReactNode;
};

export const Avatar = forwardRef<HTMLSpanElement, AvatarProps>(
  ({ className, ...props }, ref) => {
    const rootClasses = rootVariants({ className });

    return <AvatarPrimitive.Root ref={ref} className={rootClasses} {...props} />;
  }
);

Avatar.displayName = AvatarPrimitive.Root.displayName;

/*
 * Avatar Image Component
 *
 * Renders the user profile image inside the Avatar.
 * If the image fails to load or isn't provided, fallback will be shown.
 */

type AvatarImageProps = ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>;

export const AvatarImage = forwardRef<HTMLImageElement, AvatarImageProps>(
  ({ className, ...props }, ref) => {
    const imageClasses = imageVariants({ className });

    return <AvatarPrimitive.Image ref={ref} className={imageClasses} {...props} />;
  }
);

AvatarImage.displayName = AvatarPrimitive.Image.displayName;

/*
 * Avatar Fallback Component
 *
 * Displays a fallback element (e.g., initials or icon) when the image is unavailable.
 * Commonly used as a graceful degradation UI element.
 */

type AvatarFallbackProps = ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback> & {
  children: string;
};

export const AvatarFallback = forwardRef<HTMLSpanElement, AvatarFallbackProps>(
  ({ className, ...props }, ref) => {
    const fallbackClasses = fallbackVariants({ className });

    return <AvatarPrimitive.Fallback ref={ref} className={fallbackClasses} {...props} />;
  }
);

AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;
