import React from "react";
import ChatDisplay from "./ChatDisplay";
import ChatHeader from "./ChatHeader";
import MatchesDisplay from "./MatchesDisplay";
import { ButtonOption } from "./styles";
import styled from "styled-components";
const chatContainer = () => {
  return (
    <Container>
      <ChatHeader />
      <ChatDisplay />
      <div>
        <ButtonOption>Matches</ButtonOption>
        <ButtonOption>Chat</ButtonOption>
      </div>
      <MatchesDisplay />
    </Container>
  );
};

const Container = styled.div`
  background-color: rgb(255, 255, 255);
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  width: 30%;
  text-align: left;
  z-index: 1;
`;
export default chatContainer;
