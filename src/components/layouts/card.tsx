"use client";

import { ComponentProps, ReactNode } from "react";

import { cardVariants } from "@styles/layouts/card";

const {
  containerVariants,
  headerVariants,
  titleVariants,
  descriptionVariants,
  contentVariants,
  actionVariants,
  footerVariants
} = cardVariants();

type CardProps = ComponentProps<"div"> & {
  children: ReactNode;
};

export function Card({ className, ...props }: CardProps) {
  const cardClasses = containerVariants({ className });

  return <div data-slot="card" className={cardClasses} {...props} />;
}

type CardHeaderProps = ComponentProps<"div">;

export function CardHeader({ className, ...props }: CardHeaderProps) {
  const headerClasses = headerVariants({ className });

  return <div data-slot="card-header" className={headerClasses} {...props} />;
}

type CardTitleProps = ComponentProps<"div">;

export function CardTitle({ className, ...props }: CardTitleProps) {
  const titleClasses = titleVariants({ className });

  return <div data-slot="card-title" className={titleClasses} {...props} />;
}

type CardDescriptionProps = ComponentProps<"div">;

export function CardDescription({ className, ...props }: CardDescriptionProps) {
  const descriptionClasses = descriptionVariants({ className });

  return <div data-slot="card-description" className={descriptionClasses} {...props} />;
}

type CardContentProps = ComponentProps<"div">;

export function CardContent({ className, ...props }: CardContentProps) {
  const contentClasses = contentVariants({ className });

  return <div data-slot="card-content" className={contentClasses} {...props} />;
}

type CardActionProps = ComponentProps<"div">;

export function CardAction({ className, ...props }: CardActionProps) {
  const actionClasses = actionVariants({ className });

  return <div data-slot="card-action" className={actionClasses} {...props} />;
}

type CardFooterProps = ComponentProps<"div">;

export function CardFooter({ className, ...props }: CardFooterProps) {
  const footerClasses = footerVariants({ className });

  return <div data-slot="card-footer" className={footerClasses} {...props} />;
}
