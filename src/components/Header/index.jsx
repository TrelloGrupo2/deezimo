import {
  Header,
  HeaderContainer,
  HeaderLink,
  LinksContainer,
  ListLinks,
  TitleContainer,
  YourWishlistButton,
  YourWishlistButtonContainer
} from "../../pages/Landing_Page/style";

export function HeaderComponent() {
  return (
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
  );
}
