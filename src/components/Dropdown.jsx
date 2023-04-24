import React, { useState } from 'react';
import { MenuItems } from "./MenuItems"
import './Dropdown.css'
import { Link } from 'react-router-dom';
export default function Dropdown() {
    const [click, setclick] = useState(false)
    function handleClick() {
        setclick(!click)
    }
    return (
        <>
            <ul
                onClick={handleClick}
                className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
                {MenuItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <Link
                                className={item.cName}
                                to={item.path}
                                onClick={() => setclick(false)}>
                                {item.title}
                            </Link>
                            
                        </li>
                    )
                })}
            </ul>
        </>
    )
}