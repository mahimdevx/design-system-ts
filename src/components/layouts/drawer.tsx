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

Drawer.displayName = "Drawer";

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

DrawerOverlay.displayName = DrawerPrimitive.Overlay.displayName;

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
            "rounded-t-xl border bg-background",
            className
          )}
          {...props}
        >
          <div className="mx-auto my-2 h-1 w-[100px] rounded-full bg-muted" />
          {children}
        </DrawerPrimitive.Content>
      </DrawerPortal>
    );
  }
);

DrawerContent.displayName = "DrawerContent";

type DrawerHeaderProps = HTMLAttributes<HTMLDivElement>;

export function DrawerHeader({ className, ...props }: DrawerHeaderProps) {
  return (
    <div
      className={clsx("grid gap-1.5 p-4 text-center sm:text-left", className)}
      {...props}
    />
  );
}

DrawerHeader.displayName = "DrawerHeader";

type DrawerFooterProps = HTMLAttributes<HTMLDivElement>;

export function DrawerFooter({ className, ...props }: DrawerFooterProps) {
  return (
    <div className={clsx("mt-auto flex flex-col gap-2 p-4", className)} {...props} />
  );
}

DrawerFooter.displayName = "DrawerFooter";

type DrawerTitleProps = ComponentPropsWithoutRef<typeof DrawerPrimitive.Title>;

export const DrawerTitle = forwardRef<HTMLHeadingElement, DrawerTitleProps>(
  function DrawerTitle({ className, ...props }, ref) {
    return (
      <DrawerPrimitive.Title
        ref={ref}
        className={clsx("text-lg font-semibold leading-none tracking-tight", className)}
        {...props}
      />
    );
  }
);

DrawerTitle.displayName = DrawerPrimitive.Title.displayName;

type DrawerDescriptionProps = ComponentPropsWithoutRef<
  typeof DrawerPrimitive.Description
>;

export const DrawerDescription = forwardRef<HTMLParagraphElement, DrawerDescriptionProps>(
  function DrawerDescription({ className, ...props }, ref) {
    return (
      <DrawerPrimitive.Description
        ref={ref}
        className={clsx("text-sm text-muted-foreground", className)}
        {...props}
      />
    );
  }
);

DrawerDescription.displayName = DrawerPrimitive.Description.displayName;
