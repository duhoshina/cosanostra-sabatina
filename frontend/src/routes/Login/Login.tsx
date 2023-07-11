import React from 'react';
import Header from "../../components/Navbar/Header";
import FirstStep from "../../components/Steps/First/FirstStep"
import SecondStep from "../../components/Steps/Second/SecondStep";
import ThirdStep from "../../components/Steps/Thirt/ThirdStep";
import {
    ContainerRegister,
    ContainerRight,
    ContainerLogin,
    ButtonSwitchPage,
} from './LoginStyled';
import { Footer } from "../Home/HomeStyled";
import { MainLogin } from "../../components/Main";
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthProvider/useAuth';
import { InputStyled, NextStepButton } from '../../components/Steps/StepStyled';

const Login = () => {

    const auth = useAuth();

    const [apelido, SetApelido] = React.useState<string>('');
    const [curso, SetCurso] = React.useState<string>('');
    const [email, SetEmail] = React.useState<string>('');
    const [password, SetPassword] = React.useState<string>('');
    const [numberStep, SetNumberStep] = React.useState<number>(0);
    const [page, SetPage] = React.useState<boolean>(false);
    const [isInputValid, SetInputValid] = React.useState<boolean>(false);

    const inputEmail = (newValue: any) => {
        SetEmail(newValue);
        validateInputLogin();
    };

    const inputPassword = (newValue: any) => {
        SetPassword(newValue);
        validateInputLogin();
    };

    function validateInputLogin() {
        if (email.length >= 8 && password.length > 3) {
            SetInputValid(true);
        }
    };

    async function submitLogin() {
        try {
            await auth.authenticate(email, password);
        } catch (err) {
            console.log(err);
        };

    };

    const handlePage = () => {
        if (page) {
            SetPage(false)
        } else {
            SetPage(true)
        }
    };

    const handleNumberStep = (arg: number) => {
        switch (arg) {
            case 0:
                SetNumberStep(1)
                break;
            case 1:
                SetNumberStep(2)
                break;
            case 2:
                SetNumberStep(0)
                break;
        }
    }

    return (
        <>
            <Header />
            <MainLogin>
                {page ? <ContainerRegister>
                    <ContainerRight>
                        {numberStep === 0 ?
                            <FirstStep numberStep={numberStep} handleNumberStep={handleNumberStep} apelido={apelido} SetApelido={SetApelido} /> : null}
                        {numberStep === 1 ?
                            <SecondStep numberStep={numberStep} handleNumberStep={handleNumberStep} SetCurso={SetCurso} curso={curso} SetEmail={SetEmail} email={email} /> : null}
                        {numberStep === 2 ?
                            <ThirdStep apelido={apelido} curso={curso} email={email} password={password} SetPassword={SetPassword} numberStep={numberStep} /> : null}
                    </ContainerRight>
                </ContainerRegister> : null}
                {!page ? <ContainerLogin>
                    <h2>E-mail</h2>
                    <InputStyled id='email' name='email' placeholder='example@gmail.com' onChange={(event) => inputEmail(event.target.value)} />
                    <h2>Senha</h2>
                    <InputStyled type='password' id='password' name='password' placeholder='********' onChange={(event) => inputPassword(event.target.value)} />
                    <Link to='/sabatina'>
                        <NextStepButton isValidate={isInputValid} onClick={() => submitLogin()}>Entrar</NextStepButton>
                    </Link>
                </ContainerLogin> : null}
                <ButtonSwitchPage onClick={() => handlePage()}>{!page ? 'Criar uma conta' : 'Já possuo uma conta'}</ButtonSwitchPage>
            </MainLogin>
            <Footer>
                <p>Todos os direitos reservados © 2023</p>
                <p>Republica Cosa Nostra | Ouro Preto, MG</p>
            </Footer>
        </>
    )
}

export default Login