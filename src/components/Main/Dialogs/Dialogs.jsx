import React from "react";
import "./Dialogs.scss";
import {NavLink} from "react-router-dom";

const Dialogs = () => {
    return (
        <div className="dialogs">
            <div className="dialogs__list">
                <div className="dialog">
                    <NavLink to="/dialogs/1">Name1</NavLink>
                </div>
                <div className="dialog">
                    <NavLink to="/dialogs/2">Name2</NavLink>
                </div>
                <div className="dialog active">
                    <NavLink to="/dialogs/3">Name3</NavLink>
                </div>
                <div className="dialog">
                    <NavLink to="/dialogs/4">Name4</NavLink>
                </div>
                <div className="dialog">
                    <NavLink to="/dialogs/5">Name5</NavLink>
                </div>
            </div>
            <div className="dialogs__messages">
                <div className="message">
                    Test
                </div>
                <div className="message">
                    Hello world!
                </div>
                <div className="message">Lorem ipsum</div>
            </div>
        </div>
    );
}

export default Dialogs;