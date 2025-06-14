"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Eye, EyeOff, LogIn, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { useAuth } from "@/contexts/AuthContext"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const { login } = useAuth()
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      const success = await login(email, password)
      if (success) {
        router.push("/")
      } else {
        setError("Invalid email or password")
      }
    } catch (err) {
      setError("An error occurred. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-100 flex flex-col items-center justify-center p-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="w-full max-w-md relative z-10">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-white/20">
          <div className="p-8">
            <div className="text-center mb-8">
              <div className="mx-auto w-16 h-16 bg-gradient-to-r from-cyan-400 to-indigo-600 rounded-2xl flex items-center justify-center mb-4">
                <span className="text-white text-2xl font-bold">H</span>
              </div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-600 to-indigo-600 bg-clip-text text-transparent">
                Healthcare
              </h1>
              <p className="text-gray-500 mt-2">Welcome back! Please sign in to your account</p>
            </div>

            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-2 text-red-700">
                <AlertCircle className="w-5 h-5" />
                <span className="text-sm">{error}</span>
              </div>
            )}

            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-700 font-medium">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="h-12 border-gray-200 focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password" className="text-gray-700 font-medium">
                    Password
                  </Label>
                  <Link href="/auth/forgot-password" className="text-sm text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </Link>
                </div>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="h-12 pr-10 border-gray-200 focus:border-indigo-500 focus:ring-indigo-500"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember" className="text-sm text-gray-600">
                  Remember me for 30 days
                </Label>
              </div>

              <Button
                type="submit"
                className="w-full h-12 bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-600 hover:to-indigo-700 text-white font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Signing in...
                  </div>
                ) : (
                  <>
                    <LogIn className="mr-2 h-5 w-5" />
                    Sign In
                  </>
                )}
              </Button>
            </form>

            <div className="mt-8 text-center">
              <p className="text-sm text-gray-600">
                Don't have an account?{" "}
                <Link href="/auth/register" className="text-indigo-600 hover:text-indigo-500 font-medium">
                  Create account
                </Link>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            By signing in, you agree to our{" "}
            <a href="#" className="text-gray-700 hover:underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="text-gray-700 hover:underline">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
