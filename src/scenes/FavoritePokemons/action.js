/*
    Screen responsible for store actions (for FavouritePokemons screen), with their parameters and types

    João Jorge 23/10/2022
*/
export const UPDATE_FAVORITE__POKEMON = 'UPDATE_FAVORITE__POKEMON'

export const updateFavoritePokemons = poke => ({
    type: UPDATE_FAVORITE__POKEMON,
    payload: { poke }
})