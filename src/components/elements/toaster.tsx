"use client";

import { toast as sonner } from "sonner";
import { Toaster as Sonner, type ToasterProps } from "sonner";

import { useTheme } from "next-themes";

import { Icon } from "./icon";
import { Button } from "./button";

interface ToastProps {
  id: string | number;
  title: string;
  description: string;
  button: {
    label: string;
    onClick: () => void;
  };
}

function Toast(props: ToastProps) {
  const { title, description, button, id } = props;

  return (
    <div>
      <div className="flex flex-1 items-center">
        <div className="w-full">
          <p className="text-sm font-medium text-gray-900">{title}</p>
          <p className="mt-1 text-sm text-gray-500">{description}</p>
        </div>
      </div>
      <div className="ml-5 shrink-0 rounded-md text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden">
        <button
          className="rounded bg-indigo-50 px-3 py-1 text-sm font-semibold text-indigo-600 hover:bg-indigo-100"
          onClick={() => {
            button.onClick();
            sonner.dismiss(id);
          }}
        >
          {button.label}
        </button>
      </div>
    </div>
  );
}

export function Toaster({ ...props }: ToasterProps) {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      icons={{
        success: <Icon name="CircleCheck" className="size-4" />,
        info: <Icon name="Info" className="size-4" />,
        warning: <Icon name="TriangleAlert" className="size-4" />,
        error: <Icon name="X" className="size-4" />,
        loading: <Icon name="Loader" className="size-4 animate-spin" />
      }}
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
          "--border-radius": "var(--radius)"
        } as React.CSSProperties
      }
      toastOptions={{
        classNames: {
          toast: "cn-toast"
        }
      }}
      {...props}
    />
  );
}

function toast(toast: Omit<ToastProps, "id">) {
  return sonner.custom((id) => (
    <Toast
      id={id}
      title={toast.title}
      description={toast.description}
      button={{
        label: toast.button.label,
        onClick: () => console.log("Button clicked")
      }}
    />
  ));
}

export default function Headless() {
  return (
    <Button
      size="sm"
      rounded
      onClick={() => {
        toast({
          title: "This is a headless toast",
          description:
            "You have full control of styles and jsx, while still having the animations.",
          button: {
            label: "Reply",
            onClick: () => sonner.dismiss()
          }
        });
      }}
    >
      Render toast
    </Button>
  );
}
