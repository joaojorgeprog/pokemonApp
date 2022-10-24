import { combineReducers } from 'redux'

import AllPokemonsReducer from '../scenes/AllPokemons/reducer'
import DetailPokemonsReducer from '../scenes/DetailPokemons/reducer'
import FavoritePokemonsReducer from '../scenes/FavoritePokemons/reducer'

const rootReducer = combineReducers({
    AllPokemonsReducer,
    DetailPokemonsReducer,
    FavoritePokemonsReducer
})

export default rootReducer

