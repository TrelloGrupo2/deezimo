import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const UserContent = styled.div`
  width: 50%;
  display: flex;
  justify-content: start;
  padding-left: 1em;
`;

export const UserContainer = styled.div`
  width: 40%;
  background: #292c2e;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 4px;
  padding: 2em 2em;
`;

export const AvatarUser = styled.div`
  width: 130px;
  height: 130px;
  border-radius: 50%;
  background: #d9d9d9;
`;

export const Title = styled.h2`
  margin-top: 1em;
  background: transparent;
  color: #fff;
  font-family: Open Sans;
  font-size: 26px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  font-family: "Open Sans", sans-serif;
  @media (max-width: 425px) {
    text-align: center;
    font-size: 30px;
  }
`;

export const PriceSpan = styled.span`
    font-size: 20;
    color: #fff;
    font-family: "Open Sans", sans-serif;
    font-weight: 600;
    background: transparent;
    margin-top: 1em;
`

export const Progress = styled.div``