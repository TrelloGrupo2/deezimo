import { HeaderComponent } from "../../components/Header";
import { Text } from "../../components/ProgressbarComponent/style";
import { UserGridComponent } from "../../components/UserGridComponent";
import { Container } from "../WishList/style";
import {
  Content,
  GridComponent,
  GridImage,
  GridInfo,
  SectionGrid,
  TextValue,
  VisitProduct,
} from "./style";

export function WishListComplete() {
  const products = [
    {
      id: 1,
      name: "Geladeira Brastemp Frost Free Duplex 375L Branca - Com Compar...",
      value: "R$ 2.969,47",
      link: "#",
    },
    {
      id: 2,
      name: "Geladeira Brastemp Frost Free Duplex 375L Branca - Com Compar...",
      value: "R$ 2.969,47",
      link: "#",
    },
    {
      id: 3,
      name: "Geladeira Brastemp Frost Free Duplex 375L Branca - Com Compar...",
      value: "R$ 2.969,47",
      link: "#",
    },
  ];

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
          ></div>
          <Content>
            <SectionGrid>
              {products.map((item) => {
                return (
                  <GridComponent>
                    <GridImage src="https://picsum.photos/231/138" alt="aaa" />
                    <GridInfo>
                      <Text>{item.name}</Text>
                      <TextValue>{item.value}</TextValue>
                      <VisitProduct href={item.link}>
                        Visitar produto
                      </VisitProduct>
                    </GridInfo>
                  </GridComponent>
                );
              })}
            </SectionGrid>
          </Content>
        </Container>
      </div>
    </>
  );
}
