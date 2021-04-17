import "./Main.scss";
import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import Posts from "./Posts/Posts";
import Dialogs from "./Dialogs/Dialogs";
import {Route} from "react-router-dom";

const Main = () => {
    return (
        <main className="main">
            <div className="content">
                <Route path="/posts" component={Posts}/>
                <Route path="/dialogs" component={Dialogs}/>
            </div>

            <Sidebar/>
        </main>
    );
}

export default Main;