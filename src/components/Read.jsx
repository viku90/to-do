import React from 'react'
const Read = (props) => {
    const data = props.data;
    const setdata=props.setdata;

    const deletehandler = (id) => {
        const filterdata = data.filter((data)=> data.id != id)
        setdata(filterdata)
    }

     const rendervalue = data.map((data)=>{
      return <li key={data.id} className="mb-2 flex justify-between items-center p-4 bg-gray-900 rounded"><span className="text-xl font-thin">{data.title}  </span> <button className="text-sm font-thin text-red-400" onClick={()=> deletehandler(data.id)}>Delete</button></li>
  });
  
  return (
    <div className="w-[40%] p-10"> <h1 className="mb-10 text-5xl font-thin"><span className="text-pink-400">pending</span> todo</h1>
      <ol>{rendervalue}</ol></div>
  )
}

export default Read