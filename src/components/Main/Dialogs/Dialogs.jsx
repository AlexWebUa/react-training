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
            {props.text}
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
                <Dialog name={dialogsData[0].name} id={dialogsData[0].id}/>
                <Dialog name={dialogsData[1].name} id={dialogsData[1].id}/>
                <Dialog name={dialogsData[2].name} id={dialogsData[2].id}/>
                <Dialog name={dialogsData[3].name} id={dialogsData[3].id}/>
                <Dialog name={dialogsData[4].name} id={dialogsData[4].id}/>
            </div>
            <div className="dialogs__messages">
                <Message text={messagesData[0].text} id={messagesData[0].id} />
                <Message text={messagesData[1].text} id={messagesData[1].id} />
                <Message text={messagesData[2].text} id={messagesData[2].id} />
            </div>
        </div>
    );
}

export default Dialogs;