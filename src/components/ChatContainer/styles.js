import styled, { keyframes } from "styled-components";
import { fadeIn, headShake } from "react-animations";
import { BiLogIn } from "react-icons/bi";

const fadeInAnimation = keyframes`${fadeIn}`;
const headShakeAnimation = keyframes`${headShake}`;

export const Icon = styled(BiLogIn)`
  margin: 2px;
  &&:hover {
    animation: 1s ${headShakeAnimation};
  }
`;
export const ButtonOption = styled.button`
  border: none;
  background-color: rgb(255, 255, 255);
  border-bottom: solid 4px rgb(243, 33, 33);
  font-size: 20px;
  margin: 2px;
  padding: 10px;
  &&:focus {
    animation: 1s ${fadeInAnimation};
  }
  &&:disabled {
    border-bottom: solid 4px rgb(187, 187, 187);
  }
`;
export const ImgContainer = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 50px;
  overflow: hidden;
  margin: 10px;
`;
export const Profile = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  color: rgb(255, 255, 255);
`;
export const ChatContainerHeader = styled.div`
  background: linear-gradient(45deg, rgb(254, 48, 114), rgb(255, 89, 64));
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

// * Maches Display

export const MachesContainer = styled.div``;
