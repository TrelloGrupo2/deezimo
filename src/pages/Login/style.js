import styled from "styled-components";

export const Title = styled.h2`
  color: #fff;
  font-family: Open Sans;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const Description = styled.span`
  color: #eee;
  font-family: Open Sans;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin: 2rem 0;
`;

export const Container = styled.div`
    width:100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const FormLogin = styled.form`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

`

export const Input = styled.input`
  width: 30%;
  height: 45px;
  background: #292c2e;
  border: none;
  margin: 10px 0;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  color: #fff;
  font-size: 15px;
  padding: 0 0.8rem;
  border-radius: 4px;
`;