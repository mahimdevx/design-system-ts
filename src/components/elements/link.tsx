"use client";

import { forwardRef, ComponentPropsWithoutRef, MouseEvent } from "react";

import NextLink from "next/link";
import { useRouter } from "next/navigation";

import { tv } from "tailwind-variants";

const linkVariants = tv({
  base: [
    "font-poppins text-base font-normal",
    "text-foreground cursor-pointer",
    "transition-all duration-150 ease-in-out",
    "hover:text-primary hover:underline"
  ]
});

type LinkProps = ComponentPropsWithoutRef<typeof NextLink> & {
  href: string | URL;
  transition?: boolean;
};

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ href = "/", transition = false, className, ...props }, ref) => {
    const router = useRouter();

    const linkClasses = linkVariants({ className });

    function handleClick(event: MouseEvent<HTMLAnchorElement>) {
      event.preventDefault();

      if (!transition && !document.startViewTransition) {
        return null;
      }

      document.startViewTransition?.(() => {
        router.push(href.toString());
      });
    }

    return (
      <NextLink
        ref={ref}
        href={href}
        className={linkClasses}
        onClick={transition ? handleClick : undefined}
        {...props}
      />
    );
  }
);
