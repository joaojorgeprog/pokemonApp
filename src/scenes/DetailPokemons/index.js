/*
    Screen responsible for showing pokemons details.
    This screen is only responsible for evoking the necessary containers, and is also styled with the help of react-bootstrap.
    The input parameter "id", defined for this in the routes, is used. This can be sent as input parameter to the components/containers if required.
    With this parameter is then called the action (getDetailPokemons) that is responsible for making the request to the API, which will return the details of the same.

    João Jorge 23/10/2022
*/
import React, { useEffect } from 'react';
import SideBarPokemonDetail from '../../containers/SideBars/SideBarPokemonDetail'
import ContainerDetailsPokemons from '../../containers/ContainerDetailsPokemons'

import { useParams } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { 
    getDetailPokemons
} from './action'

import { 
    useDispatch
} from 'react-redux'


const DetailPokemons = () => {
    const dispatch = useDispatch()
    const { id } = useParams()

    useEffect(() => {
        dispatch(getDetailPokemons({ id: id }))
    },[id])


    return(
        <Container fluid className="MainContent">
            <Row className="MaiRow">
                <Col lg={2}>
                    <SideBarPokemonDetail id={id}/>
                </Col>
                <Col lg={8}>
                    <ContainerDetailsPokemons />
                </Col>
                <Col lg={2}>
                </Col>


            </Row>
        </Container>
    )
}

export default DetailPokemons