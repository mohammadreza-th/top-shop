import React from 'react'

const Space = ({size}) => {
        if(size==="xs"){
                <div className='my-1'/>
        } 
        if(size==="md"){
                <div className='my-2'/>
        }  
        if(size==="lg"){
                <div className='my-3'/>
        }
        if(size==="xl"){
                <div className='my-4'/>
        }
 
}

export default Space