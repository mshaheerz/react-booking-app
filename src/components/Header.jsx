import React from 'react'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <header className=" flex justify-between">
    <a href="" className="flex items-center gap-1">
      <svg fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-8 h-8 -rotate-90">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
      </svg>
      <span className="font-bold text-xl">airbnc</span>
    </a>

    <div className="flex gap-2 border border-gray-300 rounded-full py-2 px-4 shadow-md shadow-gray-300">
      <div>
        anywhere
      </div>
      <div className=" border-l border-gray-300"></div>
      <div>
        anyweel
      </div>
      <div className=" border-l border-gray-300"></div>
      <div>
        add quest
      </div>

      <button className="bg-primary text-white p-1 rounded-full"><svg fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="h-4 w-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg></button>
    </div>

    <Link to={'/login'} className="flex items-center gap-2 border border-gray-300 rounded-full py-2 px-4 ">
      <svg fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>

      <div className="bg-gray-500 text-white rounded-full border border-gray-500 overflow-hidden">
        <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="h-6 w-6 relative top-1">
          <path d="M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z" />
        </svg>

      </div>
    </Link>
  </header>
  )
}

export default Header