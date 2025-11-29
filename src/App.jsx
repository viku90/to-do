import { nanoid } from 'nanoid';
import React, { useState } from 'react'
import Create from './components/Create';
import Read from './components/Read';

const App = () => {
  


 

 

  
  return (
    <div className="text-white flex w-screen h-screen bg-gray-600 p-10">
      <Create />
      <br />
      <br />
     <Read />
      </div>
  )
}

export default App