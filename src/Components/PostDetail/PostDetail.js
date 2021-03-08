import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Comments from '../Comments/Comments';

const PostDetail = () => {
    const {id} = useParams()
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])
    useEffect(() => {

        const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setPost(data))

    }, [])

useEffect(() => {

        const url = `https://jsonplaceholder.typicode.com/comments?postId=${id}`
        fetch(url)
        .then(res => res.json())
        .then(data => setComments(data))

},[])


    return (
        <div>
           <h1>This is post detail: {id}</h1> 
           <h3>User post: {post.id}</h3>
           <h4>Title:{post.title}</h4>
           <p>Post body: {post.body}</p>
           <p>Comments: {comments.length}</p>
            {
        comments.map(comment => <Comments comment={comment}></Comments> )
                
            }


        </div>
    );
};

export default PostDetail;