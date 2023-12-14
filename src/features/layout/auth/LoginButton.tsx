"use client"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Moon, Sun, SunMedium } from "lucide-react"

export const LoginButton = () => {
  const { theme, setTheme } = useTheme()
  return <p>Login</p>
}
