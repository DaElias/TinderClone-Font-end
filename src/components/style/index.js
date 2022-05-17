import styled, { css, keyframes } from "styled-components";
import { headShake, fadeOutDown
    // , shake 
} from "react-animations";
import imgFond from "../../images/6e9794bcedeecf5a8f8f41338a2a7345.webp";
// const shakeAnimation = keyframes`${shake}`;
const headShakeAnimation = keyframes`${headShake}`;
const fadeOutDownAnimation = keyframes`${fadeOutDown}`;

export const PrimaryTitle = styled.h1`
  font-size: 90px;
  color: rgb(255, 255, 255);
`;

export const PrimaryButton = styled.button`
  cursor: pointer;
  color: rgb(121, 119, 119);
  background-color: rgb(255, 255, 255);
  font-weight: 500;
  font-size: 15px;
  text-transform: uppercase;
  padding: 12px 30px;
  border-radius: 30px;
  border: solid 2px rgb(121, 119, 119);
  margin: 6px;
`;
export const SecundaryButton = styled.button`
  &&:focus {
    animation: 1s ${headShakeAnimation};
  }
  cursor: pointer;
  color: rgb(121, 119, 119);
  background-color: rgb(255, 255, 255);
  font-weight: 500;
  font-size: 15px;
  text-transform: uppercase;
  padding: 12px 30px;
  border-radius: 30px;
  border: solid 2px rgb(121, 119, 119);
  margin: 6px;
  ${(props) =>
    props.disabled &&
    css`
      opacity: 0.5;
      cursor: not-allowed;
    `}
`;
export const ContainerHome = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.65) 0%,
      rgba(0, 0, 0, 0) 100%
    ),
    url(${imgFond});
`;

export const Button = styled.button`
  /* color: #fff; */
  text-transform: uppercase;
  font-size: 15px;
  color: white;
  background: #ee0979; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #ff6a00,
    #ee0979
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #ff6a00,
    #ee0979
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  padding: 12px 30px;
  border-radius: 30px;
  border: none;
  font-weight: bold;
  cursor: pointer;
  &&:focus {
    animation: 1s ${fadeOutDownAnimation};
    background: linear-gradient(
      to left,
      #ff6a00,
      #ee0979
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }
  &&:hover {
  }
  ${(props) =>
    props.primary &&
    css`
      background: #00c9ff; /* fallback for old browsers */
      background: -webkit-linear-gradient(
        to right,
        #92fe9d,
        #00c9ff
      ); /* Chrome 10-25, Safari 5.1-6 */
      background: linear-gradient(
        to right,
        #92fe9d,
        #00c9ff
      ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
      &&:focus {
        animation: 1s ${headShakeAnimation};
        background: linear-gradient(
          to top,
          #92fe9d,
          #00c9ff
        ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
      }
    `}
`;
