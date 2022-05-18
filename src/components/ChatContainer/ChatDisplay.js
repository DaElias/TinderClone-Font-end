import React from "react";
import { ChatContainerHeader, Icon, ImgContainer, Profile } from "./styles";

const ChatDisplay = () => {
  return (
    <ChatContainerHeader>
      <Profile>
        <ImgContainer>
          <img
            style={{ width: "100%" }}
            src="https://maxst.icons8.com/vue-static/upscaler/slider/after_2.png"
            alt="img"
          />
        </ImgContainer>
        <h3>User Name</h3>
      </Profile>
      <Icon size="32px" color="white" cursor="pointer"  />
    </ChatContainerHeader>
  );
};

export default ChatDisplay;
