import { useState, useEffect } from 'react';

// useEffect(funciona_anonima, variable_que_escucha)
const useCharacters = (url) => {
    const [characters, setCharacters] = useState([]);

    useEffect(()=> {
        fetch(url)
        .then(response => response.json())
        .then(data => setCharacters(data.results));
    }, [url])

    return characters;
};

export default useCharacters;
