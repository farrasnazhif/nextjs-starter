"use client";

import {
  COLOR_THEME_COOKIE_NAME,
  DARK_TOKENS,
  LIGHT_TOKENS,
  WEB_NAME,
} from "@/constants";
import React from "react";
import { Sun, Moon } from "lucide-react";
import Cookie from "js-cookie";

export default function Header({ initialTheme }: { initialTheme: string }) {
  const [theme, setTheme] = React.useState(initialTheme);

  function handleToggleTheme() {
    const newTheme = theme === "light" ? "dark" : "light";

    setTheme(newTheme);

    Cookie.set(COLOR_THEME_COOKIE_NAME, newTheme, {
      expires: 1000,
    });

    const newTokens = newTheme === "light" ? LIGHT_TOKENS : DARK_TOKENS;
    const root = document.documentElement;

    root.setAttribute("data-color-theme", newTheme);
    Object.entries(newTokens).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });
  }

  return (
    <header className="w-full flex items-center justify-between px-6 py-4 border-b-1 border-[var(--text-color)] ">
      <h1 className="text-2xl font-bold ">{WEB_NAME}</h1>
      <button onClick={handleToggleTheme} className="px-4 py-2 border rounded ">
        {theme === "light" ? <Moon /> : <Sun />}
      </button>
    </header>
  );
}
