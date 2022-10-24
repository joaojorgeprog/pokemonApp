/*
    Screen responsible for store reducers (for DetailPokemons screen), with their parameters and types
    This page saves the states of the reducer in question. This page saves the states in the reducer in question.
    
    João Jorge 23/10/2022
*/
import {
    SUCCESS_GET_DETAIL_POKEMON,
    ERROR_GET_DETAIL_POKEMON,
    UPDATE_DETAILS_POKEMON
} from './action'


export const initialState = {
    loading: true,
    weight: null,
    height: null,
    image: '',
    name: "",
    abilities: [],
    moves: [],
    stats: [],
    types: [],
    gameIndices: [],
    isFavorite: false,
    base_experience: null,
    errorLoading: false,
    errorMessage: ''
}


export default function DetailPokemonsReducer(state = initialState, action) {
    switch(action.type){
        case SUCCESS_GET_DETAIL_POKEMON:
            return {
                ...state,
                loading: false,
                errorLoading: false,
                errorMessage: '',
                image: action.payload.details.image,
                weight: action.payload.details.weight,
                height: action.payload.details.height,
                name: action.payload.details.name,
                abilities: [...action.payload.details.abilities],
                moves: [...action.payload.details.moves],
                stats: [...action.payload.details.stats],
                types: [...action.payload.details.types],
                gameIndices: [...action.payload.details.game_indices],
                base_experience: action.payload.details.base_experience,
                isFavorite: action.payload.details.isFavorite,
            }
        case ERROR_GET_DETAIL_POKEMON:
            return {
                ...state,
                loading: false,
                errorLoading: true,
                errorMessage : action.payload.error
            }
        case UPDATE_DETAILS_POKEMON:
            return {
                ...state,
                isFavorite : action.payload.poke.isFavorite
            }
        default:
            return state
    }
}