import "./Info.css"
import { useState, useEffect } from "react";

function Info() {
    const [pokemonData, setPokemonData] = useState();
    const pokemonApi = "https://pokeapi.co/api/v2/pokemon/445";
    useEffect(() => {
        fetch(pokemonApi)
            .then((response) => response.json())
            .then((data) => setPokemonData(data));
    }, []);
    console.log(pokemonData?.stats)
    return (
        <div className="info-card-structure">
            <div className="top-card">
                <div className="options">
                    <img src="icons8-izquierda-50.png" />
                    <img src="icons8-me-gusta-50.png" />
                </div>
                <div className="pokemon-zone">
                    <h2 className="poke-name">a</h2>
                    <div className="main-info">
                        <div className="types">
                            <p className="type-name">a</p>
                        </div>
                        <div className="index">
                            <p className="pokedex-num">a</p>
                            <p className="seed">Seed</p>
                        </div>
                    </div>
                    <div className="pokemon-info-img">
                        <img className="pokemon-img" src="" />
                    </div>
                </div>
            </div>
            <div className="under-card">
                <div className="pokemon-sections-button">
                    <div className="buttons-container">
                        <button className="buttons-content">Aboutt</button>
                    </div>
                    <div className="buttons-container">
                        <button className="buttons-content">Base Stats</button>
                    </div>
                    <div className="buttons-container">
                        <button className="buttons-content">Evolution</button>
                    </div>
                    <div className="buttons-container">
                        <button className="buttons-content">Moves</button>
                    </div>
                </div>
                <div className="base-stats">
                    <p className="stat-name">Hp</p>
                    <p className="stat-num">20</p>
                    <div className="bar-container">
                        <div className="stat-bar">
                            <div className="inside-stat-bar"></div>
                        </div>
                    </div>
                </div>
                <div className="attack">
                    <p className="stat-name">Attack</p>
                    <p className="stat-num">30</p>
                    <div className="bar-container">
                        <div className="stat-bar">
                            <div className="inside-stat-bar"></div>
                        </div>
                    </div>
                </div>
                <div className="defense">
                    <p className="stat-name">Defense</p>
                    <p className="stat-num">20</p>
                    <div className="bar-container">
                        <div className="stat-bar">
                            <div className="inside-stat-bar"></div>
                        </div>
                    </div>
                </div>
                <div className="spAttack">
                    <p className="stat-name">Sp. Atk</p>
                    <p className="stat-num">30</p>
                    <div className="bar-container">
                        <div className="stat-bar">
                            <div className="inside-stat-bar"></div>
                        </div>
                    </div>
                </div>
                <div className="spDefense">
                    <p className="stat-name">Sp. Def</p>
                    <p className="stat-num">30</p>
                    <div className="bar-container">
                        <div className="stat-bar">
                            <div className="inside-stat-bar"></div>
                        </div>
                    </div>
                </div>
                <div className="speed">
                    <p className="stat-name">Speed</p>
                    <p className="stat-num">30</p>
                    <div className="bar-container">
                        <div className="stat-bar">
                            <div className="inside-stat-bar"></div>
                        </div>
                    </div>
                </div>
                <div className="total">
                    <p className="stat-name">Total</p>
                    <p className="stat-num">100</p>
                    <div className="bar-container">
                        <div className="stat-bar">
                            <div className="inside-stat-bar"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { Info }