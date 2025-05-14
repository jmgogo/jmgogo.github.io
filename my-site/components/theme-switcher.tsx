"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeSwitcher() {
  const { setTheme, theme } = useTheme();

  return (
    <>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        <Sun className="stroke-main-foreground hidden size-4 sm:size-6 dark:inline" />
        <Moon className="stroke-main-foreground inline size-4 sm:size-6 dark:hidden" />
        <span className="sr-only">Toggle theme</span>
      </button>
    </>
  );
}
