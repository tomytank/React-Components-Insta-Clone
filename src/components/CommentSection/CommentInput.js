// You do not need to do anything in this file
import React from 'react';

const CommentInput = props => {
  console.log("The props from commentinput ",props);
  return (
    <form className="comment-form" onSubmit={props.submitComment}>
      <input
        type="text"
        value={props.comment}
        placeholder="Add comment... "
        onChange={props.changeComment}
      />
    </form>
  );
};

export default CommentInput;
