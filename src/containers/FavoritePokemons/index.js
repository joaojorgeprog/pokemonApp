/*
    Container responsible for placing the favourite Pokemons, components are invoked, and the paging of the Pokemons is done. 
    For that it is made an internal pagination that is, it is only made a slice(_from_,_to_) of the array of the favourite players.
    It is also possible to remove the like from one of the pokemons, which will execute a function that calls 2 different actions (from AllPokemons and FavoritePokemons), 
    which will cause the information to be updated in real time for the user.

    João Jorge 23/10/2022
*/
import React, { useEffect, useState } from 'react';
import { 
    updatePokemons
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

const FavoritePokemons = () => {

    const dispatch = useDispatch()
    const state = useSelector(state => state.FavoritePokemonsReducer)
    const [currrentPage, setCurrentPage] = useState(0)
    const itemsPerPage = 18
    const [totalPages, setTotalPages] = useState(0)
    const [pokemonsFrontEnd, setPokemonsFrontEnd] = useState([])
    const [favoritePokemonsBK, setFavoritePokemonsBK] = useState([])

    const { favoritePokemons, total } = state

    useEffect(() => {
        setFavoritePokemonsBK(favoritePokemons)
    }, [])

    useEffect(() => {
        updatePageWithPage(currrentPage === 0 ? 1 : currrentPage)
    }, [favoritePokemons])


    const updatePageWithPage = (page) => {
        let from = ((page-1) * itemsPerPage)
        let to = (((page-1 )* itemsPerPage) + itemsPerPage)
        let auxArray = [...favoritePokemons.slice(from, to)]
        setPokemonsFrontEnd(auxArray)
    }

    
    useEffect(() => {  
        const maxPage = Math.ceil(favoritePokemons.length / itemsPerPage)
        setTotalPages(maxPage)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [favoritePokemons])

    
    function handlePageChange (page) {
        setCurrentPage(page)
        updatePageWithPage(page)
    }

    const handleCickFav = (poke) => {
        dispatch(updateFavoritePokemons(poke))
        dispatch(updatePokemons(poke))
    }

    return(
        <>
            <Row>
                {pokemonsFrontEnd.map((poke, index) => (
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
            
        </>
    )
}

export default FavoritePokemons

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