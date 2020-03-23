// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  // Add state for the comments
  console.log(props);
const [comment, setComment] = useState(props);
  return (
    <div>
      {/* map through the comments data and return the Comment component */
      comment.comments.map(e => (
        <div>
          <Comment text = {e.comments.comment} />
        </div>
      ))
    }
      <CommentInput />
    </div>
  );
};

export default CommentSection;
