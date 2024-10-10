"use client"

import { useTheme } from "next-themes"
import { Button } from "./ui/button"

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <Button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      {theme === "light" ? "Mode Gelap" : "Mode Terang"}
    </Button>
  )
}