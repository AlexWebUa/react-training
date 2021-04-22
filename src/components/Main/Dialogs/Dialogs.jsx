import React from "react";
import "./Dialogs.scss";
import {NavLink} from "react-router-dom";

const Dialog = (props) => {
    let path = "/dialogs/" + props.id;

    return (
        <div className="dialog">
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}

const Message = (props) => {
    return (
        <div className="message">
            { props.text }
        </div>
    );
}

const Dialogs = () => {

    let dialogsData = [
        {id: 1, name: "Name1"},
        {id: 2, name: "Name2"},
        {id: 3, name: "Name3"},
        {id: 4, name: "Name4"},
        {id: 5, name: "Name5"},
    ];

    let messagesData = [
        {id: 1, text: "Test"},
        {id: 1, text: "Test"},
        {id: 1, text: "Test"},
    ]

    return (
        <div className="dialogs">
            <div className="dialogs__list">

            </div>
            <div className="dialogs__messages">

            </div>
        </div>
    );
}

export default Dialogs;