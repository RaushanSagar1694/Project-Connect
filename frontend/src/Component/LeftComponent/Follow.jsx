import React from 'react'
import './Follow.css'
import { StoreContext } from '../../Context/StoreContext';
import { useContext } from 'react'

const Follow = () => {

  const { assets } = useContext(StoreContext);

  return (
    <div className='follow'>
      <p className='follow-title-p'>Who is to follow you</p>
      <div className="follow-container">
        <div className="follow-user">
          <img src={assets.profile_image} alt='' />
          <div className="user-info">
            <p className='p-username'>demo user</p>
            <p className='p-user-id'>@demouser</p>
          </div>
          <button>Follow</button>
        </div>
      </div>
    </div>
  )
}

export default Follow
