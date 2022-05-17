import styled, { keyframes } from "styled-components";
import { fadeInUp, rotateOut, swing } from "react-animations";

const swingAnimation = keyframes`${swing}`;
const fadeInDownAnimation = keyframes`${fadeInUp}`;
const rotateOutAnimation = keyframes`${rotateOut}`;


export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: none;
  border: none;
  width: 100%;
`;
export const Input = styled.input`
  padding: 8px;
  margin: 8px;
  font-size: 17px;
  width: 100%;
`;

export const ContainerAuthModal = styled.div`
  animation: 0.5s ${fadeInDownAnimation};
  position: absolute;
  left: 0;
  right: 0;
  top: 50px;
  margin-left: auto;
  margin-right: auto;
  max-width: 360px;
  height: 600px;
  background-color: rgb(255, 255, 255);
  border-radius: 20px;
  padding: 40px;
  &&:visited {
    animation: 1s ${rotateOutAnimation};
  }
`;
export const Icon = styled.div`
  cursor: pointer;
  float: right;
  &&:hover {
    animation: 1s ${swingAnimation};
  }
`;
