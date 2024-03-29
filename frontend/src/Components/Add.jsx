import React from 'react'

export default function Add() {
  return (
    <div className='bg-white rouned-lg border-2 m-auto mt-32 rounded-lg border-gray-200 p-5 max-w-lg'>
        <form className='flex flex-col gap-5'>
          <h1 className='font-bold text-blue-500  text-xl'>Register Employee</h1>
            <input className='border-2 border-gray-100 p-4 rounded-lg' type= 'name' placeholder='Enter your name'/>
            <input  className='border-2 border-gray-100 p-4 rounded-lg'type= 'age' placeholder='Enter your tell'/>
            <input  className='border-2 border-gray-100 p-4 rounded-lg'type= 'number' placeholder='Enter your age'/>
            <button className='bg-blue-500 text-white px-5 py-2'>Submit</button>
        </form>
    </div>
  )
}
