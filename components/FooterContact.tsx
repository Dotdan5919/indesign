import React from 'react'
import Link from 'next/link'

export default function FooterContact() {
  return (
    <div className="flex flex-col lg:items-end  items-start gap-4">
<h1 className='font-bold pb-2'> Contact us</h1>

<p className='text-xs'>1556 Broadway, suite 416 <br/> New York , NY 10121 USA</p>

<Link href="tel:+442072220088" className='text-xs hover:opacity-80 transition-opacity'>
  +44 20 7722 0088 
</Link>
<Link href="mailto:in.design@gmail.com" className='text-xs hover:opacity-80 transition-opacity'>
  in.design@gmail.com 
</Link>

<Link href="/contact" className='text-xs hover:opacity-80 transition-opacity underline'>
  Get in touch →
</Link>

</div>
  )
}
