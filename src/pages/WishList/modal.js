import styled from "styled-components";
import React from 'react';
import ReactDOM from 'react-dom';

export const Dever = styled.div`
    display: none;
    justify-content:center;
    align-items:center;
    margin-top: 10px;
`;
export const ModalContent = styled.div`
    background-color: #292C2E;
    width: 560px;
    height:550px;
    border-radius: 13px;
    text-align: center;
`;


// function botaozinho(){
//     return(
//         <button>
//             gfbhrfht
//         </button>
//     );
// }

export const Botaozinho = styled.button`
    margin-top: 26px;
    width: 150px;
    height: 28px;
    border-radius: 8px;
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
    background-color: #6776FF;
    
        box-shadow: 0 0 0 0;
        border: 0 none;
        outline: 0;
        margin-left: 469px;
        margin-top: 26px;
        border-radius: 7px;
        width: 23px;
        height: 19px;
`;
// document.body.appendChild(modalContent);
// ReactDOM.render(<botaozinho />, modalContent);
export const H1 = styled.h1`
    color: white;
    text-align: center;
    margin-top: 5px;
`;

export const Botao2 = styled.button`
    margin-top: 26px;
    width: 150px;
    height: 28px;
    border-radius: 8px;
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
    background-color: #6776FF;
`;

export const Linkares = styled.h4`
    margin-top: 140px;
`;

export const Produto = styled.input`
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
    width: 454px;
    height: 19px;
    border-radius: 5px;
    font-size: 13px;
    margin: 0 auto;
`;

export const Link = styled.h4`
    margin-top: 25px;
`;

export const Quantidade = styled.input`
box-shadow: 0 0 0 0;
border: 0 none;
outline: 0;
height: 19px;
border-radius: 5px;
font-size: 13px;
margin-right: 290px;
`;

export const Botao3 = styled.button`
    margin-top: 26px;
    width: 150px;
    height: 28px;
    border-radius: 8px;
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
    background-color: #6776FF;
`;

function App() {
    const openModal = () => {
        let myModal = document.getElementById("modal");
        myModal.style.display = "flex";
    }
    const closeModal = () => {
        let modal = document.getElementById("modal");
        modal.style.display = "none";
    }
    return (
        <div>
        <Botaozinho onClick={openModal()}>Meu Botão</Botaozinho>
        <Dever>
            <ModalContent>
                <Botao2 onClick={closeModal()}>x</Botao2>
                <H1>Cadastro de Produtos</H1>
                <div>
                    <Linkares>Nome do Produto *</Linkares>
                    <Produto />
                    <Link>Insira o link *</Link>
                    <Produto />
                    <Link>Descrição</Link>
                    <Produto />
                    <Link>Valor</Link>
                    <Quantidade type="number"/>
                </div>
                <Botao3>Cadastrar</Botao3>
            </ModalContent>
        </Dever>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));