import React from 'react'
import Title from '../Title'
import Card from '../Card'
import img_4 from '@/images/10.jpg'
import img_5 from '@/images/11.jpg'
import img_6 from '@/images/15.jpg'


export default function SectionService() {
  return (
   <div className="flex flex-col w-full gap-8  lg:py-12 lg:pb-20  lg:px-32 p-8 pb-20 ">


<div className="flex sm:flex-row flex-col w-full h-fit justify-between gap-4 ">
<Title title="We are ready to offer you the following services" />
<p className=' sm:text-right text-left  sm:text-sm text-xs'> We are fans of our business, we work for your emotions, We are happy 
to see the family enjoying something new in their life and we are
happy with them, because interior design in something more</p>

</div>



<Card title='Architecture development'
 description="
Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet dignissimos excepturi accusantium non ratione debitis, maxime animi, cumque vero culpa, repellendus veritatis sunt ex. Atque ipsum dolorum ullam praesentium tempore!
Temporibus laborum commodi aliquid at possimus accusamus quos consequatur nostrum cumque atque hic, accusantium earum ullam explicabo veniam! Nesciunt nemo voluptatibus esse enim distinctio! Nemo maxime soluta dolor sapiente quod."
img={img_4} />
<Card title='Interior design'
 description="
Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet dignissimos excepturi accusantium non ratione debitis, maxime animi, cumque vero culpa, repellendus veritatis sunt ex. Atque ipsum dolorum ullam praesentium tempore!
Temporibus laborum commodi aliquid at possimus accusamus quos consequatur nostrum cumque atque hic, accusantium earum ullam explicabo veniam! Nesciunt nemo voluptatibus esse enim distinctio! Nemo maxime soluta dolor sapiente quod."
img={img_6} />
<Card title='Commercial Interior design'
 description="
Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet dignissimos excepturi accusantium non ratione debitis, maxime animi, cumque vero culpa, repellendus veritatis sunt ex. Atque ipsum dolorum ullam praesentium tempore!
Temporibus laborum commodi aliquid at possimus accusamus quos consequatur nostrum cumque atque hic, accusantium earum ullam explicabo veniam! Nesciunt nemo voluptatibus esse enim distinctio! Nemo maxime soluta dolor sapiente quod."
img={img_5} />


</div>
  )
}
