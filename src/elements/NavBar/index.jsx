import React from "react";
import { 
  Nav,
  NavLink,
  ProfilePic
} from "./style";

const NavBar = ({children, props}) => {
  return (
    <>
      <Nav {...props}>
        <div>
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/galeria">Galeria</NavLink>

          <NavLink to="/sobre">Sobre</NavLink>
        </div>
        <ProfilePic/>
      </Nav>
        {children}
    </>
  )
}

export default NavBar;