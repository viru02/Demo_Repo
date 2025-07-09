import React from "react";
import '../Asset/CSS/Navbar.css';
import { NavLink } from "react-router-dom";


const Navbar=()=>{
    return(
        <div>
            <nav className="navbar">
                <ul className="navlist"> 
                    <li className="list"><NavLink className="link" to={'/'}>Classcomponent</NavLink></li>
                    <li className="list"><NavLink className="link" to={'Firstcomp'}>FunctionComponent</NavLink></li>
                    <li className="list"><NavLink className="link" to={'Eventbinding'}>Eventbinding</NavLink></li>
                    <li className="list"><NavLink className="link" to={'Message'}>Message</NavLink></li>
                    <li className="list"><NavLink className="link" to={'Myform'}>MyForm</NavLink></li>
                    <li className="list"><NavLink className="link" to={'Parent'}>Parent</NavLink></li>
                    <li className="list"><NavLink className="link" to={'dashboard'}>Dashboard</NavLink></li>
                </ul>
            </nav>
        </div> 
    )
}

export default Navbar;