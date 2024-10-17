import React from 'react'
import Features from '../Features/Features';

const PriceOption = ({priceoption}) => {
               const{name,price,features,billing_type} = priceoption;
  return (
    <div className=''>
      <div className='card w-[800px] flex flex-col items-center text-white bg-sky-500  mt-3 p-6 font-semibold md:w-[420px] mx-auto h-[400px]  rounded-xl shadow-lg shadow-gray-400'>
              
      <h2>
      <span className='text-6xl text-red-700'>{price}</span> <span className='text-3xl text-black'>/{billing_type}</span>
      <h2 className='text-4xl font-semibold mb-2'>{name}</h2>
      </h2>
           
      <div className='flex-grow'>
      {
        features.map((feature,index)=><Features key={index} feature={feature}></Features>)
      }  
      </div>  
      <button className='bg-green-600 w-full  py-2 rounded-lg shadow-md shadow-gray-600'>Buy Now</button>      
      </div>
    </div>
  )
}

export default PriceOption
