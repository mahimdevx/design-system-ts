"use client";

import { forwardRef, ComponentPropsWithoutRef, HTMLAttributes } from "react";

import * as DialogPrimitive from "@radix-ui/react-dialog";

import { X } from "lucide-react";

import clsx from "clsx";

export const Dialog = DialogPrimitive.Root;

export const DialogTrigger = DialogPrimitive.Trigger;

export const DialogPortal = DialogPrimitive.Portal;

export const DialogClose = DialogPrimitive.Close;

type DialogOverlayProps = ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>;

export const DialogOverlay = forwardRef<HTMLDivElement, DialogOverlayProps>(
  ({ className, ...props }, ref) => (
    <DialogPrimitive.Overlay
      ref={ref}
      className={clsx(
        "fixed inset-0 z-50 bg-black/80",
        "data-[state=open]:animate-in data-[state=closed]:animate-out",
        "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        className
      )}
      {...props}
    />
  )
);

DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

type DialogContentProps = ComponentPropsWithoutRef<typeof DialogPrimitive.Content>;

export const DialogContent = forwardRef<HTMLDivElement, DialogContentProps>(
  ({ className, children, ...props }, ref) => (
    <DialogPortal>
      <DialogOverlay />

      <DialogPrimitive.Content
        ref={ref}
        className={clsx(
          "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%]",
          "translate-y-[-50%] gap-4 border bg-background",
          "p-6 shadow-lg duration-200 data-[state=open]:animate-in",
          "data-[state=closed]:animate-out data-[state=closed]:fade-out-0",
          "data-[state=closed]:zoom-out-9 data-[state=open]:fade-in-0",
          "data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2",
          "data-[state=closed]:slide-out-to-top-[48%]",
          "data-[state=open]:slide-in-from-left-1/2",
          "data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
          className
        )}
        {...props}
      >
        {children}

        <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </DialogPrimitive.Close>
      </DialogPrimitive.Content>
    </DialogPortal>
  )
);

DialogContent.displayName = DialogPrimitive.Content.displayName;

type DialogHeaderProps = HTMLAttributes<HTMLDivElement>;

export const DialogHeader = ({ className, ...props }: DialogHeaderProps) => (
  <div
    className={clsx("flex flex-col space-y-1.5 text-center sm:text-left", className)}
    {...props}
  />
);

DialogHeader.displayName = "DialogHeader";

type DialogFooterProps = HTMLAttributes<HTMLDivElement>;

const DialogFooter = ({ className, ...props }: DialogFooterProps) => (
  <div
    className={clsx(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
);

DialogFooter.displayName = "DialogFooter";

type DialogTitleProps = ComponentPropsWithoutRef<typeof DialogPrimitive.Title>;

export const DialogTitle = forwardRef<HTMLHeadingElement, DialogTitleProps>(
  ({ className, ...props }, ref) => (
    <DialogPrimitive.Title
      ref={ref}
      className={clsx("text-lg font-semibold leading-none tracking-tight", className)}
      {...props}
    />
  )
);

DialogTitle.displayName = DialogPrimitive.Title.displayName;

type DialogDescriptionProps = ComponentPropsWithoutRef<
  typeof DialogPrimitive.Description
>;

export const DialogDescription = forwardRef<HTMLParagraphElement, DialogDescriptionProps>(
  ({ className, ...props }, ref) => (
    <DialogPrimitive.Description
      ref={ref}
      className={clsx("text-sm text-muted-foreground", className)}
      {...props}
    />
  )
);

DialogDescription.displayName = DialogPrimitive.Description.displayName;
