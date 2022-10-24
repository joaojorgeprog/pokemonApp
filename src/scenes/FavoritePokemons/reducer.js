/*
    Screen responsible for store reducers (for FavouritePokemons screen), with their parameters and types
    This page saves the states of the reducer in question. This page saves the states in the reducer in question.
    
    João Jorge 23/10/2022
*/

import {
    UPDATE_FAVORITE__POKEMON
} from './action'

import {
    checkNewPokemons
} from './utils'


export const initialState = {
    favoritePokemons: [],
    errorMessage: '',
    total: 0
}


export default function FavoritePokemonsReducer(state = initialState, action) {
    switch(action.type){
        case UPDATE_FAVORITE__POKEMON:
            return {
                ...state,
                errorMessage: '',
                favoritePokemons : checkNewPokemons(state, action.payload.poke),
                total : state.favoritePokemons.length
            }
        default:
            return state
    }
}