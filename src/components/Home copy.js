import { useState } from 'react'
import React from 'react'
import Posts from './posts/Posts'

const Home = () => {
  // const title = "Home" ;
  // const style = {
  //   color: 'white',
  //   backgroundColor: 'tomato',
  //   padding: '10px',
  //   textAlign: 'center'
  // }
  // let name = 'ali'
  let [name,setName] = useState('ali')
  const handleClick = (e) =>{
    console.log(e)
    setName('mohamed')
  }

  return (
    <div className='home'>
        {/* <h1 style={style}>{title}</h1> */}
        <button className='btn' onClick={handleClick}>Click Me</button>
        {/* <button className='btn' onClick={(e)=>{handleClick(e)}}>Click Me</button> */}
        <h1>{name}</h1>
        <Posts />
    </div>
  )
}

export default Home