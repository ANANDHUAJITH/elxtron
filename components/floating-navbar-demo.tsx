"use client"
import { FloatingNav } from "@/components/ui/floating-navbar"
import { Home, MessageCircle, User } from "lucide-react"

export default function FloatingNavDemo() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <Home className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "/about",
      icon: <User className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "/contact",
      icon: <MessageCircle className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
  ]

  return (
    <div className="fixed top-4 inset-x-0 z-50">
      <FloatingNav navItems={navItems} />
    </div>
  )
}
