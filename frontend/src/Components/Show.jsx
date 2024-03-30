import React from 'react'
import { Link } from 'react-router-dom'
import { FaPlay } from 'react-icons/fa'
export default function Show() {
  return (
    <div className="flex items-center justify-between  px-5">
    <div className="flex flex-col gap-5 ">
      <h1 className="font-bold text-3xl ">I wish to provide </h1>
      <h2 className="font-bold text-xl">Construtuve Feedback On</h2>

      <p>
        The Existing online compalint management system and solve their our
        customers{" "}
      </p>
      <div>
        <Link
          to={"/add"}
          className="bg-orange-500 text-white p-3 px-3 rounded-lg flex  max-w-max items-center "
        >
          {" "}
          <span>Click Here</span>
          <FaPlay size={20} className="ml-2" />
        </Link>
      </div>
    </div>
    <div>
      <img className="w-[500px] h-[500px] mt-5" src="https://images.pexels.com/photos/7945944/pexels-photo-7945944.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
    </div>
  </div>
  )
}
