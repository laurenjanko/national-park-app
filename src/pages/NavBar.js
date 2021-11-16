import React, {useState} from 'react';
import './NavBar.css';
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';
const NavBar = () =>{
    const [toggleMenu, setToggleMenu] = useState(false);

    return(
        <div className="navbar">
        <div className="navbar-links">
          <div className="avbar-links_container">
            <p><a href="#home">Home</a></p>
            <p><a href="#parks">Parks</a></p>
            <p><a href="#activites">Activites</a></p>
          </div>
        </div>
        <div className="navbar-menu">
          {toggleMenu
            ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
            : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
          {toggleMenu && (
          <div className="navbar-menu_container scale-up-center">
            <div className="navbar-menu_container-links">
              <p><a href="#home">Home</a></p>
              <p><a href="#parks">Parks</a></p>
              <p><a href="#activites">Activities</a></p>
            </div>
          </div>
          )}
        </div>
      </div>
    )
}
export default NavBar;