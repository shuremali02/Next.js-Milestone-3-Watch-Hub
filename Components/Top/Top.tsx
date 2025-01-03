// "use client"
// import Image from "next/image";
// import { Input } from "../ui/input";
// import { FaSearch } from "react-icons/fa";

// export default function TopSec() {
//   return (
//     <div className='flex justify-between items-center bg-black text-white px-4 p-2'>
//         <div>
//             <Image src={"/images/Logo.svg"} alt={"Logo"} width={120}  height={17} className="bg-white"/>
            
//         </div>
//         <div className="flex w-full max-w-[560px] rounded-full">

//         <Input placeholder="search " type="text " onChange={(e)=>(
//             e.target.value 
//         )}  />
//         <FaSearch/>
     
//         </div>
//         <div>
//             icons
//         </div>


//     </div>
//   )
// }
"use client";
import { TbTruckDelivery } from "react-icons/tb";
import { PiShoppingCartBold } from "react-icons/pi";

import Image from "next/image";
import { Input } from "../ui/input";
import { FaSearch } from "react-icons/fa";
import Link from "next/link";

export default function TopSec() {
  return (
    <div className="flex justify-between items-center bg-black text-white px-9 p-2">
      {/* Logo Section */}
      <div>
        <Image src={"/images/Logo.jpeg"} alt={"Logo"} width={70} height={10} className="bg-white rounded-full" />
      </div>

      {/* Search Bar with Icon */}
      <div className="relative hidden md:flex items-center w-full max-w-[560px]">
        <Input
          placeholder="Search"
          type="text"
          className="pr-10 pl-4 w-full rounded-full"
          onChange={(e) => e.target.value}
        />
        
        <FaSearch className="absolute right-3 text-white" />
        
      </div>

      {/* Icons Section */}
      <div className="flex gap-4">
        <TbTruckDelivery size={36}/>
        <Link href={"/TestRoute"}>
      <PiShoppingCartBold size={32}/>
      </Link>
      </div>
    </div>
  );
}
