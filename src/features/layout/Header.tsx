"use client"
import { ThemeToggle } from "@/src/theme/ThemeToggle"

export default function Header() {
  return (
    <header className="container flex py-2 border-b border-b-accent">
      <h2 className="text-2xl font-bold mr-auto">Nextwitt</h2>
      <ThemeToggle />
    </header>
  )
}
