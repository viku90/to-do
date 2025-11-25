import React from 'react'
import { useState } from 'react';
import { nanoid } from 'nanoid';

const Create = (props) => {

    const data= props.data;
    const setdata= props.setdata;

     const [titles,settitles]=useState("");
    
    
      const submithandler = (e)=>{
         e.preventDefault();
        const newtodo = {
          id:nanoid(),
          title:titles,
          iscompeleted:false
    
        }
         let copydata = [...data];
         copydata.push(newtodo);
         setdata(copydata);
         settitles(" ");
         //setdata([...data, newtodo]) you can also write this
         
    
      }

  return (
    <div className=" w-[60%] p-10 text-center"> <h1 className="mb-10 text-4xl font-thin"><span className="text-red-400">create</span> Tasks</h1>
      <form onSubmit={submithandler}>
        <input className="border-b p-2 w-full text-2xl font-thin"
        value={titles}
        onChange={(e)=>{settitles(e.target.value)}}
        type="text" placeholder="to do list"/>
        <br/>
        <br />
        <button className="mt-5 text-xl px-10 py-2 border rounded">create to do</button> 
      </form>
      </div>
  )
}

export default Create