// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  // Add state for the comments
//console.log("The props we got in CSC",props);
const [comment, setComment] = useState(props);
console.log("The destructured props",comment);
  return (
    <div>
      {/* map through the comments data and return the Comment component */
      comment.comments.map(e => (
        <div>
          <Comment username= {e.username} text = {e.text} />
        </div>
      ))}
      <CommentInput />
    </div>
  );
};

export default CommentSection;
