"use client";

import { forwardRef, ComponentPropsWithoutRef, HTMLAttributes, ReactNode } from "react";

import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";

import clsx from "clsx";

import { buttonVariants } from "@styles/elements/button";

export const AlertDialog = AlertDialogPrimitive.Root;

export const AlertDialogTrigger = AlertDialogPrimitive.Trigger;

export const AlertDialogPortal = AlertDialogPrimitive.Portal;

type AlertDialogOverlayProps = ComponentPropsWithoutRef<
  typeof AlertDialogPrimitive.Overlay
>;

export const AlertDialogOverlay = forwardRef<HTMLDivElement, AlertDialogOverlayProps>(
  ({ className, ...props }, ref) => {
    return (
      <AlertDialogPrimitive.Overlay
        ref={ref}
        className={clsx(
          "fixed inset-0 z-50 bg-black/75",
          "data-[state=open]:animate-in data-[state=closed]:animate-out",
          "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
          className
        )}
        {...props}
      />
    );
  }
);

AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName;

type AlertDialogContentProps = ComponentPropsWithoutRef<
  typeof AlertDialogPrimitive.Content
> & {
  children: ReactNode;
};

export const AlertDialogContent = forwardRef<HTMLDivElement, AlertDialogContentProps>(
  ({ className, ...props }, ref) => {
    return (
      <AlertDialogPortal>
        <AlertDialogOverlay />
        <AlertDialogPrimitive.Content
          ref={ref}
          className={clsx(
            "fixed left-[50%] top-[50%] z-50 grid gap-4",
            "w-full max-w-lg translate-x-[-50%] translate-y-[-50%]",
            "border bg-background p-6 shadow-lg",
            "data-[state=closed]:animate-out data-[state=closed]:fade-out-0",
            "data-[state=open]:animate-in data-[state=open]:fade-in-0",
            "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
            "data-[state=closed]:slide-out-to-left-1/2",
            "data-[state=open]:slide-in-from-left-1/2",
            "data-[state=closed]:slide-out-to-top-[48%]",
            "data-[state=open]:slide-in-from-top-[48%]",
            className
          )}
          {...props}
        />
      </AlertDialogPortal>
    );
  }
);

AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName;

type AlertDialogHeaderProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export function AlertDialogHeader({ className, ...props }: AlertDialogHeaderProps) {
  return (
    <div
      className={clsx("flex flex-col space-y-2", "text-center sm:text-left", className)}
      {...props}
    />
  );
}

AlertDialogHeader.displayName = "AlertDialogHeader";

type AlertDialogTitleProps = ComponentPropsWithoutRef<
  typeof AlertDialogPrimitive.Title
> & {
  children: string;
};

export const AlertDialogTitle = forwardRef<HTMLHeadingElement, AlertDialogTitleProps>(
  ({ className, ...props }, ref) => {
    return (
      <AlertDialogPrimitive.Title
        ref={ref}
        className={clsx("text-lg font-semibold", className)}
        {...props}
      />
    );
  }
);

AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName;

type AlertDialogDescriptionProps = ComponentPropsWithoutRef<
  typeof AlertDialogPrimitive.Description
> & {
  children: string;
};

export const AlertDialogDescription = forwardRef<
  HTMLParagraphElement,
  AlertDialogDescriptionProps
>(({ className, ...props }, ref) => {
  return (
    <AlertDialogPrimitive.Description
      ref={ref}
      className={clsx("text-sm text-muted-foreground", className)}
      {...props}
    />
  );
});

AlertDialogDescription.displayName = AlertDialogPrimitive.Description.displayName;

type AlertDialogFooterProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export function AlertDialogFooter({ className, ...props }: AlertDialogFooterProps) {
  return (
    <div
      className={clsx(
        "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
        className
      )}
      {...props}
    />
  );
}

AlertDialogFooter.displayName = "AlertDialogFooter";

type AlertDialogCancelProps = ComponentPropsWithoutRef<
  typeof AlertDialogPrimitive.Cancel
> & {
  children: ReactNode;
};

export const AlertDialogCancel = forwardRef<HTMLButtonElement, AlertDialogCancelProps>(
  ({ className, ...props }, ref) => {
    return (
      <AlertDialogPrimitive.Cancel
        ref={ref}
        className={buttonVariants({ size: "sm", variant: "muted", className })}
        {...props}
      />
    );
  }
);

AlertDialogCancel.displayName = AlertDialogPrimitive.Cancel.displayName;

type AlertDialogActionProps = ComponentPropsWithoutRef<
  typeof AlertDialogPrimitive.Action
> & {
  children: ReactNode;
};

export const AlertDialogAction = forwardRef<HTMLButtonElement, AlertDialogActionProps>(
  ({ className, ...props }, ref) => {
    return (
      <AlertDialogPrimitive.Action
        ref={ref}
        className={buttonVariants({ size: "sm", className })}
        {...props}
      />
    );
  }
);

AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName;
