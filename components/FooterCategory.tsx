import React from 'react'
import Link from 'next/link'

export default function FooterCategory() {
  return (
    <div className="flex flex-col lg:items-end  items-start gap-4">
<h1 className='font-bold pb-2'> Category</h1>

<Link href="/shop?category=Decor" className='text-xs hover:opacity-80 transition-opacity'>
  Decor
</Link>

<Link href="/shop?category=Furniture" className='text-xs hover:opacity-80 transition-opacity'>
  Furniture 
</Link>
<Link href="/shop?category=Lighting" className='text-xs hover:opacity-80 transition-opacity'>
  Lighting
</Link>
<Link href="/shop?category=Interior Design" className='text-xs hover:opacity-80 transition-opacity'>
  Interior Design
</Link>
<Link href="/shop?category=Architecture design" className='text-xs hover:opacity-80 transition-opacity'>
  Architecture design
</Link>
<Link href="/shop?category=Commercial design" className='text-xs hover:opacity-80 transition-opacity'>
  Commercial design
</Link>

</div>
  )
}
