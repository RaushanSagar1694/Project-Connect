


import React from 'react'
import './Home.css';
import Heading from '../Heading/Heading'
import Left from '../Left/Left';
import Right from '../Right/Right'
import Center from '../Center/Center';



const Home = () => {
  return (
    <div className='home'>
      <Heading />
      <div class="container">
    <div class="left-column">
      <Left />
    </div>

    <div class="center-column">
      <Center />
    </div>

    <div class="right-column">
      <Right />
    </div>
  </div>
    </div>
  )
}

export default Home
