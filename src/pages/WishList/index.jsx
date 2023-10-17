import {
    Header,
    HeaderContainer,
    HeaderLink,
    LinksContainer,
    ListLinks,
    TitleContainer,
    YourWishlistButton,
    YourWishlistButtonContainer,
} from "../Landing_Page/style";
import {
    AvatarUser,
    Container,
    PriceSpan,
    Title,
    UserContainer,
    UserContent,
} from "./style";

export function WishList() {
  return (
    <>
      <Header>
        <HeaderContainer>
          <TitleContainer>
            <h1>Deezimo</h1>
          </TitleContainer>
          <LinksContainer>
            <ListLinks>
              <li>
                <HeaderLink>Contato</HeaderLink>
              </li>
              <li>
                <HeaderLink href="../Login">Entrar</HeaderLink>
              </li>
              <YourWishlistButtonContainer>
                <YourWishlistButton>Sua Wishlist</YourWishlistButton>
              </YourWishlistButtonContainer>
            </ListLinks>
          </LinksContainer>
        </HeaderContainer>
      </Header>
      <Container>
        <UserContent>
          <UserContainer>
            <AvatarUser />
            <Title>UserName</Title>
            <PriceSpan>Price Variation <br></br> R$90 - R$520</PriceSpan>
          </UserContainer>
        </UserContent>
      </Container>
    </>
  );
}
