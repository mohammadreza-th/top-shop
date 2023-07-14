import React from 'react'

const H2 = ({children, className}) => {
  return (
    <h2 className={`font-bold text-4xl ${className}`}>{children}</h2>
  )
}

export default H2