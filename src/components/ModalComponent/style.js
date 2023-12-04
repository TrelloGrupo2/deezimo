import styled from "styled-components";


export const SectionModal = styled.section`
  background: #232526;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const TitleModal = styled.h2`
    font-size: 20px;
    color: #fff;
    font-weight: 700;
`

export const CloseModal = styled.button`
    width: 5%;
    color: red;
    background:transparent;
    margin-left: 2rem;
    border: none;

`

export const ImageInputContainer = styled.div`
  margin-top: 20px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #fff;
`;

export const ImagePreview = styled.img`
  max-width: 20%;
  max-height: 20%;
  border-radius: 12px;
`;

export const FileInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 60%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
`;

export const FormContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const InputName = styled.input`
  width: 70%;
  color: #fff;
  border-radius: 12px;
  border: none;
  background: #292c2e;
  height: 50px;
  padding-left: 10px;
  margin-top: 2em;
  font-size: 18px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  InputLink:placeholder {
    padding-left: 10px;
  }
`;

export const InputPrice = styled.input`
  width: 70%;
  color: #fff;
  border-radius: 12px;
  border: none;
  background: #292c2e;
  height: 50px;
  padding-left: 10px;
  margin-top: 2em;
  font-size: 18px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  InputLink:placeholder {
    padding-left: 10px;
  }
`;


export const InputLink = styled.input`
  width: 70%;
  color: #fff;
  border-radius: 12px;
  border: none;
  background: #292c2e;
  height: 50px;
  padding-left: 10px;
  margin-top: 2em;
  font-size: 18px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  InputLink:placeholder {
    padding-left: 10px;
  }
`;