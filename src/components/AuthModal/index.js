import React, { useRef } from "react";
import { ContainerAuthModal, Icon, Form, Input } from "./styles";
import { SecundaryButton } from "../style";

const AuthModal = ({ setShowAuthModal, isSignUp }) => {
  const email = useRef();
  const password = useRef();
  const passwordConfirm = useRef();

  const handleClick = () => {
    setShowAuthModal(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isSignUp) {
      //  * register
      if (password.current.value === passwordConfirm.current.value) {
        //   const data = {
        //     email: email.current.value,
        //     password: password.current.value,
        //   };
        }
    } else {
      // * Log In
    }
  };
  return (
    <ContainerAuthModal>
      <Icon onClick={handleClick}>✕</Icon>
      <h2>{!isSignUp ? "CRATE ACCOUNT " : "LOG IN"}</h2>
      <p>
        By clicking Log In, you agree to our terms. Learn how we process your
        data in our Privacy Policy and Cookie Policy.
      </p>
      <Form onSubmit={handleSubmit}>
        <Input
          type="email"
          id="email"
          name="email"
          placeholder="email"
          ref={email}
          //   required
        />
        <Input
          type="password"
          id="password"
          name="password"
          placeholder="password"
          ref={password}
          //   required
        />
        {!isSignUp && (
          <Input
            type="password"
            id="passwordConfirm"
            name="passwordConfirm"
            placeholder="passwordConfirm"
            ref={passwordConfirm}
            //   required
          />
        )}
        <SecundaryButton disabled={false}>Submit</SecundaryButton>
      </Form>
      <hr />
      <h2>GET THE APP</h2>
    </ContainerAuthModal>
  );
};

    
export default AuthModal;
