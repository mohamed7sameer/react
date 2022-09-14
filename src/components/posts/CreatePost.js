import React from 'react'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";




const CreatePost = () => {
  const [title,setTitle] = useState('')
  const [body,setBody] = useState('')
  const [url,setUrl] = useState('')
  const [author,setAuthor] = useState('codv')
  const [isLoading, setIsLoading] = useState(false)
  

  let navigate = useNavigate();

  const handleForm = (e) =>{
    setIsLoading(true);
    e.preventDefault();
    const post = {
      title,
      body,
      image: url,
      author
    }
    fetch('http://localhost:4000/posts/',{
      method: 'POST',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify(post)
    }).then(()=>{
      setIsLoading(false);
      console.log('post added')

      // eslint-disable-next-line react-hooks/rules-of-hooks
      
      navigate('/')
    })
  }
  
  return (
    
    <section className='create-post'>
      <p>title : {title}</p>
      <p>body : {body}</p>
      <p>url : {url}</p>
      <p>author : {author}</p>
      
        <h2>Add New Post</h2>
      <form onSubmit={handleForm}>
        <label>Blog title :</label>
        <input type="text" value={title} onChange={(e)=>{
          setTitle(e.target.value)
        }} required />
        <label>Blog Image :</label>
        <input type="url" value={url}  onChange={(e)=>{
          setUrl(e.target.value)
        }} required />
        <label>Blog body :</label>
        <textarea required rows="10" value={body} onChange={(e)=>{
          setBody(e.target.value) 
        }}></textarea>
        <label>Blog author :</label>
        <select value={author} onChange={(e)=>{
          setAuthor(e.target.value)
        }} >
          <option value="admin">admin</option>
          <option value="codv">codv</option>
        </select>
        {isLoading && (
          <button disabled className="btn disabled" type="submit">
            loading ....
          </button>
        )}

        {!isLoading && (
          <button  className="btn" type="submit">
            Add
          </button>
        )}
        
      </form>
    </section>
  )
}

export default CreatePost