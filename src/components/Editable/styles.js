import styled from "styled-components";
import {
  currentColor3,
  currentColor2,
  currentColor1,
  neutralColor,
} from "../../styles/globalStyles";

export const DivGoalActivities = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 40%;
  margin: 3%;
  justify-content: center;
  color: ${neutralColor};
  background: ${currentColor1};
  box-shadow: ${`2px 2px 0 ${currentColor3}`};
  padding: 15px;
  border-radius: 8px;
`;

export const simpleButtonStyle = {
  backgroundColor: currentColor1,
  color: neutralColor,
  boxShadow: `2px 2px 0 ${currentColor3}`,
};

export const itemWrapperStyle = {
  marginTop: "15px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "90vw",
  maxWidth: "900px",
  borderBottom: "2px solid black",
};

export const groupsWrapperStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-around",
  marginBottom: "8vh",
  fontSize: "1.5rem",
};
export const comunityGoalsWrapperStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  height: "80vh",
  justifyContent: "space-around",
  marginBottom: "8vh",
  margin: "3%",
};

export const personalWrapperStyle = {
  backgroundColor: currentColor2,
  minHeight: "100vh",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};
