import styled from "styled-components";

export const DashboardContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SwiperContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

  justify-content: flex-start;
  margin-top: 10%;
`;
export const Swipe = styled.div`
  position: absolute;
`;

export const CardContainer = styled.div`
  width: 260px;
  height: 350px;
  /* background-color: red; */
`;

export const SwipeInfo = styled.div`
  position: absolute;
  bottom: 0;
  padding: 10px;
`;
