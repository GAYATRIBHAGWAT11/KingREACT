import React from "react";

import {Link} from 'react-router-dom';


function Header(){
    return(
        <>
        <ul className="header_links">
            <li>
                <Link to='/'>Home</Link>

            </li>
            <li>
                <Link to='/about'>About</Link>
            </li>
            <li>
                <Link to='/contact'>contact</Link>
            </li>
        </ul>
        </>
    )
}
export default Header;