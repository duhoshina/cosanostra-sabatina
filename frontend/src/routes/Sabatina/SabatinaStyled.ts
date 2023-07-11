import styled from "styled-components";
import { NextStepButton } from "../../components/Steps/StepStyled";

export const Section = styled.section`
    max-width: 400px;
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;
    gap: 10px;
`;

export const ContainerImagem = styled.div`
    width: 80%;
    max-width: 350px;
`;

export const Image = styled.img`
    width: 100%;
    border-radius: 20px;
`;

export const ContainerButtons = styled.div`
    display: flex;
    padding-top: 10px;
    justify-content: space-between;
    width: 100%;
    gap: 10px;
`;

export const GenerateButton = styled(NextStepButton)`
    background-color: black;
    color: white;
    border: 1px solid white;
    transition: 0.4s ease;

    &:hover {
        transform: scale(1.04);
    }
`;

export const ContainerScore = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    gap: 10px;
`;