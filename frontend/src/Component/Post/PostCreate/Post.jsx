

import './Post.css'
import { StoreContext } from '../../../Context/StoreContext';
import { useContext } from 'react'



const Post = () => {

    const { assets } = useContext(StoreContext);

    return (
        <div className='post'>
            <div className="post-top">
                <div className="post-user-imge">
                    <img src={assets.profile_image} alt='' />
                    <div className="post-image-containt">
                        <p>Raushan Sagar</p>
                        <p>@raushansagar</p>
                    </div>
                </div>
                <div className="post-user-text">
                    <input type="text" name="username" placeholder="How are you feeling today?" /> 
                </div>
            </div>
            <div className="post-buttom">
                <div className="post-photo">
                    <span><ion-icon name="image"></ion-icon></span>
                </div>
                <div className="post-video">
                    <span><ion-icon name="videocam"></ion-icon></span>
                </div>
                <div className="post-upload">
                    <span><ion-icon name="cloud-upload"></ion-icon></span>
                </div>
            </div>
        </div>
    )
}

export default Post
