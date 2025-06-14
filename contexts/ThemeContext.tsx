"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

interface ThemeContextType {
  isDarkMode: boolean
  toggleDarkMode: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    // Check if user has a saved preference
    const savedTheme = localStorage.getItem("darkMode")
    if (savedTheme) {
      setIsDarkMode(savedTheme === "true")
    }
  }, [])

  useEffect(() => {
    // Apply theme to document
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
    localStorage.setItem("darkMode", isDarkMode.toString())
  }, [isDarkMode])

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  return <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}
