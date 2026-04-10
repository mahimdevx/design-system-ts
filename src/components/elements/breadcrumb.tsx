"use client";

import { ComponentProps } from "react";

import { Slot } from "@radix-ui/react-slot";

import clsx from "clsx";

import { Icon } from "@components/elements/icon";

import { breadcrumbVariants } from "@styles/layouts/breadcrumb";

const { listVariants, itemVariants, linkVariants } = breadcrumbVariants();

type BreadcrumbProps = ComponentProps<"nav">;

export function Breadcrumb({ ...props }: BreadcrumbProps) {
  return <nav aria-label="breadcrumb" data-slot="breadcrumb" {...props} />;
}

Breadcrumb.displayName = "Breadcrumb";

type BreadcrumbListProps = ComponentProps<"ol">;

export function BreadcrumbList({ className, ...props }: BreadcrumbListProps) {
  const listClasses = listVariants({ className });

  return <ol data-slot="breadcrumb-list" className={listClasses} {...props} />;
}

BreadcrumbList.displayName = "BreadcrumbList";

type BreadcrumbItemProps = ComponentProps<"li">;

export function BreadcrumbItem({ className, ...props }: BreadcrumbItemProps) {
  const itemClasses = itemVariants({ className });

  return <li data-slot="breadcrumb-item" className={itemClasses} {...props} />;
}

BreadcrumbItem.displayName = "BreadcrumbItem";

type BreadcrumbLinkProps = ComponentProps<"a"> & {
  asChild?: boolean;
};

export function BreadcrumbLink({ asChild, className, ...props }: BreadcrumbLinkProps) {
  const Component = asChild ? Slot : "a";

  const linkClasses = linkVariants({ className });

  return <Component data-slot="breadcrumb-link" className={linkClasses} {...props} />;
}

BreadcrumbLink.displayName = "BreadcrumbLink";

type BreadcrumbPageProps = ComponentProps<"span">;

export function BreadcrumbPage({ className, ...props }: BreadcrumbPageProps) {
  return (
    <span
      role="link"
      aria-current="page"
      aria-disabled="true"
      data-slot="breadcrumb-page"
      className={clsx("font-normal text-foreground", className)}
      {...props}
    />
  );
}

BreadcrumbPage.displayName = "BreadcrumbPage";

type BreadcrumbSeparatorProps = ComponentProps<"li">;

export function BreadcrumbSeparator({
  children,
  className,
  ...props
}: BreadcrumbSeparatorProps) {
  return (
    <li
      role="presentation"
      aria-hidden="true"
      data-slot="breadcrumb-separator"
      className={clsx("[&>svg]:h-3.5 [&>svg]:w-3.5", className)}
      {...props}
    >
      {children ?? <Icon name="ChevronRight" />}
    </li>
  );
}

BreadcrumbSeparator.displayName = "BreadcrumbSeparator";

type BreadcrumbEllipsisProps = ComponentProps<"span">;

export function BreadcrumbEllipsis({ className, ...props }: BreadcrumbEllipsisProps) {
  return (
    <span
      role="presentation"
      aria-hidden="true"
      data-slot="breadcrumb-ellipsis"
      {...props}
    >
      <Icon name="Ellipsis" />
      <span className="sr-only">More</span>
    </span>
  );
}

BreadcrumbEllipsis.displayName = "BreadcrumbEllipsis";
