import React from "react";
import "./Post.scss";

const Post = (props) => {
    return (
        <div className="post">
            <h2 className="post__title">Lorem ipsum</h2>
            <img src="https://via.placeholder.com/600x250.png" alt="" className="post__img"/>
            <div className="post__info">
                <div className="post__info-date">
                    {new Date().toLocaleDateString()}
                </div>
                <div className="post__info-author">Aleksandr</div>
            </div>
            <div className="post__description">
                {props.description}
            </div>
        </div>
    );
}

export default Post;