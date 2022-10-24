/*
 * Router
 * Add new routes here
 */

import toArray from 'lodash/toArray'

/** Report */
import AllPokemons from './scenes/AllPokemons'
/** Task */
// Define routes here
export const Routes = [
  {
    key: 'all',
    name: 'all',
    path: '/',
    component: AllPokemons
  },{
    key: 'pokemons',
    name: 'pokemons',
    path: '/pokemons',
    component: AllPokemons
  }
]

// Maps don't work on object convert it to an array
export default Routes
