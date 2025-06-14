"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

interface AuthContextType {
  isAuthenticated: boolean
  login: (email: string, password: string) => Promise<boolean>
  register: (name: string, email: string, password: string) => Promise<boolean>
  logout: () => void
  loading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check if user is already logged in
    const checkAuth = () => {
      const token = localStorage.getItem("authToken")
      setIsAuthenticated(!!token)
      setLoading(false)
    }

    checkAuth()
  }, [])

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Mock authentication - in real app, validate with backend
      if (email && password) {
        localStorage.setItem("authToken", "mock-jwt-token")
        localStorage.setItem("userEmail", email)
        setIsAuthenticated(true)
        return true
      }
      return false
    } catch (error) {
      return false
    }
  }

  const register = async (name: string, email: string, password: string): Promise<boolean> => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Mock registration - in real app, create user in backend
      if (name && email && password) {
        localStorage.setItem("authToken", "mock-jwt-token")
        localStorage.setItem("userEmail", email)
        localStorage.setItem("userName", name)
        setIsAuthenticated(true)
        return true
      }
      return false
    } catch (error) {
      return false
    }
  }

  const logout = () => {
    localStorage.removeItem("authToken")
    localStorage.removeItem("userEmail")
    localStorage.removeItem("userName")
    setIsAuthenticated(false)
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, register, logout, loading }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
