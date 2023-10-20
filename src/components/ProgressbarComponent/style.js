import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 66%;
  background: transparent;
  margin-top: 20px;
`;

export const BarContainer = styled.div`
  flex: 1;
  height: 26px;
  background: #fff;
  border-radius: 16px;
  overflow: hidden;
  position: relative;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const Filter = styled.div`
  transition: "width 2s ease-i-out";
  height: inherit;
  border-radius: inherit;
  overflow: hidden;
`;

export const FillerBackground = styled.div`
  height: inherit;
  transition: "width 2s ease-i-out";
  background: linear-gradient(90deg, #401bdc, #694ddd);
`;

export const TextValue = styled.div`
  background-color: transparent;
  position: absolute;
  margin-left: 8px;
  width: 42px;
  text-align: right;
  
`;

export const Text = styled.strong`
  color: #000;
  background: transparent;
  font-family: Open Sans;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
`;
