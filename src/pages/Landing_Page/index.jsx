export function LandingPage() {
  return (
    <>
      <header class="header">
        <div class="headerContainer">
          <div class="titleContainer">
            <h1>Deezimo</h1>
          </div>
          <div class="linksContainer">
            <ul>
              <li>
                <a href="#" class="contactUsLink headerLink">
                  Contato
                </a>
              </li>
              <li>
                <a href="#" class="loginLink headerLink">
                  Entrar
                </a>
              </li>
              <li class="yourWishlistButtonContainer headerLink">
                <a href="#" class="yourWishlistButton">
                  Sua Wishlist
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>

      <div class="content">
        <div class="sloganContainer">
          <div class="titleContainerSlogan">
            <h1>
              Escolha seus produtos favoritos & deixe que os outros te
              surpreendam!
            </h1>
          </div>
          <div class="startButtonContainer">
            <button class="startButton">Começar</button>
          </div>
        </div>
      </div>
    </>
  );
}
