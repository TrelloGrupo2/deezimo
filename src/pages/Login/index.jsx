import { MainBG, Navbar } from "../../styles";
import { Container, FormLogin, Input } from "./style";

export function Login() {
  return (
    <>
      <MainBG>
        <Navbar>
          <h1>Deezimo</h1>
        </Navbar>
        <Container>
          <FormLogin action="">
            <Input type="email" />
            <Input type="password" />
          </FormLogin>
        </Container>
      </MainBG>
    </>
  );
}
