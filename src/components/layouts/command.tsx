"use client";

import { forwardRef, ComponentPropsWithoutRef, HTMLAttributes, ReactNode } from "react";

import { type DialogProps } from "@radix-ui/react-dialog";

import { Command as CommandPrimitive } from "cmdk";

import { Search } from "lucide-react";

import clsx from "clsx";

import { Dialog, DialogContent } from "@components/elements/dialog";

type CommandProps = DialogProps &
  ComponentPropsWithoutRef<typeof CommandPrimitive> & {
    children?: ReactNode;
  };

export const Command = forwardRef<HTMLDivElement, CommandProps>(function Command(
  { className, ...props },
  ref
) {
  return (
    <CommandPrimitive
      ref={ref}
      className={clsx(
        "flex h-full w-full flex-col",
        "overflow-hidden",
        "bg-popover text-popover-foreground",
        "rounded-md",
        className
      )}
      {...props}
    />
  );
});

Command.displayName = CommandPrimitive.displayName;

type CommandDialogProps = DialogProps & {
  children?: ReactNode;
};

export function CommandDialog({ children, ...props }: CommandDialogProps) {
  return (
    <Dialog {...props}>
      <DialogContent className="overflow-hidden p-0">
        <Command className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
          {children}
        </Command>
      </DialogContent>
    </Dialog>
  );
}

export const CommandInput = forwardRef<
  HTMLInputElement,
  ComponentPropsWithoutRef<typeof CommandPrimitive.Input>
>(function CommandInput({ className, ...props }, ref) {
  return (
    <div className="flex items-center border-b px-3" cmdk-input-wrapper="">
      <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
      <CommandPrimitive.Input
        ref={ref}
        className={clsx(
          "flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        {...props}
      />
    </div>
  );
});

CommandInput.displayName = CommandPrimitive.Input.displayName;

export const CommandList = forwardRef<
  HTMLDivElement,
  ComponentPropsWithoutRef<typeof CommandPrimitive.List>
>(function CommandList({ className, ...props }, ref) {
  return (
    <CommandPrimitive.List
      ref={ref}
      className={clsx("max-h-[300px] overflow-y-auto overflow-x-hidden", className)}
      {...props}
    />
  );
});

CommandList.displayName = CommandPrimitive.List.displayName;

export const CommandEmpty = forwardRef<
  HTMLDivElement,
  ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>
>(function CommandEmpty({ className, ...props }, ref) {
  return (
    <CommandPrimitive.Empty
      ref={ref}
      className={clsx("py-6 text-center text-sm", className)}
      {...props}
    />
  );
});

CommandEmpty.displayName = CommandPrimitive.Empty.displayName;

export const CommandGroup = forwardRef<
  HTMLDivElement,
  ComponentPropsWithoutRef<typeof CommandPrimitive.Group>
>(function CommandGroup({ className, ...props }, ref) {
  return (
    <CommandPrimitive.Group
      ref={ref}
      className={clsx(
        "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
        className
      )}
      {...props}
    />
  );
});

CommandGroup.displayName = CommandPrimitive.Group.displayName;

export const CommandSeparator = forwardRef<
  HTMLDivElement,
  ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>
>(function CommandSeparator({ className, ...props }, ref) {
  return (
    <CommandPrimitive.Separator
      ref={ref}
      className={clsx("-mx-1 h-px bg-border", className)}
      {...props}
    />
  );
});

CommandSeparator.displayName = CommandPrimitive.Separator.displayName;

export const CommandItem = forwardRef<
  HTMLDivElement,
  ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>(function CommandItem({ className, ...props }, ref) {
  return (
    <CommandPrimitive.Item
      ref={ref}
      className={clsx(
        "relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
        className
      )}
      {...props}
    />
  );
});

CommandItem.displayName = CommandPrimitive.Item.displayName;

type CommandShortcutProps = HTMLAttributes<HTMLSpanElement>;

export const CommandShortcut = forwardRef<HTMLSpanElement, CommandShortcutProps>(
  function CommandShortcut({ className, ...props }, ref) {
    return (
      <span
        ref={ref}
        className={clsx(
          "ml-auto text-xs tracking-widest text-muted-foreground",
          className
        )}
        {...props}
      />
    );
  }
);

CommandShortcut.displayName = "CommandShortcut";
