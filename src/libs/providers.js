"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

import * as TooltipPrimitive from "@radix-ui/react-tooltip";

export const ThemeProvider = ({ ...props }) => {
  return <NextThemesProvider {...props} />;
};

// import { ComponentProps, ReactNode } from "react";

// interface Props extends ThemeProviderProps {
//   children: ReactNode;
// }

// export function ThemeProvider({
//   children,
//   ...props
// }: ComponentProps<typeof NextThemesProvider>) {
//   return <NextThemesProvider {...props}/>
// }
