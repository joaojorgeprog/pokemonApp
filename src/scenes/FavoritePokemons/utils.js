export const checkNewPokemons = (state,pokemon) => {
 const newState = {...state}
 let favoritePlayerArray = [...newState.favoritePokemons]

 //check if cliked element exist in array
 let newArray = favoritePlayerArray.filter(poke => poke.id === pokemon.id)

 if(newArray.length <= 0){
    //need add to new array
    favoritePlayerArray.push({id: pokemon.id, isFavorite: true, name: pokemon.name, image: pokemon.image})
 }else{
    //remove id from array
    favoritePlayerArray = removeObjectWithId(favoritePlayerArray, pokemon.id)
 }
 return favoritePlayerArray;
}

function removeObjectWithId(arr, id) {
  const objWithIdIndex = arr.findIndex((obj) => obj.id === id);
  arr.splice(objWithIdIndex, 1);

  return arr;
}