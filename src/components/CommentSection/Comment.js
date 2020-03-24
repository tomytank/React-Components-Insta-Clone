// You do not need to do anything in this file. Look at the CommentSection file. 

import React from 'react';
// import Date from "./Date";
import './Comment.css';

const Comment = props => {
  console.log("The props from CSC in Comment.js ", props);
  const styleUser = {lineHeight:"35px", fontSize:"18px"}
  const styleText = {lineHeight:"25px", marginLeft:"30px"}
  return (
    <div className="comment-text">
      <span className="user" style={styleUser}>{props.comment.username}</span>
      {' '}
      <div style={styleText}>
      <span className="comment" >{props.comment.text}</span>
      </div>
      {/* <Date /> */}
      {/* <div className="comment">{props.comment.timestamp}</div> */}
    </div>
  );
};


export default Comment;
