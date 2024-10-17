import PropTypes from 'prop-types';
import React from 'react'

const Displayphones = ({phone}) => {
  const{phone_name,brand,price,image} = phone;
  return (
    <div>
     <div className="card p-8 text-gray-600 w-[800px] mx-auto md:w-[300px] font-bold shadow-xl shadow-gray-400">
     <img src={image} alt="" />
               <h2 className='text-2xl '>Phone Name:{phone_name}</h2>
               <h2 className=''>Brand Name:{brand}</h2>
               <p>Price: {price} tk.</p>
       <button className='mt-3 bg-green-600 text-white text-xl px-4 py-3 rounded-lg shadow-lg shadow-gray-600' type="button">Buy Now</button>
     </div>
    
    </div>
  )
}
Displayphones.propTypes = {
               phone:PropTypes.object
}
export default Displayphones
