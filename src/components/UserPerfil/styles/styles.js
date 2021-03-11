import { Card, CardMedia } from "@material-ui/core";
import styled from "styled-components";

export const CardUser = styled(Card)`
  width: 25%;
  height: 68%;
  margin: 5%;

  @media (max-width: 600px) {
    width: 60%;
  }
`;

export const CardMediaUser = styled(CardMedia)`
  background-image: url(https://image.freepik.com/free-vector/binary-code-pattern-background_1142-902.jpg);
  height: 40%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export const DivPerfil = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const DivItems = styled.div`
  width: 60%;
  height: 45%;
  display: flex;
  flex-direction: column;

  @media (max-width: 600px) {
    align-items: center;
    width: 90%;
  }
`;

export const CardItem = styled(Card)`
  width: 60%;
  height: 15%;
  margin: 2%;
  &:hover {
    background-color: blue;
  }
`;
