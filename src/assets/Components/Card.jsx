import "./Card.css";
import { POKEMONS } from "../../../Pokedex";

function Card() {
    return POKEMONS.map((pokemon) => {
        return (
            <>
                <div className="structure-card">
                    <img className="pokemon-img" src={pokemon.url} />
                    <h1 className="pokemons-name">{pokemon.name}</h1>
                </div>
            </>
        )
    })
}

export { Card }