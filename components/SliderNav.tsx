import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

interface PropType {
  direction: 'left' | 'right'
  onClick: () => void
  disabled?: boolean
}

export default function SliderNav({ direction, onClick, disabled }: PropType) {
  return (
    <FontAwesomeIcon
      icon={direction === 'left' ? faAngleLeft : faAngleRight}
      className={`
        p-4 rounded 
        ${disabled ? 'bg-gray-300 text-black' : 'bg-prim text-white cursor-pointer'} 
        hover:opacity-90 hover:shadow-sm
      `}
      onClick={disabled ? undefined : onClick}
    />
  )
}
