import React from "react";
import Post from "./Post";
import Sidebar from "./Sidebar";
import "./Main.scss";

const Main = () => {
    return (
        <main className="main">
            <div className="content">
                <div className="container">
                    <Post/>
                </div>
            </div>
            <Sidebar/>
        </main>
    );
}

export default Main;