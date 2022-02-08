import React from "react";
import { useApplicationContext } from "../../context/ApplicationContext";
import { useFacebookContext } from "../../context/FacebookContext";
import { 
  Nav,
  NavLink,
  ProfilePic
} from "./style";

const NavBar = ({children, props}) => {
  const { clearCache } = useApplicationContext();
  const { picture } = useFacebookContext();
  return (
    <>
      <Nav {...props}>
        <div>
          <NavLink to="/home" onClick={() => clearCache()}>Home</NavLink>
          <NavLink to="/galeria">Galeria</NavLink>
          <NavLink to="/sobre">Sobre</NavLink>
        </div>
        <ProfilePic src={picture} />
      </Nav>
        {children}
    </>
  )
}

export default NavBar;