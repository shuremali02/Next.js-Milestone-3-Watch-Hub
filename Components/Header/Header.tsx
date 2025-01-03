"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const pathname = usePathname();
   const Routes=[{
    href:"#",
    name:"Home"
   },{
    href:"#",
    name:"Courses",
   },{
    href:"#",
    name:"Achievement",
   },{
    href:"#",
    name:"Services",
   },{
    href:"#",
    name:"About Us",
   },{
    href:"#",
    name:"Testimonials",
   },]
   const [isOpen, setisOpen] = useState(false)
  return (
    <div className='h-[72px] py-6  border-[#676767] border-y-[1px]  flex items-center bg-whiite justify-center  '>
      
      <div className='h-11 gap-8 flex  '>
        <div className='hidden md:flex space-x-8 p-[10px]  gap-[10px]  '>
          {Routes.map((route,index)=>(
            <Link href={route.href} key={index}>
              <span className={`flex items-center ${pathname === route.name ? "underline underline-offset-[16px]":""}`}>
                {route.name}

              </span>
            </Link>
            ))}

        </div> 
        
 
</div>
<div className="md:hidden">
      {/* Hamburger button */}
      <button onClick={() => setisOpen(!isOpen)}>
        {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
      </button>
    </div>

  {/* Mobile Navigation */}
  {isOpen && (
    <nav className="md:hidden absolute top-full left-0 bg-white z-50 w-full py-4 flex flex-col gap-y-4 items-center">
      <div className="flex flex-col gap-[10px] px-[10px]">
        {Routes.map((route, index) => (
          <Link href={route.href} key={index} onClick={() => setisOpen(false)}>
            <span
              className={`flex items-center ${
                pathname === route.name ? "underline underline-offset-[16px]" : ""
              }`}
            >
              {route.name}
            </span>
          </Link>
        ))}
      </div>

      
    </nav>
  )}

    </div>
  )
} 
 