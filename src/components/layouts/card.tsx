"use client";

import { forwardRef, HTMLAttributes } from "react";

import clsx from "clsx";

type CardProps = HTMLAttributes<HTMLDivElement>;

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={clsx(
          "bg-card text-card-foreground rounded-xl border shadow",
          className
        )}
        {...props}
      />
    );
  }
);

type CardHeaderProps = HTMLAttributes<HTMLDivElement>;

export const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(function CardHeader(
  { className, ...props },
  ref
) {
  return (
    <div
      ref={ref}
      className={clsx("flex flex-col space-y-1.5 p-6", className)}
      {...props}
    />
  );
});

type CardTitleProps = HTMLAttributes<HTMLDivElement>;

export const CardTitle = forwardRef<HTMLDivElement, CardTitleProps>(function CardTitle(
  { className, ...props },
  ref
) {
  return (
    <div
      ref={ref}
      className={clsx("leading-none font-semibold tracking-tight", className)}
      {...props}
    />
  );
});

type CardDescriptionProps = HTMLAttributes<HTMLDivElement>;

export const CardDescription = forwardRef<HTMLDivElement, CardDescriptionProps>(
  function CardDescription({ className, ...props }, ref) {
    return (
      <div
        ref={ref}
        className={clsx("text-muted-foreground text-sm", className)}
        {...props}
      />
    );
  }
);

type CardContentProps = HTMLAttributes<HTMLDivElement>;

export const CardContent = forwardRef<HTMLDivElement, CardContentProps>(
  function CardContent({ className, ...props }, ref) {
    return <div ref={ref} className={clsx("p-6 pt-0", className)} {...props} />;
  }
);

type CardFooterProps = HTMLAttributes<HTMLDivElement>;

export const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(function CardFooter(
  { className, ...props },
  ref
) {
  return (
    <div ref={ref} className={clsx("flex items-center p-6 pt-0", className)} {...props} />
  );
});
