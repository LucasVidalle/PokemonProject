import "./Card.css";
import { useEffect, useState } from "react";

function Card() {
    const [pokemonData, setPokemonData] = useState([]);
    const [searchText, setSearchText] = useState([]);
    const pokemonApi = "https://pokeapi.co/api/v2/pokemon/?limit=1010";
    function handleChange(event) {
        setSearchText(event.target.value)
    }
    useEffect(() => {
        fetch(pokemonApi)
            .then((response) => response.json())
            .then((data) => setPokemonData(data.results));
    });

    return (
        <>
            <div className="search-box">
                <p className="search">Search:</p>
                <input className="input-search" type="text" placeholder="Enter the name of a Pokemon" value={searchText} onChange={(event) => { handleChange(event) }} />
            </div>
            <div className='cards-container'>
                {pokemonData.map((pokemon, index) => {
                    if (pokemon.name.includes(searchText)) {

                        return (
                            <div className="structure-card" key={index}>
                                <div className="img-container">
                                    <img className="pokemon-img" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index + 1}.png`} />
                                </div>
                                <div className="name-container">
                                    <h1 className="pokemons-name">{pokemon.name}</h1>
                                </div>
                            </div>
                        )
                    }
                })
                }
            </div>
        </>
    )
}

export { Card }