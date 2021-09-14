import styled from "styled-components";

export const Container = styled.div`
  margin: 150px;
  color: #783dbf;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;

  h1{
    background-color: #c4c4c4;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px 5px 0px 0px;
  }

  div {
    min-width: 50%;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: solid #c4c4c4 0.5px;

    p {
      color: #dee3e0;
    }
  }
`;
