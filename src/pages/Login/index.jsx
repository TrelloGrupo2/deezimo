import { MainBG, Navbar } from "../../styles";
import {
  BorderTop,
  Button,
  Container,
  Description,
  FormLogin,
  Input,
  LinkLogin,
  Title,
} from "./style";

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
            <LinkLogin>Esqueceu a senha ?</LinkLogin>
            <Button>Entrar</Button>
            <BorderTop />
            <Description>
              Não tem uma conta? 
              <LinkLogin href="../Register"> Registre-se</LinkLogin>
            </Description>
          </FormLogin>
        </Container>
      </MainBG>
    </>
  );
}
