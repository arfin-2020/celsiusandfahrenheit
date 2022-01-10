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
            .catch(()=>{
                setLoading(false);
                setPost({});
                setError('Your fetching url is not valid')
            })
    }, [])
    
    return (
        <div>
          {loading ? 'loading.......' : post.title}
          {error ? error : null}
        
        </div>
    )
}

export default GetPost;