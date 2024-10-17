import React, { useState } from 'react'
import Link2 from '../Link2/Link2';
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
const Navber2 = () => {
               
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
     <nav className='bg-gray-300 '>
    <div>
    <div className="navbar md:hidden" onClick={()=>setopen(!open)} >
      {
    open ?  <ImCross className='text-2xl'></ImCross> :<GiHamburgerMenu className='text-2xl '></GiHamburgerMenu>
      }
     </div>
     <ul className= {`md:flex  duration-1000 ${open ? 'top-24' :'-top-72' } absolute md:static     bg-sky-400 py-3 px-4`}>
       {
  routes.map(route=><Link2 key={route.id} route={route}></Link2>)          
       }
       </ul>
    </div>
     </nav>
    </div>
  )
}

export default Navber2
