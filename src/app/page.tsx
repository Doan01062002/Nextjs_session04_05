"use client"

import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
export default function page() {
  const pathname = usePathname()
  return (
    <nav>
      {/* <Home></Home> */}
      <Link className={`${pathname === "/home" ? "active" : ""}`} href="/home">Home</Link>
      <Link className={`${pathname === "/about" ? "active" : ""}`} href="/about">About</Link>
      <Link className={`${pathname === "/contact" ? "active" : ""}`} href="/contact">Contact</Link>
      <Link className={`${pathname === "/login" ? "active" : ""}`} href="/login">Login</Link>
    </nav>
  )
}
