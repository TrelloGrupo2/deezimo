import { differenceInYears, parse } from "date-fns";
import { useState } from "react";

import { MainBG, Navbar } from "../../styles";
import {
  BorderTop,
  Button,
  Container,
  Description,
  ErrorMessage,
  FormLogin,
  Input,
  LinkLogin,
  Title,
} from "../Login/style";


export function Register() {

  const [dob, setDob] = useState("");
  const [ageError, setAgeError] = useState("");


  const handleDateChange = (event) => {
    const inputDate = event.target.value;
    setDob(inputDate);

    const parsedDate = parse(inputDate, "yyyy-MM-dd", new Date());
    const age = differenceInYears(new Date(), parsedDate);

    if (age < 16) {
      setAgeError("Você deve ter pelo menos 18 anos.");
    } else {
      setAgeError("");
    }
  };

  return (
    <>
      <MainBG>
        <Navbar>
          <h1>Deezimo</h1>
        </Navbar>
        <Container>
          <FormLogin action="">
            <Title>Junte-se ao Deezimo</Title>
            <Description>Gerencie suas compras, presenteie e mais!</Description>
            <Input placeholder="Digite o seu email" type="email" />
            <Input placeholder="Repita o seu email" type="email" />
            <Input placeholder="Digite a sua melhor senha" type="password" />
            <Input placeholder="Repita a sua senha" type="password" />
            <Input
              value={dob}
              onChange={handleDateChange}
              type="date"
              name=""
              id=""
            />
            {ageError && <ErrorMessage>{ageError}</ErrorMessage>}

            <Button>Concluir Cadastro</Button>
            <BorderTop />
            <Description>
              Ja tem uma conta?
              <LinkLogin href="../Login"> Login</LinkLogin>
            </Description>
          </FormLogin>
        </Container>
      </MainBG>
    </>
  );
}
