export const transformPokemons = (poke, total, favourites) => {

    let arrayAux = []

    for (let i = 0; i <poke.length; i++) {
        let teste = favourites.filter(fav => fav.id === (total + i + 1))
        arrayAux.push({
            name: poke[i].name,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${total+ i +1}.png`,
            id: total + i + 1,
            isFavorite: teste.length > 0 ? teste[0].isFavorite : false
        })
    }

    return arrayAux;
}

export const transformStatePokemons = (pokemons, poke) => (
    pokemons.map(obj => {
        if (obj.id === poke.id) {
          return {...obj, isFavorite: !obj.isFavorite};
        }
        return obj;
    })
)