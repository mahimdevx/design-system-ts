"use client";

import { HTMLAttributes, ReactNode } from "react";

import { tv, type VariantProps } from "tailwind-variants";

const productCardVariants = tv({
  base: "group border-border bg-background relative overflow-hidden rounded-lg border transition-all hover:shadow-lg"
});

const productImageVariants = tv({
  base: "bg-muted relative h-48 w-full overflow-hidden"
});

const productContentVariants = tv({
  base: "flex flex-col gap-3 p-4"
});

const productBadgeVariants = tv({
  base: "bg-destructive absolute top-2 right-2 z-10 rounded-full px-3 py-1 text-xs font-medium text-white"
});

type ProductCardProps = HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof productCardVariants> & {
    children: ReactNode;
  };

export function ProductCard({ className, ...props }: ProductCardProps) {
  const cardClasses = productCardVariants({ className });

  return <div className={cardClasses} {...props} />;
}

type ProductImageProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  alt?: string;
};

export function ProductImage({ className, ...props }: ProductImageProps) {
  const imageClasses = productImageVariants({ className });

  return <div className={imageClasses} {...props} />;
}

type ProductContentProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export function ProductContent({ className, ...props }: ProductContentProps) {
  const contentClasses = productContentVariants({ className });

  return <div className={contentClasses} {...props} />;
}

type ProductBadgeProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export function ProductBadge({ className, ...props }: ProductBadgeProps) {
  const badgeClasses = productBadgeVariants({ className });

  return <div className={badgeClasses} {...props} />;
}

type ProductTitleProps = HTMLAttributes<HTMLHeadingElement> & {
  children: ReactNode;
};

export function ProductTitle({ className, ...props }: ProductTitleProps) {
  return (
    <h3 className={`line-clamp-2 text-sm font-semibold ${className || ""}`} {...props} />
  );
}

type ProductPriceProps = HTMLAttributes<HTMLDivElement> & {
  original?: number;
  current: number;
};

export function ProductPrice({
  original,
  current,
  className,
  ...props
}: ProductPriceProps) {
  return (
    <div className={`flex items-center gap-2 ${className || ""}`} {...props}>
      <span className="text-foreground text-lg font-bold">${current.toFixed(2)}</span>
      {original && original > current && (
        <span className="text-muted-foreground text-sm line-through">
          ${original.toFixed(2)}
        </span>
      )}
    </div>
  );
}

type ProductRatingProps = HTMLAttributes<HTMLDivElement> & {
  rating: number;
  reviews?: number;
};

export function ProductRating({
  rating,
  reviews,
  className,
  ...props
}: ProductRatingProps) {
  return (
    <div className={`flex items-center gap-2 text-sm ${className || ""}`} {...props}>
      <div className="flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <span
            key={i}
            className={
              i < Math.floor(rating) ? "text-yellow-400" : "text-muted-foreground"
            }
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

type ProductActionProps = HTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

export function ProductAction({ className, ...props }: ProductActionProps) {
  return (
    <button
      className={`bg-primary text-primary-foreground hover:bg-primary/90 active:bg-primary/80 mt-2 w-full rounded-md px-3 py-2 text-sm font-medium transition-colors ${className || ""}`}
      {...props}
    />
  );
}
