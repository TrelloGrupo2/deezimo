import styled from "styled-components";

export const Title = styled.h2`
  color: #fff;
  font-family: Open Sans;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  font-family: "Open Sans", sans-serif;
  @media (max-width: 425px) {
    text-align: center;
    font-size: 30px;
  }
`;

export const Description = styled.span`
  color: #eee;
  font-family: Open Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin: 8px 0 20px 0;
  font-family: "Open Sans", sans-serif;
  @media (max-width: 425px) {
    text-align: center;
    font-size: 16px;
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 18px;
`

export const LinkLogin = styled.a`
  color: #2d5ff5;
  font-family: Open Sans;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: left;
  text-decoration-line: none;
  width: 26%;
  margin-top: 20px;
  font-family: "Open Sans", sans-serif;
  @media (max-width: 425px) {
    text-align: center;
    font-size: 16px;
    width: 100%;
  }
`;

export const Button = styled.a`
  text-align: center;
  align-items: center;
  display: flex;
  justify-content: center;
  margin-top: 1.3rem;
  width: 20%;
  border-radius: 6px;
  color: #fff;
  height: 40px;
  background: #2a41fa;
  font-size: 18px;
  font-weight: 700;
  opacity: 0.6;
  backdrop-filter: blur(2px);
  font-family: "Open Sans", sans-serif;
  @media (max-width: 425px) {
    width: 60%;
  }
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormLogin = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Input = styled.input`
  width: 25%;
  height: 45px;
  background: #292c2e;
  border: none;
  margin: 10px 0;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  color: #fff;
  font-size: 15px;
  padding: 0 0.8rem;
  border-radius: 4px;
  @media (max-width: 425px) {
    width: 80%;
  }
`;

export const BorderTop = styled.div`
  margin-top: 1.8rem;
  width: 26%;
  height: 1px;
  background: #303335;
`;

