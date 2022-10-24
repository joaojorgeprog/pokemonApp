export const transformDetailsPokemons = (poke, favourites) => {
    let list = favourites.filter(fv => fv.id === poke.id)
    return({
        abilities: alterAbilities(poke.abilities.filter(ability => !ability.is_hidden)),
        base_experience: poke.base_experience,
        game_indices: alterGameIndices(poke.game_indices),
        height: poke.height,
        id: poke.id,
        moves: alterMoves(poke.moves),
        name: poke.name,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${poke.id}.png`,
        stats: alterStats(poke.stats),
        types: alterTypes(poke.types),
        weight: poke.weight,
        isFavorite: list.length > 0 ?  true : false
    })
}


const alterAbilities = (abilities) => (
    abilities.map((abi) => ({
        name: abi.ability.name,
        slot: abi.slot
    }))
)

const alterGameIndices = (gameIndex) => (
    gameIndex.map((gi) => ({
        name: gi.version.name,
        gameIndex: gi.game_index
    }))
)

const alterTypes = (types) => (
    types.map((ty) => ({
        name: ty.type.name,
        slot: ty.slot
    }))
)

const alterStats = (stat) => (
    stat.map((st) => ({
        name: st.stat.name,
        baseStat: st.base_stat,
        effort: st.effort
    }))
)

const alterMoves = (moves) => (
    moves.map((mv) => ({
        name: mv.move.name,
        versionGroupDetails: mv.version_group_details.map((mvv) => ({
            levellearnedAt: mvv.level_learned_at,
            moveLearnMethod: mvv.move_learn_method.name,
            versionGroup: mvv.version_group.name
        }))
    }))
)