import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div>
        <nav>
            <Link href="/employees/1">Employee detail</Link>
            <Link href="/employees/1/projects">Employee's project</Link>
        </nav>
        <h3>Chi tiết nhân viên</h3>
        <p>id: 1</p>
        <p>Name: David</p>
        <p>Age: 20</p>
    </div>
  )
}
