import { GridComponent } from "../../components/GridComponent";
import { MainBG, Navbar } from "../../styles";
import { Container, Title } from "./style";

export function Home() {
  return (
    <>
      <MainBG>
        <Navbar>
          <h1>Deezimo</h1>
        </Navbar>
        <Container>
          <Title>Produtos Mais Populares</Title>
          <GridComponent/>
        </Container>
      </MainBG>
    </>
  );
}
