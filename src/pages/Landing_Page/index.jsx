import { 
  Header,
  TitleContainer,
  HeaderContainer,
  LinksContainer,
  ListLinks,
  HeaderLink,
  YourWishlistButtonContainer,

  Content,
  SloganContainer,
  TitleContainerSlogan,
  StartButtonContainer,
  StartButton,
  YourWishlistButton,
} from "./style";

export function Home() {
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
                <HeaderLink>
                  Contato
                </HeaderLink>
              </li>
              <li>
                <HeaderLink href="../Login">
                  Entrar
                </HeaderLink>
              </li>
              <YourWishlistButtonContainer>
                <YourWishlistButton>
                  Sua Wishlist
                 </YourWishlistButton>
              </YourWishlistButtonContainer>
            </ListLinks>
          </LinksContainer>
        </HeaderContainer>
      </Header>

      <Content>
        <SloganContainer>
          <TitleContainerSlogan>
            <h1>
              Escolha seus produtos favoritos & deixe que os outros te
              surpreendam!
            </h1>
          </TitleContainerSlogan>
          <StartButtonContainer>
            <StartButton>Começar</StartButton>
          </StartButtonContainer>
        </SloganContainer>
      </Content>
    </>
  );
}
