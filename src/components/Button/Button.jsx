import React from 'react'

export default function Button({type="button",children,className,onClick}) {
  return (
    <button type={type} onClick={onClick} className={className}>{children}</button>
  )
}
