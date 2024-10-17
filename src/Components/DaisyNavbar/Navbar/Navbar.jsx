import React, { useState } from 'react'
import Link from '../Link/Link';
import { RiMenu2Line } from "react-icons/ri";
import { ImCross } from "react-icons/im";
const Navbar = () => {
               const [open,setopen] = useState(false);
         
           const   routes = [
               {id: 1,path: "/",name: "Home"},
               {id: 2,path: "/about",name: "About Us"},
               {id: 3,path: "/services", name: "Services" },
               {id: 4,path: "/contact",name:"Contact Us"},
               {id: 5,path: "/blog",name: "Blog"}
               ];

     
  return (
    <div>
      <nav className='bg-gray-200  p-3'>
         <div className='md:hidden' onClick={()=>setopen(!open)}>
               { 
                  open ?<ImCross  className='text-2xl'></ImCross> : <RiMenu2Line className='text-2xl '></RiMenu2Line>
               }
         </div>
           

      <ul  className={`md:flex  duration-1000  ${open ? 'top-12' : '-top-72'} md:static absolute bg-pink-600 justify-center`}>
       {
          routes.map(route=><Link key={route.id} route={route}></Link>)            
       }
       </ul>
      </nav>
    </div>
  )
}

export default Navbar
