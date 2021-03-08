import React from 'react';
import { useHistory } from 'react-router';

const Posts = (props) => {
    console.log(props)
const{id, body, title} = props.post
const history = useHistory();
const showComments = id => {


const url = `/post/${id}`
history.push(url)}

    return (
        <div>
            <h1>{id}</h1>
            <h3>{body}</h3>
            <h4>title: {title}</h4>
            <button className="btn btn-info" onClick={() => showComments(id)}>Details</button>
        </div>
    );
};

export default Posts;