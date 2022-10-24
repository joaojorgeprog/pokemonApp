/*
    Screen responsible for store sagas (for AllPokemons screen), with their parameters and types
    This page executes API calls to update the states of the reducer in question. This page saves the states in the reducer in question.
    
    João Jorge 23/10/2022
*/
import { takeLatest, put, call, select } from 'redux-saga/effects'

import {
    GET_ALL_POKEMON,
    successGetAllPokemons,
    errorGetAllPokemons
} from './action'

import { 
    transformPokemons
} from './utils'

import axios from 'axios'

import cogoToast from 'cogo-toast'

const baseUrl = `${process.env.REACT_APP_API}pokemon`


function * getPokemons({ payload }){
    try {
        const getFavoritePokemons = state => state.FavoritePokemonsReducer.favoritePokemons
        const favouritePokemons = yield select(getFavoritePokemons)
        const { limits } = payload
        let urlToFLash = baseUrl + `?offset=${limits.offset}&limit=${limits.limit}`;
        const response = yield call(axios.get, `${urlToFLash}`)
        if (response && response.status === 200){
            yield put(successGetAllPokemons({
                pokemons: transformPokemons(response.data.results,limits.offset, favouritePokemons), 
                total: response.data.count
            }))
        }else{
            cogoToast.error(response.data.message || 'Not Possible at the moment. Please Contact support.')
        }
    }catch(e){
        yield put(errorGetAllPokemons(e.response.data.errorMessage || 'Not Possible at the moment. Please Contact support.'))
        if (e.response) {
        // the client was given an error response (5xx, 400xx)
        // 400 - 'Not Possible at the moment. Please Contact support.'
        if (e.response.status === 400 || e.response.status === 401) { 
            cogoToast.error(e.response.data.message || 'Not Possible at the moment. Please Contact support.') 
        } else { 
            cogoToast.error(e.response.status + ' - Not Possible at the moment. Please Contact support.') 
        }
        } else if (e.request) {
        // the client never received a response, and the request as never left
        cogoToast.error('Not Possible at the moment. Please Contact support.')
        } else {
        cogoToast.error('Not Possible at the moment. Please Contact support.')
        }
    }
}


export default function * watcherAllPokemons(){
    yield takeLatest(GET_ALL_POKEMON, getPokemons)
}