import React from 'react';
import { MainSabatina } from "../../components/Main";
import {
  Section,
  ContainerImagem,
  Image,
  ContainerButtons,
  GenerateButton,
  ContainerScore
} from "./SabatinaStyled";
import {
  InputStyled,
  LabelStyled,
  NextStepButton
} from "../../components/Steps/StepStyled";
import exAlunos from './quadrinhos';
import { useAuth } from '../../context/AuthProvider/useAuth';
import { ButtonStyled } from '../../components/ButtonStyled';

type Props = {}

const Sabatina = (props: Props) => {

  const auth = useAuth();

  const [score, SetScore] = React.useState<number>(0);
  const [inputValue, SetInputValue] = React.useState<string>('');
  const [selectComic, SetSelectComic] = React.useState(exAlunos[0]);
  const [isValid, SetIsValid] = React.useState<boolean>(false);
  const [numberStep, SetNumberStep] = React.useState<number>(0);

  function GenerateRandomComic(){
    let randomNumber = Math.floor(Math.random() * exAlunos.length);
    SetSelectComic(exAlunos[randomNumber]);
    SetNumberStep(0)

    return randomNumber;
  }

  function ResetComic() {
    SetScore(0);
    SetInputValue('');
    SetIsValid(false);

    let randomNumber = GenerateRandomComic();

    return exAlunos[randomNumber];
  }

  function Validation(input: string, field: string): void {
    SetInputValue(input)

    switch (field) {
      case 'apelido':
        SetIsValid(selectComic.apelido.toLocaleLowerCase() === input.toLocaleLowerCase());
      break;
      case 'name':
        SetIsValid(selectComic.nomeCompleto.toLowerCase() === input.toLowerCase());
      break;
      case 'course':
        SetIsValid(selectComic.curso.toLowerCase() === input.toLowerCase());
      break;
      case 'year':
        SetIsValid(selectComic.formatura.toLowerCase() === input.toLowerCase());
      break;
      case 'city':
        SetIsValid(selectComic.cidade.toLowerCase() === input.toLowerCase());
      break;
      case 'state':
        SetIsValid(selectComic.estado.toLowerCase() === input.toLowerCase());
      break;
    }
  }

  function NextResetValue():void {
    if (numberStep === 5) {
      SetScore(score + 1);
    }

    SetInputValue('');
    SetIsValid(false);
    SetNumberStep(numberStep + 1);
  }

  return (
    <>
      <MainSabatina>
        <Section>
          <p>Quadrinhos completos: <strong>{score}</strong></p>
          <ContainerImagem>
            <Image src={selectComic.img} />
          </ContainerImagem>

          {numberStep === 0 ?
            <LabelStyled>
              Apelido
              <InputStyled value={inputValue} onChange={(event) => Validation(event.target.value, 'apelido')} />
            </LabelStyled> : null
          }

          {numberStep === 1 ?
            <LabelStyled>
              Nome Completo
              <InputStyled value={inputValue} onChange={(event) => Validation(event.target.value, 'name')} />
            </LabelStyled> : null
          }

          {numberStep === 2 ?
            <LabelStyled>
              Curso
              <InputStyled value={inputValue} onChange={(event) => Validation(event.target.value, 'course')} />
            </LabelStyled> : null
          }

          {numberStep === 3 ?
            <LabelStyled>
              Ano de Formatura
              <InputStyled value={inputValue} onChange={(event) => Validation(event.target.value, 'year')} />
            </LabelStyled> : null
          }

          {numberStep === 4 ?
            <LabelStyled>
              Cidade
              <InputStyled value={inputValue} onChange={(event) => Validation(event.target.value, 'city')} />
            </LabelStyled> : null
          }

          {numberStep === 5 ?
            <LabelStyled>
              Estado
              <InputStyled value={inputValue} onChange={(event) => Validation(event.target.value, 'state')} />
            </LabelStyled> : null
          }

          {numberStep < 6 ?
            <ContainerButtons>
              <GenerateButton isValidate={true} onClick={() => ResetComic()}>Novo Jogo</GenerateButton>
              <NextStepButton isValidate={isValid} onClick={() => NextResetValue()}>Continuar</NextStepButton>
            </ContainerButtons> :
            <ContainerScore>
              <p>Parabéns você concluiu o quadrinho!</p>
              <NextStepButton isValidate={true} onClick={() => GenerateRandomComic()}>Gerar Novo Quadrinho</NextStepButton>
            </ContainerScore>
          }
          <ButtonStyled onClick={auth.logout}>Sair</ButtonStyled>
        </Section>
      </MainSabatina>
    </>
  )
}

export default Sabatina