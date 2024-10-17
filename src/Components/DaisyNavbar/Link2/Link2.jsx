import React from 'react'

const Link2 = ({route}) => {
               const{path,name} = route;
  return (
    <div>
     <div className=' '>
       <li className='font-semibold text-lg mr-6'>
           <a href={`path`}>{name}</a>
       </li>
     </div>
    </div>
  )
}

export default Link2
