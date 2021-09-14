import React, { useState } from 'react';

function Poke() {
    const [poke, setPoke] = React.useState([]);

    React.useEffect(()=> {
        const url = 'https://pokeapi.co/api/v2/pokemon?limit=20';        
        fetch(url).then((response)=>{
            if (response.ok){
                return response.json();
            }else {
                throw response;
            }
        })
        .then((data) => setPoke(data.results))
        .catch((error)=> console.log('Se rompio todo'));
    }, [])
    return(
        <div>
            {poke?.map(pokemon => {
                return(
                    <h5>{pokemon.name}</h5>
                );
            })}
        </div>
    )
}

export default Poke;
