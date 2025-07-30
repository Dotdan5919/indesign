import React from 'react'
import Link from 'next/link'

export default function FooterCompany() {
  return (
    <div className="flex flex-col lg:items-end  items-start gap-4">
<h1 className='font-bold pb-2'> Company</h1>

<Link href="/about" className='text-xs hover:opacity-80 transition-opacity'>
  About us
</Link>

<Link href="/services" className='text-xs hover:opacity-80 transition-opacity'>
  Services 
</Link>
<Link href="/portfolio" className='text-xs hover:opacity-80 transition-opacity'>
  Portfolio
</Link>
<Link href="/delivery" className='text-xs hover:opacity-80 transition-opacity'>
  Delivery
</Link>
<Link href="/contact" className='text-xs hover:opacity-80 transition-opacity'>
  Contact us
</Link>
<Link href="/blog" className='text-xs hover:opacity-80 transition-opacity'>
  Blog
</Link>

</div>
  )
}
