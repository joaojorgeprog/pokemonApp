/*
    Container responsible for having all the Details of the pokemon in question through the id. 
    It then invokes the necessary components and sends the parameters to these components by parameter

    João Jorge 23/10/2022
*/
import React from 'react';

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { 
    useSelector
} from 'react-redux'

import Accordion from '../../components/Accordion'
import AccordionEdited from '../../components/AccordionEdited'

const ContainerDetailsPokemons = () => {
    const state = useSelector(state => state.DetailPokemonsReducer)

    const { loading, abilities, gameIndices, types, stats, moves, name } = state

    return(
        <>
            <h1>{name} Details</h1>
            {loading && <p> Loading ...</p>}

            {!loading &&
            <Row>
                <Col lg={12}>
                    <Accordion title="Abilities" open={true} elements={abilities} />
                    <Accordion title="Game Indices" elements={gameIndices}/>
                    <Accordion title="Types" elements={types}/>
                    <Accordion title="Stats" elements={stats}/>
                    <AccordionEdited title="Moves" elements={moves}/>
                </Col>

            </Row>
            }
            
            
        </>
    )
}

export default ContainerDetailsPokemons