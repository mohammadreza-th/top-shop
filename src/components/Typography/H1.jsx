import React from 'react'

const H1 = ({children,className}) => {
  return (
    <h1 className={`font-bold text-5xl first-line:${className}`}>{children}</h1>
  )
}

export default H1