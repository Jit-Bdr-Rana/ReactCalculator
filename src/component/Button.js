import React from 'react'

const Button = ({color,text,onClick}) => {
    
    return (
 
                      <th hover style={{backgroundColor:color}} className="table-hover"><a type="button" onClick={()=>onClick(text)}> <span class="color__">{text}</span></a></th>
                      
       
    
    )
}

export default Button
