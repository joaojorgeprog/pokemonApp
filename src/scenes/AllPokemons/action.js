/*
    Screen responsible for store actions (for AllPokemons screen), with their parameters and types

    João Jorge 23/10/2022
*/
export const GET_ALL_POKEMON = 'GET_ALL_POKEMON'
export const SUCCESS_GET_ALL_POKEMON = 'SUCCESS_GET_ALL_POKEMON'
export const ERROR_GET_ALL_POKEMON = 'ERROR_GET_ALL_POKEMON'
export const UPDATE_POKEMON = 'UPDATE_POKEMON'

export const updatePokemons = poke => ({
    type: UPDATE_POKEMON,
    payload: { poke }
})

export const getAllPokemons = limits => ({
    type: GET_ALL_POKEMON,
    payload: { limits }
})

export const successGetAllPokemons = pokemons => ({
    type: SUCCESS_GET_ALL_POKEMON,
    payload: { pokemons }
})

export const errorGetAllPokemons = error => ({
    type: ERROR_GET_ALL_POKEMON,
    payload: { error }
})