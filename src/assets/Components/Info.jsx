import "./Info.css"

function() {
    return (
        <div info-card-structure>
            <div className="top-card">
                <div className="options">
                    <img src="https://iconos8.es/icon/lZr3lzC4YVG1/izquierda" />
                    <img src="https://iconos8.es/icon/87/me-gusta" />
                </div>
                <div className="pokemon-zone">
                    <div className="main-info">
                        <h2 className="poke-name">{pokemon.name}</h2>
                        <div className="types">
                            <p className="type-name">fire</p>
                        </div>
                    </div>
                    <div className="index">
                        <p className="pokedex-num">{pokemon.index}</p>
                        <p className="seed">Seed</p>
                    </div>
                </div>
            </div>
            <div className="under-card">

            </div>
        </div>
    )
}

export { Info }