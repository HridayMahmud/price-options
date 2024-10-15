import React from 'react'
import PropTypes from 'prop-types';
const Link = ({route}) => {
               const{path,name} = route;
  return (
  <li  className='font-bold p-3   text-xl  mr-6'>
     <a href={path}>{name}</a>
  </li>
  )
}
Link.propTypes = {
  route: PropTypes.object
}
export default Link
