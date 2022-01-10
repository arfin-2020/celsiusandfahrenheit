import React, { useEffect, useState } from 'react';

const GetPost = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [post, setPost] = useState({});
    
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(data => {
                setLoading(false);
                setPost(data);
                setError('')
            })
            .catch(error=>{
                setLoading(false);
                setPost({});
                setError(error)
            })
    }, [])
    // console.log(post)
    // const Loading = () =>{
    //     return "loading....."
    // }
    return (
        <div>
          {loading ? 'loading.......' : post.title}
          {error ? error : null}
        </div>
    )
}

export default GetPost;