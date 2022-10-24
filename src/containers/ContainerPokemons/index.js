/*
    Container responsible for placing all the Pokemons, components are invoked, and the paging of the Pokemons is done. 
    For that is made a paging together with the pokeAPI, for that we use the parameters offset and limit. 
    With the pagination done this way we can have a much faster image to the user because the api takes much less time to respond.
    It is also possible to remove or add the like of one of the pokemons, which will run a function that calls 2 different 
    actions (from AllPokemons and FavoritePokemons), which will make the information updated in real time for the user.

    João Jorge 23/10/2022
*/
import React, { useEffect, useState } from 'react';
import { 
    getAllPokemons, updatePokemons
} from '../../scenes/AllPokemons/action'

import {
    updateFavoritePokemons
} from '../../scenes/FavoritePokemons/action'

import Card from '../../components/Card'

import Paginate from '../../components/Paginate'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styled from 'styled-components'

import { 
    useDispatch,
    useSelector
} from 'react-redux'

import {
    Link
} from "react-router-dom";

const ContainerPokemons = () => {

    const dispatch = useDispatch()
    const state = useSelector(state => state.AllPokemonsReducer)
    const [currrentPage, setCurrentPage] = useState(0)
    const itemsPerPage = 18
    const [totalPages, setTotalPages] = useState(0)

    const { loading, pokemons, total } = state

    useEffect(() => {
        dispatch(getAllPokemons({ offset: (currrentPage * itemsPerPage), limit: itemsPerPage }))
    }, [])

    
    useEffect(() => {
        const maxPage = Math.ceil(total / itemsPerPage)
        setTotalPages(maxPage)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [total])

    
    function handlePageChange (page) {
        setCurrentPage(page)
        dispatch(getAllPokemons({ offset: ((page - 1) * itemsPerPage), limit: itemsPerPage }))
    }

    const handleCickFav = (poke) => {
        dispatch(updateFavoritePokemons(poke))
        dispatch(updatePokemons(poke))
    }

    return(
        <>
            {loading && <p> Loading ...</p>}

            {!loading &&
            <Row>
                {pokemons && pokemons.map((poke, index) => (
                    <Col key={index} lg={2}>
                        <Card 
                            key={index} 
                            title={poke.name} 
                            image={poke.image} 
                            id={poke.id} 
                            isFavorite={poke.isFavorite}
                            onClick={(poke) => handleCickFav(poke)}    
                        />
                    </Col>
                ))}

                <>
                    <PaginationDiv>
                    <DivText>
                        <TextoPag>Showing {currrentPage} of {totalPages} page</TextoPag>
                    </DivText>
                    <DivPages>
                        <Paginate
                        total={totalPages}
                        current={currrentPage}
                        onPageChange={page => handlePageChange(page)}
                        />
                    </DivPages>
                    </PaginationDiv>
                </>
                
            </Row>
            }
            
            
        </>
    )
}

export default ContainerPokemons

const PaginationDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top:10px;
`
const DivPages = styled.div`
float: right
`
const DivText = styled.div`
float: left
`

const TextoPag = styled.p`
  font-family: 'Open Sans';
    font-size: 14px;
    color: #a6b1c1;
    margin: 0;
`