import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className='not-found'>
        <h1>Not Found</h1>
        <Link to="/">Go to Home</Link>
    </div>
  )
}

export default Error