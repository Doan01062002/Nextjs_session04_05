import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div>
        <nav>
            <Link href="/employees/1">Employee detail</Link>
            <Link href="/employees/1/projects">Employee's project</Link>
        </nav>
        <h3>The employee project list has id = 2</h3>
        <ul>
            <li>Facebook</li>
            <li>Lazada</li>
        </ul>
    </div>
  )
}
