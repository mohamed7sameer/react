import { useState,useEffect } from 'react';
import React from 'react'
import Post from './Post'

const Posts = () => {

    // const [posts, setposts] = useState([
    //     {id:1 , title: 'title 1', body:'post body ...', image: 'a.jpg'},
    //     {id:2 , title: 'title 2', body:'post body ...', image: 'a.jpg'},
    //     {id:3 , title: 'title 3', body:'post body ...', image: 'a.jpg'},
    //     {id:4 , title: 'title 4', body:'post body ...', image: 'a.jpg'},
    // ]);

    const [posts, setposts] = useState(null)
    const [isLoading, setIsLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState(null);


    const handleDelete = (id) =>{
        let curPosts = [...posts]
        // eslint-disable-next-line eqeqeq
        let newPosts = curPosts.filter(post => post.id != id)
        setposts(newPosts)
    }


    useEffect(()=>{
        setIsLoading(true)
        setErrorMsg(null)
       fetch('http://localhost:4000/posts').then(res=>{
        console.log(res)
        if(!res.ok){
            setIsLoading(false)
            throw Error(res.statusText ? 'Error: ' +  res.statusText : 'Undefiend error')
        }
        return res.json()
       }).then(data=>{
        setposts(data)
        // setposts(null)
        setIsLoading(false)
       }).catch(err=>{
        console.log(err)
        setIsLoading(false)
        setErrorMsg(err.message)
       })
    },[])


    

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