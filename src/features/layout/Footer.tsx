"use client"
import Link from "next/link"
import { Home, PenSquare, CircleUserRound } from "lucide-react"
import clsx from "clsx"
import { buttonVariants } from "@/components/ui/button"
export const Footer = () => {
  return (
    <footer className="flex fixed bottom-0 left-0 right-0 background max-w-lg border-top border-accent justify-center container m-auto">
      <nav className="flex justify-between items-center gap-1 w-full m-auto">
        <Link
          href="/"
          className={clsx(
            buttonVariants({
              variant: "ghost",
            })
          )}
        >
          <Home />
        </Link>
        <Link
          href="/write"
          className={clsx(
            buttonVariants({
              variant: "ghost",
            })
          )}
        >
          <PenSquare />
        </Link>

        <Link
          href="/profile"
          className={clsx(
            buttonVariants({
              variant: "ghost",
            })
          )}
        >
          <CircleUserRound />
        </Link>
      </nav>
    </footer>
  )
}
