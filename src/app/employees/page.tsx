"use client"

import { useRouter } from 'next/navigation'
import React from 'react'

export default function page() {
    const router = useRouter()
  return (
    <>
        <ul>
            <li>
                <p>id: 1</p>
                <p>Name: David</p>
                <p>Age: 20</p>
                <button onClick={()=>router.push("/employees/1")} className='button'>Employee detail</button>
            </li>
            <li>
                <p>id: 2</p>
                <p>Name: Linda</p>
                <p>Age: 19</p>
                <button className='button'>Employee detail</button>
            </li>
            <li>
                <p>id: 3</p>
                <p>Name: Kavin</p>
                <p>Age: 18</p>
                <button className='button'>Employee detail</button>
            </li>
        </ul>
    </>
  )
}
