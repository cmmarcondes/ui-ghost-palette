import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const Nav = styled.nav`
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 32px;
  height: var(--navbar-height);
  width: 100%;
  box-shadow: 0 1px 10px 1px #000000;

  div {
    display: flex;
    gap: 15px;
    align-items: center;

    span {
      text-decoration: none;
      font-size: 1.5rem;
      padding: 0 16px;
      color: white;
      cursor: pointer;
    }
  }
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  padding: 0 16px;
  color: white;

  &.active {
    color: #ff69b4;
  }
`;

export const ProfilePic = styled.img`
  height: 52px;
  width: 52px;
  border-radius: 50%;
`;
