import Header from "../../components/Navbar/Header"
import Image from "../../content/pngegg.png"
import { Link } from "react-router-dom"
import { MainHome } from "../../components/Main"
import {
  Container,
  Paragraph,
  Button,
  Footer,
  ImageComponent
} from "./HomeStyled";

const Home = () => {

  return (
    <>
      <Header />
      <MainHome>
        <Container>
          <Paragraph>Um sistema completamente interativo e hospedado em nuvem para proporcionar a melhor experiência aos possíveis futuros moradores da republica mais insana de Ouro Preto</Paragraph>
          <Link to='/sabatina'><Button>Fazer sabatina online</Button></Link>
        </Container>
        <Container>
          <ImageComponent src={Image} />
        </Container>
      </MainHome>
      <Footer>
        <p>Todos os direitos reservados © 2023</p>
        <p>Republica Cosa Nostra | Ouro Preto, MG</p>
      </Footer>
    </>
  )
}

export default Home;