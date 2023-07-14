import React from 'react'

const H3 = ({children, className}) => {
  return (
    <h3
    
    className={`font-bold text-3xl p-3 px-5 ${className}`}>{children}</h3>
  )
}

export default H3