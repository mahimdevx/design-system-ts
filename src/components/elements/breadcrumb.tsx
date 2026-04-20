"use client";

import { ComponentProps } from "react";

import { Slot } from "@radix-ui/react-slot";

import clsx from "clsx";

import { breadcrumbVariants } from "@styles/layouts/breadcrumb";

import { Icon } from "@components/elements/icon";

const { listVariants, itemVariants, linkVariants } = breadcrumbVariants();

type BreadcrumbProps = ComponentProps<"nav">;

export function Breadcrumb({ ...props }: BreadcrumbProps) {
  return <nav data-slot="breadcrumb" aria-label="breadcrumb" {...props} />;
}

type BreadcrumbListProps = ComponentProps<"ol">;

export function BreadcrumbList({ className, ...props }: BreadcrumbListProps) {
  const listClasses = listVariants({ className });

  return <ol data-slot="breadcrumb-list" className={listClasses} {...props} />;
}

type BreadcrumbItemProps = ComponentProps<"li">;

export function BreadcrumbItem({ className, ...props }: BreadcrumbItemProps) {
  const itemClasses = itemVariants({ className });

  return <li data-slot="breadcrumb-item" className={itemClasses} {...props} />;
}

type BreadcrumbLinkProps = ComponentProps<"a"> & {
  asChild?: boolean;
};

export function BreadcrumbLink({ asChild, className, ...props }: BreadcrumbLinkProps) {
  const linkClasses = linkVariants({ className });

  const Component = asChild ? Slot : "a";

  return <Component data-slot="breadcrumb-link" className={linkClasses} {...props} />;
}

type BreadcrumbPageProps = ComponentProps<"span">;

export function BreadcrumbPage({ className, ...props }: BreadcrumbPageProps) {
  return (
    <span
      data-slot="breadcrumb-page"
      role="link"
      aria-current="page"
      aria-disabled="true"
      className={clsx("text-foreground font-normal", className)}
      {...props}
    />
  );
}

type BreadcrumbSeparatorProps = ComponentProps<"li">;

export function BreadcrumbSeparator({
  children,
  className,
  ...props
}: BreadcrumbSeparatorProps) {
  return (
    <li
      data-slot="breadcrumb-separator"
      role="presentation"
      aria-hidden="true"
      className={clsx("[&>svg]:size-3.5", className)}
      {...props}
    >
      {children ?? <Icon name="ChevronRight" />}
    </li>
  );
}

type BreadcrumbEllipsisProps = ComponentProps<"span">;

export function BreadcrumbEllipsis({ className, ...props }: BreadcrumbEllipsisProps) {
  return (
    <span
      data-slot="breadcrumb-ellipsis"
      role="presentation"
      aria-hidden="true"
      className={clsx("flex size-9 items-center justify-center", className)}
      {...props}
    >
      <Icon name="Ellipsis" />
      <span className="sr-only">More</span>
    </span>
  );
}
