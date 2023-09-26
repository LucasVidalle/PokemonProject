import "./Card.css";
import { useEffect, useState } from "react";

function Card() {
    const [pokemonData, setPokemonData] = useState([]);
    const pokemonApi = "https://pokeapi.co/api/v2/pokemon/?limit=150";
    useEffect(() => {
        fetch(pokemonApi)
            .then((response) => response.json())
            .then((data) => setPokemonData(data.results));
    });
    return pokemonData.map((pokemon, index) => {
        return (
            <>
                <div className="structure-card" key={index}>
                    <div className="img-container">
                        <img className="pokemon-img" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index + 1}.png`} />
                    </div>
                    <div className="name-container">
                        <h1 className="pokemons-name">{pokemon.name}</h1>
                    </div>
                </div>
            </>
        )
    })
}

export { Card }