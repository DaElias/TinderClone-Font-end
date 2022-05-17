import React, { useState } from "react";
import AuthModal from "../components/AuthModal";
import Nav from "../components/Nav";
import { Button, ContainerHome, PrimaryTitle,Animation } from "../components/style";

const Home = () => {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [isSignUp, setIsSignUp] = useState(true);
  const authToken = false;

  const handleClick = () => {
    setShowAuthModal(true);
    setIsSignUp(false);
  };

  return (
    <ContainerHome>
      <Animation>

      <Nav
        minimal={false}
        authToken={authToken}
        showAuthModal={showAuthModal}
        setShowAuthModal={setShowAuthModal}
        setIsSignUp={setIsSignUp}
        />
      <div style={{ marginTop: "15%" }}>
        <PrimaryTitle>Swip Right®</PrimaryTitle>
        <Button onClick={handleClick}>
          {authToken ? "Signout" : "Create Account"}
        </Button>
        {showAuthModal && (
          <AuthModal
          setShowAuthModal={setShowAuthModal}
          isSignUp={isSignUp}
          setIsSignUp={setIsSignUp}
          />
          )}
      </div>
          </Animation>
    </ContainerHome>
  );
};

// eslint-disable-next-line react-hooks/exhaustive-deps
// const Home = () => useMemo(HomeComponent);

export default Home;
