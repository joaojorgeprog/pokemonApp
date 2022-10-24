import { all } from 'redux-saga/effects'

import AllPokemonsSaga from '../scenes/AllPokemons/saga'
import DetailPokemonsSaga from '../scenes/DetailPokemons/saga'


export default function * () {
    yield all([
        AllPokemonsSaga(),
        DetailPokemonsSaga()
    ])
}
