import React, { useState } from "react";
import styled from "styled-components";
import { SecundaryButton } from "../style";

export const Chat = () => {
  return <div>Chat</div>;
};

export const ChatInput = () => {
  const [textArea, setTextArea] = useState("");
  return (
    <ContainerChatInput>
      <textarea
        value={textArea}
        onChange={(e) => setTextArea(e.target.value)}
      />
      <SecundaryButton>Submit</SecundaryButton>
    </ContainerChatInput>
  );
};

const ContainerChatInput = styled.div``;
