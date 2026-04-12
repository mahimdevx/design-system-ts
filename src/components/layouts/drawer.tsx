"use client";

import {
  forwardRef,
  ComponentPropsWithoutRef,
  ComponentProps,
  HTMLAttributes,
  ReactNode
} from "react";

import { Drawer as DrawerPrimitive } from "vaul";

import clsx from "clsx";

type DrawerProps = ComponentProps<typeof DrawerPrimitive.Root>;

export const Drawer = ({ shouldScaleBackground = false, ...props }: DrawerProps) => (
  <DrawerPrimitive.Root shouldScaleBackground={shouldScaleBackground} {...props} />
);

export const DrawerTrigger = DrawerPrimitive.Trigger;

export const DrawerPortal = DrawerPrimitive.Portal;

export const DrawerClose = DrawerPrimitive.Close;

type DrawerOverlayProps = ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay>;

export const DrawerOverlay = forwardRef<HTMLDivElement, DrawerOverlayProps>(
  function DrawerOverlay({ className, ...props }, ref) {
    return (
      <DrawerPrimitive.Overlay
        ref={ref}
        className={clsx("fixed inset-0 z-50 bg-black/80", className)}
        {...props}
      />
    );
  }
);

type DrawerContentProps = ComponentPropsWithoutRef<typeof DrawerPrimitive.Content> & {
  children: ReactNode;
};

export const DrawerContent = forwardRef<HTMLDivElement, DrawerContentProps>(
  function DrawerContent({ className, children, ...props }, ref) {
    return (
      <DrawerPortal>
        <DrawerOverlay />
        <DrawerPrimitive.Content
          ref={ref}
          className={clsx(
            "fixed inset-x-0 bottom-0 z-50",
            "mt-24 flex h-auto flex-col",
            "bg-background rounded-t-xl border",
            className
          )}
          {...props}
        >
          <div className="bg-muted mx-auto my-2 h-1 w-25 rounded-full" />
          {children}
        </DrawerPrimitive.Content>
      </DrawerPortal>
    );
  }
);

type DrawerHeaderProps = HTMLAttributes<HTMLDivElement>;

export function DrawerHeader({ className, ...props }: DrawerHeaderProps) {
  return (
    <div
      className={clsx("grid gap-1.5 p-4 text-center sm:text-left", className)}
      {...props}
    />
  );
}

type DrawerFooterProps = HTMLAttributes<HTMLDivElement>;

export function DrawerFooter({ className, ...props }: DrawerFooterProps) {
  return (
    <div className={clsx("mt-auto flex flex-col gap-2 p-4", className)} {...props} />
  );
}

type DrawerTitleProps = ComponentPropsWithoutRef<typeof DrawerPrimitive.Title>;

export const DrawerTitle = forwardRef<HTMLHeadingElement, DrawerTitleProps>(
  function DrawerTitle({ className, ...props }, ref) {
    return (
      <DrawerPrimitive.Title
        ref={ref}
        className={clsx("text-lg leading-none font-semibold tracking-tight", className)}
        {...props}
      />
    );
  }
);

type DrawerDescriptionProps = ComponentPropsWithoutRef<
  typeof DrawerPrimitive.Description
>;

export const DrawerDescription = forwardRef<HTMLParagraphElement, DrawerDescriptionProps>(
  function DrawerDescription({ className, ...props }, ref) {
    return (
      <DrawerPrimitive.Description
        ref={ref}
        className={clsx("text-muted-foreground text-sm", className)}
        {...props}
      />
    );
  }
);
