import React from 'react'
import { FaChevronUp } from 'react-icons/fa6'

export default function ScrollIcon({reference}) {
  return (
    <a href="#top" ref={reference} id="scrollTop" title="Aller en haut"><FaChevronUp/></a>
  )
}
