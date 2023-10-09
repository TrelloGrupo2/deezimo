import { MainBG, Navbar } from "../../styles";
import { Container, Description, FormLogin, Input, Title } from "./style";

export function Login() {
  return (
    <>
      <MainBG>
        <Navbar>
          <h1>Deezimo</h1>
        </Navbar>
        <Container>
          <FormLogin action="">
            <Title>Bem-vindo de volta!</Title>
            <Description>Gerencie suas compras, presenteie e mais!</Description>
            <Input placeholder="email" type="email" />
            <Input placeholder="senha" type="password" />
          </FormLogin>
        </Container>
      </MainBG>
    </>
  );
}
