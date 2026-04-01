"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Zap } from "lucide-react"

export function Navigation() {
  return (
    <motion.nav
      className="fixed top-0 w-full z-50 glassmorphism border-b border-white/10"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
  <Link href="/" className="flex items-center gap-2 cursor-pointer">
    <Zap className="w-7 h-7 text-primary" />
    <span className="text-xl font-bold text-foreground">
      Invest Vault
    </span>
  </Link>

        <div className="hidden md:flex gap-8">
          <Link href="/how-it-works" className="text-muted-foreground hover:text-foreground transition">
            How it Works
          </Link>
          <Link href="/about" className="text-muted-foreground hover:text-foreground transition">
            About
          </Link>
          <Link href="/vision" className="text-muted-foreground hover:text-foreground transition">
            Vision
          </Link>
        </div>

        <div className="flex gap-3">
        <Link
          href="https://investvault.vercel.app/
          "
          className="px-5 py-2 text-foreground border border-white/20 rounded-lg hover:border-primary/50 transition"
        >
          Get Started
        </Link>

        <Link
          href="https://investvault.vercel.app/"
          className="px-5 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition glow-effect"
        >
          Sign Up
        </Link>
      </div>
      </div>
    </motion.nav>
  )
}
