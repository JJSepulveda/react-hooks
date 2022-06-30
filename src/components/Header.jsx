import React, { useState, useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const Header = () => {
    const [darkMode, setDartkMode] = useState(false);
    const { color } = useContext(ThemeContext)
    
    const handleClick = () => {
        setDartkMode(!darkMode);
    }

    return (
        <div className="Header">
            <h1 style={{color}}>ReactHooks</h1>
            <button 
                type="button"
                onClick={handleClick}>
                    {darkMode ? 'Dark Mode': 'Light Mode'}
            </button>
            {/* <button 
                type="button"
                onClick={() => setDartkMode(!darkMode)}>
                    {darkMode ? 'Light Mode 2': 'Dark Mode 2'}
            </button> */}
        </div>
    );
}

export default Header;
