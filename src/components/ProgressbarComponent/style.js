import styled from "styled-components";


export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;


export const BarContainer = styled.div`
  flex: 1;
  height: 8px;
  background: #dfdfe7;
  border-radius: 12px;
  overflow: hidden;
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
  background: linear-gradient(90deg, purple, darkorange);
`;

export const TextValue = styled.div`
  margin-left: 8px;
  width: 42px;
  text-align: right;
`;