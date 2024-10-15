import PropTypes from 'prop-types';
import React from 'react'
import { AiFillCheckCircle } from "react-icons/ai";
const Features = ({feature}) => {
  return (
    <div className='flex items-center gap-1'>
      <AiFillCheckCircle></AiFillCheckCircle>{feature}
    </div>
  )
}

Features.propTypes = {
  feature:PropTypes.string
}
export default Features
