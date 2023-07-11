import styled from "styled-components";

export const ContainerRegister = styled.div`
    text-align: center;
    width: 100%;
    height: 100%;
    display: flex;
    max-width: 600px;

    @media (max-width: 970px) {
        flex-direction: column;
    }
`;

export const ContainerLeft = styled.div`
    border-right: 0.2px solid rgb(255, 255, 255, 0.1);
    padding: 20px;
    display: flex;
    flex-direction: column;

    @media (max-width: 970px) {
        flex-direction: row;
        justify-content: center;
        font-size: 0.8em;
        border: none;
        gap: 0px;
    }
`;

export const ContainerRight = styled.div`
    width: 100%;
    text-align: start;
`;

export const ContainerLogin = styled.div`
    width: 100%;
    min-width: 230px;
    max-width: 600px;
    gap: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const ButtonSwitchPage = styled.p`
    border: 1px solid white;
    text-align: center;
    padding: 20px 0px;
    cursor: pointer;
    border-radius: 20px;
    width: 100%;
    max-width: 600px;
    transition: 0.4s ease;
    
    &:hover {
        transform: scale(1.04)
    }
`;

export const Step = styled.div`
    border: none;
`;

export const Selected = styled.p`
    color: red;
    font-size: 18px;
`;