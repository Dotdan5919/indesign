import React from 'react'
import Dropdown from '@/components/Dropdown'

export default function OurProcesstwo() {
  return (
   <div className="flex flex-col gap-10">

  <Dropdown title='Planning Solutions Development' list={["Measuring","Draft design concept","object budgeting"]} />
<Dropdown title='Planning Solutions Development' list={["Planning direction","3D visualization"]} />
<Dropdown title='Planning Solutions Development' list={["Full package of working documentation","Selection of materials","Architectural supervision"]} />



</div>
  )
}
