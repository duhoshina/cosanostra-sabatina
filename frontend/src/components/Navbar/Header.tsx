import logo from '../../content/logotipo.svg';
import { Link } from 'react-router-dom';
import { 
    HeaderStyled, 
    Logo, 
    Navigation, 
    UnorderedList, 
    ListItem, 
    ListItemSelected
} from './HeaderStyles'

const Header = () => {

    let userURL = window.location.pathname;

    return (
        <HeaderStyled>
            <Link to="/"><Logo src={logo} /></Link>
            <Navigation style={{ display: 'flex', alignItems: 'center' }}>
                <UnorderedList>
                    <Link to='/'>{userURL === '/' ? <ListItemSelected>Home</ListItemSelected> : <ListItem>Home</ListItem>}</Link>
                    <Link to='/login'>{userURL === '/login' || userURL === '/sabatina' ? <ListItemSelected>Entrar</ListItemSelected> : <ListItem>Entrar</ListItem>}</Link>
                </UnorderedList>
            </Navigation>
        </HeaderStyled>
    )
}

export default Header