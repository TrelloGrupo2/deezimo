import styled from "styled-components";

export const GridContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Grid = styled.div`
  width: 23%;
  background: #292c2e;
  margin: 20px 64px;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  filter: drop-shadow(0px 7px 8px rgba(0, 0, 0, 0.45));
  @media (max-width: 476px) {
    width: 83%;
  }
  @media (max-width: 768px) {
    width: 55%;
  }
  @media (max-width: 768px) {
    width: 55%;
  }
`;

export const Image = styled.img`
  width: 100px;
  height: 100px;
  margin: 20px 0;
  background: transparent;
  filter: drop-shadow(0px 7px 8px rgba(0, 0, 0, 0.25));
`;

export const Title = styled.h3`
  font-size: 24px;
  color: #fff;
  background: transparent;
  font-weight: 700;
  font-family: "Open Sans", sans-serif;
`;

export const Description = styled.span`
  font-size: 16px;
  color: #fff;
  font-weight: 600;
  margin-top: 10px;
  background: transparent;
`;

export const Button = styled.a`
  border-radius: 4px;
  background: #6776ff;
  width: 100%;
  margin-top: 43px;
  height: 43px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none !important;

  cursor: pointer;
  &:hover {
    opacity: 80%;
  }
  span {
    color: #fff;
    font-size: 20px;
    font-weight: 600;
  }
`;
