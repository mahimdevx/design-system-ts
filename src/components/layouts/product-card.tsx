"use client";

import { forwardRef, HTMLAttributes, ReactNode } from "react";

import clsx from "clsx";

type ProductCardProps = HTMLAttributes<HTMLDivElement>;

export const ProductCard = forwardRef<HTMLDivElement, ProductCardProps>(
  function ProductCard({ className, ...props }, ref) {
    return (
      <div
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

ProductCard.displayName = "ProductCard";

type ProductImageProps = HTMLAttributes<HTMLDivElement>;

export const ProductImage = forwardRef<HTMLDivElement, ProductImageProps>(
  function ProductImage({ className, ...props }, ref) {
    return (
      <div
        ref={ref}
        className={clsx("bg-muted relative h-48 w-full overflow-hidden", className)}
        {...props}
      />
    );
  }
);

ProductImage.displayName = "ProductImage";

type ProductBadgeProps = HTMLAttributes<HTMLDivElement>;

export const ProductBadge = forwardRef<HTMLDivElement, ProductBadgeProps>(
  function ProductBadge({ className, ...props }, ref) {
    return (
      <div
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

ProductBadge.displayName = "ProductBadge";

type ProductContentProps = HTMLAttributes<HTMLDivElement>;

export const ProductContent = forwardRef<HTMLDivElement, ProductContentProps>(
  function ProductContent({ className, ...props }, ref) {
    return (
      <div ref={ref} className={clsx("flex flex-col gap-3 p-4", className)} {...props} />
    );
  }
);

ProductContent.displayName = "ProductContent";

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

ProductTitle.displayName = "ProductTitle";

type ProductDescriptionProps = HTMLAttributes<HTMLDivElement>;

export const ProductDescription = forwardRef<HTMLDivElement, ProductDescriptionProps>(
  function ProductDescription({ className, ...props }, ref) {
    return (
      <div
        ref={ref}
        className={clsx("text-muted-foreground text-xs", className)}
        {...props}
      />
    );
  }
);

ProductDescription.displayName = "ProductDescription";

interface ProductPriceProps extends HTMLAttributes<HTMLDivElement> {
  current: number;
  original?: number;
}

export const ProductPrice = forwardRef<HTMLDivElement, ProductPriceProps>(
  function ProductPrice({ current, original, className, ...props }, ref) {
    return (
      <div ref={ref} className={clsx("flex items-center gap-2", className)} {...props}>
        <span className="text-foreground text-lg font-bold">${current.toFixed(2)}</span>
        {original && original > current && (
          <span className="text-muted-foreground text-sm line-through">
            ${original.toFixed(2)}
          </span>
        )}
      </div>
    );
  }
);

ProductPrice.displayName = "ProductPrice";

interface ProductRatingProps extends HTMLAttributes<HTMLDivElement> {
  rating: number;
  reviews?: number;
}

export const ProductRating = forwardRef<HTMLDivElement, ProductRatingProps>(
  function ProductRating({ rating, reviews, className, ...props }, ref) {
    return (
      <div
        ref={ref}
        className={clsx("flex items-center gap-2 text-sm", className)}
        {...props}
      >
        <div className="flex gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <span
              key={i}
              className={clsx(
                "text-lg",
                i < Math.floor(rating) ? "text-yellow-400" : "text-muted-foreground"
              )}
            >
              ★
            </span>
          ))}
        </div>
        <span className="text-muted-foreground text-xs">
          {rating} {reviews && `(${reviews})`}
        </span>
      </div>
    );
  }
);

ProductRating.displayName = "ProductRating";

type ProductActionProps = HTMLAttributes<HTMLButtonElement>;

export const ProductAction = forwardRef<HTMLButtonElement, ProductActionProps>(
  function ProductAction({ className, ...props }, ref) {
    return (
      <button
        ref={ref}
        className={clsx(
          "bg-primary text-primary-foreground hover:bg-primary/90 active:bg-primary/80 mt-2 w-full rounded-md px-3 py-2 text-sm font-medium transition-colors",
          className
        )}
        {...props}
      />
    );
  }
);

ProductAction.displayName = "ProductAction";
