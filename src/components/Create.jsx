import React, { useContext } from 'react'
import { useState } from 'react';
import { nanoid } from 'nanoid';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { todocontext } from '../Wapper';

const Create = () => {

 const [data,setdata] = useContext(todocontext);
    //const data= props.data;
    //const setdata= props.setdata;

    /* const [titles,settitles]=useState(""); */
    
     const{register,handleSubmit,reset,formState:{errors}} = useForm();
      const submithandler = (e)=>{
         e.isCompleted = false;
         e.id = nanoid();

         const copytodo = [...data];
         copytodo.push(e)
         setdata(copytodo)

         toast.success("Todo Created !")

         reset();
         
         /*e.preventDefault();
        const newtodo = {
          id:nanoid(),
          //title:titles,
          iscompeleted:false } */
    
        
         /*let copydata = [...data];
         copydata.push(newtodo);
         setdata(copydata);
         settitles(" ");
         //setdata([...data, newtodo]) you can also write this*/
         
    
      }

  return (
    <div className=" w-[60%] p-10 text-center"> <h1 className="mb-10 text-4xl font-thin"><span className="text-red-400">create</span> Tasks</h1>
      <form onSubmit={handleSubmit(submithandler)}>
        <input className="border-b p-2 w-full text-2xl font-thin"
        {...register("title",{required:"title can not be empty",})}
        /*value={titles}
        onChange={(e)=>{settitles(e.target.value)}}*/
        type="text" placeholder="to do list"/>
         {errors?.title?.message}
        {errors && errors.title && errors.title.message && <small>{errors.title.message}</small>}
        <br/>
        <br />
        <button className="mt-5 text-xl px-10 py-2 border rounded">create to do</button> 
      </form>
      </div>
  )
}

export default Create