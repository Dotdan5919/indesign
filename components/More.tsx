import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'





type TypeMore={text:string,arrowForward?:boolean,click?:()=>void};

export default function More({text,arrowForward,click}:TypeMore) {
  return (


    <div className="flex flex-row gap-2 items-center text-prim cursor-default w-fit" onClick={click}>
    

    { arrowForward ? (
    <>
      <FontAwesomeIcon icon={faArrowRight} />
      <p className='hover:underline decoration-dotted text-xs'>{text}</p>
    </>
  ) : (
    <>
      <p className='hover:underline decoration-dotted text-xs'>{text}</p>
      <FontAwesomeIcon icon={faArrowRight} />
    </>
  )


    }

    </div>


  )
}
