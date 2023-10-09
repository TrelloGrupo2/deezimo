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
} from "../Login/style";

export function Register() {
  return (
    <>
      <MainBG>
        <Navbar>
          <h1>Deezimo</h1>
        </Navbar>
        <Container>
          <FormLogin action="">
            <Title>Junte-se ao Deezimo</Title>
            <Description>Gerencie suas compras, presenteie e mais!</Description>
            <Input placeholder="Digite o seu email" type="email" />
            <Input placeholder="Repita o seu email" type="email" />
            <Input placeholder="Digite a sua melhor senha" type="password" />
            <Input placeholder="Repita a sua senha" type="password" />
            <Button>Concluir Cadastro</Button>
            <BorderTop />
            <Description>
              Não tem uma conta? 
              <LinkLogin> Registre-se</LinkLogin>
            </Description>
          </FormLogin>
        </Container>
      </MainBG>
    </>
  );
}