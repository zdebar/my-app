import { useState, useEffect } from "react";

type ThemeType = "light" | "dark" | "system";
const validThemes: ThemeType[] = ["light", "dark", "system"];

export function useTheme() {
  const [theme, setTheme] = useState<ThemeType>("system");

  useEffect(() => {
    const stored = localStorage.getItem("theme") as ThemeType | null;
    if (stored && validThemes.includes(stored as ThemeType)) {
      setTheme(stored as ThemeType);
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;

    const applyTheme = (t: ThemeType) => {
      if (t === "system") {
        const isDark = window.matchMedia(
          "(prefers-color-scheme: dark)"
        ).matches;
        root.classList.remove("light", "dark");
        root.classList.add(isDark ? "dark" : "light");
      } else {
        root.classList.remove("light", "dark");
        root.classList.add(t);
      }
    };

    applyTheme(theme);

    if (theme === "system") {
      const media = window.matchMedia("(prefers-color-scheme: dark)");
      const listener = () => applyTheme("system");
      media.addEventListener("change", listener);
      return () => media.removeEventListener("change", listener);
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) =>
      prev === "light" ? "dark" : prev === "dark" ? "system" : "light"
    );
  };

  return { theme, setTheme, toggleTheme };
}
