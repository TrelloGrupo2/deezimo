import styled from "styled-components";



export const Header = styled.header`
    padding: 2em 5em;

`
export const TitleContainer = styled.div`
    h1{
        color: white;
    }
`
export const LinksContainer = styled.div`
    width: 23%;

`
export const ListLinks = styled.ul`
    display: flex;
    width: 100%;
    justify-content: space-around;
    align-items: center ;
     li{
        list-style: none;
    }

`
export const yourWishlistButton = styled.a`
    background-color: #5B606B;
    padding: 0.8em 0.8em;
    border-radius: 20px;

`

export const HeaderLp = styled.header`
    padding: 2em 5em;

`
export const HeaderLink = styled.a`
cursor: pointer;
font-size: 14px;
text-decoration: none !important;
color: white;
&:hover{
    opacity: 80%;
}
`
    
export const HeaderContainer = styled.div`
width: 100%;
display:flex;
justify-content: space-between;
align-items: center;

`

export const YourWishlistButton = styled.a`
font-size: 14px;
text-decoration: none !important;
color: white;
&:hover{
    opacity: 80%;
}
    background-color: #5B606B;
    padding: 0.8em 0.8em;
    border-radius: 20px;
`
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
 `




 
 
export const Content = styled.div`
     display:flex;
     align-items: center;
     justify-content: center;
 `


export const SloganContainer = styled.div`
      padding-top: 6em;
`

export const  TitleContainerSlogan = styled.div`
     height: auto;
     width: 36em;
     text-align:center;
     h1{
        color: white;
     }
 `
export const StartButtonContainer = styled.div`
     display:flex;
     justify-content: center;
     padding-top: 1em;
`
export const StartButton = styled.button`
     cursor: pointer;
     font-size: 22px;
     background-color: #2A41FA;
     color: white;
     padding: 0.5em 2em;
     border-radius: 20px;
     &:hover{
        opacity: 80%;
     }
`
