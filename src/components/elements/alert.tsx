"use client";

import { forwardRef, HTMLAttributes, ReactNode } from "react";

import { type VariantProps } from "tailwind-variants";

import { alertVariants } from "@styles/layouts/alert";

// Destructure style variant slots from the alert variant config
const { rootVariants, titleVariants, descriptionVariants } = alertVariants();

/*
 * Alert Root Component
 *
 * This component wraps the alert container.
 * - Accepts a `variant` prop (e.g., success, error) for styling.
 * - Uses `tailwind-variants` for consistent styling.
 */

type AlertProps = HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof alertVariants> & {
    children: ReactNode;
  };

export const Alert = forwardRef<HTMLDivElement, AlertProps>(
  ({ variant, className, ...props }, ref) => {
    const rootClasses = rootVariants({ variant, className });

    return <div ref={ref} role="alert" className={rootClasses} {...props} />;
  }
);

Alert.displayName = "Alert";

/*
 * Alert Title Component
 *
 * Renders the heading/title inside the alert box.
 * - Uses H5 by default.
 * - Style variants applied through `titleVariants`.
 */

type AlertTitleProps = HTMLAttributes<HTMLHeadingElement> & {
  children: string;
};

export function AlertTitle({ className, ...props }: AlertTitleProps) {
  const titleClasses = titleVariants({ className });

  return <h5 className={titleClasses} {...props} />;
}

AlertTitle.displayName = "AlertTitle";

/*
 * Alert Description Component
 *
 * This component renders the description text of the alert.
 * - Applies custom description styles using `descriptionVariants`.
 */

type AlertDescriptionProps = HTMLAttributes<HTMLParagraphElement> & {
  children: string;
};

export function AlertDescription({ className, ...props }: AlertDescriptionProps) {
  const descriptionClasses = descriptionVariants({ className });

  return <p className={descriptionClasses} {...props} />;
}

AlertDescription.displayName = "AlertDescription";
