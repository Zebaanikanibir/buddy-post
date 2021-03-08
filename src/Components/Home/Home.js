import React, { useState, useEffect } from 'react';
import Posts from '../Posts/Posts';



function Home() {

const [posts, setPosts] = useState([])
useEffect(() => {

const url = `https://jsonplaceholder.typicode.com/posts`
fetch(url)
.then(res => res.json())
.then(data => setPosts(data))


}, [])
  return (
    <div>
        <h1>I have got {posts.length} posts</h1>
      {

posts.map(post => <Posts post={post}></Posts>)


      }
    </div>
  );
}

export default Home;
