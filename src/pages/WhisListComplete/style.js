import styled from "styled-components";

export const SectionGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column: 3;
  grid-gap: 4;
  @media (max-width: 425px) {
    width: 100%;
    justify-content: center;
    padding: 0;
    grid-column: 1;
    grid-template-columns: 1fr;
    margin-top: 3em;
  }
  @media (max-width: 1280px) {
    grid-column: 2;
    grid-template-columns: 1fr ;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr;
`;

export const GridComponent = styled.div`
  width: 283px;
  background: #292c2e;
  margin: 0 20px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  margin: 20px;
  height: 315px;
  @media (max-width: 425px) {
    margin: 20px;
  }
  @media (max-width: 1280px) {
    margin: 20px;
  }
`;

export const GridImage = styled.img`
    width: 100%;
    border-radius: 12px;
    margin-bottom: 20px;
`

export const GridInfo = styled.div`
  display: flex;
  flex-direction: column;
  /* padding: 10px; */
  width: 100%;
  background: #292c2e;
    /* border-radius: 0 0 12px; */
`;

export const TextValue = styled.span`
  margin-top: 10px;
  color: #6776ff;
  font-size: 18px;
  font-weight: 700;
  text-align: left;
  @media (max-width: 425px) {
    font-size: 20px;
  }
`;

export const VisitProduct = styled.a`
  background: #6776ff;
  box-shadow: none !important;
  height: 50px;
  color: #fff;
  font-size: 20px;
  margin-top: 10px;
  font-weight: 700;
  border-radius: 10px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  text-decoration: none !important;
`;