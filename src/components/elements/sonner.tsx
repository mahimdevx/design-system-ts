"use client";

import React from "react";

import { toast as sonner } from "sonner";

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
      <div className="text-indigo-600 hover:text-indigo-500 focus:ring-indigo-500 focus:outline-hidden ml-5 shrink-0 rounded-md text-sm font-medium focus:ring-2 focus:ring-offset-2">
        <button
          className="bg-indigo-50 text-indigo-600 hover:bg-indigo-100 rounded px-3 py-1 text-sm font-semibold"
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
