import styled from "styled-components";

export const Header = styled.header`
  padding: 2em 5em;
`;
export const TitleContainer = styled.div`
  h1 {
    color: white;
  }
`;
export const LinksContainer = styled.div`
  width: 23%;
`;
export const ListLinks = styled.ul`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  li {
    list-style: none;
  }
`;
export const yourWishlistButton = styled.a`
  background-color: #5b606b;
  padding: 0.8em 0.8em;
  border-radius: 20px;
`;

export const HeaderLp = styled.header`
  padding: 2em 5em;
`;
export const HeaderLink = styled.a`
  cursor: pointer;
  font-size: 14px;
  text-decoration: none !important;
  color: white;
  &:hover {
    opacity: 80%;
  }
`;

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const YourWishlistButton = styled.a`
  font-size: 14px;
  text-decoration: none !important;
  color: white;
  &:hover {
    opacity: 80%;
  }
  background-color: #5b606b;
  padding: 0.8em 0.8em;
  border-radius: 20px;
`;
export const YourWishlistButtonContainer = styled.li`
  display: flex;
  align-items: center;
  height: 2.5em;
  border-left: 2px solid #303335;
  padding: 0 1em;
  cursor: pointer;
  &:hover {
    opacity: 80%;
  }
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: flex-start;
`;
export const ContentBody = styled.div`
    padding: 10px;
    display: flex;
    width: 90%;
`

export const SloganContainer = styled.div`
  padding-top: 15em;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const TitleContainerSlogan = styled.div`
  height: auto;
  width: 36em;
  h1 {
    padding: 10px;
    font-size:45px;
    color: white;
  }
`;
export const StartButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 1em;
  width: 100%;
`;
export const StartButton = styled.button`
  cursor: pointer;
  width: 90%;
  font-size: 22px;
  background-color: #2a41fa;
  color: white;
  padding: 0.5em 2em;
  border-radius: 8px;
  &:hover {
    opacity: 80%;
  }
`;
export const Elemento = styled.div`
  display: flex;
  max-width: 100%;
  padding-left: 45em;
`;

export const HIWContent = styled.div`
  display: flex;
  padding-top: 8em;

  flex-direction: column;
  align-items: center;
  h1 {
    color: #fff;
    color: #fff;
    font-family: Open Sans;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;
export const HIWText = styled.div`
  width: 482px;
  height: 100px;
  padding-top: 3em;
  padding-bottom: 10em;
  p {
    color: #fff;
    text-align: center;
    font-family: Open Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;

export const HIWImages = styled.div`
  display: flex;
  max-width: 100%;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-around;
  padding-bottom: 10em;
`;

export const HIWImgContents = styled.div`
  display: flex;
  width: 311px;
  height: 311px;
  border-radius: 4px;
  opacity: 85%;
`;
