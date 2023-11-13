import { useState } from "react";
import Modal from "react-modal";


import { HeaderComponent } from "../../components/Header";
import {
  CloseModal,
  FileInput,
  FormContainer,
  HeaderContainer,
  ImageInputContainer,
  ImagePreview,
  InputLink,
  SectionModal,
  TitleModal,
} from "../../components/ModalComponent/style";
import { UserGridComponent } from "../../components/UserGridComponent";
import { TextTitle } from "../../styles/global";
import { ButtonCreateList, Container } from "./style";

const customStyles = {
  content: {
    top: "10%",
    left: "30%",
    right: "auto",
    bottom: "auto",
    background: "#232526",
    width: "40%",
    borderRadius: "8px",
  },
};

export function WishList() {
  const [modalIsOpen, setIsOpen] = useState(false);

  const [image, setImage] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  function closeModal() {
    setIsOpen(false);
  }
  function openModal() {
    setIsOpen(true);
  }
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
          >
            <TextTitle>
              Você ainda não tem uma Lista de Desejo, <br /> para começar clique
              em Adicionar Produto
            </TextTitle>
            <ButtonCreateList onClick={openModal} style={{ marginTop: "40px" }}>
              <TextTitle>Adicionar Produto</TextTitle>
            </ButtonCreateList>
          </div>

          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="eta"
            ariaHideApp={false}
          >
            <SectionModal>
              <HeaderContainer>
                <TitleModal>Cadastre seu Produto</TitleModal>
                <CloseModal onClick={closeModal}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </CloseModal>
              </HeaderContainer>
              <FormContainer>
                <ImageInputContainer>
                  {image && <ImagePreview src={image} alt="Preview" />}
                  <FileInput type="file" onChange={handleFileChange} />
                  Adicione sua imagem
                </ImageInputContainer>
                <InputLink placeholder="Insira o link do produto" />
                <InputLink placeholder="Insira o nome do produto" />
                <InputLink style={{width: '30%'}} placeholder="Insira o valor do produto" />
                <ButtonCreateList
                  style={{ marginTop: "40px" }}
                >
                  <TextTitle href="/complete" >Adicionar Produto</TextTitle>
                </ButtonCreateList>
              </FormContainer>
            </SectionModal>
          </Modal>
        </Container>
      </div>
    </>
  );
}
