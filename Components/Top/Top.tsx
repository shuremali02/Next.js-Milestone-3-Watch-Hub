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

export default function TopSec() {
  return (
    <div className="flex justify-between items-center bg-black text-white px-9 p-2">
      {/* Logo Section */}
      <div>
        <Image src={"/images/Logo.svg"} alt={"Logo"} width={120} height={17} className="bg-white" />
      </div>

      {/* Search Bar with Icon */}
      <div className="relative flex items-center w-full max-w-[560px]">
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
      <PiShoppingCartBold size={32}/>
      </div>
    </div>
  );
}
