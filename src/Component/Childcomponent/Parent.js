import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Parent=()=>{
    return(
        <div>
            <h2>Parent is Working</h2>
            <nav className="navbar">
                <ul className="navlist"> 
                    <li className="list"><NavLink className="link" to={'Child1'}>Child1</NavLink></li>
                    <li className="list"><NavLink className="link" to={'Child2'}>Child2</NavLink></li>
                </ul>
            </nav>
            <Outlet />
        </div>
    )
}

export default Parent