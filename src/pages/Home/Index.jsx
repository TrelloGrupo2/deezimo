import { GridComponent } from "../../components/GridComponent";
import { HeaderComponent } from "../../components/Header";
import { MainBG } from "../../styles";
import { Container, Title } from "./style";

export function Home() {
  return (
    <>
      <MainBG>
        <HeaderComponent/>
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
