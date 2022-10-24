/*
    Container responsible for presenting the most personal information about the pokemon. 
    Several components are evoked in this track, and there is also a function that is responsible for handling if the like/dislike button is pressed. 
    If it is pressed, the function then calls 3 actions to change the status of all the reducers that need it

    João Jorge 23/10/2022
*/

import React from 'react';
import PropTypes from 'prop-types'


import DetailsSideBarElement from '../../../components/Details/DetailsSideBarElement'
import DetailsSideBarImage from '../../../components/Details/DetailsSideBarImage'

import Row from 'react-bootstrap/Row'
import styled from 'styled-components'

import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'

import {
    updateDetailsPokemons
} from '../../../scenes/DetailPokemons/action'

import { 
    useSelector
} from 'react-redux'

import { 
    useDispatch
} from 'react-redux'

import { 
    updatePokemons
} from '../../../scenes/AllPokemons/action'

import {
    updateFavoritePokemons
} from '../../../scenes/FavoritePokemons/action'

const SideBarPokemonDetail = ({ id }) => {
    const dispatch = useDispatch()
    const state = useSelector(state => state.DetailPokemonsReducer)

    const { loading, name, height, image, weight, base_experience, isFavorite } = state


    const onClick = (poke) => {
        dispatch(updateDetailsPokemons(poke))
        dispatch(updateFavoritePokemons(poke))
        dispatch(updatePokemons(poke))
    }

    return(
        <>
            {!loading &&
                <ColEdited>
                    <DivFavourite>
                        {isFavorite && <AiFillHeart fill={"#40C2CC"} size="35px" onClick={() => onClick({id: id, isFavorite: !isFavorite, image: image, name:name})}/>}
                        {!isFavorite && <AiOutlineHeart fill={"#40C2CC"} size="35px" onClick={() => onClick({id: id, isFavorite: !isFavorite, image: image, name:name})}/>}
                    </DivFavourite>
                    <DetailsSideBarImage image={image}/>
                    <DetailsSideBarElement element={'Name'} value={name} />
                    <DetailsSideBarElement element={'Height'} value={height} />
                    <DetailsSideBarElement element={'Weight'} value={weight} />
                    <DetailsSideBarElement element={'Base Experience'} value={base_experience} />
                </ColEdited>
            }
        </>
    )
}


SideBarPokemonDetail.propTypes = {
    id: PropTypes.string
  }

export default SideBarPokemonDetail

const DivFavourite = styled.div`
    justify-content: end;
    align-items: end;
    display: flex;
    padding: 15px 15px 0px 15px;
    cursor: pointer;
`

const ColEdited = styled(Row)`
  background-color: #343434;
  border-radius: 10px;
  -webkit-box-shadow: 0px 10px 13px -7px #000000, -8px -3px 30px -3px rgba(64,194,204,0.78); 
  box-shadow: 0px 10px 13px -7px #000000, -8px -3px 30px -3px rgba(64,194,204,0.78);
`