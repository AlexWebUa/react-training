import React from "react";
import "./Sidebar.scss";
import {NavLink} from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <ul className="menu">
                <li className="menu__item item-1">
                    <NavLink to="/posts">Posts</NavLink>
                </li>
                <li className="menu__item item-2">
                    <NavLink to="/profile">Profile</NavLink>
                </li>
                <li className="menu__item item-3">
                    <NavLink to="/dialogs">Dialogs</NavLink>
                </li>
                <li className="menu__item item-4">
                    <NavLink to="/settings">Settings</NavLink>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;