import React from 'react'
import './Center.css'
import Follow from '../../Component/LeftComponent/Follow'
import PostCreate from '../../Component/Post/PostCreate/Post';
import PostDisplay from '../../Component/Post/PostDisplay/PostDisplay';

const Center = () => {
  return (
    <div className='center'>
      <PostCreate />
      <PostDisplay />
    </div>
  )
}

export default Center
