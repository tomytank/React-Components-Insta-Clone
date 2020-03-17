//Complete the necessary code in this file
// import useState
import React, {useState} from "react";
import Post from "./Post";
import "./Posts.css";
import instaData from "../../dummy-data";
// import data 

const PostsPage = () => {
  // set up state for your data
  const [postData, setPostData] = useState (instaData);
  //console.log(instaData);
  //console.log(useState);
  //onsole.log(postData);
  return (
    <div className="posts-container-wrapper">
      {/* map through data here to return a Post and pass data as props to Post */
        postData.map( p => (
          <Post post = {thumbnailUrl={p.imageUrl} dataFromParent={p}} />
        ))}
    </div>
  );
};

export default PostsPage;

