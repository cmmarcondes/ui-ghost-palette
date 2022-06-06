import React from "react";
import { useApplicationContext } from "../../context/ApplicationContext";
import { useAuthenticationContext } from "../../context/AuthenticationContext";
import { Nav, NavLink, ProfilePic } from "./style";

const NavBar = ({ children, ...props }) => {
  const { clearCache } = useApplicationContext();
  const { currentUser, signOut } = useAuthenticationContext();
  return (
    <>
      <Nav {...props}>
        <div>
          <NavLink to="/home" onClick={() => clearCache()}>
            Home
          </NavLink>
          <NavLink to="/galeria">Galeria</NavLink>
          <NavLink to="/sobre">Sobre</NavLink>
        </div>
        <div>
          <span onClick={signOut}>sair</span>
          <ProfilePic src={currentUser.picture} />
        </div>
      </Nav>
      {children}
    </>
  );
};

export default NavBar;
