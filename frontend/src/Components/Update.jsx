import axios from 'axios'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate, useParams } from 'react-router-dom'

export default function Update() {
  const [name,setName]  = useState('')
  const [age,setAge]  = useState('')
  const [tell,setTell]  = useState('')
  const [loading,setLoading]  = useState(false)
  const nav  = useNavigate()
  const params  = useParams()
  useEffect(()=>{
    const getData = async()=>{
        const {data}  = await axios.get(`/api/employees/${params.id}`)
        setName(data.name)
        setTell(data.tell)
        setAge(data.age)
       

    }
    getData()
},[])
  const handleSm =  async(e)=>{
    e.preventDefault()
   const {data} =  await axios.put(`/api/update/${params.id}`,{
      "name":name,
      "age":age,
      "tell":tell
    })
    setLoading(false)
    console.log("data from the server...",data)
    toast.success('User Updated Successfully..')
    nav('/')

  }
  return (
    <div className='bg-white rouned-lg border-2 m-auto mt-32 rounded-lg border-gray-200 p-5 max-w-lg'>
        <form onSubmit={handleSm} className='flex flex-col gap-5'>
          <h1 className='font-bold text-blue-500  text-xl'>Update Employee</h1>
            <input value={name} onChange={(e)=>setName(e.target.value)} className='border-2 border-gray-100 p-4 rounded-lg' type= 'name' placeholder='Enter your name'/>
            <input  value={tell} onChange={(e)=>setTell(e.target.value)} className='border-2 border-gray-100 p-4 rounded-lg'type= 'age' placeholder='Enter your tell'/>
            <input  value={age} onChange={(e)=>setAge(e.target.value)} className='border-2 border-gray-100 p-4 rounded-lg'type= 'number' placeholder='Enter your age'/>
            <button  className='bg-blue-500 text-white px-5 py-2'>{loading ? "Loading ..":"Submit"}</button>
        </form>
    </div>
  )
}
