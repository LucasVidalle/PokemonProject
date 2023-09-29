import "./Info.css"

function Info() {
    return (
        <div className="info-card-structure">
            <div className="top-card">
                <div className="options">
                    <img src="https://iconos8.es/icon/lZr3lzC4YVG1/izquierda" />
                    <img src="https://iconos8.es/icon/87/me-gusta" />
                </div>
                <div className="pokemon-zone">
                    <div className="main-info">
                        <h2 className="poke-name">Nombre Pokemon</h2>
                        <div className="types">
                            <p className="type-name">fire</p>
                        </div>
                    </div>
                    <div className="index">
                        <p className="pokedex-num">poke index</p>
                        <p className="seed">Seed</p>
                    </div>
                    <div className="pokemon-info-img">
                        <img className="pokemon-img" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/445.png`} />
                    </div>
                </div>
            </div>
            <div className="under-card">
                <div className="pokemon-sections-button">
                    <div className="about">
                        <button>Aboutt</button>
                    </div>
                    <div className="base-stats-button">
                        <button>Base Stats</button>
                    </div>
                    <div className="evolution-button">
                        <button>Evolution</button>
                    </div>
                    <div className="Moves-button">
                        <button>Moves</button>
                    </div>
                </div>
                <div className="base-stats">
                    <div className="stats-names-container">
                        <p className="stats-names">Hp</p>
                        <p className="stats-names">Attack</p>
                        <p className="stats-names">Defense</p>
                        <p className="stats-names">Sp. Atk</p>
                        <p className="stats-names">Sp. Def</p>
                        <p className="stats-names">Speed</p>
                        <p className="stats-names">Total</p>
                    </div>
                    <div className="stats-num-container">
                        <p className="stats-nums">20</p>
                        <p className="stats-nums">30</p>
                        <p className="stats-nums">20</p>
                        <p className="stats-nums">30</p>
                        <p className="stats-nums">30</p>
                        <p className="stats-nums">30</p>
                        <p className="stats-nums">100</p>
                    </div>
                    <div className="stats-bar">
                        <div className="stats-bar">
                            <div className="hp-bar"></div>
                        </div>
                        <div className="stats-bar">
                            <div className="attack-bar"></div>
                        </div>
                        <div className="stats-bar">
                            <div className="defense-bar"></div>
                        </div>
                        <div className="stats-bar">
                            <div className="sp-atk-bar"></div>
                        </div>
                        <div className="stats-bar">
                            <div className="sp-def-bar"></div>
                        </div>
                        <div className="stats-bar">
                            <div className="speed-bar"></div>
                        </div>
                        <div className="stats-bar">
                            <div className="total-bar"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { Info }