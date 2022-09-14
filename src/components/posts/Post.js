import React from 'react'
import { Link } from 'react-router-dom'

const Post = (props) => {
// const Post = ({data}) => {
    // const handleDelete = () =>{
    //     console.log(props.data.id)
    // }
  return (
    <Link to={'/post/' + props.data.id} className='post'>
        {/* <img src={"/assets/" + props.data.image} alt="" /> */}
        <img src={props.data.image} alt="" />
        <div className='post-author'>By: {props.data.title}</div>
        <h3>{props.data.body}</h3>
        <button className='btn' onClick={()=>{
            props.handleDelete(props.data.id)
        }}>Delete</button>
    </Link>
  )
}

export default Post