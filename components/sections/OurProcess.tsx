// OurProcess.tsx - Section for displaying the work process steps
import React from 'react'
import Title from '../Title'
import More from '../More'
import ProcessBox from '../ProcessBox'

// Main component for the 'Our Process' section
export default function OurProcess() {
  return (
    // Container for the whole section
    <div className="flex flex-col w-full h-fit items-center justify-center bg-white gap-4 pt-4 lg:p-20 lg:px-32 p-8 pb-20 ">
      {/* Header row: Title and More button */}
      <div className="flex w-full justify-between">
        <Title title="Our Work Process make your dream true" />
        <More text='More details' arrowForward={true}/>
      </div>

      {/* First row of process steps */}
      <div className="flex lg:flex-row flex-col mt-20">
        <ProcessBox title="Concept" number='.01' text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Error" rev={false}/>
        <ProcessBox title="Design" number='.02' text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Error" rev={false}/>
        <ProcessBox title="Launch" number='.03' text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Error" rev={false} />
      </div>

      {/* Second row of process steps */}
      <div className="flex lg:flex-row flex-col ">
        <ProcessBox title="Plan" number='.04' text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Error" rev={true}/>
        <ProcessBox title="Build" number='.05' text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Error" rev={true}/>
      </div>
    </div>
  )
}
