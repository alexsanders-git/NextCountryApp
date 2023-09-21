import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Logo = () => {
    return (
        <Link href="/">
            <div className="flex items-center gap-3">
                <Image src="/logo.jpg" alt='Logo' width={48} height={48} />
                <h1 className='font-bold text-2xl'>Countries App</h1>
            </div>
        </Link>
    )
}
