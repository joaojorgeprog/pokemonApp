/*
    Screen responsible for showing favourite pokemons.
    This screen is only responsible for evoking the necessary containers, and is also styled with the help of react-bootstrap.

    João Jorge 23/10/2022
*/

import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import FavoritePokemons from '../../containers/FavoritePokemons'

const Pokemons = () => {

    return(
        <Container fluid className="MainContent">
            <Row className="MaiRow">
                <Col lg={12}>
                    <FavoritePokemons />
                </Col>
            </Row>
        </Container>
    )
}

export default Pokemons
