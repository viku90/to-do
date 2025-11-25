import { nanoid } from 'nanoid';
import React, { useState } from 'react'
import Create from './components/Create';
import Read from './components/Read';

const App = () => {
  const[data,setdata]=useState([
    {id:1 , title:"kaam karo banda", iscompeleted : false }
  ])


 

 

  
  return (
    <div className="text-white flex w-screen h-screen bg-gray-600 p-10">
      <Create data={data} setdata={setdata}/>
      <br />
      <br />
     <Read data={data} setdata={setdata}/>
      </div>
  )
}

export default App