"use client"
import React from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavLink({ href, children }) {
    const path = usePathname();
    const active = href === path;
    return (
        <Link className={active ? "font-bold text-green-500 border p-1  " : ""} href={href}>
            {children}
        </Link>
    )
}
