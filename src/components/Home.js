
import React from 'react'
import Posts from './posts/Posts'
import { Outlet } from 'react-router-dom'

const Home = () => {

  
  return (
    <div className='home'>
        {/* <Posts /> */}
        <Outlet />
    </div>
  )
}

export default Home