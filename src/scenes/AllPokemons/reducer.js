/*
    Screen responsible for store reducers (for AllPokemons screen), with their parameters and types

    This page saves the states of the reducer in question. This page saves the states in the reducer in question.
    João Jorge 23/10/2022
*/

import {
    SUCCESS_GET_ALL_POKEMON,
    ERROR_GET_ALL_POKEMON,
    UPDATE_POKEMON
} from './action'

import { 
    transformStatePokemons
} from './utils'


export const initialState = {
    loading: true,
    pokemons: [],
    errorLoading: false,
    errorMessage: '',
    total: 0
}


export default function AllPokemonsReducer(state = initialState, action) {
    switch(action.type){
        case SUCCESS_GET_ALL_POKEMON:
            return {
                ...state,
                loading: false,
                errorLoading: false,
                errorMessage: '',
                pokemons : [...action.payload.pokemons.pokemons],
                total : action.payload.pokemons.total
            }
        case ERROR_GET_ALL_POKEMON:
            return {
                ...state,
                loading: false,
                errorLoading: true,
                errorMessage : action.payload.error
            }
        case UPDATE_POKEMON: 
            return {
                ...state,
                pokemons : transformStatePokemons(state.pokemons, action.payload.poke),
            }
        default:
            return state
    }
}