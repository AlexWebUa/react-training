import React from "react";
import Post from "./Post/Post";
import "./Posts.scss";

const Posts = (props) => {
    return (
        <div className="posts">
            <Post description={"sadfasdfasdfasd"}/>
            <Post description={"f1"}/>
            <Post description={"f2"}/>
        </div>
    );
}

export default Posts;