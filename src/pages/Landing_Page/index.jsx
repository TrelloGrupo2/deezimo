import {
  Content,
  Header,
  HeaderContainer,
  HeaderLink,
  LinksContainer,
  ListLinks,
  SloganContainer,
  StartButton,
  StartButtonContainer,
  TitleContainer,
  TitleContainerSlogan,
  YourWishlistButton,
  YourWishlistButtonContainer,
  Elemento,
  HIWContent,
} from "./style";

export function Lp() {
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
              Deezimo, Sua plataforma de doacoes online
            </h1>
          </TitleContainerSlogan>
          <StartButtonContainer>
            <StartButton>Começar</StartButton>
          </StartButtonContainer>
        </SloganContainer>
        <Elemento>
          <svg width="539" height="811" viewBox="0 0 539 811" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M538.018 439C538.018 661.847 494.504 810.5 304.518 810.5C114.532 810.5 123.822 699.347 123.822 476.5C123.822 253.653 -116.968 0 73.0181 0C263.004 0 538.018 216.153 538.018 439Z" fill="#2A41FA" />
          </svg>
        </Elemento>
      </Content>
      <HIWContent>
        
      </HIWContent>
    </>
  );
}
