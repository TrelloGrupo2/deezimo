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
          <Container>
            <Title>Listas Mais Populares</Title>
            <GridComponent />
          </Container>
          <Container style={{ marginTop: "50px" }}>
            <Title>Listas Quase Concluidas</Title>
            <GridComponent />
          </Container>
        </Container>
      </MainBG>
    </>
  );
}
