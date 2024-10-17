import React, { useEffect, useState } from 'react'
import { Audio } from 'react-loader-spinner'
import {InfinitySpin} from 'react-loader-spinner'
import { MutatingDots } from 'react-loader-spinner'
import { DNA } from 'react-loader-spinner'
import axios from 'axios'
import Displayphones from '../Displayphones/Displayphones';
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
const Phones = () => {
               const[phones,setphones] = useState([]);
               const[loading,setloading] = useState(true);
               useEffect(()=>{
               // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
               // .then(res=>res.json())
               // .then(data=>setphones(data.data));

            axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(data=>{
               const alldata = data.data.data;
           
               const phonedata = alldata.map(phone=>{
               const obj = {
                 image:phone.image,
                 name:phone.phone_name,
                 brand:phone.brand,
                 price:parseInt(phone.slug.split('-')[1])
               }
               return obj;
               })
               console.log(phonedata);
              setphones(phonedata);
              setloading(false)
            })
//            phones.map(phone=>{
//                const obj = {
//                      name:phone.phone_name,
//                      brand:phone.brand

//                }
//                return obj;
               
//            })
          
               },[]);
               
  return (
              
    <div>
    {loading && <DNA
  visible={true}
  height="80"
  width="80"
  ariaLabel="dna-loading"
  wrapperStyle={{}}
  wrapperClass="dna-wrapper"
  />
}

    <h1 className='text-3xl text-blue-900 mt-4 font-semibold'>Total phones:{phones.length}</h1>
    <div className='grid grid-cols-1 md:grid-cols-4  gap-3'>
         {
          phones.map((phone,index)=><Displayphones key={index} phone={phone}></Displayphones>)
         }     
    </div>
    <div className="barchart w-[800px] mx-auto  p-6 rounded-lg md:w-[700px] mt-6 bg-green-300">
               <h2 className='text-green-500 font-semibold'>This is the barchart of mobile phones.</h2>
    <BarChart width={600} height={300} data={phones}>
    <XAxis stroke='blue' dataKey="name"  />
    <YAxis  dataKey='price' />
    <Bar dataKey="price" stroke='green' barSize={30} fill="#FF0000"></Bar>
    <Tooltip></Tooltip>
      
  </BarChart>  
    </div>
    </div>
  )
}

export default Phones
