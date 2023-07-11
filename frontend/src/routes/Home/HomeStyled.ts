import styled from "styled-components";

export const Container = styled.div`
  max-width: 48%;
  min-width: 330px;
  
  @media (max-width: 720px) {
    max-width: auto;
    text-align: center;
    width: 100%;
  }
`;

export const Button = styled.p`
padding: 20px 50px;
text-align: center;
background-color: red;
border-radius: 20px;
transition: 0.3s ease-out;
margin-top: 25px;
display: inline-block;
text-transform: uppercase;
font-weight: bold;

&:hover {
  cursor: pointer;
  transform: scale(1.1);
}
`;

export const Paragraph = styled.p`
margin-top: 10px;
font-size: 1.2em;
color: #e3e3e3;
opacity: 0.8;
`;

export const Footer = styled.footer`
text-align: center;
color: gray;
opacity: 0.3;
font-size: 0.8em;
margin: 30px 0px;
`;

export const ImageComponent = styled.img`
  width: 100%;
  transition: 0.5s ease-out;

  &:hover {
  transform: scale(1.1);
}
`;