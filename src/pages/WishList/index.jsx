import { HeaderComponent } from "../../components/Header";
import { UserGridComponent } from "../../components/UserGridComponent";
import { TextTitle } from "../../styles/global";
import { ButtonCreateList, Container } from "./style";

export function WishList() {
  return (
    <>
      <HeaderComponent />
      <div style={{ width: "100%" }}>
        <Container>
          <UserGridComponent />
          <div
            style={{
              width: "50%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TextTitle>
              Você ainda não tem uma Lista de Desejo, <br /> para começar clique
              em Adicionar Produto
            </TextTitle>
            <ButtonCreateList style={{ marginTop: '40px' }}>
              <TextTitle>Adicionar Produto</TextTitle>
            </ButtonCreateList>
          </div>
        </Container>
      </div>
    </>
  );
}
