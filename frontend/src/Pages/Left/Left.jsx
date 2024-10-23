import React from 'react'
import './Left.css'
import Follow from '../../Component/LeftComponent/Follow';
import Tn from '../../Component/Tn/Tn';

const Left = () => {
  return (
    <div className='left'>
      <Follow />
      <Tn />
    </div>
  )
}

export default Left
