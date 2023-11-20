import React from "react";
import styled from "styled-components";

const NavBar = () => {
  return (
    <NavBarWrapper>
      <LogoWrapper>
        <div className="cir">U</div>
        <h2>UNDAHITZ</h2>
      </LogoWrapper>
      <MenuItemsWrapper>
        <NavLink>Home</NavLink>
        <NavLink>All Genre</NavLink>
        <NavLink>Services</NavLink>
        <NavLink>Contact</NavLink>
      </MenuItemsWrapper>
      <AuthorBtnWrapper>Author Login</AuthorBtnWrapper>
    </NavBarWrapper>
  );
};

const NavBarWrapper = styled.nav`
  width: 90%;
  height: 80px;
  background: var(--mainBg);
  border-radius: 0.5rem;
  box-shadow: 1rem 0 10px 0.4rem var(--shadowBg);
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;

  @media screen and (max-width: 768px) {
    width: 98%;
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  .cir {
    background: var(--btnBg);
    border-radius: 50px;
    width: 50px;
    aspect-ratio: 1/1;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--mainBg);
    font-size: 2rem;
    font-weight: 800;
  }
`;

const MenuItemsWrapper = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.li`
  padding: 0 20px;
  font-size: 18px;
  font-weight: 600;
  color: #333;
  cursor: pointer;
`;

const AuthorBtnWrapper = styled.div`
  background: var(--btnBg);
  border-radius: 50px;
  box-shadow: 0 0 10px var(--shadowBg);
  color: var(--mainBg);
  cursor: pointer;
  width: 15%;
  padding: 12px;
  text-align: center;
  font-size: 19px;
  font-weight: 600;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export default NavBar;
