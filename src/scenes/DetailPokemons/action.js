/*
    Screen responsible for store actions (for DetailPokemons screen), with their parameters and types

    João Jorge 23/10/2022
*/
export const GET_DETAIL_POKEMON = 'GET_DETAIL_POKEMON'
export const SUCCESS_GET_DETAIL_POKEMON = 'SUCCESS_GET_DETAIL_POKEMON'
export const ERROR_GET_DETAIL_POKEMON = 'ERROR_GET_DETAIL_POKEMON'
export const UPDATE_DETAILS_POKEMON = 'UPDATE_DETAILS_POKEMON'

export const updateDetailsPokemons = poke => ({
    type: UPDATE_DETAILS_POKEMON,
    payload: { poke }
})

export const getDetailPokemons = detail => ({
    type: GET_DETAIL_POKEMON,
    payload: { detail }
})

export const successGetDetailPokemons = details => ({
    type: SUCCESS_GET_DETAIL_POKEMON,
    payload: { details }
})

export const errorGetDetailPokemons = error => ({
    type: ERROR_GET_DETAIL_POKEMON,
    payload: { error }
})