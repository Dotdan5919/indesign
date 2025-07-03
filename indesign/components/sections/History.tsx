import Image from 'next/image'
import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import HistoryRight from '../HistoryRight'
import HistoryLeft from '../HistoryLeft'

export default function History() {
  return (
    <div className="flex flex-col lg:flex-row pt-4 w-full h-fit items-center justify-center bg-white lg:gap-4 gap-20    lg:p-20 lg:px-32 p-8 pb-20 ">

<HistoryLeft/>




<HistoryRight more={true}/>




</div>
  )
}
