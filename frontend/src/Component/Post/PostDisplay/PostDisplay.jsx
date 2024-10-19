import React from 'react'
import './PostDisplay.css';
import { StoreContext } from '../../../Context/StoreContext';
import { useContext } from 'react'


const PostDisplay = () => {

  const { assets } = useContext(StoreContext);

  return (
    <div className='post-display'>
      <div className="post-display-heading">
        <div className="post-display-heading-user-data">
          <img src={assets.profile_image} alt="" />
          <div className="post-display-heading-user-data-name-email">
            <p className='username'>Raushan Sagar</p>
            <p className='email'>@raushansagar</p>
          </div>
        </div>
        <div className="post-display-heading-user-option">
          <span><ion-icon name="ellipsis-horizontal"></ion-icon></span>
          <span><ion-icon name="close"></ion-icon></span>
        </div>
      </div>
      <hr />
      <div className="post-display-center">
        <div className="post-display-center-content">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, veritatis dolor blanditiis reprehenderit maiores consequuntur vel eos placeat sint vero! Voluptas veniam odit ipsum a consequatur obcaecati blanditiis nihil pariatur!</p>
        </div>
        <img src={assets.postCreateImage} alt="" />
      </div>
      <div className="post-display-bottom">
        <div className="post-display-bottom-data">
          <p><span><ion-icon name="heart"></ion-icon></span>112</p>
        </div>
        <hr />
        <div className="post-display-bottom-like-comment-section">
          <span><img src={assets.like} width='35px' alt="" /></span>
          <span><img src={assets.comment} width='35px' alt="" /></span>
          <span><img src={assets.share} width='35px' alt="" /></span>
        </div>
      </div>
    </div>
  )
}

export default PostDisplay
