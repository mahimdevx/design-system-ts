"use client";

import { forwardRef, HTMLAttributes, ReactNode } from "react";

import clsx from "clsx";

import { Icon } from "@components/elements/icon";
import { Box } from "@components/elements/box";
import { Button } from "@components/elements/button";

type ProductCardProps = HTMLAttributes<HTMLDivElement>;

export const ProductCard = forwardRef<HTMLDivElement, ProductCardProps>(
  function ProductCard({ className, ...props }, ref) {
    return (
      <Box
        ref={ref}
        className={clsx(
          "group border-border bg-background relative overflow-hidden rounded-lg border shadow transition-all hover:shadow-lg",
          className
        )}
        {...props}
      />
    );
  }
);

type ProductImageProps = HTMLAttributes<HTMLDivElement>;

export const ProductImage = forwardRef<HTMLDivElement, ProductImageProps>(
  function ProductImage({ className, ...props }, ref) {
    return (
      <Box
        ref={ref}
        className={clsx("bg-muted relative h-48 w-full overflow-hidden", className)}
        {...props}
      />
    );
  }
);

type ProductIconProps = HTMLAttributes<HTMLDivElement> & {
  name: keyof typeof import("lucide-react").icons;
  size?: "xs" | "sm" | "base" | "lg" | "xl";
};

export const ProductIcon = forwardRef<HTMLDivElement, ProductIconProps>(
  function ProductIcon({ name, size = "lg", className, ...props }, ref) {
    return (
      <Box
        ref={ref}
        className={clsx("flex items-center justify-center", className)}
        {...props}
      >
        <Icon name={name} size={size} className="text-muted-foreground" />
      </Box>
    );
  }
);

type ProductBadgeProps = HTMLAttributes<HTMLDivElement>;

export const ProductBadge = forwardRef<HTMLDivElement, ProductBadgeProps>(
  function ProductBadge({ className, ...props }, ref) {
    return (
      <Box
        ref={ref}
        className={clsx(
          "bg-destructive absolute top-2 right-2 z-10 rounded-full px-3 py-1 text-xs font-medium text-white",
          className
        )}
        {...props}
      />
    );
  }
);

type ProductContentProps = HTMLAttributes<HTMLDivElement>;

export const ProductContent = forwardRef<HTMLDivElement, ProductContentProps>(
  function ProductContent({ className, ...props }, ref) {
    return (
      <Box ref={ref} className={clsx("flex flex-col gap-3 p-4", className)} {...props} />
    );
  }
);

type ProductTitleProps = HTMLAttributes<HTMLHeadingElement>;

export const ProductTitle = forwardRef<HTMLHeadingElement, ProductTitleProps>(
  function ProductTitle({ className, ...props }, ref) {
    return (
      <h3
        ref={ref}
        className={clsx("line-clamp-2 text-sm leading-tight font-semibold", className)}
        {...props}
      />
    );
  }
);

type ProductDescriptionProps = HTMLAttributes<HTMLDivElement>;

export const ProductDescription = forwardRef<HTMLDivElement, ProductDescriptionProps>(
  function ProductDescription({ className, ...props }, ref) {
    return (
      <Box
        ref={ref}
        className={clsx("text-muted-foreground text-xs", className)}
        {...props}
      />
    );
  }
);

interface ProductPriceProps extends HTMLAttributes<HTMLDivElement> {
  current: number;
  original?: number;
}

export const ProductPrice = forwardRef<HTMLDivElement, ProductPriceProps>(
  function ProductPrice({ current, original, className, ...props }, ref) {
    return (
      <Box ref={ref} className={clsx("flex items-center gap-2", className)} {...props}>
        <span className="text-foreground text-lg font-bold">${current.toFixed(2)}</span>
        {original && original > current && (
          <span className="text-muted-foreground text-sm line-through">
            ${original.toFixed(2)}
          </span>
        )}
      </Box>
    );
  }
);

interface ProductRatingProps extends HTMLAttributes<HTMLDivElement> {
  rating: number;
  reviews?: number;
}

export const ProductRating = forwardRef<HTMLDivElement, ProductRatingProps>(
  function ProductRating({ rating, reviews, className, ...props }, ref) {
    return (
      <Box
        ref={ref}
        className={clsx("flex items-center gap-2 text-sm", className)}
        {...props}
      >
        <Box className="flex gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Icon
              key={i}
              name="Star"
              size="sm"
              className={clsx(
                "fill-current",
                i < Math.floor(rating) ? "text-yellow-400" : "text-muted-foreground"
              )}
            />
          ))}
        </Box>

        <span className="text-muted-foreground text-xs">
          {rating} {reviews && `(${reviews})`}
        </span>
      </Box>
    );
  }
);

interface ProductActionProps extends HTMLAttributes<HTMLButtonElement> {
  icon?: keyof typeof import("lucide-react").icons;
  iconPosition?: "left" | "right";
}

export const ProductAction = forwardRef<HTMLButtonElement, ProductActionProps>(
  function ProductAction(
    { icon, iconPosition = "right", className, children, ...props },
    ref
  ) {
    return (
      <Button ref={ref} className={clsx("mt-2 w-full", className)} {...props}>
        {icon && iconPosition === "left" && <Icon name={icon} size="sm" />}
        {children}
        {icon && iconPosition === "right" && <Icon name={icon} size="sm" />}
      </Button>
    );
  }
);
