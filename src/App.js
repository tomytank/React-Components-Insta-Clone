/* 
Start here and then work through the 
PostsContainer components and the CommentSection Components. 
Not all files need code added. 
Look at each file to see where you need to pass props or add code 
*/
import React, { useState } from "react";
import "./App.css";
// import dummydata from "./dummy-data";
import SearchBarContainer from "./components/SearchBar/SearchBarContainer";
import PostsPage from "./components/PostsContainer/PostsPage";

// import the PostsPage and SearchBar and add them to the App


const App = () => {
  // const [data] = useState(dummydata);
  // console.log(data);
  return (
    <div className="App">
      {/* Add imported components here to render them */
        <div>
          <SearchBarContainer  />
          <PostsPage />
        </div>
      }
    </div>
  );
};

export default App;
