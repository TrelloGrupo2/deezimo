import styled from "styled-components";

export const GridContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Grid = styled.div`
  width: 15%;
  background: #292c2e;
  margin: 20px 64px;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
`;

export const Image = styled.img`
    width: 100px;
    height: 100px;
    background: transparent;
`

export const Title = styled.h3`
  font-size: 18px;
  color: #fff;
  background:transparent ;
`

export const Description = styled.span`
  font-size: 14px;
  color: #fff;
  background: transparent;
`;
