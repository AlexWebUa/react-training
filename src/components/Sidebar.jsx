import React from "react";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <ul className="menu">
                <li className="menu__item item-1">
                    <a href="#">Item 1</a>
                </li>
                <li className="menu__item item-2">
                    <a href="#">Item 2</a>
                </li>
                <li className="menu__item item-3">
                    <a href="#">Item 3</a>
                </li>
                <li className="menu__item item-4">
                    <a href="#">Item 4</a>
                </li>
                <li className="menu__item item-5">
                    <a href="#">Item 5</a>
                </li>
                <li className="menu__item item-6">
                    <a href="#">Item 6</a>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;