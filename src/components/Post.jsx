import React from "react";

const Post = () => {
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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi consequatur debitis
                deleniti ducimus earum enim eos facere fugit illo, impedit ipsum laborum minima, non
                numquam odit quisquam quod rerum veniam?
            </div>
        </div>
    );
}

export default Post;