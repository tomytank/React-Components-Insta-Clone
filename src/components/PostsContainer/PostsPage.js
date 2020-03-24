//Complete the necessary code in this file
// import useState *done
import React, {useState} from "react";
import Post from "./Post";
import "./Posts.css";
import dummydata from "../../dummy-data";
// import data *done

const PostsPage = () => {
  // set up state for your data *done
  // const [postData, setPostData] = useState (dummy);
  const [post] = useState(dummydata);
  const rand = Math.random()*1000;
  console.log("rand", rand);
  //console.log(instaData);
  //console.log(useState);
  console.log(post);
  return (
    <div className="posts-container-wrapper">
      {/* map through data here to return a Post and pass data as props to Post */
        post.map( p => (

          <div>
            <Post post={p} key= {rand}/>
          </div>
))}
    </div>
  );
};

export default PostsPage;

