import React from 'react'

export default function Button({children,className}) {
  return (
    <button type="button" className={className}>{children}</button>
  )
}
