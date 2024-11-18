import React, { useState } from 'react'

const Third = () => {
     const [Form,setForm]=useState({
        title:"",
        desc:""
     })
     const onChangeHandle = (e:React.ChangeEvent<HTMLInputElement>) =>setForm({...Form,[e.target.name]:e.target.value});

     const handleSubmit = () =>{}
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg max-w-md mx-auto">
     <h2 className="text-2xl font-bold text-gray-800 mb-4 font-serif text-center">Add A New TODO</h2>
    <form action="" className="space-y-4">
      <input 
        type="text" 
        name="title" 
        value={Form.title} 
        onChange={onChangeHandle} 
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter title"
      />
      <input 
        type="text" 
        name="desc" 
        value={Form.desc} 
        onChange={onChangeHandle} 
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter description"
      />
       <button 
      type="button" 
      onClick={handleSubmit} 
      className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
    >
      Submit
    </button>
    </form>
  </div>
  
  )
}

export default Third
