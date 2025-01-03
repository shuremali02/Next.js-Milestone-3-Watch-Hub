"use client"
import React, { useEffect, useState } from 'react'
import ProductCard from '../ProductCard/Productcard';
import { Watch } from '@/app/_lib/data';
import  Link  from 'next/link';

export default function ProductPage() {
    const [product,setProduct]=useState<Watch[]>([]);
    useEffect(()=>{
      
        
        const  product = async () => {
          const response = await fetch("/api")
          const data = await response.json()
          console.log(data)
          setProduct(data)
    }
    product()


    },[])
  return (
    <div> 
        <div >
        {product.map((Product,index)=>(
          <Link key={index} href={`/Product/${Product.id}`}>
          <ProductCard {...Product} key={index}/>
        </Link>
        )
        )}
        </div>

    </div>
  )
}
