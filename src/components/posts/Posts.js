
import React from 'react'
import Post from './Post'
import useFetch from '../../customHooks/useFetch';

const Posts = () => {

    let {fetchData:posts, isLoading, errorMsg,setFetchData:setposts} = useFetch('http://localhost:4000/posts')
   
    const handleDelete = (id) =>{
        let curPosts = [...posts]
        // eslint-disable-next-line eqeqeq
        let newPosts = curPosts.filter(post => post.id != id)
        setposts(newPosts)
    }

    

  return (
    <div className='posts'>
        {/* <Post /> */}
        {/* {posts? posts.map((post)=>(
            <Post key={post.id} data={post}  handleDelete={handleDelete}/>
        )): 'no posts'} */}
        {posts && posts.map((post)=>(
            <Post key={post.id} data={post}  handleDelete={handleDelete}/>
        ))}

        {/* {isLoading && <div>Loading ...</div>} */}
        {isLoading && (<div>Loading ...</div>)}
        {!posts && !isLoading && !errorMsg && (
            <div className='not-found'>Not Posts</div>
        )}
        {errorMsg && (
            <div className='error'>{errorMsg}</div>
        )}

    </div>
  )
}

export default Posts