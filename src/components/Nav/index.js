import React from "react";
import { LogoContainer, Nav as NavBar, Logo, NavButton } from "./style";
import TinderColor from "../../images/color-logo-tinder.png";
import TinderWhite from "../../images/tinder_logo_white.png";

const Nav = ({
  minimal,
  authToken,
  showAuthModal,
  setIsSignUp,
  setShowAuthModal,
}) => {
  const handleClick = () => {
    setIsSignUp(true);
    setShowAuthModal(true);
  };
  return (
    <NavBar>
      <LogoContainer>
        <Logo src={minimal ? TinderColor : TinderWhite} />
      </LogoContainer>
      {!authToken && !minimal && (
        <NavButton disabled={showAuthModal} onClick={handleClick}>
          Log in
        </NavButton>
      )}
    </NavBar>
  );
};

export default Nav;
