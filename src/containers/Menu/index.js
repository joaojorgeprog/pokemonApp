/*
    Container responsible for displaying the two menus ("All Pokemons" and "Favourites"). 
    This Container will use the react-router-dom to help the onClick functions.

    João Jorge 23/10/2022
*/
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import styled from 'styled-components'
import {
  Link,
  useLocation
} from "react-router-dom";

function Menu() {
  const location = useLocation();
  return (
    <>
      <NavbarStyled bg="light" fixed="top">
        <Container>
          <Link to={`/`} className={location.pathname === '/' ? 'activeMenu' : 'deactMenu'}>
            All Pokemons
          </Link>
          <Link to={`/favorites`} className={location.pathname === '/favorites' ? 'activeMenu' : 'deactMenu'}>
            Favorites
          </Link>
          
        </Container>
      </NavbarStyled>
    </>
  );
}

export default Menu;

const NavbarStyled = styled(Navbar)`
  background-color: #343434 !important;
  margin-inline: 50px;
  border-bottom-left-radius: 10px !important;
  border-bottom-right-radius: 10px !important;
  height: 50px !important;
  a{
    color: white;
    text-decoration: none;
    font-size: 15pt
  }
  .activeMenu{
    color: #40C2CC;
    text-decoration: none;
    font-size: 15pt;
    font-weight: 600;
  }
`