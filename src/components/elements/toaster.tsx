"use client";

import { ComponentProps } from "react";

import { useTheme } from "next-themes";

import { Toaster as Sonner } from "sonner";

import { tv } from "tailwind-variants";

const toasterVariants = tv({
  slots: {
    toastVariants: [
      "flex items-start gap-2 p-5",
      "font-sans text-sm",
      "bg-background border shadow-lg"
    ],
    descriptionVariants: "text-muted-foreground text-sm",
    actionButtonVariants: [
      "flex-shrink-0 px-2 py-0.5",
      "text-xs font-semibold",
      "bg-primary text-primary-foreground",
      "rounded-md"
    ],
    cancelButtonVariants: "bg-muted group-[.toast]:text-muted-foreground",
    iconVariants: "mt-0.5 h-4 w-4 flex-shrink-0"
  }
});

const {
  toastVariants,
  descriptionVariants,
  actionButtonVariants,
  cancelButtonVariants,
  iconVariants
} = toasterVariants();

type ToasterProps = ComponentProps<typeof Sonner>;

export function Toaster({ ...props }: ToasterProps) {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      expand={false}
      position="bottom-center"
      closeButton
      richColors
      toastOptions={{
        classNames: {
          toast: toastVariants(),
          description: descriptionVariants(),
          actionButton: actionButtonVariants(),
          cancelButton: cancelButtonVariants(),
          icon: iconVariants()
        }
      }}
      {...props}
    />
  );
}
