import React from 'react'
import { useEffect } from 'react';
import useFetch from '../../customHooks/useFetch';

import { useNavigate } from 'react-router-dom';

import { useParams } from 'react-router-dom';
const PostDetails = (props) => {
  let params = useParams();
  let {fetchData,errorMsg,isLoading,setFetchData}  = useFetch('http://localhost:4000/posts/' + params.id);
  

  let navigate = useNavigate();

  const handleDeletePost = (e)=>{
    fetch('http://localhost:4000/posts/' + params.id,{
      method: 'delete'
    }).then(()=>{
      navigate('/');
    })
  
  }

  return (
    <article className='container post-details'>
    {fetchData &&(
      <>
        <div className='post-details-title'>
            <h1>{fetchData.title}</h1>
            <button onClick={(e)=>{
              handleDeletePost(e)
            }} data-id={fetchData.id} className='btn btn-danger'>Delete</button>
        </div>
        <img src={fetchData.image} alt="" className='post-details-img' />
        <p className='post-details-body'>
          {fetchData.body}
        </p>
      </>
    )}

{isLoading && (<div>Loading ...</div>)}
{!fetchData && !isLoading && !errorMsg && (
            <div className='not-found'>Not Posts</div>
        )}
        {errorMsg && (
            <div className='error'>{errorMsg}</div>
        )}

</article>
    
        

    
    
  )
}

export default PostDetails