import React from "react";
import Post from "./Post/Post";
import Sidebar from "./Sidebar/Sidebar";
import "./Main.scss";

const Main = () => {
    return (
        <main className="main">
            <div className="content">
                <div className="container">
                    <Post/>
                    <Post/>
                    <Post/>
                </div>
            </div>
            <Sidebar/>
        </main>
    );
}

export default Main;