"use client";

import { useState, useEffect } from "react";

import { useTheme } from "next-themes";

import clsx from "clsx";

import { Icon } from "@components/elements/icon";
import { Button } from "@components/elements/button";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const isLight = theme === "light";

  return (
    <Button
      aria-label="Toggle Theme"
      onClick={() => setTheme(isLight ? "dark" : "light")}
      iconOnly
    >
      <Icon
        name="Sun"
        className={clsx(
          "absolute",
          theme === "light" ? "translate-y-0" : "-translate-y-[200%]",
          "transition-transform duration-300"
        )}
      />

      <Icon
        name="Moon"
        className={clsx(
          "absolute",
          theme === "dark" ? "translate-y-0" : "translate-y-[200%]",
          "transition-transform duration-300"
        )}
      />
    </Button>
  );
}

// import * as React from "react";
// import { ThemeProvider as NextThemesProvider } from "next-themes";

// export function ThemeProvider({
//   children,
//   ...props
// }: React.ComponentProps<typeof NextThemesProvider>) {
//   return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
// }
