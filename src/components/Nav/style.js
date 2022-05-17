import styled, { css, keyframes } from "styled-components";
import { headShake } from "react-animations";
export const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
export const LogoContainer = styled.div`
  width: 170px;
  margin: 15px;
`;
export const Logo = styled.img`
  width: 100%;
`;
const headShakeAnimation = keyframes`${headShake}`;
export const NavButton = styled.button`
  color: rgb(254, 48, 114);
  background-color: rgb(255, 255, 255);
  font-size: 20px;
  padding: 10px 20px;
  border-radius: 10px;
  border: none;
  margin: 10px;
  cursor: pointer;
  &&:focus {
      animation: 1s ${headShakeAnimation};
  }
  ${(props) =>
    props.disabled &&
    css`
      cursor: not-allowed;
      opacity: 0.5;
    `}
`;
