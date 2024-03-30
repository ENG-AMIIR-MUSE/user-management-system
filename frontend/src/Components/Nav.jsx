import React from 'react'

import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <div>
    <div className="bg-black flex justify-between text-white px-32 items-center h-[50px] text-xl">
      <div className="font-bold text-orange-500">
        <Link to={'/'}>Online</Link>
      </div>
      <div>
        <ul className="flex items-center gap-5">
          <Link to={'/home'}>view Complements</Link>
          <li>About</li>
        </ul>
      </div>
      <div>
        <Link
          to={"/add"}
          className="bg-orange-500 text-white py-1 px-3 rounded-lg"
        >
          {" "}
          Complaints
        </Link>
      </div>
    </div>
  {/* <Show/> */}
  </div>
  )
}
