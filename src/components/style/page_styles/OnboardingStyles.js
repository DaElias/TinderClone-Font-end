import styled, { css, keyframes } from "styled-components";
import {
  pulse,
  fadeIn,
  bounceInDown,
  zoomIn as bounceInRight,
} from "react-animations";
const pulseAnimation = keyframes`${pulse}`;
const fadeInAnimation = keyframes`${fadeIn}`;
const bounceInDownAnimation = keyframes`${bounceInDown}`;
const bounceInRightAnimation = keyframes`${bounceInRight}`;
export const Container = styled.div`
  animation: 1s ${bounceInDownAnimation};
`;

export const ContainerOnboarding = styled.div`
  border-top: solid 1px rgb(213, 213, 213);
`;
export const Form = styled.form`
  display: flex;
  justify-content: center;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 35%;
  text-align: start;
  align-items: center;
`;
export const Input = styled.input`
  padding: 15px 30px;
  margin: 10px 0;
  font-size: 15px;
  border: solid 2px rgb(219, 219, 219);
  border-radius: 10px;
  width: 85%;
  &&[type="number"] {
    width: 40%;
  }
  &&[type="submit"]:hover {
    background-color: rgb(235, 235, 235);
  }
  &&[type="submit"]:active {
    background-color: rgb(226, 115, 115);
  }
  &&[type="submit"]:focus {
    animation: 1s ${pulseAnimation};
  }
  ${(props) =>
    props.profile &&
    css`
      width: 50%;
      left: 0;
    `}
`;
export const Img = styled.img`
  width: 100%;
  ${(props) =>
    props.animation &&
    css`
      animation: 1s ${bounceInRightAnimation};
      border-radius: 1%;
    `}
`;

export const InputRadio = styled.input`
  padding: 15px 30px;
  margin: 13px 5px 0px 13px;
  font-size: 15px;
  border: solid 2px rgb(219, 219, 219);
  border-radius: 10px;
  &&[type="radio"] {
    display: none;
  }
  &&[type="radio"]:checked + Label {
    border: solid 2px rgb(221, 39, 22);
    animation: 1s ${fadeInAnimation};
  }
`;
export const Label = styled.label`
  margin: 10px 0;
  ${(props) =>
    props.inputCheck &&
    css`
      border: solid 2px rgb(219, 219, 219);
      margin: 10px 8px 0px 0px;
      padding: 2px;
      border-radius: 10px;
    `}
`;
export const MultipleInputs = styled.div`
  display: flex;
  flex-direction: row;
`;
export const PhotoContainer = styled.div``;
