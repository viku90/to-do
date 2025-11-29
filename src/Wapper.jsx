import React, { createContext, useState } from 'react'

export const todocontext = createContext(null);
const Wapper = (props) => {
    const[data,setdata]=useState([
        {id:1 , title:"kaam karo banda", iscompeleted : false }
      ])
  return <todocontext.Provider value={[data,setdata]}>{props.children}</todocontext.Provider>
    
}   

export default Wapper