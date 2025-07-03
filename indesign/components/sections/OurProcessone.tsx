import React from 'react'
import Dropdown from '@/components/Dropdown'

export default function OurProcessone() {
  return (
   <div className="flex flex-col gap-10">

  <Dropdown title='Development of the object concept' list={["Planning decision","Development of the object style direction and it's functional content","identification of important indicators of the technical and economic justification of the project"]} />
<Dropdown title='Conceptual design' list={["Basic solutions for special planning stylistic and architectural design of the object"]} />
<Dropdown title='Working draft' list={["The General plan of the site","Foundation design","Structural plan of walls and floors","Rammers and roof plan","The project of engineering networks"]} />
<Dropdown title='Landscape Design Project' />


</div>
  )
}
