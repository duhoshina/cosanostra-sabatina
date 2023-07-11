import styled from "styled-components";

interface NextStepButtonProps {
    isValidate: boolean;
}

export const ContainerLabel = styled.div`
    padding: 20px 0px;
    display: flex;
    flex-direction: column;
    gap: 25px;
`;

export const ContainerOptions = styled.div`
    width: 100%;
    padding-top: 15px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    font-size: 12px;

    h2 {
        font-size: 2.3em;
    }
`;

export const LabelStyled = styled.label`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    font-weight: bold;
`;

export const InputStyled = styled.input`
    border-radius: 20px;
    padding: 20px;
    font-size: 1.5em;
    background: transparent;
    border: 1px solid rgb(255, 255, 255, 0.5);
    color: #fff;
    font-family: 'Montserrat';
    font-weight: 300;
    transition: 0.3s;

    &:focus {
        outline: none;
        border: 1px solid red;
        transform: scale(1.02);
    }

`;

export const Paragraph = styled.p`
    font-size: 1.3em;
    opacity: 0.8;
`;

export const NextStepButton = styled.p<NextStepButtonProps>`
    padding: 20px;
    background-color: ${props => props.isValidate ? 'red' : 'gray'};
    border-radius: 15px;
    text-align: center;
    transition: 0.4s ease;
    margin-top: 15px;

    &:hover {
        cursor: ${props => props.isValidate === false ? 'not-allowed' : 'pointer'};
        transform: ${props => props.isValidate ? 'scale(1.04)' : 'none'};
    };

`;

export const BackStepButton = styled.p`
    display: inline;
    background-color: red;
    border-radius: 15px;
    width: 70px;
    text-align:center;
    padding: 10px;
    font-size: 0.8em;
    display: block;

    &:hover {
        cursor: pointer;
    }
`