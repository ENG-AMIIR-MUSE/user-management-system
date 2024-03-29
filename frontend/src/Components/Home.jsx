import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Home() {

    const [emp,setEmp]  = useState([])
    useEffect(()=>{
        const getData = async()=>{
            const {data}  = await axios.get('/api/employees')
            console.log('data from the server',data)
            setEmp(data)

        }
        getData()
    },[]) // request 
// console.log("data",data)

   
  return (
    <div className='p-5 bg-white rounded-lg max-w-[1000px] m-auto mt-32'>
            <button className='bg-blue-500 text-white px-5 py-2 rouned-lg mb-5'>Add New Employee</button>
        <table className='w-full text-center'>
            <thead className='bg-blue-500 text-white'>
                <th>Id</th>
                <th>Name</th>
                <th>tell</th>
                <th>age</th>
            </thead>
            <tbody>
               {

                emp?.map((employee)=>{
                    return  <tr>
                    <td className='border-2 border-gray-200'>1</td>
                    <td className='border-2 border-gray-200'>{employee.name}</td>
                    <td className='border-2 border-gray-200'>{employee.tell}</td>
                    <td className='border-2 border-gray-200'>{employee.age}</td>
                </tr>
                })
               }
               
            </tbody>
        </table>
        
    </div>
  )
}
