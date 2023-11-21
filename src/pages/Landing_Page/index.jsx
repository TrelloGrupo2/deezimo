import {
  Content,
  ContentBody,
  Elemento,
  HIWContent,
  HIWImages,
  HIWImgContents,
  HIWText,
  SloganContainer,
  StartButton,
  StartButtonContainer,
  TitleContainerSlogan
} from "./style";

import { HeaderComponent } from "../../components/Header";
import img1 from "./img/img1.png";
import img2 from "./img/img2.png";
import img3 from "./img/img3.png";
export function Lp() {
  return (
    <>
      <HeaderComponent />

      <Content>
        <ContentBody>
          <SloganContainer>
            <TitleContainerSlogan>
              <h1>Deezimo, Sua plataforma de doações online</h1>
            </TitleContainerSlogan>
            <StartButtonContainer>
              <StartButton href="/home">Começar</StartButton>
            </StartButtonContainer>
          </SloganContainer>
          <Elemento>
            <svg
              width="539"
              height="811"
              viewBox="0 0 539 811"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M538.018 439C538.018 661.847 494.504 810.5 304.518 810.5C114.532 810.5 123.822 699.347 123.822 476.5C123.822 253.653 -116.968 0 73.0181 0C263.004 0 538.018 216.153 538.018 439Z"
                fill="#2A41FA"
              />
            </svg>
          </Elemento>
        </ContentBody>
      </Content>
      <HIWContent>
        <h1>Como Funciona?</h1>
        <HIWText>
          <p>
            No Deezimo, você pode reunir sua lista de desejos de diferentes
            sites, para receber presentes de outras pessoas! Assim, você pode
            escolher os produtos que mais gosta e facilitar a vida de quem quer
            te agradar.
          </p>
        </HIWText>
      </HIWContent>
      <HIWImages>
        <HIWImgContents>
          <img src={img3} alt="img1" />
        </HIWImgContents>
        <HIWImgContents>
          <img src={img2} alt="" />
        </HIWImgContents>
        <HIWImgContents>
          <img src={img1} alt="" />
        </HIWImgContents>
      </HIWImages>
    </>
  );
}
