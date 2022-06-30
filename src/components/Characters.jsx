/*
 * Character componet
*/
// React
import React, { useState, useEffect, useReducer, useMemo, useRef } from "react";

// Css
import "../css/Characters.css"

const API_URL = "https://rickandmortyapi.com/api"
const ENDPOINT_CHARACTERS = "/character/"

const initialState = {
    favorites: []
}

const favoriteReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_FAVORITE':
        return {
            ...state,
            favorites: [...state.favorites, action.payload]
        };
    default:
        return state;
  }
}
  
const Characters = () => {
    const [characters, setCharacters] = useState([]);
    const [favorites, dispatch] = useReducer(favoriteReducer, initialState);
    const [search, setSearch] = useState('');
    const searchInput = useRef(null)

    // useEffect(funciona_anonima, variable_que_escucha)
    useEffect(() => {
        fetch(API_URL + ENDPOINT_CHARACTERS)
        .then(response => response.json())
        .then(data => setCharacters(data.results));
    }, []);

    const handleClick = favorite => {
        dispatch({ type: 'ADD_TO_FAVORITE', payload: favorite });
    }

    // useMemo example
    const handleSearch = () => {
        setSearch(searchInput.current.value)
    }

    /* const filteredUsers = characters.filter((user) => {
        return user.name.toLowerCase().includes(search.toLowerCase());
    }) */

    const filteredUsers = useMemo(() => 
        characters.filter((user) => {
            return user.name.toLowerCase().includes(search.toLowerCase());
        }), 
        [characters, search]
    );

    return (
        <div className="Characters">
            <ul>
                {favorites.favorites.map(favorite => (
                    <li key={favorite.id}>
                        {favorite.name}
                    </li>
                ))}
            </ul>

            <div className="search">
                <input 
                    type="text" 
                    value={search} 
                    onChange={handleSearch}
                    ref={searchInput} />
            </div>

            {filteredUsers.map((character) => (
                <div className="character" key={character.id}>
                    <figure className="character__fig">
                        <img 
                            src={character.image} 
                            alt={`image of ${character.name}`} />
                        <figcaption className="character__name">
                            {character.name}
                        </figcaption>
                    </figure>
                    <button 
                        type="button" 
                        onClick={() => handleClick(character)}>
                            Agregar a favorito
                        </button>
                </div>
            ))}
        </div>
    );
}

export default Characters;
