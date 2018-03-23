import React from 'react';
import logo from '../AuthView/sim-logo.svg';
import './SideBar.css';

const SideBar = (props) => {
    return (
        <div className='sidebar-container'>
        <img src={logo} alt='logo'/>
        <p>Menu</p>
        <p>Cart</p>
        <p>Logout</p>


        </div>
    )
}

export default SideBar;