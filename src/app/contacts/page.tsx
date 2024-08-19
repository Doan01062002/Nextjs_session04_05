"use client"
import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
export default function page() {
    const pathname = usePathname()
  return (
    <nav>
        <Link className={`${pathname === "/home" ? "active" : ""}`} href="/home">Home</Link>
      <Link className={`${pathname === "/about" ? "active" : ""}`} href="/about">About</Link>
      <Link className={`${pathname === "/contacts" ? "active" : ""}`} href="/contacts">Contact</Link>
      <Link className={`${pathname === "/login" ? "active" : ""}`} href="/login">Login</Link>
      <br />
        Contact page
    </nav>
  )
}
