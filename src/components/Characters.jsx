/*
 * Character componet
*/
// React
import React, { useState, useReducer, useMemo, useRef, useCallback } from "react";

// Css
import "../css/Characters.css"

// Components
import Search from "./Search";
import useCharacters from "../hooks/useCharacters";

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
    const [favorites, dispatch] = useReducer(favoriteReducer, initialState);
    const [search, setSearch] = useState('');
    const searchInput = useRef(null)
    
    const characters = useCharacters(API_URL + ENDPOINT_CHARACTERS)

    const handleClick = favorite => {
        dispatch({ type: 'ADD_TO_FAVORITE', payload: favorite });
    }

    // useMemo example
    /* const handleSearch = () => {
        setSearch(searchInput.current.value)
    } */

    const handleSearch = useCallback(() => {
        setSearch(searchInput.current.value)
    }, [])

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

            <Search 
                search={search} 
                handleSearch={handleSearch}
                searchInput={searchInput} />

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
